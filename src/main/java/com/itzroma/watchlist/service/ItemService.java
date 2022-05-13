package com.itzroma.watchlist.service;

import com.itzroma.watchlist.exception.ItemIsAlreadyExistsException;
import com.itzroma.watchlist.exception.ItemNotFoundException;
import com.itzroma.watchlist.exception.NameIsTakenException;
import com.itzroma.watchlist.model.Item;
import com.itzroma.watchlist.model.Status;
import com.itzroma.watchlist.repository.ItemRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@AllArgsConstructor
public class ItemService {
    private final ItemRepository itemRepository;

    public List<Item> findAll() {
        return itemRepository.findAll();
    }

    public Item findById(Long id) {
        return itemRepository.findById(id)
                .orElseThrow(() -> new ItemNotFoundException(String.format("Item with id '%d' not found!", id)));
    }

    public Item add(Item item) {
        if (!checkIfNameIsAvailable(item.getName()))
            throw new ItemIsAlreadyExistsException(String.format("Item '%s' is already exists!", item.getName()));

        return itemRepository.save(item);
    }

    public Item edit(Item target, Item source) {
        if (!checkIfNameIsAvailable(source.getName()) && !source.getName().equals(target.getName()))
            throw new NameIsTakenException(String.format("Name '%s' is taken!", source.getName()));

        target.setName(source.getName());
        target.setStatus(source.getStatus());

        if (checkIfWatched(target)) {
            target.setWatchedAt(LocalDate.now());
        } else {
            target.setWatchedAt(null);
        }

        return itemRepository.save(target);
    }

    public void delete(Item item) {
        itemRepository.delete(item);
    }

    private boolean checkIfNameIsAvailable(String name) {
        return itemRepository.findByName(name).isEmpty();
    }

    private boolean checkIfWatched(Item item) {
        return item.getStatus().equals(Status.WATCHED);
    }
}

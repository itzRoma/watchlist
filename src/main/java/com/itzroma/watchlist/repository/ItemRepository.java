package com.itzroma.watchlist.repository;

import com.itzroma.watchlist.model.Item;
import com.itzroma.watchlist.model.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
    Optional<Item> findByName(String name);
    List<Item> findByStatus(Status status);
}

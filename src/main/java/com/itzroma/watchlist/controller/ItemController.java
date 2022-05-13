package com.itzroma.watchlist.controller;

import com.itzroma.watchlist.model.Item;
import com.itzroma.watchlist.service.ItemService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("watchlist")
public class ItemController {
    private final ItemService itemService;

    @GetMapping
    public ResponseEntity<List<Item>> findAll() {
        return new ResponseEntity<>(itemService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Item> findById(@PathVariable Long id) {
        return new ResponseEntity<>(itemService.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Item> add(@RequestBody Item item) {
        return new ResponseEntity<>(itemService.add(item), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Item> edit(@PathVariable Long id, @RequestBody Item item) {
        return new ResponseEntity<>(itemService.edit(itemService.findById(id), item), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        itemService.delete(itemService.findById(id));
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

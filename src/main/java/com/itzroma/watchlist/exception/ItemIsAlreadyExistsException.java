package com.itzroma.watchlist.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ItemIsAlreadyExistsException extends RuntimeException {
    public ItemIsAlreadyExistsException(String message) {
        super(message);
    }
}

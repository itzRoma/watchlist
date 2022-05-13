package com.itzroma.watchlist.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class NameIsTakenException extends RuntimeException {
    public NameIsTakenException(String message) {
        super(message);
    }
}

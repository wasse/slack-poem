package com.poetryslack.api.exceptions;

public class HaikuGeneratorException extends Exception {

    private String message;

    private String[] errorHaiku = new String[]{
            "Error was returned",
            "Try again, but do not try",
            "the same thing again"
    };

    public HaikuGeneratorException() {}

    public HaikuGeneratorException(String message) {
        this.message = message;
    }

    public HaikuGeneratorException(String message, String[] errorHaiku) {
        this.message = message;
    }

    public String getMessage() {
        return this.message;
    }

    public String[] getErrorHaiku() {
        return this.errorHaiku;
    }

}

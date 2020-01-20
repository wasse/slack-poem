package com.poetryslack.api.haikugenerator;

public class HaikuGeneratorException extends Exception {

    private String message;

    private String[] errorHaiku = new String[]{
            "Error was returned",
            "The server only serves this",
            "Third row 5 syllables"
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

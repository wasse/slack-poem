package com.poetryslack.api.haikugenerator;

public class HaikuGeneratorException extends Exception {

    private String message;
//    TODO: Create an 'error' haiku that the client can choose to present.
    private String[] errorHaiku = new String[]{
            "ERRORHAIKU!",
            "First row 5 syllables",
            "Second row 7 syllables",
            "Third row 5 syllables"
    };

    public HaikuGeneratorException() {}

    public HaikuGeneratorException(String message) {
        this.message = message;
    }

    public String getMessage() {
        return this.message;
    }

    public String[] getErrorHaiku() {
        return this.errorHaiku;
    }

}

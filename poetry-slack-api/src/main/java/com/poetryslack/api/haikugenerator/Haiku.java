package com.poetryslack.api.haikugenerator;

public class Haiku {

    public String[] haiku;

    public Haiku(String[] haiku) {
        this.haiku = haiku;
    }

    public String[] getHaiku() {
        return haiku;
    }

    public void setHaiku(String[] haiku) {
        this.haiku = haiku;
    }

}

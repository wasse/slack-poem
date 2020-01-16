package com.poetryslack.api.haikugenerator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class SyllableCounter implements SyllableCounterService {

    private static SyllableCounter syllableCounterInstance;

    private final String[] DIPHTONGS = { "au", "ei", "aw", "oi", "ow", "ou", "ea", "oo", "ue", "ie", "oy"};
    private final String[] THRIPHTONGS = { "our", "ire", "ure"};
    private final char[] VOWELS = {'a','o','u','å','e','i','y','ä','ö'};

    private SyllableCounter() {}

    public static SyllableCounter getInstance() {

        if (syllableCounterInstance == null) {
            syllableCounterInstance= new SyllableCounter();
        }

        return syllableCounterInstance;

    }

    @Override
    public int countSyllables(String word) {

        int count = 0;

        count += vowelCount(word);
        count += word.endsWith("e") ? -1 : 0;
        count += checkIfWordEndsWithLeOrLesAddOneIfLetterBeforeLIsAConsonant(word);
        count += subtractOneIfDiphOrThriphtongsOccurInWord(DIPHTONGS, word);
        count += subtractOneIfDiphOrThriphtongsOccurInWord(THRIPHTONGS, word);
        count = count == 0 ? 1 : count;

        return count;

    }

    private int vowelCount(String word) {

        int value = 0;
        for (int i = 0; i < word.length(); i++) {
            value += charMatchesAVowel(word.charAt(i)) ? 1 : 0;
        }
        return value;

    }

    private int checkIfWordEndsWithLeOrLesAddOneIfLetterBeforeLIsAConsonant(String word) {

        if (word.length() <= 4) {
            return 0;
        }

        int value = 0;
        char beforeL = word.endsWith("les") ? word.charAt(word.length() - 4) : word.charAt(word.length() - 3);
        value = ( (word.endsWith("le") || word.endsWith("les")) && !charMatchesAVowel(beforeL) ) ? 1 : 0;

        return value;

    }

    private int subtractOneIfDiphOrThriphtongsOccurInWord(String[] array, String word) {

        int value = 0;
        Matcher matcher = null;

        for (int i = 0; i < array.length; i++) {
            matcher = Pattern.compile(array[i]).matcher(word);
            if (matcher.find()) {
                value -= 1;
            }
        }

        return value;

    }

    private boolean charMatchesAVowel(char c) {

        return     c == VOWELS[0] || c == VOWELS[1] || c == VOWELS[2]
                || c == VOWELS[3] || c == VOWELS[4] || c == VOWELS[5]
                || c == VOWELS[6] || c == VOWELS[7] || c == VOWELS[8];

    }

}

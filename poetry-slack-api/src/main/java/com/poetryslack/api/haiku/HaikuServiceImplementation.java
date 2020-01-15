package com.poetryslack.api.haiku;

import com.poetryslack.api.services.HaikuServiceLocal;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class HaikuServiceImplementation implements HaikuServiceLocal {
    private final int[][] combinationsOfFive = {
            {1, 1, 1, 1, 1},
            {1, 1, 1, 2},
            {1, 1, 3},
            {1, 2, 2},
            {1, 4},
            {2, 3},
            {5},
    };

    private final int[][] combinationsOfSeven = {
            {1, 1, 1, 1, 1, 1, 1},
            {1, 1, 1, 1, 1, 2},
            {1, 1, 1, 2, 2},
            {1, 1, 1, 1, 3},
            {1, 1, 2, 3},
            {1, 1, 1, 4},
            {1, 1, 5},
            {1, 3, 3},
            {1, 2, 4},
            {3, 2, 2},
            {3, 4},
            {2, 5},
            {1, 6},
            {7}
    };

    private final String[] DIPHTONGS = { "au", "ei", "aw", "oi", "ow", "ou", "ea", "oo", "ue", "ie", "oy"};
    private final String[] THRIPHTONGS = { "our", "ire", "ure"};
    private final char[] VOWELS = {'a','o','u','å','e','i','y','ä','ö'};
    private Map<Integer, List<String>> syllablesAndWords = new HashMap<>();

    @Override
    public String[] generateHaiku(String text) {
        String strippedText = stripOfDigitsAndPunctuationCharactersAndMakeLowerCase(text);
        Scanner s = new Scanner(strippedText);
        List<String> words = null;
        String[] haiku;
        while (s.hasNext()) {
            String word = s.next();
            int value = countSyllables(word);
            syllablesAndWords.computeIfAbsent(value, k -> new ArrayList<String>()).add(word /*+ " (" + value + ")"*/);
        }
        haiku = new String[]{buildRow(5),
                buildRow(7),
                buildRow(5)};
        return haiku;
    }

    private String stripOfDigitsAndPunctuationCharactersAndMakeLowerCase(String text) {
        return text.replaceAll("\\p{Punct}", "")
                .replaceAll("\\d", "")
                .toLowerCase();
    }

    private int countSyllables(String word) {
        int count = 0;
        count += vowelCount(word);
        count += word.endsWith("e") ? -1 : 0;
        count += leAndLesEndingRuleCheck(word);
        count += diphAndThriphThongCheck(DIPHTONGS, word);
        count += diphAndThriphThongCheck(THRIPHTONGS, word);
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
    private int leAndLesEndingRuleCheck(String word) {
//      The le and les ending rule. If the char before l is a consonant: add 1
        int value = 0;
        try {
            char beforeL = word.endsWith("les") ? word.charAt(word.length() - 4) : word.charAt(word.length() - 3);
            value = ( (word.endsWith("le") || word.endsWith("les")) && !charMatchesAVowel(beforeL) ) ? 1 : 0;
        } catch (StringIndexOutOfBoundsException e)
        { /* TODO: Do something with this exception*/}

        return value;
    }

    private int diphAndThriphThongCheck(String[] array, String word) {
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
        return  c == VOWELS[0] || c == VOWELS[1] || c == VOWELS[2]
                || c == VOWELS[3] || c == VOWELS[4] || c == VOWELS[5]
                || c == VOWELS[6] || c == VOWELS[7] || c == VOWELS[8];
    }

    private String buildRow(int rowLength) {
        // TODO: Gör en check ifall det inte finns en nyckel med det värdet som behövs.
        StringBuilder row = new StringBuilder();
        int[][] combinations = rowLength == 5 ? combinationsOfFive : combinationsOfSeven;
        int[] combo = shuffle(combinations[randomNumber(combinations.length)]);
        String word = "";
        List<String> syllableWords = null;

        for (int i = 0; i < combo.length; i++) {
            syllableWords = syllablesAndWords.get(combo[i]);
            word = syllableWords.get(randomNumber(syllableWords.size()));
            row.append(word + " ");
        }

        return row.toString().substring(0,1).toUpperCase() + row.substring(1);
    }

    private int[] shuffle(int[] a) {
        for (int i = 0; i < a.length; i++) {
            int randomIndex = randomNumber(a.length);
            int temp = a[randomIndex];
            a[randomIndex] = a[i];
            a[i] = temp;
        }
        return a;
    }

    private int randomNumber(int range) {
        return (int) (Math.random() * range);
    }


}


























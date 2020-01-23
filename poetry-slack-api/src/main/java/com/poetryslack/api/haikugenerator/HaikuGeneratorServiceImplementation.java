package com.poetryslack.api.haikugenerator;

import com.poetryslack.api.exceptions.HaikuGeneratorException;
import com.poetryslack.api.services.HaikuGeneratorService;

import javax.ejb.Stateless;
import java.util.*;

@Stateless
public class HaikuGeneratorServiceImplementation implements HaikuGeneratorService {
    private final int[][] combinationsOfFive = { {1, 1, 1, 1, 1}, {1, 1, 1, 2}, {1, 1, 3}, {1, 2, 2}, {1, 4}, {2, 3}, {5} };
    private final int[][] combinationsOfSeven = { {1, 1, 1, 1, 1, 1, 1}, {1, 1, 1, 1, 1, 2}, {1, 1, 1, 2, 2}, {1, 1, 1, 1, 3}, {1, 1, 2, 3},
                                                    {1, 1, 1, 4}, {1, 1, 5}, {1, 3, 3}, {1, 2, 4}, {3, 2, 2}, {3, 4}, {2, 5}, {1, 6}, {7} };
    private Map<Integer, List<String>> allWordsSortedBySyllableCountKeys = new HashMap<>();
    private SyllableCounter syllableCounter = SyllableCounter.getInstance();

    @Override
    public Haiku generateHaiku(String text) throws HaikuGeneratorException {

        String strippedText = stripOfDigitsAndPunctuationCharactersAndMakeLowerCase(text);
        Scanner scanner = new Scanner(strippedText);
        String[] generatedHaiku = null;
        int wordCount = 0;

        if (text.length() == 0) {
            throw new HaikuGeneratorException("The provided text is empty. This generator only accepts a word count of 15 or more.");
        }

        while (scanner.hasNext()) {
            String wordFromTextArgument = scanner.next();
            wordCount += 1;
            int value = syllableCounter.countSyllables(wordFromTextArgument);
            allWordsSortedBySyllableCountKeys.computeIfAbsent(value, k -> new ArrayList<String>()).add(wordFromTextArgument);
        }

        if (wordCount < 15) {
            throw new HaikuGeneratorException("The provided text does not have enough words. This generator accepts a word count of 15 or more.");
        }

        try {
            generatedHaiku = new String[]{getHaikuRow(5), getHaikuRow(7), getHaikuRow(5)};
        } catch (HaikuGeneratorException h) {
            throw new HaikuGeneratorException(h.getMessage());
        } finally {
            scanner.close();
            allWordsSortedBySyllableCountKeys.clear();
        }

        return new Haiku(generatedHaiku);

    }

    private String stripOfDigitsAndPunctuationCharactersAndMakeLowerCase(String text) {

        return text.replaceAll("\\p{Punct}", " ")
                .replaceAll("\\d", " ")
                .toLowerCase();

    }

    private String getHaikuRow(int amountOfsyllablesInRow) throws HaikuGeneratorException {

        int[][] combinationsOfFiveOrSeven = amountOfsyllablesInRow == 5 ? combinationsOfFive : combinationsOfSeven;
        int randomIndex = getRandomNumber(combinationsOfFiveOrSeven.length);
        int[] randomComboOfFiveOrSeven = shuffleArray(combinationsOfFiveOrSeven[randomIndex]);
        String row = "";

        if (trueIfAllValuesInArrayExistAsMapKeys(randomComboOfFiveOrSeven)) {
            row = assembleRow(randomComboOfFiveOrSeven);
        } else {
            shuffleMultidimensionalArray(combinationsOfFiveOrSeven);
            for (int[] combo : combinationsOfFiveOrSeven) {
                if (trueIfAllValuesInArrayExistAsMapKeys(combo)) {
                    row = assembleRow(combo);
                    break;
                }
            }
        }

        if (row.length() > 1) {
            return row.substring(0,1).toUpperCase() + row.substring(1).trim();
        } else {
            throw new HaikuGeneratorException("Haiku can not be created from the provided text.");
        }
    }

    private String assembleRow(int[] combo) {
        StringBuilder rowWords = new StringBuilder();
        List<String> wordsListConnectedToKey = null;
        for (int key : combo) {
            wordsListConnectedToKey = allWordsSortedBySyllableCountKeys.get(key);
            Collections.shuffle(wordsListConnectedToKey);
            int randomIndex = getRandomNumber(wordsListConnectedToKey.size());
            rowWords.append(wordsListConnectedToKey.get(randomIndex)).append(" ");
        }
        return rowWords.toString();
    }

    private boolean trueIfAllValuesInArrayExistAsMapKeys(int[] values) {
        int count = 0;
        for (int x : values) {
            if (allWordsSortedBySyllableCountKeys.containsKey(x)) {
                count += 1;
            }
        }
        return count == values.length;
    }

    private int[] shuffleArray(int[] array) {
        for (int i = 0; i < array.length; i++) {
            int randomIndex = getRandomNumber(array.length);
            int temp = array[randomIndex];
            array[randomIndex] = array[i];
            array[i] = temp;
        }
        return array;
    }

    private int[][] shuffleMultidimensionalArray(int[][] array) {
        for (int i = 0; i < array.length; i++) {
            int randomIndex = getRandomNumber(array.length);
            int[] temp = array[randomIndex];
            array[randomIndex] = array[i];
            array[i] = temp;
        }
        return array;
    }

    private int getRandomNumber(int range) { return (int) (Math.random() * range); }
}


















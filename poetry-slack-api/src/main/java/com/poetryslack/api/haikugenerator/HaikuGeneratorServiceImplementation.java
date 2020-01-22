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
            generatedHaiku = new String[]{buildHaikuRow(5), buildHaikuRow(7), buildHaikuRow(5)};
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

    private String buildHaikuRow(int amountOfsyllablesInRow) throws HaikuGeneratorException {

        List<String> wordsConnectedToASyllableCountKey = null;
        int[][] combinationsOfFiveOrSeven = amountOfsyllablesInRow == 5 ? combinationsOfFive : combinationsOfSeven;
        int[] aRandomlySelectedCombinationOfFiveOrSeven = shuffleArray(combinationsOfFiveOrSeven[getRandomNumber(combinationsOfFiveOrSeven.length)]);
        StringBuilder row = new StringBuilder();
        String oneWord = "";

        for (int value : aRandomlySelectedCombinationOfFiveOrSeven) {

            try {
                wordsConnectedToASyllableCountKey = allWordsSortedBySyllableCountKeys
                        .get(value);
                oneWord = wordsConnectedToASyllableCountKey
                        .get(getRandomNumber(wordsConnectedToASyllableCountKey.size()));
                row.append(oneWord).append(" ");

            } catch (NullPointerException e) {
                row.delete(0, row.length());
                int key = 1;
                for (int y = 0; y < combinationsOfFiveOrSeven.length; y++) {
                    try {
                        wordsConnectedToASyllableCountKey = allWordsSortedBySyllableCountKeys.get(key);
                        Collections.shuffle(wordsConnectedToASyllableCountKey);
                        oneWord = wordsConnectedToASyllableCountKey.get(wordsConnectedToASyllableCountKey.size() - 1);
                        row.append(oneWord).append(" ");
                        key += 1;
                    } catch (NullPointerException ignored) {}
                }

            }
        }

        if (row.length() != 0) {
            return row.toString().substring(0,1).toUpperCase() + row.substring(1).trim();
        } else {
            throw new HaikuGeneratorException("Haiku can not be created from the provided text.");
        }

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

    private int getRandomNumber(int range) { return (int) (Math.random() * range); }

}


























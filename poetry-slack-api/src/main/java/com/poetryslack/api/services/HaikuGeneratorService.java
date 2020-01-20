package com.poetryslack.api.services;

import com.poetryslack.api.haikugenerator.Haiku;
import com.poetryslack.api.exceptions.HaikuGeneratorException;

import javax.ejb.Local;

@Local
public interface HaikuGeneratorService {
    Haiku generateHaiku(String text) throws HaikuGeneratorException;
}

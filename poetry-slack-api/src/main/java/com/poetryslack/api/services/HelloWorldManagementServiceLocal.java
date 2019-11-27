package com.poetryslack.api.services;

import com.poetryslack.api.domain.HelloWorld;

import javax.ejb.Local;
import java.util.List;

@Local
public interface HelloWorldManagementServiceLocal {

    void registerHelloWorld(HelloWorld helloWorld);

    List<HelloWorld> getAllHelloWorld();

}

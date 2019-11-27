package com.poetryslack.api.services;

import com.poetryslack.api.dataaccess.HelloWorldDataAccess;
import com.poetryslack.api.domain.HelloWorld;

import javax.ejb.Stateless;
import javax.inject.Inject;
import java.util.List;

@Stateless
public class HelloWorldManagementServiceImplementation implements HelloWorldManagementServiceLocal {

    @Inject
    private HelloWorldDataAccess helloWorldDao;

    @Override
    public void registerHelloWorld(HelloWorld helloWorld) {
        helloWorldDao.registerHelloWorld(helloWorld);
    }

    @Override
    public List<HelloWorld> getAllHelloWorld() {
        return helloWorldDao.getAllHelloWorld();
    }
}

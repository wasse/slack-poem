package com.poetryslack.api.dataaccess;

import com.poetryslack.api.domain.HelloWorld;

import javax.ejb.Stateful;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;
import java.util.List;

@Stateless
public class HelloWorldDataAccessImplementation implements  HelloWorldDataAccess {


    @PersistenceContext(unitName = "poetrydb")
    private EntityManager em;

    @Override
    public void registerHelloWorld(HelloWorld helloWorld) {
        em.persist(helloWorld);
    }

    @Override
    public List<HelloWorld> getAllHelloWorld() {
        return em.createQuery("SELECT h FROM HelloWorld h", HelloWorld.class).getResultList();
    }
}
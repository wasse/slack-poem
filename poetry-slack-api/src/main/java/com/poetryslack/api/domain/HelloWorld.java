package com.poetryslack.api.domain;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class HelloWorld implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(length = 25)
    private String hello;
    @Column(length = 25)
    private String world;

    public HelloWorld() {}

    public HelloWorld(String hello, String world) {
        this.hello = hello;
        this.world = world;
    }

    public Long getId() {
        return id;
    }

    public String getHello() {
        return hello;
    }

    public void setHello(String hello) {
        this.hello = hello;
    }

    public String getWorld() {
        return world;
    }

    public void setWorld(String world) {
        this.world = world;
    }

    public String toString() {
        return hello + " " + world;
    }
}

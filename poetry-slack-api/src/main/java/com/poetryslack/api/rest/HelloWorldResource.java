package com.poetryslack.api.rest;

import com.poetryslack.api.domain.HelloWorld;
import com.poetryslack.api.services.HelloWorldManagementServiceLocal;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.List;

@Stateless
@Path("/helloworld")
public class HelloWorldResource {

    /*
    * json objekt för create-anrop
    *

    {
        "hello": "Hello",
        "world": "World"
    }

    För att testa get:
    http://localhost:8080/tomee-rest-arquillian-1.0-SNAPSHOT/api/helloworld/testget
    *
    För get och create anrop som persisterar databasen, create anrop ska ha en body med objektet ovan:
    http://localhost:8080/poetry-slack-1.0-SNAPSHOT/api/helloworld

    *
    * * */

    @Inject
    private HelloWorldManagementServiceLocal service;

    @GET
    @Produces("text/plain")
    @Path("/testget")
    public String testGet() {
        return "Hello World";
    }

    @GET
    @Produces("application/JSON")
    public List<HelloWorld> get() {
        List<HelloWorld> result = service.getAllHelloWorld();
        return result;
    }

    @POST
    @Produces("application/JSON")
    @Consumes("application/JSON")
    public Response create(HelloWorld helloWorld) {
        service.registerHelloWorld(helloWorld);
        return Response.status(201).build();
    }

}

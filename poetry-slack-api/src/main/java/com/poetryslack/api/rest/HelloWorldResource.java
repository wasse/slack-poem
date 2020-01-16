//package com.poetryslack.api.rest;
//
//import com.poetryslack.api.domain.HelloWorld;
//import com.poetryslack.api.services.HelloWorldManagementServiceLocal;
//import io.swagger.annotations.Api;
//
//import javax.ejb.Stateless;
//import javax.inject.Inject;
//import javax.ws.rs.*;
//import javax.ws.rs.core.Response;
//import java.util.List;
//
//@Stateless
//@Path("/helloworld")
//@Api("helloworld")
//public class HelloWorldResource {
//
//    @Inject
//    private HelloWorldManagementServiceLocal service;
//
//    @GET
//    @Produces("text/plain")
//    @Path("/testget")
//    public String testGet() {
//        return "Hello World";
//    }
//
//    @GET
//    @Produces("application/JSON")
//    public List<HelloWorld> get() {
//        List<HelloWorld> result = service.getAllHelloWorld();
//        return result;
//    }
//
//    @POST
//    @Produces("application/JSON")
//    @Consumes("application/JSON")
//    public Response create(HelloWorld helloWorld) {
//        service.registerHelloWorld(helloWorld);
//        return Response.status(201).build();
//    }
//
//}

package com.poetryslack.api.rest;

import io.swagger.annotations.Api;

import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Stateless
@Path("/haiku")
@Api("haiku")
public class HaikuResource {

    @GET
    @Produces("application/JSON")
    @Consumes("application/JSON")
    public String getHaiku(/*String text*/) {
        return "HAIKU";
//        TODO: Make endpoint. Should accept Json object { "text": "" } and return a haiku generated from the text.
    }

}

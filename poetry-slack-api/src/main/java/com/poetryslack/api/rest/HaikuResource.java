package com.poetryslack.api.rest;

import com.poetryslack.api.services.HaikuServiceLocal;
import io.swagger.annotations.Api;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Stateless
@Path("/haiku")
@Api("haiku")
public class HaikuResource {

    @Inject
    HaikuServiceLocal haikuService;

    @GET
    @Produces("application/JSON")
    @Consumes("application/JSON")
    public String[] getHaiku(String text) {
        haikuService.generateHaiku("");
        return null;
    }

}

package com.poetryslack.api.rest;

import com.poetryslack.api.haikugenerator.Haiku;
import com.poetryslack.api.haikugenerator.HaikuDTO;
import com.poetryslack.api.exceptions.HaikuGeneratorException;
import com.poetryslack.api.services.HaikuGeneratorService;
import io.swagger.annotations.Api;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.Date;

@Stateless
@Path("/haiku")
@Api("haiku")
public class HaikuResource {

    @Inject
    HaikuGeneratorService haikuService;

    @POST
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces({MediaType.APPLICATION_JSON})
    public Response createHaiku(HaikuDTO dto) {
        Response.ResponseBuilder rb = Response.status(Response.Status.BAD_REQUEST);
        rb.expires(new Date());
        Haiku haiku = null;

        try {
            haiku = haikuService.generateHaiku(dto.getText());
        } catch (HaikuGeneratorException e) {
            e.printStackTrace();
            return rb.status(Response.Status.BAD_REQUEST)
                    .type(MediaType.APPLICATION_JSON)
                    .entity(new HaikuGeneratorException(e.getMessage(), e.getErrorHaiku()))
                    .build();
        }

        return rb.status(Response.Status.CREATED)
                .type(MediaType.APPLICATION_JSON)
                .entity(haiku)
                .build();
    }
}
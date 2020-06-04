package com.facebook_main.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.annotation.Generated;

@Document(collection = "image_table")

public class image {
    @Id

    private Long id;

    private String name;


    private String type;
//image bytes can have large lengths so we specify a value
        //which is more than the default length for picByte column

    private byte[] picByte;
    public image() {
        super();
    }
    public image(String name, String type, byte[] picByte) {

        this.name = name;
        this.type = type;
        this.picByte = picByte;
    }
    public String getName() {

        return name;

    }

    public void setName(String name) {

        this.name = name;
    }
    public String getType() {

        return type;

    }
    public void setType(String type) {

        this.type = type;

    }

    public byte[] getPicByte() {
        return picByte;
    }
    public void setPicByte(byte[] picByte) {
        this.picByte = picByte;

    }
}

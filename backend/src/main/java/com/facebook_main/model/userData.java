package com.facebook_main.model;


import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "userData")
public class userData {
    String postcontent;
    String imgUrl;
    userData(){}
   public userData(String postcontent,String imgUrl){
        this.postcontent=postcontent;
        this.imgUrl=imgUrl;

    }
    public String getPostcontent() {
        return postcontent;
    }

    public void setPostcontent(String postcontent) {
        this.postcontent = postcontent;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
}

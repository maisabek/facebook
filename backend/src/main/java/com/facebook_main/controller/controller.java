package com.facebook_main.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.facebook_main.Repositry.user_Repository;
import com.facebook_main.model.user;
import com.facebook_main.services.service;
import org.springframework.web.bind.annotation.*;
import com.facebook_main.Repositry.ImageRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import com.facebook_main.Repositry.userData_Repository;
import com.facebook_main.model.userData;
@RestController
@RequestMapping(value="/api")
public class controller {

    @Autowired
    private user_Repository user_Repository;

    @Autowired
    private service service;

    @Autowired
    private userData_Repository userData_Repository;

    @Autowired
     private ImageRepository ImageRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/create")
   public ResponseEntity<user> create(@RequestBody user users){
        try{
            user user=user_Repository.save(new user(users.getId(),users.getFname(),users.getLname(),users.getEmail(),users.getPassword()));
            return new ResponseEntity<>(user,HttpStatus.CREATED);

        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.EXPECTATION_FAILED);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/userData")
    public ResponseEntity<userData> createUserData(@RequestBody userData users){
        try{
            userData user=userData_Repository.save(new userData(users.getPostcontent(),users.getImgUrl()));
            return new ResponseEntity<>(user,HttpStatus.CREATED);

        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.EXPECTATION_FAILED);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/all")
   public ResponseEntity<List<user>> display(){
        List<user> result=service.findall();
        return new ResponseEntity<>(result,HttpStatus.OK);
    }

}

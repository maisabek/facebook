package com.facebook_main.services;

import com.facebook_main.Repositry.user_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.facebook_main.model.user;
import java.util.*;
@Service
public class service {

    @Autowired
    private com.facebook_main.Repositry.user_Repository user_Repository;

    public List<user> findall(){return user_Repository.findAll();}
}

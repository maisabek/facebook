package com.facebook_main.Repositry;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.facebook_main.model.userData;
import org.springframework.stereotype.Repository;

@Repository
public interface userData_Repository extends MongoRepository<userData,String>{}

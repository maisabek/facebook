package com.facebook_main.Repositry;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.facebook_main.model.user;
@Repository
public interface user_Repository extends MongoRepository<user,String> {
}

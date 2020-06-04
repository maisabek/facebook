package com.facebook_main.Repositry;
import java.util.*;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.facebook_main.model.image;
public interface ImageRepository extends MongoRepository<image,String> {
    Optional<image> findByName(String name);

}

package com.test.react.redux;

import com.test.react.redux.dao.UserDao;
import com.test.react.redux.model.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class UserApplication {

    public static void main(String[] args) {
        SpringApplication.run(UserApplication.class, args);
    }

    @Bean
    public CommandLineRunner init(UserDao userDao){
        return args -> {
            User user1 = new User();
            user1.setFirstName("Rakesh");
            user1.setLastName("Kumar");
            user1.setSalary(12345);
            user1.setAge(34);
            user1.setUsername("rakesh");
            user1.setPassword("password");
            userDao.save(user1);

            User user2 = new User();
            user2.setFirstName("Kiran");
            user2.setLastName("Kumari");
            user2.setSalary(4567);
            user2.setAge(34);
            user2.setUsername("kiran");
            user2.setPassword("kiran");
            userDao.save(user2);
        };
    }

}

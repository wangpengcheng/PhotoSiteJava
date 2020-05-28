package com.wang.study.photositejava.controller;

import com.wang.study.photositejava.bean.PsUsers;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @RequestMapping("/user")
    public PsUsers sayHello(){
        PsUsers testUser=new PsUsers();
        testUser.setUserId(1L);
        testUser.setUserCompany("Sichuan");
        return testUser;
    }
}

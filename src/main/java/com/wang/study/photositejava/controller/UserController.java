package com.wang.study.photositejava.controller;

import com.wang.study.photositejava.bean.PsUsers;
import com.wang.study.photositejava.service.UserService;
import com.wang.study.photositejava.utils.JsonReturn;
import jdk.nashorn.internal.runtime.regexp.joni.Config;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;

@RestController
@Slf4j
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;
    /**
     * 登录接口
     * */
    @GetMapping("/login")
    public JsonReturn login(@RequestParam String userName,@RequestParam String passWord) throws ServletException {
        log.info("get request data: {}",userName);
        JsonReturn res=JsonReturn.ok();
        PsUsers user = userService.findByUsernameAndPassword(userName,passWord);
        if(user==null){
            return JsonReturn.error("账号或者密码不正确");
        }else{
            log.info(user.getUserName()+" logined");
            res.put("result",user);
        }

        return res;
    }
    @Data
    private static class UserLogin{
        public String userName;
        public String passWord;
    }
}

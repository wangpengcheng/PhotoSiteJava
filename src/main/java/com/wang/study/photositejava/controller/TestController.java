package com.wang.study.photositejava.controller;

import lombok.extern.slf4j.Slf4j;
import lombok.extern.slf4j.XSlf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;


/**
 * @class: TestController
 * @description: 测试控制类；主要是用来测试各个服务是否正常
 * @author: wangpengcheng
 * @version
 * @date: 2020/5/31 20:53
 * */
@Controller
@RequestMapping("/test")
@Slf4j
public class TestController {


    @RequestMapping("/index")
    public String sayHello(){
        return "index";
    }

    @RequestMapping(value = "/photoService",method = RequestMethod.GET)
    public Map<String,Object> photoServiceTest(@RequestParam("topicId")Long topicId){

    }
}

package com.wang.study.photositejava;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.wang.study.photositejava.dao")
public class PhotositejavaApplication {

    public static void main(String[] args) {
        SpringApplication.run(PhotositejavaApplication.class, args);
    }

}

package com.wang.study.photositejava;

import com.wang.study.photositejava.bean.PsUsers;
import com.wang.study.photositejava.dao.PsUsersMapper;
import org.apache.ibatis.annotations.Mapper;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.wang.study.photositejava.dao")
public class MyBatisTest {
    public static void main(String[] args) {
            SpringApplication.run(MyBatisTest.class, args);
    }
}

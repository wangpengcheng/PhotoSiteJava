package com.wang.study.photositejava.service;

import com.wang.study.photositejava.bean.PsUsers;

import java.util.List;

public interface UserService {
    List<PsUsers> selectUserById(Long id);
    //List<PsUsers>  selectAll();
}

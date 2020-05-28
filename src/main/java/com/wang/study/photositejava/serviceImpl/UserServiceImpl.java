package com.wang.study.photositejava.serviceImpl;

import com.wang.study.photositejava.bean.PsUsers;
import com.wang.study.photositejava.dao.PsUsersMapper;
import com.wang.study.photositejava.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private PsUsersMapper usersMapper;
    @Override
    public List<PsUsers> selectUserById(Long id){ return usersMapper.findUserById(id);}
}

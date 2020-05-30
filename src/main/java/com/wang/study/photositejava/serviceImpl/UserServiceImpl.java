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
    private PsUsersMapper psUsersMapper;

    @Override
    public PsUsers findUserById(Long userId) {
        return psUsersMapper.findUserById(userId);
    }

    @Override
    public void deleteByPrimaryKey(Long userId) {
        psUsersMapper.deleteByPrimaryKey(userId);
    }

    @Override
    public PsUsers findByUsername(String userName) {
        return psUsersMapper.findUserByname(userName);
    }

    @Override
    public List<PsUsers> selectAll() {
        return psUsersMapper.selectAll();
    }

    @Override
    public int updatePassword(Long userId, String password) {
        return psUsersMapper.updatePasswordById(userId,password);
    }
    @Override
    public PsUsers findByUsernameAndPassword(String userName,String passWord){
        return psUsersMapper.findByUsernameAndPassword(userName,passWord);
    }
}

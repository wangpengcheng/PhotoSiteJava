package com.wang.study.photositejava.service;

import com.wang.study.photositejava.bean.PsUsers;
import com.wang.study.photositejava.dao.PsUsersMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


public interface UserService {
    /**
     * 使用id查询用户
     * */
    PsUsers findUserById(Long userId);
    /**
     * 删除用户
     * @param userId
     * */
    void deleteByPrimaryKey(Long userId);
    /**
     * 使用name查询用户
     * */
    PsUsers  findByUsername(String userName);
    /**
     * 查询所有用户
     * */
    List<PsUsers>  selectAll();
    /**
     * 用户名和密码获取用户
     * @param userName
     * @param passWord
     * */
    PsUsers findByUsernameAndPassword(String userName,String passWord);
    /**
     * 更新用户名和密码
     * @param userId
     * @param passWord
     * */
    int updatePassword(Long userId,String passWord);
    //

    //List<PsUsers>  selectAll();
}

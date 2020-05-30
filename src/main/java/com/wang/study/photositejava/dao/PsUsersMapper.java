package com.wang.study.photositejava.dao;

import com.wang.study.photositejava.bean.PsUsers;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface PsUsersMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ps_users
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    int insert(PsUsers record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ps_users
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    List<PsUsers> selectAll();
    /**
     * 根据主键id进行筛选
     *
     * */
    PsUsers selectByPrimaryKey(@Param("id") Long id);
    /**
     * 删除行操作
     *
     */
    void deleteByPrimaryKey(@Param("id") Long id);
    /**
     * 更新用户
     * */
    int updateByPrimaryKey(PsUsers user);
    /**
     * 根据Id进行查找
     * */
    PsUsers findUserById(@Param("userId")Long userId);
    /**
     * 更新密码
     */
    int updatePasswordById(@Param("id")Long userId,@Param("pwd") String userPwd);
    /**
     * 查询用户
     * */
    PsUsers findByUsernameAndPassword(@Param("username")String userName,@Param("userpwd")String userPwd);
    /**
     * 用户名查找
     * */
    PsUsers findUserByname(@Param("username")String userName);

    /**
     * 根据用户名删除
     * */
    void deleteUserByName(@Param("username") String userName);
}
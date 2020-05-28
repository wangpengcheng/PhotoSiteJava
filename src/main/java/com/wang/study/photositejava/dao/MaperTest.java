package com.wang.study.photositejava.dao;

import com.wang.study.photositejava.bean.PsUsers;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface MaperTest {
//    @Select(value="SELECT users.user_name FROM  ps_users WHERE ps_users.user_id=#{user_id}");
//    @Result(property = "user_name",column = "user_name");
//    PsUsers findUserById(@Param("user id") String userId);
}

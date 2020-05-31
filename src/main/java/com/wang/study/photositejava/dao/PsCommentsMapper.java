package com.wang.study.photositejava.dao;

import com.wang.study.photositejava.bean.PsComments;
import org.apache.ibatis.annotations.Param;

import java.util.List;
/**
 * 评论DAO
 * */
public interface PsCommentsMapper {
    /**
     * 插入新的评论
     */
    int insert(PsComments record);

    /**
     * 获取所有评论
     */
    List<PsComments> selectAll();
    /**
     * 查询图片所有评论
     * */
    List<PsComments> findCommentsByPhotoId(@Param("photoId")Long photoId);
    /**
     * 查询用户所有评论
     * */
    List<PsComments> findCommentsByUserName(@Param("userName")String userName);
    /**
     * 根据用户民查询评论
     * */
    List<PsComments> findCommentsByUserId(@Param("userId")Long userId);

}
package com.wang.study.photositejava.service;


import com.wang.study.photositejava.bean.PsComments;

import java.util.List;

/**
 * 评论管理服务类接口
 * 定义基本的服务管理功能
 *
 * */

public interface CommentsService {
        /**
         * 新增操作
         * */
        int addNewComments(PsComments record);
        /**
         * 获取所有评论
         * TODO:该井为分页查询
         * */
        List<PsComments> selectAll();
        /**
         * 查询图片评论
         * */
        List<PsComments> findCommentsByPhotoId(Long photoId);
        /**
         * 查询用户所有评论
         * */
        List<PsComments> findCommentsByUserId(Long userId);

}

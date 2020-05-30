package com.wang.study.photositejava.dao;

import com.wang.study.photositejava.bean.PsComments;
import java.util.List;

public interface PsCommentsMapper {
    /**
     * 插入新的评论
     */
    int insert(PsComments record);

    /**
     * 获取所有评论
     */
    List<PsComments> selectAll();
}
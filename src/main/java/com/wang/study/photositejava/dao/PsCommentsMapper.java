package com.wang.study.photositejava.dao;

import com.wang.study.photositejava.bean.PsComments;
import java.util.List;

public interface PsCommentsMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ps_comments
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    int insert(PsComments record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ps_comments
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    List<PsComments> selectAll();
}
package com.wang.study.photositejava.dao;

import com.wang.study.photositejava.bean.PsPhotos;
import java.util.List;

public interface PsPhotosMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ps_photos
     *
     * @mbg.generated Thu May 28 08:55:18 CST 2020
     */
    int insert(PsPhotos record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ps_photos
     *
     * @mbg.generated Thu May 28 08:55:18 CST 2020
     */
    List<PsPhotos> selectAll();
}
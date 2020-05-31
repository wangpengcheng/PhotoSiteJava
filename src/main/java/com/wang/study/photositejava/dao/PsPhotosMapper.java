package com.wang.study.photositejava.dao;

import com.wang.study.photositejava.bean.PsPhotos;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Update;

import java.util.List;
/**
 * @class: PsPhotosMapper
 * @description: photos mybatis接口
 * @author: wangpengcheng
 * @version
 * @date: 2020/5/31 19:33
 * */
public interface PsPhotosMapper {
    /**
     * @description: 插入数据
     * @author: wangpengcheng
     * @param: PsPhotos
     * @return: 主键数据
     * @date: 2020/5/31 19:34
     * */
    Long insert(PsPhotos record);
    /** 
     * @description: 查询所有图片信息
     * @author: wangpengcheng
     * @return:  List<PsPhotos>
     * @date: 2020/5/31 19:40
     * */ 
    List<PsPhotos> selectAll();
    /**
     * @description: 通过topic 来筛选图片;返回对应图片的集合
     * @author: wangpengcheng
     * @param:  Long topicId
     * @return:  List<PsPhotos>
     * @date: 2020/5/31 19:45
     * */
    List<PsPhotos> findPhotosByTopicId(@Param("topicId")Long topicId);
    /** 
     * @description: 根据id查找photo
     * @author: Administrator
     * @param:  photoId
     * @return:  PsPhotos
     * @date: 2020/5/31 19:55
     * */

    PsPhotos findPhotoById(@Param("topicId")Long photoId);
}
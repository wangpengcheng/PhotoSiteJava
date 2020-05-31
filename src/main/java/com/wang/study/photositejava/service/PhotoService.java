package com.wang.study.photositejava.service;

import com.wang.study.photositejava.bean.PsPhotos;

import java.util.List;

/**
 * @class: PhotoService
 * @description:  photo表的服务提供接口，主要提供给photos的添加和查询
 * @author: wangpengcheng
 * @version
 * @date: 2020/5/31 19:52
 * */
public interface PhotoService {
        
    /** 
     * @description: 添加新的图片信息
     * @author: wangpengcheng
     * @param:  PsPhotos
     * @return:  Long 代码的主键
     * @date: 2020/5/31 20:08
     * */ 
    Long addNewPhoto(PsPhotos newPhoto);
    /** 
     * @description: 查询图片信息
     * @author: Administrator
     * @param:  
     * @return:  
     * @date: 2020/5/31 20:23
     * */
    PsPhotos findPhotoById(Long photoId);
    /** 
     * @description: 根据topic查找图片
     * @author: Administrator
     * @param:  
     * @return:  
     * @date: 2020/5/31 20:25
     * */
    List<PsPhotos > findPhotosByTopicId(Long topicId);
}

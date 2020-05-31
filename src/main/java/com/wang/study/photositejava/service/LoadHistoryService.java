package com.wang.study.photositejava.service;


import com.wang.study.photositejava.bean.PsLoadHistory;
import com.wang.study.photositejava.bean.PsPhotos;

import java.util.List;

/**
 * @class: LoadHistoryService
 * @description: 加载历史服务接口类
 * @author: wang'peng'cheng
 * @version  0.0.1
 * @date: 2020/5/31 16:51
 * */

public interface LoadHistoryService {
    /**
     * @description: 添加新的上传下载历史
     * @author: wangpengcheng
     * @param:
     * @return:
     * @date: 2020/5/31 16:53
     * */
    int addNewHistory(PsLoadHistory record);
    /**
     * @description: 根据用户id和图片id，以及类型添加记录
     * @author: Administrator
     * @param:  Long userId
     * @param: Long photoId
     * @param: int loadType
     * @return: int
     * @date: 2020/5/31 16:55
     * */
    int addNewHistoryByUserAndPhoto(Long userId,Long photoId,int loadType);
    /**
     * @description: 添加上传记录
     * @author: Administrator
     * @param:  Long userId
     * @param:  Long photoId
     * @return: int
     * @date: 2020/5/31 16:57
     * */
    int addNewUpLoadHistory(Long userId,Long photoId);
    /**
     * @description: 添加下载记录
     * @author: Administrator
     * @param:  Long userId
     * @param:  Long photoId
     * @return: int
     * @date: 2020/5/31 16:57
     * */
    int addNewDownLoadHistory(Long userId,Long photoId);
    /**
     * @description: 获取用户上传和下载的图片.返回所有的图片信息列表
     * @author: wangpengcheng
     * @param:  Long userId
     * @return: List<PsPhotos>
     * @date: 2020/5/31 16:46
     * */
    List<PsLoadHistory> seletUserRecordByUserId(Long userId);
    /**
     * @description: 获取用户下载的图片.返回所有的图片信息列表
     * @author: wangpengcheng
     * @param:  Long userId
     * @return: List<PsPhotos>
     * @date: 2020/5/31 16:46
     * */
    List<PsPhotos> findUserDownLoadPhotos(Long userId);
    /**
     * @description: 获取用户上传的图片.返回所有的图片信息列表
     * @author: wangpengcheng
     * @param:  Long userId
     * @return: List<PsPhotos>
     * @date: 2020/5/31 16:46
     * */
    List<PsPhotos> findUserUpLoadPhotos(Long userId);
    /**
     * @description: 获取用户上传或者下载的图片.返回所有的图片信息列表
     * @author: wangpengcheng
     * @param:  Long userId
     * @param:  int loadType
     * @return: List<PsPhotos>
     * @date: 2020/5/31 16:46
     * */
    List<PsPhotos> findPhotosByUserIdAndType(Long userId,int loadType);
}

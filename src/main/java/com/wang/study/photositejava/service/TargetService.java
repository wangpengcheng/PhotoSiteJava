package com.wang.study.photositejava.service;

import com.wang.study.photositejava.bean.PsTargets;

import java.util.List;

/**
 * @class: TargetService
 * @description: Target服务接口，提供target的一般服务
 * @author: wangpengcheng
 * @version: 0.0.1
 * @date: 2020/5/31 23:58
 * */
public interface TargetService {
    /**
     * @description:
     * @author: wangpengcheng
     * @param: PsTargets psTargets
     * @return: int 
     * @date: 2020/6/1 0:00
     * */
    Long addTarget(PsTargets psTargets);
    /** 
     * @description: 根据photoId,targetName,targetMessage来进行快速添加target记录
     * @author: Administrator
     * @param: Long photoId
     * @param: String targetName
     * @param: String targetMessage
     * @return:  int
     * @date: 2020/6/1 0:02
     * */
    Long addTargetFast(Long photoId,String targetName,String targetMessage);
    /** 
     * @description: 获取图片的所有标签
     * @author: Administrator
     * @param: Long photoId
     * @return:  List<PsTargets>
     * @date: 2020/6/1 0:06
     * */
    List<PsTargets> findTargetsByPhotoId(Long photoId);
    /** 
     * @description: 根据photoId和targetName进行删除
     * @author: Administrator
     * @param:  Long photoId
     * @param: String targetName
     * @return:  int
     * @date: 2020/6/1 0:04
     * */ 
    int deleteTargetByPhotoAndName(Long photoId,String targetName);
}

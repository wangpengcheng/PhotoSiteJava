package com.wang.study.photositejava.dao;

import com.wang.study.photositejava.bean.PsTargets;
import org.apache.ibatis.annotations.Param;

import java.util.List;
/**
 * @class: PsTargetsMapper
 * @description: targets表DAO接口，主要是实现对target的管理包括添加和删除
 * @author: wangpengcheng
 * @version: 0.0.1
 * @date: 2020/5/31 23:25
 * */
public interface PsTargetsMapper {
    /**
     * @description: 添加新target函数
     * @author: wangpengcheng
     * @param: PsTargets record
     * @return: Long 插入后的主键id
     * @date: 2020/5/31 23:27
     * */
    Long insert(PsTargets record);
    /**
     * @description: 查询所有标签
     * @author: wangpengcheng
     * @return: List<PsTargets>
     * @date: 2020/5/31 23:29
     * @TODO: 实现分页查询
     * */
    List<PsTargets> selectAll();
    /** 
     * @description: 查看图片的标签
     * @author: wangpengcheng
     * @param: Long photoId
     * @return: List<PsTargets>
     * @date: 2020/5/31 23:32
     * */
    List<PsTargets> findTargetsByPhotoId(@Param("photoId")Long photoId);
    /** 
     * @description: 删除一个标签记录
     * @author: wangpengcheng
     * @param:  
     * @return:  
     * @date: 2020/5/31 23:38
     * */
    int deleteTargetByTargetId(@Param("targetId")Long targetId);
    /** 
     * @description: 删除图片所有的标签记录
     * @author: wangpengcheng
     * @param:  Long photoId
     * @return: int 1 表示删除的行数。
     * @date: 2020/5/31 23:50
     * */
    int deleteTargetsByPhotoId(@Param("photoId")Long photoId);
    /** 
     * @description: 删除图片的对应标签
     * @author: wangpengcheng
     * @param:  
     * @return:  
     * @date: 2020/5/31 23:52
     * */
    int deleteTargetsByPhotoIdAndTargetName(@Param("targetName")String targetName,@Param("photoId")Long photoId);
}
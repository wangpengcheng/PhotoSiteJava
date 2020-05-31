package com.wang.study.photositejava.dao;

import com.wang.study.photositejava.bean.PsLoadHistory;
import com.wang.study.photositejava.bean.PsPhotos;
import com.wang.study.photositejava.bean.PsUsers;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.ListIterator;

/**
 * @class: PsLoadHistoryMapper
 * @description: 图像加载的历史描述类
 * @author: wangpengcheng
 * @version
 * @date: 2020/5/31 16:09
 * */
public interface PsLoadHistoryMapper {
    /** 
    * @description: 插入新元素
    * @author: wangpengcheng
    * @param:  record
    * @return:  int
    * @date: 2020/5/31 16:10
    */ 
    int insert(PsLoadHistory record);

    /** 
    * @description: 选取所有元素
    * @author: wangpengcheng
    * @param:  无
    * @return:  List<PsLoadHistory>
    * @date: 2020/5/31 16:11
    */ 
    List<PsLoadHistory> selectAll();

    /** 
     * @description: 查看用户所有上传下载记录
     * @author: wangpengcheng
     * @param:  Long userId
     * @return: List<PsLoadHistory>
     * @date: 2020/5/31 16:11
     *
     * */
    List<PsLoadHistory> seletUserRecordByUserId(@Param("userId") Long userId);
    /**
     * @description: 根据用户id和类型获取图片信息;返回所有的图片信息列表
     * @author: wangpengcheng
     * @param: Long userId
     * @param: int type
     * @return: List<PsPhotos>
     * @date: 2020/5/31 16:14
     */
    List<PsPhotos> findPhotosByUserIdAndType(@Param("userId")Long userId,@Param("historyType")int type);

}
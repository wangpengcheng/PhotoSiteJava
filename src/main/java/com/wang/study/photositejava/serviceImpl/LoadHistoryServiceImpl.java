package com.wang.study.photositejava.serviceImpl;

import com.wang.study.photositejava.bean.PsLoadHistory;
import com.wang.study.photositejava.bean.PsPhotos;
import com.wang.study.photositejava.dao.PsLoadHistoryMapper;
import com.wang.study.photositejava.service.LoadHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * @class: LoadHistoryServiceImpl
 * @description: 上传下载历史服务类
 * @author: Administrator
 * @version  0.0.1
 * @date: 2020/5/31 16:49
 * */

@Service
public class LoadHistoryServiceImpl implements LoadHistoryService {
    @Autowired
    private PsLoadHistoryMapper psLoadHistoryMapper;

    @Override
    public int addNewHistory(PsLoadHistory record) {
        return psLoadHistoryMapper.insert(record);
    }

    @Override
    public int addNewHistoryByUserAndPhoto(Long userId, Long photoId, int loadType) {
        PsLoadHistory reCord= new PsLoadHistory();
        reCord.setUserId(userId);
        reCord.setPhotoId(photoId);
        reCord.setLoadType(loadType);
        reCord.setLoadTime(new Date());
        return psLoadHistoryMapper.insert(reCord);
    }

    @Override
    public int addNewUpLoadHistory(Long userId, Long photoId) {
        return addNewHistoryByUserAndPhoto(userId,photoId,1);
    }

    @Override
    public int addNewDownLoadHistory(Long userId, Long photoId) {
        return addNewHistoryByUserAndPhoto(userId,photoId,0);
    }

    @Override
    public List<PsLoadHistory> seletUserRecordByUserId(Long userId) {
        return psLoadHistoryMapper.seletUserRecordByUserId(userId);
    }

    @Override
    public List<PsPhotos> findUserDownLoadPhotos(Long userId) {
        return psLoadHistoryMapper.findPhotosByUserIdAndType(userId,0);
    }

    @Override
    public List<PsPhotos> findUserUpLoadPhotos(Long userId) {
        return psLoadHistoryMapper.findPhotosByUserIdAndType(userId,1);
    }

    @Override
    public List<PsPhotos> findPhotosByUserIdAndType(Long userId, int loadType) {
        return psLoadHistoryMapper.findPhotosByUserIdAndType(userId,loadType);
    }
}

package com.wang.study.photositejava.serviceImpl;

import com.wang.study.photositejava.bean.PsPhotos;
import com.wang.study.photositejava.dao.PsPhotosMapper;
import com.wang.study.photositejava.service.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @class: PhotoServiceImpl
 * @description:
 * @author: wangpengcheng
 * @version
 * @date: 2020/5/31 20:44
 * */
@Service
public class PhotoServiceImpl implements PhotoService {
    @Autowired
    private PsPhotosMapper psPhotosMapper;

    @Override
    public Long addNewPhoto(PsPhotos newPhoto) {
        return psPhotosMapper.insert(newPhoto);
    }
    @Override
    public PsPhotos findPhotoById(Long photoId) {
        return psPhotosMapper.findPhotoById(photoId);
    }

    @Override
    public List<PsPhotos> findPhotosByTopicId(Long topicId) {
        return psPhotosMapper.findPhotosByTopicId(topicId);
    }
}

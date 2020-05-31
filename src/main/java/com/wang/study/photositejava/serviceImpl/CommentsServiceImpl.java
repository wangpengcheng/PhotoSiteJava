package com.wang.study.photositejava.serviceImpl;

import com.wang.study.photositejava.bean.PsComments;
import com.wang.study.photositejava.dao.PsCommentsMapper;
import com.wang.study.photositejava.service.CommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentsServiceImpl implements CommentsService {

    @Autowired
    private PsCommentsMapper psCommentsMapper;

    @Override
    public int addNewComments(PsComments record) {
        return psCommentsMapper.insert(record);
    }

    @Override
    public List<PsComments> selectAll() {
        return psCommentsMapper.selectAll();
    }

    @Override
    public List<PsComments> findCommentsByPhotoId(Long photoId) {
        return psCommentsMapper.findCommentsByPhotoId(photoId);
    }

    @Override
    public List<PsComments> findCommentsByUserId(Long userId) {
        return psCommentsMapper.findCommentsByUserId(userId);
    }
}

package com.wang.study.photositejava.serviceImpl;

import com.wang.study.photositejava.bean.PsTopics;
import com.wang.study.photositejava.dao.PsTopicsMapper;
import com.wang.study.photositejava.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.crypto.Data;
import java.util.List;
@Service
public class TopicServiceImpl implements TopicService {
    @Autowired
    private PsTopicsMapper psTopicsMapper;

    @Override
    public PsTopics findTopicById(Long topicId) {
        return psTopicsMapper.findTopicById(topicId);
    }
    @Override
    public List<PsTopics> selectAll(){
        return psTopicsMapper.selectAll();
    }
    @Override
    public int delectTopicById(Long topicId) {
        return psTopicsMapper.delectTopicById(topicId);
    }

    @Override
    public int insertTopic(PsTopics newTopic) {
        return psTopicsMapper.insert(newTopic);
    }

    @Override
    public int updateTopic(PsTopics newTopic) {
        return psTopicsMapper.updatePsTopic(newTopic);
    }

    @Override
    public List<PsTopics> findTopicsByName(String topicName) {
        return psTopicsMapper.findTopicbyName(topicName);
    }

    @Override
    public Data findCreateTimeById(Long topicId) {
        return psTopicsMapper.findCreateTimeById(topicId);
    }

    @Override
    public String findTopicValueByColumnName(Long topicId, String columnName) {
        return psTopicsMapper.findTopicValueByColumnName(topicId,columnName);
    }
}

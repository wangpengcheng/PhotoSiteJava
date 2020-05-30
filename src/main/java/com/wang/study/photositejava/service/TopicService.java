package com.wang.study.photositejava.service;

import com.wang.study.photositejava.bean.PsTopics;

import javax.xml.crypto.Data;
import java.util.List;

/**
 *
 * topic 控制基础服务类
 * */
public interface TopicService {
    /**
     * 使用id查询
     * */
    PsTopics findTopicById(Long topicId);
    /**
     * 查询所有存在的topic
     * */
    List<PsTopics> selectAll();
    /**
     * 删除topic
     * */
    int delectTopicById(Long topicId);
    /**
     * 增加topic
     * */
    int insertTopic(PsTopics newTopic);
    /**
     * 更新topic
     * */
    int updateTopic(PsTopics newTopic);
    /**
     * 使用名称查询
     * */
    List<PsTopics> findTopicsByName(String topicName);
    /**
     * 查询topic创建的时间
     * */
    Data findCreateTimeById(Long topicId);
    /**
     * 查询 string 的 topic属性;谨慎使用
     * */
    String findTopicValueByColumnName(Long topicId,String columnName);

}

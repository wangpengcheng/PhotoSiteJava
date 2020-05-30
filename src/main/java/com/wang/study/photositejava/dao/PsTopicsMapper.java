package com.wang.study.photositejava.dao;

import com.wang.study.photositejava.bean.PsTopics;
import org.apache.ibatis.annotations.Param;

import javax.xml.crypto.Data;
import java.util.List;

public interface PsTopicsMapper {
    /**
     * 插入数据
     *
     */
    int insert(PsTopics record);

    /**
     * 选取所有
     *
     */
    List<PsTopics> selectAll();
    /**
     * 更新topic
     * */
    void updatePsTopic(@Param("newTopic")PsTopics newTopic);
    /**
     * 根据id查询
     *
     */
    PsTopics findTopicById(@Param("topicId")Long topicId);
    /**
     * 查询创建时间
     *
     * */
    Data findCreateTimeById(@Param("topicId")Long topicId);

    /**
     * 根据名称进行查找
     * */
    List<PsTopics> findTopicbyName(@Param("topicName")String topicName);
    /**
    * 根据id删除
    */
    void delectTopicById(@Param("topicId")Long topicId);
    /**
    * 根据列名称进行查询;
    * 注意只能针对简单的数据string 类型
    */
    List<PsTopics> findPsTopicByColumn(@Param("columnName")String columnName,@Param("columnValue")String columnValue);

    /**
     * 根据id查询对应的属性
     * 注意：主要针对String 类型的属性值;慎用使用
     * */
    String findTopicValueByColumnName(@Param("topicId")Long topicId,@Param("columnName")String columnName);


}
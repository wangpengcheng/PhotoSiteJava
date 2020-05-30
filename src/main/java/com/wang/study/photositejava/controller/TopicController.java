package com.wang.study.photositejava.controller;


import com.wang.study.photositejava.bean.PsTopics;
import com.wang.study.photositejava.service.TopicService;
import com.wang.study.photositejava.utils.DateUtils;
import com.wang.study.photositejava.utils.JsonReturn;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * PsTopic 对应的数据控制类;
 * 需要的时候再添加
 * */
@RestController
@Slf4j
@RequestMapping("/topic")
public class TopicController {
    @Autowired
    private TopicService topicService;

    @Data
    private static class TopicInserter{
        public String topicName;
        public String displayUrl;
        public String displayLittleUrl;
        public String topicMessage;
    }

    /**
     * 主要实现全部的查询功能
     * */
    @RequestMapping(value = "select",method = RequestMethod.GET)
    public JsonReturn getAll() throws ServletException  {
        List<PsTopics> allTopiccs=topicService.selectAll();
        JsonReturn res=JsonReturn.ok();
        if(allTopiccs==null){
            log.info("There is no topic;request error");
            return JsonReturn.error(400,"查找失败,请确认参数");
        }else if(allTopiccs.isEmpty()){
            log.info("There is {} topic",allTopiccs.size());
        }else{
            return JsonReturn.ok().put("res",allTopiccs);
        }
        return res;
    }
    @RequestMapping(value = "insert",method = RequestMethod.POST)
    public JsonReturn insertTopic(@RequestBody final TopicInserter topicInserter){
        log.info("insert new topic  {}",topicInserter.topicName);
        PsTopics psTopics = new PsTopics();
        psTopics.setTopicName(topicInserter.topicName);
        psTopics.setDisplayPhotoUrl(topicInserter.displayUrl);
        psTopics.setDisplayPhotoLittleUrl(topicInserter.displayLittleUrl);
        psTopics.setTopicMessage(topicInserter.topicMessage);
        psTopics.setCreateTime(new Date());
        int res= topicService.insertTopic(psTopics);
        log.info("insert new topic id  {}",psTopics.getTopicId());
        if(res>0){
            return  JsonReturn.ok("insert success");
        }else{
            return JsonReturn.error("no success");
        }

        //return JsonReturn.ok();
    }


}

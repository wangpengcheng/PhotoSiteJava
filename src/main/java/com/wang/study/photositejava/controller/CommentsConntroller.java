package com.wang.study.photositejava.controller;


import com.wang.study.photositejava.bean.PsComments;
import com.wang.study.photositejava.service.CommentsService;
import com.wang.study.photositejava.utils.JsonReturn;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@Slf4j
@RequestMapping("comments")
public class CommentsConntroller {

    @Autowired
    private CommentsService commentsService;
    /**
     *
     * 查询图片评论
     * */
    @RequestMapping(value = "query" ,method = RequestMethod.GET)
    public Map<String, Object> findPhotoComments(@RequestParam final Long photoId){
        List<PsComments> photoComments = commentsService.findCommentsByPhotoId(photoId);
        log.info(" find photo id = { }",photoId);
        if(photoComments==null){
            log.info("no find photo id = ",photoId);
            return JsonReturn.error(400,"no this photo");
        }else{
            return JsonReturn.ok().put("result",photoComments);
        }
    }
    /**
     * 添加新的评论
     * */
    @RequestMapping(value = "add",method = RequestMethod.POST)
    public Map<String,Object> addNewComment(@RequestBody PsComments psComments){
        psComments.setCommentDate(new Date());
        int inserResult= commentsService.addNewComments(psComments);
        if(inserResult<=0){
            log.info("inser error {}",psComments.toString());
            return JsonReturn.error(400,"请求错误，请检查参数");
        }else{
            return JsonReturn.ok().put("result", "commnetId:"+inserResult);
        }


    }
}

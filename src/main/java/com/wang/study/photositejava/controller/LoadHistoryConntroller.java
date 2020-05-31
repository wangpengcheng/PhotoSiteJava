package com.wang.study.photositejava.controller;

import com.wang.study.photositejava.bean.PsLoadHistory;
import com.wang.study.photositejava.bean.PsPhotos;
import com.wang.study.photositejava.service.LoadHistoryService;
import com.wang.study.photositejava.utils.JsonReturn;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import lombok.extern.slf4j.XSlf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

/**
 * @class: LoadHistoryConntroller
 * @description: 上传下载历史的控制类，主要用来提供service服务网络接口
 * @author: wangoengcheng
 * @version 0.0.1
 * @date: 2020/5/31 17:32
 * */

@RestController
@Slf4j
@RequestMapping("/loadHistory")
public class LoadHistoryConntroller {
    @Autowired
    private LoadHistoryService loadHistoryService;
    /**
     * @class: UserForQuery
     * @description: body数据类
     * @author: Administrator
     * @version
     * @date: 2020/5/31 18:39
     * */
    @Data
    private static class UserForQuery{
        public Long userId;
        public int queryType;
    }
    /** 
     * @description: 提供查询用户上传下载记录接口
     * @author: wangpengcheng
     * @param:  用户id
     * @return: 对应的记录信息
     * @date: 2020/5/31 17:35
     * */ 
    @RequestMapping(value = "/getHistory",method = RequestMethod.GET)
    public Map<String,Object> findAllHistorByUserId(@RequestParam Long userId){
        if(userId!=null){
            log.info("参数解析错误，请确认userId是否正确接收");
            return JsonReturn.error(500,"参数错误，请确认userId是否正确接收");
        }else{
            List<PsLoadHistory> queryResult = loadHistoryService.seletUserRecordByUserId(userId);
            if(queryResult==null){
                return JsonReturn.error(400,"没有此用户，请再次确认其正确性");
            }else{
                return JsonReturn.ok().put("result",queryResult);
            }
        }
    };
    /**
     * @description: 查找用户上传或者下载的所有的图片的列表信息
     * @author: wangpengcheng
     * @param:  userId
     * @param:  queryType 0: download 1:upload 2: all
     * @return:  List<Psphotos>
     * @date: 2020/5/31 17:48
     * */
    @RequestMapping(value = "/queryUserPhotos",method = RequestMethod.POST)
    public Map<String,Object> findUserHistoryPhotos(@RequestBody UserForQuery userForQuery){
        log.info("接收参数为: {}",userForQuery);
        if(userForQuery.queryType>3||userForQuery.queryType<0){
            return JsonReturn.error(400,"query type error");
        }
        if(userForQuery.queryType==2){
            List<PsPhotos>  userDownPhotos = loadHistoryService.findUserDownLoadPhotos(userForQuery.userId);
            List<PsPhotos>  userUpPhotos = loadHistoryService.findUserUpLoadPhotos(userForQuery.userId);
            Map<String,Object> res=new HashMap();
            res.put("down",userDownPhotos);
            res.put("up",userUpPhotos);
            return JsonReturn.ok().put("result",res);
        }else{
            return JsonReturn.ok().put("result",loadHistoryService.findPhotosByUserIdAndType(userForQuery.userId,userForQuery.queryType));
        }
    };


}

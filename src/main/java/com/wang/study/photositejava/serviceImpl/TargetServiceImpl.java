package com.wang.study.photositejava.serviceImpl;

import com.wang.study.photositejava.bean.PsTargets;
import com.wang.study.photositejava.dao.PsTargetsMapper;
import com.wang.study.photositejava.service.TargetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
/**
 * @class  TargetServiceImpl
 * @description  target服务实现接口类
 * @author  wangpengcheng
 * @version 0.0.1
 * @date  2020/6/1 0:22
 * */
@Service
public class TargetServiceImpl implements TargetService {
    /**
     * @description:
     * @author: wangpengcheng
     * @param psTargets
     * @return: int
     * @date: 2020/6/1 0:00
     */
    @Autowired
    private PsTargetsMapper psTargetsMapper;
    @Override
    public Long addTarget(PsTargets psTargets) {
        return psTargetsMapper.insert(psTargets);
    }

    /**
     * @description 根据photoId, targetName, targetMessage来进行快速添加target记录
     * @description 根据photoId, targetName, targetMessage来进行快速添加target记录
     * @author  wangpengcheng
     * @param photoId
     * @param targetName
     * @param targetMessage
     * @return  int
     * @date  2020/6/1 0:02
     */
    @Override
    public Long addTargetFast(Long photoId, String targetName, String targetMessage) {
        PsTargets tempTarget = new PsTargets();
        tempTarget.setPhotoId(Math.toIntExact(photoId));
        tempTarget.setTargetName(targetName);
        tempTarget.setTargetMessage(targetMessage);
        tempTarget.setCreateTime(new Date());
        return this.addTarget(tempTarget);
    }

    /**
     * @description  获取图片的所有标签
     * @author wangpengcheng
     * @param photoId
     * @return  List<PsTargets>
     * @date  2020/6/1 0:06
     */
    @Override
    public List<PsTargets> findTargetsByPhotoId(Long photoId) {
        return psTargetsMapper.findTargetsByPhotoId(photoId);
    }

    /**
     * @description  根据photoId和targetName进行删除
     * @author  wangpengcheng
     * @param photoId
     * @param targetName
     * @return  int
     * @date  2020/6/1 0:04
     */
    @Override
    public int deleteTargetByPhotoAndName(Long photoId, String targetName) {
        return psTargetsMapper.deleteTargetsByPhotoIdAndTargetName(photoId,targetName);
    }
}

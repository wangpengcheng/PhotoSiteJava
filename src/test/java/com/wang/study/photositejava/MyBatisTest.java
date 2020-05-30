package com.wang.study.photositejava;

import com.wang.study.photositejava.bean.PsTopics;
import com.wang.study.photositejava.dao.PsTopicsMapper;
import org.junit.FixMethodOrder;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.mybatis.spring.annotation.MapperScan;
import org.mybatis.spring.boot.test.autoconfigure.MybatisTest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.stereotype.Service;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.List;

import static jdk.nashorn.internal.runtime.regexp.joni.Config.log;

/**
 * 主要测试类
 * 用来测试MyBatis中SQL语句是否正确
 * */

@MybatisTest    //缓存mybatsitest注解
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)    //这个是启用自己配置的数据元，不加则采用虚拟数据源
@Rollback(false)    //这个是默认是回滚，不会commit入数据库，改成false 则commit
@RunWith(SpringRunner.class)
@FixMethodOrder(value = MethodSorters.NAME_ASCENDING)
// @Transactional(propagation = Propagation.NOT_SUPPORTED)
@Service
public class MyBatisTest {
    private final Logger logger = LoggerFactory.getLogger(MyBatisTest.class);
    @Autowired
    PsTopicsMapper psTopicsMapper;
    @Test
    void PsTopicMapperTest(){
        try {
            List<PsTopics> tempRes= this.psTopicsMapper.selectAll();
            for (PsTopics tempIter:
                 tempRes) {
                logger.info("Topics :{ }",tempIter.toString());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

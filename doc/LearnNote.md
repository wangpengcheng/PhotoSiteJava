# mybatis 学习总结

> 2020-05-28 19:48:58

##  0 参考连接
- [Mybatis中文官网](http://www.mybatis.cn/)
- [Mybatis教程-实战看这一篇就够了](https://blog.csdn.net/hellozpc/article/details/80878563)
- [官方文档](https://mybatis.org/mybatis-3/)
- [mybatis-spring](http://mybatis.org/spring/zh/index.html)
- [源码地址](https://github.com/mybatis/mybatis-3)
- [源码注释](https://github.com/tuguangquan/mybatis)
- [MyBatis-Spring-Boot-Starter](http://mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/)


## 1. 环境搭建

```maven
<dependency>
  <groupId>org.mybatis</groupId>
  <artifactId>mybatis-spring</artifactId>
  <version>2.0.4</version>
</dependency>

```

## 2. 主要步骤
-  1. 创建sqlSessionFactory
```java
@Bean
public SqlSessionFactory sqlSessionFactory() throws Exception {
  SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
  factoryBean.setDataSource(dataSource());
  return factoryBean.getObject();
}
```
- 2. 创建Mapper

```java
public interface UserMapper {
  @Select("SELECT * FROM users WHERE id = #{userId}")
  User getUser(@Param("userId") String userId);
} 
```
需要注意的是：所指定的映射器类必须是一个接口，而不是具体的实现类。在这个示例中，通过注解来指定 SQL 语句，但是也可以使用 MyBatis 映射器的 XML 配置文件。

配置好之后，你就可以像 Spring 中普通的 bean 注入方法那样，将映射器注入到你的业务或服务对象中。MapperFactoryBean 将会负责 SqlSession 的创建和关闭。如果使用了 Spring 的事务功能，那么当事务完成时，session 将会被提交或回滚。最终任何异常都会被转换成 Spring 的 DataAccessException 异常。
- 3. Mapper配置
```java
@Bean
public UserMapper userMapper() throws Exception {
  SqlSessionTemplate sqlSessionTemplate = new SqlSessionTemplate(sqlSessionFactory());
  ret
``` 
- 4. 服务调用
```java
public class FooServiceImpl implements FooService {

  private final UserMapper userMapper;

  public FooServiceImpl(UserMapper userMapper) {
    this.userMapper = userMapper;
  }

  public User doSomeBusinessStuff(String userId) {
    return this.userMapper.getUser(userId);
  }
}

```

## 3. SqlSessionFactoryBean

可以使用XML创建Mybatis的配置文件，里面通过设置mapperLocations属性指定对应的XXXMaper.xml对应的路径。初始化它的dataSource是一般的JDBC dataSource;

自 1.3.0 版本开始，新增的 configuration 属性能够在没有对应的 MyBatis XML 配置文件的情况下，直接设置 Configuration 实例。例如：

## 4. 事务

Mybatis中借助了Spring的DataSourceTransactionManage 来实现和管理事务。支持`@Transactional`注解和AOP的配置。 

## 5. 使用SqlSession

SqlSessionTemplate 是 MyBatis-Spring 的核心。作为 SqlSession 的一个实现，这意味着可以使用它无缝代替你代码中已经在使用的 SqlSession。SqlSessionTemplate 是线程安全的，可以被多个 DAO 或映射器所共享使用。

**SqlSessionDaoSupport**

 SqlSessionDaoSupport 是一个抽象的支持类，用来为你提供 SqlSession。调用 getSqlSession() 方法你会得到一个 SqlSessionTemplate，之后可以用于执行 SQL 方法，就像下面这样:
 ```java
 public class UserDaoImpl extends SqlSessionDaoSupport implements UserDao {
  public User getUser(String userId) {
    return getSqlSession().selectOne("org.mybatis.spring.sample.mapper.UserMapper.getUser", userId);
  }
}
 ```
 在这个类里面，通常更倾向于使用 MapperFactoryBean，因为它不需要额外的代码。但是，如果你需要在 DAO 中做其它非 MyBatis 的工作或需要一个非抽象的实现类，那么这个类就很有用了。

SqlSessionDaoSupport 需要通过属性设置一个 sqlSessionFactory 或 SqlSessionTemplate。如果两个属性都被设置了，那么 SqlSessionFactory 将被忽略。

## 6. 注入映射器

映射器注入其实和bean的一般注入相同，有三种配置和使用方式。并且因为有Mapper对SqlSession的管理。其不需要关注太多的SQL查询。但是需要和DAO数据类型结合使用提供服务。

xml中配置方式是，使用 MapperFactoryBean 以便将映射器注册到 Spring 中；如下:

```
<bean id="userMapper" class="org.mybatis.spring.mapper.MapperFactoryBean">
  <property name="mapperInterface" value="org.mybatis.spring.sample.mapper.UserMapper" />
  <property name="sqlSessionFactory" ref="sqlSessionFactory" />
</bean>
```
Java方式如下:
```java
@Bean
public MapperFactoryBean<UserMapper> userMapper() throws Exception {
  MapperFactoryBean<UserMapper> factoryBean = new MapperFactoryBean<>(UserMapper.class);
  factoryBean.setSqlSessionFactory(sqlSessionFactory());
  return factoryBean;
}
```

如果映射器接口 UserMapper 在相同的类路径下有对应的 MyBatis XML 映射器配置文件，将会被 MapperFactoryBean 自动解析。不需要在 MyBatis 配置文件中显式配置映射器，除非映射器配置文件与接口类不在同一个类路径下。参考 SqlSessionFactoryBean 的 configLocation 属性以获取更多信息。

注意 MapperFactoryBean 需要配置一个 SqlSessionFactory 或 SqlSessionTemplate。它们可以分别通过 sqlSessionFactory 和 sqlSessionTemplate 属性来进行设置。如果两者都被设置，SqlSessionFactory 将被忽略。由于 SqlSessionTemplate 已经设置了一个 session 工厂，MapperFactoryBean 将使用那个工厂。

### 6.1 发现映射器
发现映射器的方法有如下几种:
1. 使用<mybatis:scan/>元素再MyBatis配置文件中，指明地址。如:`<mybatis:scan base-package="org.mybatis.spring.sample.mapper,org.mybatis.spring.sample.mapper2" />`;
2. 使用@MapperScan自动扫描包。如`@MapperScan("com.xxx.xxx")`
3. 再Spring xml配置文件中注册一个`MapperScannerConfigurer`

## 7. MyBatis-Spring-Boot-Starter

- [样例地址](https://github.com/mybatis/spring-boot-starter/tree/master/mybatis-spring-boot-samples/mybatis-spring-boot-sample-xml)

可以再Spring boot中的application配置文件中声明如下属性:

|属性|名称|
|:---|:---|
|`config-location`|	配置文件地址|
|`check-config-location`|Indicates whether perform presence check of the MyBatis xml config file.|
|`mapper-locations`|Locations of Mapper xml config file.|
|`type-aliases-package`|`Packages to search for type aliases. (Package delimiters are “,; \t\n”)|
|`type-aliases-super-type`	The super class for filtering type alias. If this not specifies, the MyBatis deal as type alias all classes that searched from type-aliases-package.|
|`type-handlers-package`|	Packages to search for type handlers. (Package delimiters are “,; \t\n”)|
|`executor-type`	|Executor type: SIMPLE, REUSE, BATCH|
|`default-scripting-language-driver`|The default scripting language driver class. This feature requires to use together with mybatis-spring 2.0.2+.|
|`configuration-properties`|Externalized properties for MyBatis configuration. Specified properties can be used as placeholder on MyBatis config file and Mapper file. For detail see the MyBatis reference page.|
|`lazy-initialization`|Whether enable lazy initialization of mapper bean. Set true to enable lazy initialization. This feature requires to use together with mybatis-spring 2.0.2+.|
|`configuration.*`|Property keys for Configuration bean provided by MyBatis Core. About available nested properties see the MyBatis reference page. NOTE: This property cannot be used at the same time with the config-location.|
|`scripting-language-driver.thymeleaf.*`|Property keys for ThymeleafLanguageDriverConfig bean provided by MyBatis Thymeleaf. About available nested properties see the MyBatis Thymeleaf reference page.|
|`scripting-language-driver.freemarker.*`|Properties keys for FreeMarkerLanguageDriverConfig bean provided by MyBatis FreeMarker. About available nested properties see the MyBatis FreeMarker reference page. This feature requires to use together with mybatis-freemarker 1.2.0+.|
|`scripting-language-driver.velocity.*`	|Properties keys for VelocityLanguageDriverConfig bean provided by MyBatis Velocity. About available nested properties see the MyBatis Velocity reference page. This feature requires to use together with mybatis-velocity 2.1.0+.|

## 8. 使用 Spring Batch

- [参考连接](http://mybatis.org/spring/zh/batch.html)

- `MyBatisPagingItemReader`:能够从数据库中分页地读取记录。它执行 setQueryId 属性指定的查询来获取请求的数据。这个查询使用 setPageSize 属性指定了分页请求的大小，并被执行。其它的页面将在必要时被请求（例如调用 read() 方法时），返回对应位置上的对象。通过参数来进行控制
    - `_page`:欲读取的页码（从 0 开始）
    - `_pagesize`:每一页的大小，也就是返回的行数
    - `_skiprows`:`_page` 和 `_pagesize` 的乘积
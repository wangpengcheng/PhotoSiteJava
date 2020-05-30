package com.wang.study.photositejava.bean;

import java.util.Date;

public class PsLoadHistory {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_load_history.load_id
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    private Long loadId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_load_history.user_id
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    private Long userId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_load_history.photo_id
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    private Long photoId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_load_history.load_time
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    private Date loadTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_load_history.load_type
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    private Integer loadType;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_load_history.load_id
     *
     * @return the value of ps_load_history.load_id
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public Long getLoadId() {
        return loadId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_load_history.load_id
     *
     * @param loadId the value for ps_load_history.load_id
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public void setLoadId(Long loadId) {
        this.loadId = loadId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_load_history.user_id
     *
     * @return the value of ps_load_history.user_id
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public Long getUserId() {
        return userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_load_history.user_id
     *
     * @param userId the value for ps_load_history.user_id
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public void setUserId(Long userId) {
        this.userId = userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_load_history.photo_id
     *
     * @return the value of ps_load_history.photo_id
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public Long getPhotoId() {
        return photoId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_load_history.photo_id
     *
     * @param photoId the value for ps_load_history.photo_id
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public void setPhotoId(Long photoId) {
        this.photoId = photoId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_load_history.load_time
     *
     * @return the value of ps_load_history.load_time
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public Date getLoadTime() {
        return loadTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_load_history.load_time
     *
     * @param loadTime the value for ps_load_history.load_time
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public void setLoadTime(Date loadTime) {
        this.loadTime = loadTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_load_history.load_type
     *
     * @return the value of ps_load_history.load_type
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public Integer getLoadType() {
        return loadType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_load_history.load_type
     *
     * @param loadType the value for ps_load_history.load_type
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public void setLoadType(Integer loadType) {
        this.loadType = loadType;
    }
}
package com.wang.study.photositejava.bean;

import java.util.Date;

public class PsUserBrowserecord {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_user_browserecord.record_id
     *
     * @mbg.generated Thu May 28 08:55:18 CST 2020
     */
    private Long recordId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_user_browserecord.user_id
     *
     * @mbg.generated Thu May 28 08:55:18 CST 2020
     */
    private Long userId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_user_browserecord.photo_id
     *
     * @mbg.generated Thu May 28 08:55:18 CST 2020
     */
    private Long photoId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_user_browserecord.record_time
     *
     * @mbg.generated Thu May 28 08:55:18 CST 2020
     */
    private Date recordTime;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_user_browserecord.record_id
     *
     * @return the value of ps_user_browserecord.record_id
     *
     * @mbg.generated Thu May 28 08:55:18 CST 2020
     */
    public Long getRecordId() {
        return recordId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_user_browserecord.record_id
     *
     * @param recordId the value for ps_user_browserecord.record_id
     *
     * @mbg.generated Thu May 28 08:55:18 CST 2020
     */
    public void setRecordId(Long recordId) {
        this.recordId = recordId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_user_browserecord.user_id
     *
     * @return the value of ps_user_browserecord.user_id
     *
     * @mbg.generated Thu May 28 08:55:18 CST 2020
     */
    public Long getUserId() {
        return userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_user_browserecord.user_id
     *
     * @param userId the value for ps_user_browserecord.user_id
     *
     * @mbg.generated Thu May 28 08:55:18 CST 2020
     */
    public void setUserId(Long userId) {
        this.userId = userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_user_browserecord.photo_id
     *
     * @return the value of ps_user_browserecord.photo_id
     *
     * @mbg.generated Thu May 28 08:55:18 CST 2020
     */
    public Long getPhotoId() {
        return photoId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_user_browserecord.photo_id
     *
     * @param photoId the value for ps_user_browserecord.photo_id
     *
     * @mbg.generated Thu May 28 08:55:18 CST 2020
     */
    public void setPhotoId(Long photoId) {
        this.photoId = photoId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_user_browserecord.record_time
     *
     * @return the value of ps_user_browserecord.record_time
     *
     * @mbg.generated Thu May 28 08:55:18 CST 2020
     */
    public Date getRecordTime() {
        return recordTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_user_browserecord.record_time
     *
     * @param recordTime the value for ps_user_browserecord.record_time
     *
     * @mbg.generated Thu May 28 08:55:18 CST 2020
     */
    public void setRecordTime(Date recordTime) {
        this.recordTime = recordTime;
    }
    /**
     * toString
     * */
    @Override
    public String toString(){
        StringBuilder re = new StringBuilder();
        re.append(getClass().getSimpleName());
        re.append("[");
        re.append(", Hash = ").append(hashCode());
        re.append(", record_id = ").append(getRecordId());
        re.append(", user_id = ").append(getUserId());
        re.append(", photo_id = ").append(getPhotoId());
        re.append(", record_time = ").append(getRecordTime());
        re.append("]");
        return re.toString();
    }
}
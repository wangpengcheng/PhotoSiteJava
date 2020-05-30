package com.wang.study.photositejava.bean;

import java.util.Date;

public class PsUsers {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_users.user_id
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    private Long userId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_users.user_name
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    private String userName;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_users.user_phone_number
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    private Long userPhoneNumber;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_users.user_little_name
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    private String userLittleName;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_users.user_real_name
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    private String userRealName;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_users.user_qq
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    private Long userQq;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_users.user_email
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    private String userEmail;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_users.user_pwd
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    private String userPwd;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_users.user_register_time
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    private Date userRegisterTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_users.user_state
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    private Integer userState;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_users.user_company
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    private String userCompany;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_users.user_head_image
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    private String userHeadImage;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_users.user_download_number
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    private Long userDownloadNumber;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column ps_users.user_upload_number
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    private Long userUploadNumber;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_users.user_id
     *
     * @return the value of ps_users.user_id
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public Long getUserId() {
        return userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_users.user_id
     *
     * @param userId the value for ps_users.user_id
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public void setUserId(Long userId) {
        this.userId = userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_users.user_name
     *
     * @return the value of ps_users.user_name
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public String getUserName() {
        return userName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_users.user_name
     *
     * @param userName the value for ps_users.user_name
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public void setUserName(String userName) {
        this.userName = userName == null ? null : userName.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_users.user_phone_number
     *
     * @return the value of ps_users.user_phone_number
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public Long getUserPhoneNumber() {
        return userPhoneNumber;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_users.user_phone_number
     *
     * @param userPhoneNumber the value for ps_users.user_phone_number
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public void setUserPhoneNumber(Long userPhoneNumber) {
        this.userPhoneNumber = userPhoneNumber;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_users.user_little_name
     *
     * @return the value of ps_users.user_little_name
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public String getUserLittleName() {
        return userLittleName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_users.user_little_name
     *
     * @param userLittleName the value for ps_users.user_little_name
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public void setUserLittleName(String userLittleName) {
        this.userLittleName = userLittleName == null ? null : userLittleName.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_users.user_real_name
     *
     * @return the value of ps_users.user_real_name
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public String getUserRealName() {
        return userRealName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_users.user_real_name
     *
     * @param userRealName the value for ps_users.user_real_name
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public void setUserRealName(String userRealName) {
        this.userRealName = userRealName == null ? null : userRealName.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_users.user_qq
     *
     * @return the value of ps_users.user_qq
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public Long getUserQq() {
        return userQq;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_users.user_qq
     *
     * @param userQq the value for ps_users.user_qq
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public void setUserQq(Long userQq) {
        this.userQq = userQq;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_users.user_email
     *
     * @return the value of ps_users.user_email
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public String getUserEmail() {
        return userEmail;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_users.user_email
     *
     * @param userEmail the value for ps_users.user_email
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail == null ? null : userEmail.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_users.user_pwd
     *
     * @return the value of ps_users.user_pwd
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public String getUserPwd() {
        return userPwd;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_users.user_pwd
     *
     * @param userPwd the value for ps_users.user_pwd
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public void setUserPwd(String userPwd) {
        this.userPwd = userPwd == null ? null : userPwd.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_users.user_register_time
     *
     * @return the value of ps_users.user_register_time
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public Date getUserRegisterTime() {
        return userRegisterTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_users.user_register_time
     *
     * @param userRegisterTime the value for ps_users.user_register_time
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public void setUserRegisterTime(Date userRegisterTime) {
        this.userRegisterTime = userRegisterTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_users.user_state
     *
     * @return the value of ps_users.user_state
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public Integer getUserState() {
        return userState;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_users.user_state
     *
     * @param userState the value for ps_users.user_state
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public void setUserState(Integer userState) {
        this.userState = userState;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_users.user_company
     *
     * @return the value of ps_users.user_company
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public String getUserCompany() {
        return userCompany;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_users.user_company
     *
     * @param userCompany the value for ps_users.user_company
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public void setUserCompany(String userCompany) {
        this.userCompany = userCompany == null ? null : userCompany.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_users.user_head_image
     *
     * @return the value of ps_users.user_head_image
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public String getUserHeadImage() {
        return userHeadImage;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_users.user_head_image
     *
     * @param userHeadImage the value for ps_users.user_head_image
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public void setUserHeadImage(String userHeadImage) {
        this.userHeadImage = userHeadImage == null ? null : userHeadImage.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_users.user_download_number
     *
     * @return the value of ps_users.user_download_number
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public Long getUserDownloadNumber() {
        return userDownloadNumber;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_users.user_download_number
     *
     * @param userDownloadNumber the value for ps_users.user_download_number
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public void setUserDownloadNumber(Long userDownloadNumber) {
        this.userDownloadNumber = userDownloadNumber;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column ps_users.user_upload_number
     *
     * @return the value of ps_users.user_upload_number
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public Long getUserUploadNumber() {
        return userUploadNumber;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column ps_users.user_upload_number
     *
     * @param userUploadNumber the value for ps_users.user_upload_number
     *
     * @mbg.generated Fri May 29 18:16:33 CST 2020
     */
    public void setUserUploadNumber(Long userUploadNumber) {
        this.userUploadNumber = userUploadNumber;
    }
}
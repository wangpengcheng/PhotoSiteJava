package com.wang.study.photositejava.utils;



import org.apache.http.HttpStatus;

import java.util.HashMap;
import java.util.Map;

/**
 * 统一的json 返回数据接口封装类
 * @date 2020-05-27
 * */
public class JsonReturn extends HashMap<String, Object> {
    private static final long serialVersionUID = 1L;

    public JsonReturn() {
        put("code", 0);
    }

    public static JsonReturn error() {
        return error(HttpStatus.SC_INTERNAL_SERVER_ERROR, "未知异常，请联系管理员");
    }

    public static JsonReturn error(String msg) {
        return error(HttpStatus.SC_INTERNAL_SERVER_ERROR, msg);
    }

    public static JsonReturn error(int code, String msg) {
        JsonReturn JsonReturn = new JsonReturn();
        JsonReturn.put("code", code);
        JsonReturn.put("msg", msg);
        return JsonReturn;
    }

    public static JsonReturn ok(String msg) {
        JsonReturn JsonReturn = new JsonReturn();
        JsonReturn.put("msg", msg);
        JsonReturn.put("code", HttpStatus.SC_OK);
        return JsonReturn;
    }

    public static JsonReturn ok(Map<String, Object> map) {
        JsonReturn JsonReturn = new JsonReturn();
        JsonReturn.putAll(map);
        JsonReturn.put("code",HttpStatus.SC_OK);
        return JsonReturn;
    }

    public static JsonReturn ok() {
        JsonReturn JsonReturn= new JsonReturn();
        JsonReturn.put("code",HttpStatus.SC_OK);
        return JsonReturn;
    }

    public JsonReturn put(String key, Object value) {
        super.put(key, value);
        return this;
    }
}

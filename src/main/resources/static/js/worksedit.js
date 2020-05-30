layui.define(['layer', 'form', 'jquery'], function (exports) {
  var $ = layui.$,
      layer = layui.layer,
      expire = 0,
      formData = null,
      uploader,
      miniPlusIsPick = false;
  var photoCreateDesc = "该作品经过作者的独特构思，充分运用摄影技巧，画面内容形象生动地体现出{0}的特点。作品主题鲜明，构图精巧，摄影内容反应了自然美和艺术形象美，整幅作品具有独创性和显著性两大特征。",
      artCreateDesc = "该作品经过作者的独特构思，充分运用美术设计，画面内容形象生动地体现出{0}的特点。作品整体独特设计精巧，使整幅作品更容易识别和记忆，具有独创性和显著性两大特征。",
      chartCreateDesc = "该作品经过作者的独特构思，充分运用图形绘制手法，画面内容准确表达出{0}的特点。作品图样清晰表达设计意图，描绘出产品的构造、性能，整幅作品具有独创性和显著性两大特征。",
      drawingCreateDesc = "该作品经过作者的独立思考和对绘画的深层次理解，充分运用绘画设计创作手法，画面内容形象生动地体现出{0}的特点。整幅作品在构图设计、色彩应用等方面新颖独特，灵感与绘画技法完美融合，具备较高的艺术价值。",
      posterCreateDesc = "该作品经过作者的个性化创意表现，充分运用海报设计创作手法，画面内容和设计理念体现出{0}的特点。作品整体既强调创意及视觉语言，也注重平面和色彩构成，具备强烈的视觉冲击力、艺术效果和信息传播效果。",
      UIDesignCreateDesc = "该作品经过作者的新颖构思，充分运用UI设计创作手法，页面布局合理，交互逻辑清晰，画面内容准确地体现出 {0} 的特点。作品以用户体验为设计原则，界面直观简洁，操作方便高效，极大的提升了产品使用体验。",
      VIDesignCreateDesc = "该作品经过作者的独特构思和巧妙创意，充分运用VI设计创作手法，画面内容生动的表现出 {0} 的特点，具有鲜明的形象特征。整幅作品体现了标识设计的独特寓意，兼具实用性、艺术性与独创性",
      fontDesignCreateDesc = "该作品经过作者的多重构思和极富个性化的表现手法，充分运用字体设计创作技巧，画面内容生动地体现出{0}的特点。字体笔画均匀美观，在视觉传达上实现了字体的可识别性和注目度，整体风格上突破了基本字体的固定模式。",
      interiorDesignCreateDesc = "该作品遵循室内设计的基本原则，用电脑绘图工具绘制而成，充分运用室内设计创作手法，整幅作品体现出 {0} 的特点。作品的空间布局、界面装饰和陈设环境与功能保持高度统一，使室内空间舒适得体，富有个性，兼具实用性与艺术性。";

  var worksedit = {
    init: function () {
      this.checkRealNameAuth();
      this.checkVipInfo();
      this.initData();
      this.bindEvent();
      this.bindData();
      this.validate();
      this.initUploader();
      this.initPdfUploader();
    },
    checkRealNameAuth: function () {
      $.get('/copyright/realNameAuth/hasRealnameAuth', function (result) {
        if (result.success) {
         if(result.data==3){
            layer.open({
              type: 1,
              title: false,
              closeBtn: 0,
              btn: ['确定'],
              btnAlign: 'c',
              skin: 'pe',
              area: ['500px', '260px'],
              content: $('.pop-edit'),
              yes: function (index, layero) {
                location.href = '/copyright/realname/authentication';
              },
            })
          }

        }
      }, 'json')
    },
    checkVipInfo: function () {
      $.get('/account/isVip', function (result) {
        if (result) {
          $('.offline').removeClass('hide');
          $('.offline').removeClass('offline').addClass('offline2');
          $('#kfHref').addClass('hide');
        } else {
          $('.offline').hide();
        }
      })
    },
    initData: function () {

      //获取作品分类
      $.get('/copyright/getCategoryList', function (result) {

        $('#content-type').append('<option value="">请选择分类</option>');
        $.each(result, function (index, category) {
          var option = ' <option value="' + category.catId + '">'
              + category.catName + '</option>'
          $('#content-type').append(option);
        })
        $('#content-type').easyDropDown({
          cutOff: 10,
          wrapperClass: 'dropdown',
        });
      }, 'json')
    },
    validate: function () {

      //判断日期
      $.validator.addMethod("pastDate", function (value, element) {
        if (new Date(value) > new Date()) {
          return false;
        }
        return true;
      }, '须小于当前日期');

      $.validator.addMethod("gtCreationDate", function (value, element) {
        var creationDate = $('#inputCompleteDate').val();

        if (creationDate && new Date(creationDate) > new Date(value)) {
          return false;
        }
        return true;
      }, '须大于完成日期');

      jQuery.validator.addMethod("isValidatedWorksName",
          function (value, element) {
            var reg = /^[a-zA-Z\u4e00-\u9fa5\s]+(?!(psd|jpg)$)$/;
            return this.optional(element) || (reg.test(value));
          }, "请正确填写作品名称（只能填写汉字或英文字符，并且不能以jpg或psd结尾）");

      $("#edit-form").validate({
        rules: {
          worksFullName: {
            required: true,
            maxlength: 30,
            isValidatedWorksName: true,
            remote: {
              url: '/copyright/isRepeatedWorksName',
              type: 'post',
              dataType: "json",           //接受数据格式
              data: {                     //要传递的数据
                id: function () {
                  var id = Util.getQueryString('registerId');
                  if (id == null) {
                    id = "";
                  }
                  return id;
                }
              }
            }
          },
          creationDate: {
            required: true,
            pastDate: true
          },
          creationCountry: {
            required: true
          },
          creationCity: {
            required: true
          },
          mainFeatures: {
            required: true
          },
          categoryId: {
            required: true,
            maxlength: 300
          }
        },
        messages: {
          worksFullName: {
            required: "名称不能为空",
            maxlength: "名称字符数超过限制",
            remote: "作品名称重复",
          },
          creationDate: {
            required: "日期不能为空"
          },
          creationCountry: {
            required: "创作国家不能为空"
          },
          creationCity: {
            required: "创作城市不能为空"
          },
          inputFirstDate: {
            required: "日期不能为空"
          },
          mainFeatures: {
            required: "创作说明不能为空",
            maxlength: "创作说明字符数超过限制"
          },
          categoryId: {
            required: '请选择分类'
          },
          keywords: {
            required: '请至少输入一个关键词'
          }
        },
        submitHandler: function (form) {
          if ($('.tips-panel:visible').length > 0) {
            layer.msg('图片不符合尺寸要求');
            return false;
          }
          var index = layer.load(2);
          //获取上传文件信息
          var worksFileInfo = worksedit.getWorksInfo();
          var worksInfo = $(form).serializeJSON();
          worksInfo.imagesName = worksFileInfo;
          if (worksInfo.imagesName.length > 1) {
            worksInfo.seriesOfWorks = true;
          } else {
            worksInfo.seriesOfWorks = false;
          }
          if (worksInfo.publishStatus == 2) {
            worksInfo.firstPublishDate = Util.dateFormat(new Date(),
                'yyyy-MM-dd');
            worksInfo.firstPublishCountry = '中国';
            worksInfo.firstPublishProvince = '北京市';
            worksInfo.firstPublishCity = '北京市';
            worksInfo.publishStatus = 1;
          }
          if(worksInfo.worksType=='artProductRegist'){
            var subWorksType = $(".prod-type .sublist dl dd.on").index();
            worksInfo.subWorksType=subWorksType;
          }
          if ($('.auth-cert-name').attr('href')) {
            worksInfo.authCertFileUrl = $('.auth-cert-name').attr('href');
          }
          delete worksInfo.id;
          $.ajax({
            url: '/copyright/save',
            type: 'post',
            data: JSON.stringify(worksInfo),
            contentType: 'application/json',
            dataType: 'json',
            success: function (result) {
              layer.close(index);
              if (result.success) {
                var registerId = result.data[0].id;
                location.href = '/copyright/register/confirm?registerId='
                    + registerId;
              } else {
                layer.msg(result.message);
              }
            }
          })
          return false;
        },
        errorElement: 'font',
        errorPlacement: function (error, element) {
          if ('categoryId' == $(element).attr('name')) {
            error.appendTo(element.parent().parent());
          } else if ('keywords' == $(element).attr('name')) {
            error.appendTo(element.parent().parent().parent());
          } else if ('customPrice' == $(element).attr('name')) {
            error.appendTo(element.parents('.custom'));
          } else {
            error.appendTo(element.parent());
          }
        }
      })
    },
    bindEvent: function () {
      //选择作品类型
      $('.sublist dl dd a').click(function () {
        $('.container3 .body .prod-type .sublist a.p-type-a').html(
            $(this).html());
        $(this).parent().addClass('on').siblings().removeClass('on');
        $('.p-type-a').eq(1).click()
        return true;
      })

      //点击删除作品
      $(document).on("click", ".container3 .body .c2-uploadarea li .opus h4 a",
          function () {
            var $image_li = $(this).parents('.image'),
                fileName = $image_li.find('input[name="imageName"]').val();
            $image_li.remove();
            var key = fileName.replace(
                'http://meisudci.oss-cn-beijing.aliyuncs.com/', '');
            if ($(".container3 .body .c2-uploadarea li").length <= 1) {
              $('.plus').show();
              $('.images-ul').hide();
              uploader.reset();
            }
            uploader.removeFile($image_li.attr('id'), true);
            $.get('/oss/deleteObject', {key: key});
            return false;
          })

      //点击作品类型按钮变色
      $(".container3 .body .prod-type li .p-type-a").on("click", function () {
        var index = $(this).parent().index(),
            subTypeIndex = $(".prod-type .sublist dl dd.on").index();
        $(this).parent().addClass("on").siblings().removeClass("on");
        $('input[name="worksType"]').val($(this).data("id"));
        var worksFullName = $('input[name="worksFullName"]').val();
        if (!worksFullName) {
          return false;
        }
        fillCreateDesc(index, subTypeIndex, worksFullName);
        return false;
      })

      $('input[name="worksFullName"]').change(function () {
        var $this = $(this),
            worksFullName = $this.val(),
            workTypeIndex = $(".container3 .body .prod-type li.on").index(),
            subTypeIndex = $(".prod-type .sublist dl dd.on").index();
        fillCreateDesc(workTypeIndex, subTypeIndex, worksFullName);
      });

      function fillCreateDesc(workTypeIndex, subTypeIndex, worksFullname) {
        var createDesc = "",
            creativePurpose = "";
        if (workTypeIndex == 0) {
          createDesc = photoCreateDesc.replace("{0}", worksFullname);
          if (createDesc.indexOf('本人声明图像中所涉及人像已获得相关授权') < 0 && !$(
              '.auth-cert-name').hasClass('hide')) {
            createDesc = createDesc + '本人声明图像中所涉及人像已获得相关授权。';
          }
        } else if (workTypeIndex == 1) {
          switch (subTypeIndex) {
            case 1:
              createDesc = drawingCreateDesc.replace("{0}", worksFullname);
              creativePurpose = "通过绘画技法展示创作人对美的独特感受和理解，赋予绘画内涵和意义，唤起美的事物在人心中的感觉，并借此传播绘画内容所承载的艺术信息。";
              break;
            case 2:
              createDesc = posterCreateDesc.replace("{0}", worksFullname);
              creativePurpose = "作为一种信息传递的艺术，以商业宣传为最终使用目的，达到引人注目的视觉效果，使消费者对所宣传的内容产生信任感，实现信息快速传播。";
              break;
            case 3:
              createDesc = UIDesignCreateDesc.replace("{0}", worksFullname);
              creativePurpose = "针对软件的人机交互、操作逻辑、界面美观的整体性设计，清晰表达用户界面原型中的细节和交互方式，配合开发程序让软件的操作变得合理舒适。";
              break;
            case 4:
              createDesc = VIDesignCreateDesc.replace("{0}", worksFullname);
              creativePurpose = "为了有效的进行宣传推广，将VI设计作为独特的标识使用，以方便消费者在购买使用时能够更精确的识别出品牌信息。";
              break;
            case 5:
              createDesc = fontDesignCreateDesc.replace("{0}", worksFullname);
              creativePurpose = "在字体的局部结构上进行某些装饰、美化、创意变形等艺术处理，创造出更加贴近内容，更能切合使用环境的书写形式。";
              break;
            case 6:
              createDesc = interiorDesignCreateDesc.replace("{0}", worksFullname);
              creativePurpose = "通过设计效果展示建筑物内部的功能和空间环境，给人以美的体验和舒适的使用感受，进而帮助创造美好的室内居住环境。";
              break;
            default:
              createDesc = artCreateDesc.replace("{0}", worksFullname);
          }
        } else if (workTypeIndex == 2) {
          createDesc = chartCreateDesc.replace("{0}", worksFullname);
        }
        $("#creationDesc").val(createDesc);
        $("#creativePurpose").val(creativePurpose);
      }

      //关键词点击
      $(document).on("click", "#key-words li", function () {
        var key_txt = $(this).prop("outerHTML");

        if ($("#key-txt ul").html() == "" || $('#key-txt ul').html()
            == '输入关键词用逗号分割') {
          $("#key-txt ul").html(key_txt);
        } else {
          $("#key-txt ul").html($("#key-txt ul").html() + key_txt);
        }
        $(this).remove();
        getKeyWords();
        return false;
      })

      $(document).on("click", "#key-txt li", function () {
        $("#key-words ul").append($(this).prop("outerHTML"));
        $(this).remove();
        getKeyWords();
      })
      //关键词输入
      $('#key-diy').keyup(function (event) {
        //alert(event.keyCode);
        if (event.keyCode == 13) {
          var v = $(this).val().split(/[,]|[，]/);
          var newLis = "";
          for (var i in v) {
            if (v[i] != "") {
              newLis += "<li>" + $.trim(v[i]) + "</li>";
            }
          }
          if ($('#key-txt ul').html() == '输入关键词用逗号分割') {
            $('#key-txt ul').html("");
          }
          $("#key-txt ul").html($("#key-txt ul").html() + newLis);
          $(this).val('');
          getKeyWords()
        }

      });

      function getKeyWords() {
        var keywords = '';
        $("#key-txt ul li").each(function (index, element) {
          keywords = keywords + $(this).html() + ",";
        });
        if (keywords.length > 0) {
          keywords = keywords.substring(0, keywords.length - 1);
        }
        $('input[name="keywords"]').val(keywords);
      }

      //未发表
      $("#nopub").on("click", function () {
        $(this).parent().addClass("on").siblings().removeClass("on");
        $("#first-date").hide();
        $("#addr2").hide();
        $('input[name="firstPublishDate"]').rules("remove");
        $('#firstPublishCountry').rules("remove");
        $('#firstPublishCity').rules("remove");
        $('input[name="publishStatus"]').val(2);
        return false;
      })
      $("#haspub").on("click", function () {
        $(this).parent().addClass("on").siblings().removeClass("on");
        $("#first-date").show();
        $("#addr2").show();
        $('input[name="firstPublishDate"]').rules("add", {
          required: true,
          pastDate: true,
          gtCreationDate: true,
          messages: {required: '发表日期不能为空'}
        });
        $('#firstPublishCountry').rules("add",
            {required: true, messages: {required: '发表国家不能为空'}});
        $('#firstPublishCity').rules("add",
            {required: true, messages: {required: '发表国家不能为空'}});
        $('input[name="publishStatus"]').val(1);
        return false;
      })

      var province = '北京市',
          city = '北京市'
      worksedit.loadAddressCompent(province, city, province, city);
      //下拉菜单
      $('.cont-category .dropdown').easyDropDown({
        cutOff: 10,
        onChange: function (selected) {
          // do something
        }
      });

      //授权 切换
      $("#auth .auth-li").on("click", function () {
        if ($(this).hasClass('vip-disabled')) {
          return false;
        }
        $(this).addClass("on").siblings().removeClass("on");
        $('input[name="authorizeRule"]').val($(this).data('id'));
        $('input[name="splitPercentage"]').val($(this).data('value'));
        if ($(this).index() == 2) {
          $('input[name="customPrice"]').rules('add', {
            required: true,
            max: 1000,
            digits: true,
            messages: {
              required: '请输入交易价格',
              max: '请输入0-1000之间的整数',
              digits: '交易价格必须为整数'
            }
          });
        } else {
          $('input[name="customPrice"]').rules('remove');
        }
      })

      $('input[name="customPrice"]').change(function () {
        $('input[name="price"]').val($(this).val());
      })

      var worksType = localStorage.getItem('worksType');
      if (worksType) {
        $(".container3 .body .prod-type ." + worksType + " .p-type-a").click();
        localStorage.removeItem('worksType');
      }

      $('.auth-cert-del-btn').click(function () {
        var authCertUrl = $('.auth-cert-name').attr('href'),
            key = authCertUrl.replace(
                'http://meisudci.oss-cn-beijing.aliyuncs.com/', '');
        $.get('/oss/deleteObject', {key: key});
        $('#upload-pdf-btn').removeClass('hide');
        $('.auth-cert-name').addClass('hide').attr('href', '');
        $('.auth-cert-del-btn').addClass('hide');

      })
    },
    bindData: function () {
      var registerId = Util.getQueryString('registerId');
      if (registerId) {
        $.get('/copyright/reEditWorksById', {id: registerId},
            function (result) {
              if (result.success) {
                var data = result.data,
                    worksType = data.worksType,
                    publishStatus = data.publishStatus,
                    creationCountry = data.creationCountry,
                    creationProvince = data.creationProvince,
                    creationCity = data.creationCity,
                    firstPublishCountry = data.firstPublishCountry,
                    firstPublishProvince = data.firstPublishProvince,
                    firstPublishCity = data.firstPublishCity,
                    categoryId = data.categoryId,
                    keywords = data.keywords,
                    authorizeRule = data.authorizeRule,
                    imagesName = data.imagesName,
                    subWorksType = data.subWorksType;
                worksedit.initImagesInfo(imagesName, data.worksFullName);
                $('.' + worksType).find('.p-type-a').click();
                if(worksType=='artProductRegist'){
                  $('.sublist dl dd').eq(subWorksType).find('a').click();
                }
                $('.publish ul li:first a').click();

                var categoryIndex = $('#content-type option[value="'
                    + categoryId + '"]').index();
                $('#content-type').easyDropDown('select', categoryIndex);
                $(':text').each(function (index, element) {
                  var attr_name = $(element).attr('name');
                  $(element).val(data[attr_name]);
                });
                $('input[name="worksFullName"]').change();
                if (data.mainFeatures) {
                  $('textarea').val(data.mainFeatures);
                }

                var keyword_array = keywords.split(',');
                $("#key-txt ul").html('');
                $.each(keyword_array, function (index, keyword) {
                  $("#key-txt ul").append('<li>' + keyword + '</li>');
                })

                $('.auth-li[data-id=' + authorizeRule + ']').click();

                if (1 == publishStatus) {
                  $('#haspub').click();
                  if ('中国' != firstPublishCountry) {
                    $('#addr2 .first-select').val('海外');
                    $('#addr2 .first-select').change();
                    $('#addr2 .div-input:hidden').val('');
                  } else {
                    var firstPublishProvinceIndex = $('#dd3 option[value="'
                        + firstPublishProvince + '"]').index();
                    $('#dd3').easyDropDown('select', firstPublishProvinceIndex);
                    var firstPublishCityIndex = $('#dd4 option[value="'
                        + firstPublishCity + '"]').index();
                    $('#dd4').easyDropDown('select', firstPublishCityIndex);
                  }
                }
                if ('中国' != creationCountry) {
                  $('#addr1 .first-select').val('海外').change();
                  $('#addr1 .div-input:hidden').val('');
                } else {
                  var creationProvinceIndex = $('#dd1 option[value="'
                      + creationProvince + '"]').index();
                  if (creationProvinceIndex < 0) {
                    creationProvinceIndex = 0;
                  }
                  $('#dd1').easyDropDown('select', creationProvinceIndex);
                  var creationCityIndex = $('#dd2 option[value="' + creationCity
                      + '"]').index();
                  if (creationCityIndex < 0) {
                    creationCityIndex = 0;
                  }
                  $('#dd2').easyDropDown('select', creationCityIndex);
                }
              }
            }, 'json')
      }

      var existWorks = Util.getQueryString("image");
      if (existWorks) {
        var works = [];
        var workItem = {};
        workItem.fileName = 'image1';
        workItem.imageName = existWorks;
        works.push(workItem);
        worksedit.initImagesInfo(works, '');
      }

    },
    loadAddressCompent: function (creationProvince, creationCity,
        firstPublishProvince, firstPublishCity) {
      //地点选择
      addressInit('province', 'city', 'district', creationProvince,
          creationCity, '');
      addressInit('province1', 'city1', 'district1', firstPublishProvince,
          firstPublishCity, '');
      $("#addr1 .first-select").change(function () {
        if ($(this).find("option:selected").text() == "海外") {
          $('#creationCountry').val('');
          $('#creationProvince').val('');
          $('#creationCity').val('');
          $(this).parent().find(".div-select").hide();
          $(this).parent().find(".div-input").show();
        } else if ($(this).find("option:selected").text() == "中国") {
          $('#creationCountry').val('中国');
          $(this).parent().find(".di v-select").show();
          $(this).parent().find(".div-input").hide();
          $("#dd1").easyDropDown('select', 0);
        }
      });
      $("#addr2 .first-select").change(function () {
        if ($(this).find("option:selected").text() == "海外") {
          $('#firstPublishCountry').val('');
          $('#firstPublishProvince').val('');
          $('#firstPublishCity').val('');
          $(this).parent().find(".div-select").hide();
          $(this).parent().find(".div-input").show();
        } else if ($(this).find("option:selected").text() == "中国") {
          $('#firstPublishCountry').val('中国');
          $(this).parent().find(".div-select").show();
          $(this).parent().find(".div-input").hide();
          $("#dd3").easyDropDown('select', 0);
        }
      });

      $('#dd1').easyDropDown({
        cutOff: 10,
        onChange: function (selected) {
          var creationProvince = selected.value;
          $("#creationProvince").val(creationProvince);
          $("#dd2").easyDropDown('destroy');
          $("#dd2").easyDropDown({
            cutOff: 10,
            wrapperClass: 'dropdown',
            onChange: function (selected) {
              var creationCity = selected.value;
              $("#creationCity").val(creationCity);
            }
          });
          $("#dd2").easyDropDown('select', 0);
        }
      });
      $('#dd3').easyDropDown({
        cutOff: 10,
        onChange: function (selected) {
          var firstPublishProvince = selected.value;
          $('#firstPublishProvince').val(firstPublishProvince);
          $("#dd4").easyDropDown('destroy');
          $("#dd4").easyDropDown({
            cutOff: 10,
            wrapperClass: 'dropdown',
            onChange: function (selected) {
              var firstPublishCity = selected.value;
              $('#firstPublishCity').val(firstPublishCity);
            }
          });
          $("#dd4").easyDropDown('select', 0);
        }
      });
      $('#dd2,#dd4').easyDropDown({
        cutOff: 10
      });

      $.get('/copyright/getIpAddress', function (ip) {
        $.get('/getIpInfo?ip=' + ip, function (result) {
          if (result.code == 0) {
            var province = result.data.region,
                city = result.data.city;

            var provinceIndex = $('#dd1').find('option:contains(' + province
                + ')').index();
            provinceIndex = provinceIndex < 0 ? 0 : provinceIndex;
            $("#dd1").easyDropDown('select', provinceIndex);

            var cityIndex = $('#dd2').find('option:contains(' + city
                + ')').index();
            cityIndex = cityIndex < 0 ? 0 : cityIndex;
            $("#dd2").easyDropDown('select', cityIndex);

          }
        }, 'json')
      })

    },

    initUploader: function () {
      var that = this;
      uploader = WebUploader.create({

        // swf文件路径
        swf: '/static/front/webuploader/Uploader.swf',
        compress: false,
        auto: true,
        thumb: {
          width: 336,
          height: 202,

          // 图片质量，只有type为`image/jpeg`的时候才有效。
          quality: 100,

          // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
          allowMagnify: true,

          // 是否允许裁剪。
          crop: false,
        },

        // 文件接收服务端。
        server: 'http://meisudci.oss-cn-beijing.aliyuncs.com',
        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
        pick: '.plus',

        // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
        resize: false,
        fileNumLimit: 20

      });
      //文件添加到容器
      uploader.on('fileQueued', function (file) {
        if (file.type == 'image/jpeg' && file.size > 20 * 1024 * 1024) {
          layer.msg('请上传不大于20M的JPG格式图片文件');
          return false;
        }
        var ext = file.ext;
        $(".plus").hide();
        $('.images-ul').show();
        if (!miniPlusIsPick) {
          miniPlusIsPick = true;
          uploader.addButton({id: '.mini-plus'});
        }
        var $plus_li = $('.mini-plus').parent(),
            $img_li = $($.parseHTML($('#img-block').html())),
            $img = $img_li.find('img');
        uploader.makeThumb(file, function (error, ret) {
          if (error) {
            if (ext == 'eps' || ext == 'psd' || ext == 'ppt' || ext == 'pptx') {
              $img.attr('src', '/static/front/imgs/backImage.png').show();
            } else {
              $img.text('预览错误');
            }
          } else {
            $img.attr('src', ret).show();
          }
        });
        $plus_li.parent('ul').show();
        $img_li.attr('id', file.id);
        $img_li.insertBefore($plus_li);
        $('input[name="worksFullName"]').val(
            file.name.substring(0, file.name.lastIndexOf('.')));
        $('input[name="worksFullName"]').change();
        var creationDate;
        if (typeof (file.lastModifiedDate) == 'string') {
          creationDate = Util.dateFormat(new Date(), 'YYYY-MM-dd');
        } else {
          creationDate = Util.dateFormat(file.lastModifiedDate, 'YYYY-MM-dd');
        }
        $('#inputCompleteDate').val(creationDate);

      });

      // 文件上传过程中创建进度条实时显示。
      uploader.on('uploadProgress', function (file, percentage) {
        var $li = $('#' + file.id),
            $percent = $li.find('.layui-progress .layui-progress-bar');
        $percent.css('width', percentage * 100 + '%');
      });

      uploader.on('uploadBeforeSend', function (obj, data, headers) {
        that.getSignure();
        var fileName = Util.nuid() + "." + obj.file.ext,
            $li = $('#' + obj.file.id);
        formData.key = formData.dir + "/" + fileName;
        $.extend(data, formData);
        var fileUrl = "http://meisudci.oss-cn-beijing.aliyuncs.com/"
            + formData.key;
        $li.append('<input type="hidden" name="imageName" value="' + fileUrl
            + '"/>').append('<input type="hidden" name="fileName" value="' +
            obj.file.name + '"/>');
        $li.append('<input type="hidden" name="imageKey" value="' + formData.key
            + '"/>')
      });

      uploader.on('uploadSuccess', function (file, response) {
        var $li = $('#' + file.id),
            $progress = $li.find('.layui-progress');
        $progress.addClass('hide');
        $li.find('h4').removeClass('hide');
        $li.find('.img-title').html(file.name);
        var imageKey = $li.find('input[name="imageKey"]').val();
        $.getJSON('/copyright/getImageInfo', {imageKey: imageKey},
            function (result) {
              if (result.imageHeight * result.imageWidth < 4000000) {
                $li.find('.tips-panel').show();
              }
            })
      })

      uploader.on('error', function (code) {
        if (code == 'Q_TYPE_DENIED') {
          layer.msg('文件类型不正确');
        }
        if (code == 'Q_EXCEED_NUM_LIMIT') {
          layer.msg('最多上传20张照片');
        }
      })

    },
    initPdfUploader: function () {
      WebUploader.create({
        swf: '/static/front/webuploader/Uploader.swf',
        server: 'http://meisudci.oss-cn-beijing.aliyuncs.com',
        auto: true,
        pick: '#upload-pdf-btn',
        accept: {
          title: 'certfile',
          extensions: 'pdf',
          mimeTypes: 'application/pdf'
        },
        fileNumLimit: 10
      }).on('uploadBeforeSend', function (obj, data, headers) {
        worksedit.getSignure();
        var fileName = Util.nuid() + "." + obj.file.ext;
        formData.key = formData.dir + "/" + fileName;
        $.extend(data, formData);
        $('.auth-cert-name').html(obj.file.name).attr(
            'href', 'http://meisudci.oss-cn-beijing.aliyuncs.com/'
            + formData.key).removeClass('hide');
        $('.auth-cert-del-btn').removeClass('hide');
        $('#upload-pdf-btn').addClass('hide');
        var worksType = $('input[name="worksType"]').val();
        if (worksType == 'photoProductRegist') {
          if ($("#creationDesc").val().indexOf('本人声明图像中所涉及人像已获得相关授权') < 0) {
            $("#creationDesc").val($("#creationDesc").val()
                + '本人声明图像中所涉及人像已获得相关授权。');
          }
        }
      })

    },
    getSignure: function () {
      now = timestamp = Date.parse(new Date()) / 1000;
      if (expire < now + 3000) {
        $.ajax({
              url: '/oss/getWorksPolicy',
              dataType: 'json',
              async: false,
              success: function (result) {
                if (result.success) {
                  formData = $.extend(formData, result.data);
                  formData.success_action_status = "200";
                  formData.OSSAccessKeyId = result.data.accessid;
                  expire = result.expire;
                }
              }
            }
        )
      }
    },
    getWorksInfo: function () {
      if (uploader.isInProgress()) {
        layer.msg('文件正在上传中');
        return false;
      }
      var works = [];
      for (var index = 0; index < $('.images-ul li.image').length; index++) {
        var result = $('.images-ul li.image')[index];
        var imageName = $(result).find('input[name="imageName"]').val(),
            fileName = $(result).find('input[name="fileName"]').val(),
            id = $(result).find('input[name="id"]').val(),
            fileRealName = fileName.substring(0, fileName.lastIndexOf('.')),
            fileExt = fileName.substring(fileName.lastIndexOf('.') + 1,
                fileName.length);

        var workInfo = {};

        var flag = false;
        for (var subIndex in works) {
          var winfo = works[subIndex];
          if (winfo.fileName == fileRealName) {
            if (fileExt == 'eps' || fileExt == 'psd' || fileExt == 'ppt' || fileExt == 'pptx') {
              winfo.epsImageName = imageName;
            } else {
              winfo.imageName = imageName;
            }
            flag = true;
            break;
          }

        }

        if (flag) {
          continue;
        }
        workInfo.fileName = fileRealName;
        workInfo.id = id;
        if (fileExt == 'eps' || fileExt == 'psd' || fileExt == 'ppt' || fileExt == 'pptx') {
          workInfo.epsImageName = imageName;
        } else {
          workInfo.imageName = imageName;
        }
        works.push(workInfo);
      }
      return works;
    },
    initImagesInfo: function (works, worksFullName) {
      if (!miniPlusIsPick) {
        miniPlusIsPick = true;
        uploader.addButton({id: '.mini-plus'});
      }
      for (var index in works) {
        var localWork = works[index];
        localWork.fileName = worksFullName + (parseInt(index) + 1);
        if (localWork.imageName) {
          var $plus_li = $('.mini-plus').parent(),
              $img_li = $($.parseHTML($('#img-block').html())),
              $img = $img_li.find('img'),
              $progress = $img_li.find('.layui-progress');
          $('.plus').hide();
          $img.attr('src', localWork.imageName
              + '?x-oss-process=style/large_style_h').show();
          $progress.addClass('hide');
          $img_li.find('h4').removeClass('hide').find('.img-title').html(
              localWork.fileName);
          $plus_li.parent('ul').show();
          $img_li.append('<input type="hidden" name="imageName" value="'
              + localWork.imageName
              + '"/>').append('<input type="hidden" name="fileName" value="' +
              localWork.fileName
              + '.jpg"/>').append('<input type="hidden" name="id" value="' +
              localWork.id + '"/>');
          $img_li.insertBefore($plus_li);
        }
        if (localWork.epsImageName) {
          var $plus_li = $('.mini-plus').parent(),
              $img_li = $($.parseHTML($('#img-block').html())),
              $img = $img_li.find('img'),
              $progress = $img_li.find('.layui-progress');
          $plus_li.parent('ul').show();
          $img_li.append('<input type="hidden" name="imageName" value="'
              + localWork.epsImageName
              + '"/>').append('<input type="hidden" name="fileName" value="'
              +
              localWork.fileName + '.eps"/>');
          $img.attr('src', '/static/front/imgs/backImage.png').show();
          $progress.hide();
          $img_li.find('h4').removeClass('hide').find('.img-title').html(
              localWork.fileName);
          $img_li.insertBefore($plus_li);
        }

      }
    }
  }
  worksedit.init();
  exports('worksedit', {});
})
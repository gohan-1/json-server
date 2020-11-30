(function() {
    var init = false;
    var socket;
    var server_canvas = 0;
    var server_train_publish = "train";
    var NLPbot = function(){
      if(init) { // if aleardy defined then return
        return false;
      }
      init = true;
  
    
        var bid  = bot_id;
        var tid  = account_id ? account_id :0;
        var canvas_id = canvas_id ? canvas_id :0;
        var train_or_publish = train_or_publish ? train_or_publish : "train";
        var down_vote = down_vote;
        var lat;
        var long;
        var initial_flag = true;
        var all_vars = typeof paramsObject !== 'undefined' ? paramsObject : getUrlVars(); // all vars from clients params object
        //config params for bot
        var bot_configurations_params = {"logo": serverUrl + url_extension+'/image/assist-big.png', "theme": "nlp blue", "show_menu": true,autocomplete: false, "welcome_text": "Welcome to NLPBots!", "bot_name": "NLPBots", "emojiOn": true, "animation" :true , "hamburgerMenu": false};
        var history_flag = false;
        var bot_conf_error_msg = '';
        var admin = admin;
        var picker1;
        var newFickity;
        var scroll_flag = true;
        var timeout = 0;
        var activate_form = true;
        var historyOffset = 0;
        var limit = 10;
        var selectedTime = '';
        var appointMentData = [];
        var timeSlotObj = {};
        var formNoClick = {};
        var htmlFormEntities = [];
        var formEntityValuesArr = [];
        var history_found = false;
        var lastAnswer = false;
        var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        var dateFormatOptions = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
  
      if(navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(function(position) {
             lat = position.coords.latitude;
             long = position.coords.longitude;
          });
      }
  
  
  
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var fileSize = 10485760;
  // start audio functionality ========================================
  
  
  
  
  function getUrlVars()
  {
     var vars = {};
     if (window.location.href.indexOf('?') !==-1) {
       var url = window.location.href.split('?');
       var hashes = url[1].split('&');
       for(var i = 0; i < hashes.length; i++)
       {
           var hash = hashes[i].split('=');
           vars[hash[0]] = hash[1];
       }
     }
  
     return vars;
  }
  function getParameterByName(name, url) {
      if (!url) {
        url = window.location.href;
      }
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return '';
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  
  
      /*
      get file path and load file and append to body
      */
  
      function loadJsScript(file,cb) {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type","text/javascript");
        script_tag.setAttribute("src", file);
        if (script_tag.readyState) {
          script_tag.onreadystatechange = function () { // For old versions of IE
              if (this.readyState == 'complete' || this.readyState == 'loaded') {
                  cb();
              }
          };
        } else {
          script_tag.onload = cb;
        }
  
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
      }
  
      function decrypt(query) {
          var base64ciphertextFromPython = query;
          var ciphertext = CryptoJS.enc.Base64.parse(base64ciphertextFromPython);
          // split iv and ciphertext
          var iv = ciphertext.clone();
          iv.sigBytes = 16;
          iv.clamp();
          ciphertext.words.splice(0, 4); // delete 4 words = 16 bytes
          ciphertext.sigBytes -= 16;
  
          var key = CryptoJS.enc.Utf8.parse("1234567890123456");
  
          // decryption
          var decrypted = CryptoJS.AES.decrypt({ciphertext: ciphertext}, key, {
            iv: iv,
            mode: CryptoJS.mode.CFB
          });
  
          return decrypted.toString(CryptoJS.enc.Utf8)
      }
      var jobId = getParameterByName('job_id');
      var userName = getParameterByName('name');
      var resumeId = getParameterByName('resume_id');
      //var user_type_encrpted = getParameterByName('user_type');
      var candidateId = getParameterByName('cid');
      var sll = getParameterByName('sll');
      var user_id = getParameterByName('user_id');
      var user_type = getParameterByName('user_type');
      var region = getParameterByName('region');
  
      if (candidateId && sll){
        var user_type = sll;
  
        var user_id = candidateId + "_" + sll;
      // var user_id_encrpted = getParameterByName('user_id');
      }
  
      var surveyHtml = '<div class="msg chat_survey_container"><div class="survey"><span style="display:none" class="survey_opt"></span><h5><span class="survey_icon"></span></h5><h6></h6><div class="survey_container"><form><div class="survey_option_container"><div class="clear"></div></div></form><div class="submit_container"><button class="smiley_feedback_sbmt" >submit</button></div></div></div></div>';
      var botNotificationHtml = '<div class="detail_notification"><div class="bullet blue"></div><div class="details"><div class="time"></div></div></div>';
      var chatWrapper = '<div class="message-wrapper"><div class="text-wrapper bounceIn animated"><div class="time-div">5:06 PM</div><div class="rightCorner"></div></div><div class="clear"></div></div>';
      var innerWrapper = '<div class="bot-chat"><div class="inner-bot-chat"></div></div>';
      var formHtml = '<div class="form_container"><h5 class="formHeading"></h5><form class="form_card optionsbox"></form></div>';
      var typingHtml = '<div class="typing " style="float:left; clear:both; padding-right:20px;"><div class="typingBot"><img src="'+serverUrl + url_extension+'/image/loader.gif"></div></div>';
  
      var protocol = window.location.protocol+"//";
  
      // Localize jQuery variable
      var jQuery;
  
      /******** Load jQuery if not present *********/
      if (window.jQuery === undefined) {
  
          loadJsScript(serverUrl + url_extension + "/js/jquery.min.js", function(){
              loadSocket();
          });
      } else {
          // The jQuery version on the window is the one we want to use
          console.log("in else---------");
          jQuery = window.jQuery;
          loadSocket();
  
      }
  
      function loadCss(){
  
        var script_tag1 = document.createElement('link');
        script_tag1.setAttribute("type","text/css");
        script_tag1.setAttribute("rel", "stylesheet");
        script_tag1.setAttribute("type", "text/css");
        script_tag1.setAttribute("href", serverUrl + url_extension +"/css/stylesheet.css");
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag1);
  
        var script_tag2 = document.createElement('link');
        script_tag2.setAttribute("type","text/css");
        script_tag2.setAttribute("rel", "stylesheet");
        script_tag2.setAttribute("type", "text/css");
        script_tag2.setAttribute("href", serverUrl + url_extension +"/css/font-awesome.css");
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag2);
  
        var script_tag3 = document.createElement('link');
        script_tag3.setAttribute("type","text/css");
        script_tag3.setAttribute("rel", "stylesheet");
        script_tag3.setAttribute("type", "text/css");
        script_tag3.setAttribute("href", serverUrl + url_extension + "/css/pikaday.min.css");
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag3);
  
        var script_tag5 = document.createElement('link');
        script_tag5.setAttribute("type","text/css");
        script_tag5.setAttribute("rel", "stylesheet");
        script_tag5.setAttribute("type", "text/css");
        script_tag5.setAttribute("href", serverUrl + url_extension + "/css/flickity.css");
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag5);
  
        //added css for graph & calendar Prerana 18-8-2020
        var script_tag6 = document.createElement('link');
        script_tag6.setAttribute("type","text/css");
        script_tag6.setAttribute("rel", "stylesheet");
        script_tag6.setAttribute("type", "text/css");
        script_tag6.setAttribute("href", serverUrl + url_extension + "/css/Chart.min.css");
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag6);
  
        var script_tag7 = document.createElement('link');
        script_tag7.setAttribute("type","text/css");
        script_tag7.setAttribute("rel", "stylesheet");
        script_tag7.setAttribute("type", "text/css");
        script_tag7.setAttribute("href", serverUrl + url_extension + "/js/fullcalendar/packages/core/main.css");
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag7);
  
        var script_tag8 = document.createElement('link');
        script_tag8.setAttribute("type","text/css");
        script_tag8.setAttribute("rel", "stylesheet");
        script_tag8.setAttribute("type", "text/css");
        script_tag8.setAttribute("href", serverUrl + url_extension + "/js/fullcalendar/packages/daygrid/main.css");
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag8);
  
      }
  
      function loadSocket(){
  
        loadCss();
        // Restore $ and window.jQuery to their previous values and store the
        // new jQuery in our local jQuery variable
        jQuery = window.jQuery.noConflict(true);
            // console.log("===============",jQuery);
            if (typeof io === 'undefined') {
              loadJsScript(serverUrl + url_extension + "/js/helper.js", function(){
                  loadDateJs();
              });
            } else {
              loadDateJs();
            }
      }
  
      function loadDateJs(){
        loadJsScript(serverUrl  + url_extension + "/js/pikaday.min.js", function(){
            loadStream();
        });
      }
  
      function loadStream(){
        loadJsScript(serverUrl  + url_extension + "/js/stream.js", function(){
            loadAudio();
        });
      }
  
      function loadAudio(){
        loadJsScript(serverUrl  + url_extension + "/js/audio.js", function(){
            loadFlickity();
        });
      }
  
      function loadFlickity(){
        loadJsScript(serverUrl  + url_extension + "/js/flickity.pkgd.min.js", function(){
            loadChartJs();
        });
      }
  
      //added js for calendar & graph Prerana 18-8-2020
      function loadChartJs(){
        loadJsScript(serverUrl  + url_extension + "/js/Chart.min.js", function(){
            // scriptLoadHandler();
            loadMomentJs();
        });
      }
  
      function loadMomentJs(){
         loadJsScript(serverUrl  + url_extension + "/js/moment.min.js", function(){
             loadFullcalendarCoreJs();
         });
    }
  
      function loadFullcalendarCoreJs(){
         loadJsScript(serverUrl  + url_extension + "/js/fullcalendar/packages/core/main.js", function(){
             loadFullcalendarInteractionJs();
         });
    }
    function loadFullcalendarInteractionJs(){
         loadJsScript(serverUrl  + url_extension + "/js/fullcalendar/packages/interaction/main.js", function(){
             loadFullcalendarDaygridJs();
         });
    }function loadFullcalendarDaygridJs(){
         loadJsScript(serverUrl  + url_extension + "/js/fullcalendar/packages/daygrid/main.js", function(){
             scriptLoadHandler();
         });
    }
  
  
      /******** Called once jQuery has loaded ******/
      function scriptLoadHandler() {
          console.log("server", bid, tid);
          // Call our main function
          // main();
  
          //call api for bot configuration
         var queries = {};
         jQuery.each(document.location.search.substr(1).split('&'),function(c,q){
           var i = q.split('=');
           queries[i[0].toString()] = decodeURI(i[1]).toString();
         });
         var merged = Object.assign(queries, { 'account_id': tid, 'bid': bid, 'train_or_publish': train_or_publish })
         jQuery.ajax({
             type: 'POST',
             url: apiUrl + api_extension + "/properties-limited",
             data: merged,
             success: function(resultData) {
               console.log("result"+JSON.stringify(resultData.data));
               if(!jQuery.isEmptyObject(resultData.data)){
                 bot_configurations_params.emojiOn = resultData.data.emoji ? resultData.data.emoji : false;
                 bot_configurations_params.hamburgerMenu = resultData.data.hamburger_menu ? resultData.data.hamburger_menu : false;
                 bot_configurations_params.hamburgerButton = resultData.data.hamburger_buttons ? resultData.data.hamburger_buttons : [];
                 bot_configurations_params.animation =  resultData.data.animation ? resultData.data.animation : false;;
                 bot_configurations_params.autocomplete = resultData.data.autocomplete ? resultData.data.autocomplete : false;
                 bot_configurations_params.theme = resultData.data.theme ? resultData.data.theme : 'nlp blue';
                 bot_configurations_params.welcome_text = resultData.data.welcome_text ? resultData.data.welcome_text : 'Welcome to NLPBots!';
                 bot_configurations_params.logo = resultData.data.logo ? '/'+resultData.data.logo : serverUrl + url_extension+'/image/assist-big.png';
                 bot_configurations_params.bot_name = resultData.data.bot_name ? resultData.data.bot_name : 'NLPBots';
  
                 //hamburger menu type Prerana 24-8-2020
                 bot_configurations_params.hamburgerMenuType = resultData.data.hamburger_type ? resultData.data.hamburger_type : "horizontal";
                 changeTheme();
               }
  
               //added to change background image Prerana 13-8-2020
               if(resultData.data.backgroundImg){
                  var bgImg = '/'+resultData.data.backgroundImg;
                  jQuery('body').css('background-image', 'url('+bgImg+')');
               }
  
               // Call our main function
               main();
             },
             error: function(){
               bot_conf_error_msg = "Bot Configuration not found plz contact ur admin";
               // Call our main function
               main();
             }
         });
      }
  
      function changeTheme(){
        //added comment & made changes Prerana 7-8-2020
         /*if(bot_configurations_params.theme.toLowerCase() == "green"){
          var style = jQuery('<style>.btn { background: #3DAB7C !important; border: 1px solid #3DAB7C;}</style>');
         } else if(bot_configurations_params.theme.toLowerCase() == "blue") {
          var style = jQuery('<style>.btn { background: #2E76BC !important; border: 1px solid #2E76BC;}</style>');
         } else if(bot_configurations_params.theme.toLowerCase() == "black") {
          var style = jQuery('<style>.btn { background: #1F2224 !important; border: 1px solid #1F2224;}</style>');
        }*/
        var style = jQuery('<style>.btn { background: '+bot_configurations_params.theme+' !important; border: 1px solid '+bot_configurations_params.theme+';}</style>');
         jQuery('html > head').append(style);
      }
  
  
  
  
      function getUserInfo()
      {
        var temp = {'bid': bot_id,'tid': account_id,
        'emp_id':user_id,
        'admin':false,
        "user_id" : user_id,
        "channel" : "ui",
        "all_vars" : all_vars
       };
        var forward = arguments[0] || false;
  
        if(forward){
          initial_flag = false;
          socket.emit('registerUser',temp);
        }
        return temp
      }
  
      var getmonths = function(){
      return { 1 : "Jan", 2 : "Feb", 3 : "Mar", 4 : "Apr", 5 : "May", 6 : "Jun", 7 : "Jul", 8 : "Aug", 9 : "Sep", 10 : "Oct", 11 : "Nov", 12 : "Dec" }
      }
  
      /* GENERATE TIME FOR CHAT HISTORY */
      function formatAMPM(date) {
        var temp = {};
        var months = getmonths();
        var local_time = new Date(date);
        var day = local_time.getDate();
        var month = months[local_time.getMonth() + 1];
        var hours = local_time.getHours();
        var minutes = local_time.getMinutes();
        var year = local_time.getFullYear();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        var strClass = month +"_" + day + "_" + year;
        var strLabel = day + " " + month + " " + year;
  
        //var curTime1 = TimestampGenerator()
        var local_time1 = new Date();
        var day1 = local_time1.getDate();
        var month1 = months[local_time1.getMonth() + 1];
        var year1 = local_time1.getFullYear();
  
        // get difference of day if current day and history day is similar show label as today
        if(day==day1 && month1==month && year==year1){
            strClass = strLabel = 'Today';
          }
  
        temp.label = strLabel;
        temp.class = strClass.toLowerCase();
        temp.time = strTime;
  
        return temp;
      }
  
      /* CALL PENDING SURVEY FIRST TIME */
      function callPendingSurvey()
      {
        var userInfo = getUserInfo(false);
          userInfo.initial_flag = 1;
          userInfo.channel = 'ui';
          userInfo.uid = userInfo.emp_id;
          userInfo.context_type = 'all';
          socket.emit('getsurveylist',userInfo);
      }
  
  
      function checkObject(object){
          if(object){
  
              if(object instanceof Array) {
                  return object.length > 0 ? true : false;
              }
              if(object instanceof Object){
                    return jQuery.isEmptyObject(object) ? false : true;
              }
          } else {
  
              return false;
          }
      }
  
  
      /* CALL CHAT HISTORY */
      function callHistoryChat(){
  
          var offset = arguments[0] || 0;
          // get iformation at first time when client loads
          var userInfo = getUserInfo(false);
          userInfo.initial_flag = 1;
          userInfo.channel = 'ui';
          userInfo.uid = userInfo.emp_id;
          userInfo.action_flag = 'get_chat_history';
          userInfo.offset = parseInt(offset);
          userInfo.limit = 10;
  
      }
  
      /* NOTIFICATION DISPLAY HANLDERS */
      /*notification animation */
      function addNotification() {
        var unread = document.getElementById("unread");
        var newUnread = unread.cloneNode(true);
        var bell = document.getElementById("bell");
        var newBell = bell.cloneNode(true);
        var notification_container = document.getElementById("notification_container");
        newUnread.innerHTML = parseInt(unread.innerHTML);
        unread.parentNode.replaceChild(newUnread, unread);
        bell.parentNode.replaceChild(newBell, bell);
        notification_container.classList.remove("seen");
        notification_container.style.backgroundColor = 'rgba(235, 154, 45, 1)';
      }
  
      function addNotification2() {
        //console.log("asdfasdf");
        var unread = document.getElementById("unread2");
        var newUnread = unread.cloneNode(true);
        var bell = document.getElementById("bell2");
        var newBell = bell.cloneNode(true);
        var notification_container = document.getElementById("notification_container2");
        newUnread.innerHTML = parseInt(unread.innerHTML);
        unread.parentNode.replaceChild(newUnread, unread);
        bell.parentNode.replaceChild(newBell, bell);
        notification_container.classList.remove("seen");
        notification_container.style.backgroundColor = 'rgba(235, 154, 45, 1)';
      }
  
  
  
      /* DISABLE SURVEY ONCE SUBMITTED */
      function disableSurvey(chatObj){
  
        var surveyObj = jQuery('#survey_'+chatObj.survey_id);
  
        if(chatObj.question_type==3) // IF QUESTION TYPE RATING
        jQuery(surveyObj).find('.ratingFacesList a').addClass('disabled');
  
        jQuery(surveyObj).find(':input').attr('disabled',true);
        jQuery(surveyObj).find('.smiley_feedback_sbmt').removeClass('active').attr('disabled',true);
      }
  
      /* UPDATE NOTIFICATION STATUS AS IT'S RECEIVED BY CLIENT */
      function updateNotification(data){
  
          if(data.notification[0]['new'].length)
          {
            //console.log(' send notification receive status to server',data);
            data.action_flag = 'update';
            data.submitted = 1;
            delete data.initial_flag;
            socket.emit('getsurveylist',data);
          }
      }
  
      /* UPDATE SURVEY STATUS AS IT'S RECEIVED BY CLIENT */
      function updateSurvey(data){
  
        //console.log(' send receive status to server',data);
        data.action_flag = 'update'
        data.submitted = 1
        data.channel = 'ui'
        socket.emit('getsurveylist',data);
      }
  
      //create dropdownFor labels
      function createSelectDropdown(autofill,values){
        var html = '';
  
        // var selected ='';
        // html += ''
  
        html += '<option value="">Select</option>';
        jQuery.each(values, function(i,v){
  
          var selected ='';
          if(autofill && v && (autofill.toLowerCase() == v.toLowerCase())){
            selected = 'selected';
          }
          html += '<option value="'+v+'" '+selected+'>'+v+'</option>';
        });
  
        return html;
      }
  
      //create new star rating
      function createRating(autofill,values, name, eid){
        var html = '';
        var rating = autofill;
        var selected ='';
        html += '<div class="rating-stars"><ul class="stars">';
        jQuery.each(values, function(i, v){
  
          // if(rating && rating < v){
          //   selected = 'selected';
          // }else{
          //   selected = '';
          // }
  
          if(rating && i<rating){
            selected = 'selected';
          }else{
            selected = '';
          }
          // name = name ? name : v;
          // if(!v == 0){
          //    html += '<li class="star '+selected+'" data-value="'+v+'" data-eid="'+eid+'" data-name="'+name+'" ><i class="fa fa-star fa-fw"></i></li>';
          // }
  
          if(name){
            html += '<li class="star '+selected+'" data-value="'+v+'" data-eid="'+eid+'" data-name="'+name+'" ><i class="fa fa-star fa-fw"></i></li>';
          }else{
            html += '<li class="star '+selected+'" data-value="'+v+'" data-eid="'+eid+'"><i class="fa fa-star fa-fw"></i></li>';
          }
  
        });
        html += '</ul></div>';
        return html;
      }
  
  
      function createButtons(id,value){
        var html = '';
        jQuery.each(value, function(i, v){
          html += '<a href="javascript:void(0)" data-eid="'+id+'" class="btn btn-options-form">'+v+'</a>';
        });
        return html;
      }
  
  
  
      /* GET FORM HTML */
      function createForm(formData, data, isHistory){
        // console.log("in creeee",formData);
        timeSlotObj = {}; // empty timeslot
        formDataGlobal = formData;
        var html = '';
        var tmpHtml = jQuery(formHtml);
        var questionTypeHtml ='';
        var autofilled = '';
        var final_html ='';
        jQuery(tmpHtml).find('.formHeading').text(formData.form_name);
        var btn_flag = true;
  
        if(formData.hasOwnProperty('form_type')){
          if(checkObject(formData.headers)){
            jQuery('.typingBot').remove();
            for(var row in formData.headers){
              var entityData = formData.headers[row];
              questionTypeHtml ='';
            }
          }
        } else {
          // console.log("elsssss");
          if(checkObject(formData.headers) && !formData.edit){
            jQuery('.typingBot').remove();
            // htmlFormEntities = [];
            // formEntityValuesArr = [];
            var entIndex = 1; //for push entities in htmlFormEntities arr
            for(var row in formData.headers){
              var entityData = formData.headers[row];
              // console.log("in loop", entityData);
                jQuery(".bottom_input_text_container").show();
                jQuery(".bot-section-div .chat_wrapper").animate({"transition":"all 0.3s", "height": "calc(100% - 138px)"});
                // jQuery(".bot-section-div .chat_wrapper").css("height", "calc(100% - 143px)");
  
                if(entityData.field_type == "slider_button" || entityData.field_type == "customize_button"){
                  //added class for slider div
                  jQuery(tmpHtml).find('form').closest(".form_container").addClass('sliderButtonDiv');
                }
                if(entityData.field_type == "slider_button"){
                  jQuery(tmpHtml).find('form').closest(".form_container").addClass('carousel-sliderright');
                }
                if(entityData.field_type == "rating"){
                  jQuery(tmpHtml).find('form').closest(".form_container").addClass('feedbackblock');
                }
                questionTypeHtml ='';
                html +='<div class="entityContainer" data-type="'+entityData.field_type+'">';
  
                if(entityData.header_name && entityData.eid){
                  if(entityData.params && !entityData.params.optional && entityData.field_type !== 'rating' && entityData.field_type != 'calendar_slots'){
                    html += '<h6 class="entity" id="entity_'+entityData.eid+'" name="entity_'+entityData.eid+'" ><span class="required">*</span>'+entityData.header_name+'</h6>';
                  } else if(entityData.value.length == 0 && entityData.header_name != "" && entityData.field_type == 'calendar_slots'){
                      // console.log("in slots");
                      html += createCalendarHtml(entityData.header_name);//show calendar icon to choose appointment date
                  } else{
                    //set auto fill value to selected date
                    selectedDate = (entityData.auto_fill) ? entityData.auto_fill : "";
                    html += '<h6 class="entity" id="entity_'+entityData.eid+'" name="entity_'+entityData.eid+'" >'+entityData.header_name+'</h6>';
                  }
                }
  
                if(entityData.helper_text){
                  // html += '<div>'+entityData.helper_text+'</div>';
                  html += '<div class="icon-block pull-right pointer tooltip"><i class="fa fa-info-circle" style="color: #1c3f9a;   font-size: 16px;opacity: 1;left: 5px;top: 1px;"></i><span class="tooltiptext">'+entityData.helper_text+'</span></div>';
                }
                  jQuery(tmpHtml).find('.form_card').attr("data-type", entityData.field_type);
  
                  if(entityData.field_type == 'plain_text' || entityData.field_type == 'checkbox' || entityData.field_type == 'dropdown' || entityData.field_type == 'radio_button' || entityData.field_type == 'password' || entityData.field_type == 'calendar' || entityData.field_type == 'rating'){
                      btn_flag = false;
                  }
  
                html += createFormFeilds(entityData, isHistory);
  
                html +='</div>';
  
  
  
          }
              if(!formData.edit){ //otherwise show submit submit
                if (!btn_flag) {
                  if(!isHistory || activate_form){
                    html +='<div class="submit_container"><a href="javascript:void(0)" class="btn form_dynamic" >submit</a></div><input type="submit" style="display:none;">';
                  } else {
                    html +='<div class="submit_container" style="opacity:0.5; pointer-events: none;"><a href="javascript:void(0)" class="btn form_dynamic" >submit</a></div><input type="submit" style="display:none;">';
                  }
  
                }
  
                jQuery(tmpHtml).find('.form_card').html(html);
                var finalHtml = jQuery(tmpHtml);
                // jQuery('.bot-content').append(tmpHtml);
                  msgDelay(data, tmpHtml, isHistory);
  
                if(!isHistory){
                  var scrollAmt = jQuery('.bot-content .form_card:last').prop('scrollHeight');
                  var scrolContentHeight = jQuery('.bot-content').prop('scrollHeight');
                  var ScrollPos = scrolContentHeight-scrollAmt;
                  // jQuery('.bot-content').animate({'scrollTop': ScrollPos},"slow");
                }
              }
  
  
            } else if(checkObject(formData.headers) && formData.edit){
  
              //code for confirmation form
              if(isHistory || !activate_form){
                html = createDateAppointment(isHistory);
                msgDelay(data, html, isHistory);
  
                html = nameEmailEdit(formData.headers);
                msgDelay(data, html, isHistory);
              } else {
                //remove typing
                jQuery('.typing').remove();
                html = nameEmailEdit(formData.headers);
                msgDelay(data, html, isHistory);
                html = createDateAppointment(isHistory);
                msgDelay(data, html, isHistory);
              }
  
              var scrollAmt = jQuery('.bot-content .form_card:last').prop('scrollHeight');
              var scrolContentHeight = jQuery('.bot-content').prop('scrollHeight');
              var ScrollPos = scrolContentHeight-scrollAmt;
              // jQuery('.bot-content').animate({'scrollTop': ScrollPos},"slow");
            }
          }
          jQuery('.confirm-name').focus();
        }
  
        function createCalendarHtml(str){
          var html='';
          var tmpHtml = jQuery(formHtml);
          // html += '<div> <span style="float:left;">'+str+'</span><div class="calendar-div date-picker"><img src="'+serverUrl + url_extension+'/image/calendar.jpg" class="calendar-img"></div></div>';
          html += '<div> <span style="float:right;" class="calendar-text">'+str+'</span><div class="calendar-div calendar-img date-picker"><?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 511.634 511.634" version="1.1" viewBox="0 0 511.63 511.63" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m482.51 83.942c-7.225-7.233-15.797-10.85-25.694-10.85h-36.541v-27.41c0-12.56-4.477-23.315-13.422-32.261-8.95-8.946-19.699-13.421-32.265-13.421h-18.268c-12.565 0-23.318 4.475-32.264 13.422-8.949 8.945-13.422 19.701-13.422 32.261v27.41h-109.63v-27.41c0-12.56-4.475-23.315-13.422-32.261-8.945-8.947-19.699-13.422-32.264-13.422h-18.271c-12.562 0-23.317 4.475-32.264 13.422-8.945 8.945-13.421 19.701-13.421 32.261v27.41h-36.542c-9.9 0-18.464 3.617-25.697 10.85-7.233 7.232-10.85 15.8-10.85 25.697v365.45c0 9.89 3.617 18.456 10.85 25.693 7.232 7.231 15.796 10.849 25.697 10.849h401.99c9.897 0 18.47-3.617 25.694-10.849 7.234-7.234 10.852-15.804 10.852-25.693v-365.45c-1e-3 -9.9-3.615-18.464-10.845-25.697zm-345.47 391.15h-82.224v-82.23h82.224v82.23zm0-100.5h-82.224v-91.358h82.224v91.358zm0-109.64h-82.224v-82.223h82.224v82.223zm-6.42-130.62c-1.809-1.809-2.712-3.946-2.712-6.423v-82.224c0-2.474 0.903-4.617 2.712-6.423 1.809-1.809 3.946-2.712 6.423-2.712h18.271c2.474 0 4.617 0.903 6.423 2.712 1.809 1.807 2.714 3.949 2.714 6.423v82.224c0 2.478-0.909 4.615-2.714 6.423-1.807 1.809-3.946 2.712-6.423 2.712h-18.271c-2.474 1e-3 -4.614-0.903-6.423-2.712zm116.06 340.76h-91.365v-82.23h91.365v82.23zm0-100.5h-91.365v-91.358h91.365v91.358zm0-109.64h-91.365v-82.223h91.365v82.223zm109.64 210.14h-91.364v-82.23h91.364v82.23zm0-100.5h-91.364v-91.358h91.364v91.358zm0-109.64h-91.364v-82.223h91.364v82.223zm-6.427-130.62c-1.807-1.809-2.707-3.946-2.707-6.423v-82.224c0-2.474 0.9-4.617 2.707-6.423 1.808-1.809 3.949-2.712 6.427-2.712h18.268c2.478 0 4.617 0.903 6.427 2.712 1.808 1.807 2.707 3.949 2.707 6.423v82.224c0 2.478-0.903 4.615-2.707 6.423-1.807 1.809-3.949 2.712-6.427 2.712h-18.268c-2.477 1e-3 -4.626-0.903-6.427-2.712zm106.92 340.76h-82.228v-82.23h82.228v82.23zm0-100.5h-82.228v-91.358h82.228v91.358zm0-109.64h-82.228v-82.223h82.228v82.223z"/></svg></div></div>';
          return html;
        }
  
  
        function outerScroll() {
        if(!history_flag){
          setTimeout(function () {
            var old_offset = jQuery("#bot-content").prop('scrollHeight');
            if (jQuery("#bot-content").find(".message-wrapper:last").length) {
              var pos = jQuery("#bot-content").find('.message-wrapper').last().offset().top - jQuery("#bot-content").find('.message-wrapper').last().parent().offset().top + jQuery("#bot-content").find('.message-wrapper').last().parent().scrollTop();
              // jQuery(jQuery('#bot-content')).animate({
              //   scrollTop: pos
              // }, 1);
              jQuery('#bot-content').animate({
            scrollTop: jQuery("#bot-content").prop('scrollHeight')
          }, 600);
            }
          }, 50);
        }
      }
  
      function createDateAppointment(isHistory){
          //set date
          var date = new Date();
          var timestamp = date.toLocaleString('en-US', dateFormatOptions);
  
          var html = '';
           html += '<div class="message-wrapper them"><div class="circle-wrapper animated"><div class="status"></div></div>';
  
           //if it is in history disable it
           if(isHistory){
             html += '<div class="text-wrapper bounceIn animated confirm-submit-button" style="opacity: 0.5; pointer-events: none;">';
           } else {
             html += '<div class="text-wrapper bounceIn animated confirm-submit-button">';
           }
  
           html += '<div class="bot-chat"><div class="inner-bot-chat">';
  
            if(!isHistory){
              html += '<div class="submit_container checkmark"><button class="confirm_sbmt">Confirm</button><button class="cancel_sbmit">Cancel</button></div>'
           } else {
            html += '<div class="submit_container checkmark" style="display:none;"><button class="confirm_sbmt">Confirm</button><button class="cancel_sbmit">Cancel</button></div>'
           }
           html += '</div></div></div></div>';
          return html;
        }
  
        function nameEmailEdit(entityData){
          console.log("gggg", entityData);
          //set date
          var date = new Date();
          var timestamp = date.toLocaleString('en-US', dateFormatOptions);
  
        var html = '';
        html += '<div class="message-wrapper them"> <div class="circle-wrapper animated"> <div class="status"></div> </div><form class="form_card optionsbox custom_form_check"> <div class="text-wrapper bounceIn animated full-width "> <div class="bot-chat"> <div class="inner-bot-chat"> <div class="aftermail-greeting"> <div class="meet-person"> <span class="firstline">Hey ';
  
        if(entityData[1].required){
          html += '<input type="text" class="confirm-name" placeholder="Eg. John" name="input#@$#@#'+entityData[1].eid+'" value="'+entityData[1].auto_fill+'" required>';
        } else {
          html += '<input type="text" class="confirm-name" placeholder="Eg. John" name="input#@$#@#'+entityData[1].eid+'" value="'+entityData[1].auto_fill+'">';
        }
  
        html += '</span>We will be sending the calendar invite to ';
  
        if(entityData[2].required){
          html += '<input type="text" class="email-person" value="'+entityData[2].auto_fill+'" name="input#@$#@#'+entityData[2].eid+'" required>';
        } else {
          html += '<input type="text" class="email-person" value="'+entityData[2].auto_fill+'" name="input#@$#@#'+entityData[2].eid+'">';
        }
  
        if(entityData.hasOwnProperty("5")){
          html += '.</span> </div> <div class="confirm-button"> <div class="top-text">Confirming your appointment for </div>';
          html += createSelect(entityData[5],'', entityData[5].value, 'confirm-select');
        } else {
          html += '.</span> </div> <div class="confirm-button"> <div class="top-text">Confirming your appointment </div>';
        }
  
        html +=' <div class="modifying-date"> on ';
        html += ' <input type="text" value="'+entityData[3].auto_fill+'" name="input#@$#@#'+entityData[3].eid+'" class="date-picker confirm-edit" readonly>';
        html +='</span> <span for="">from</span>';
        html += createFromTimeSelect(entityData[4],'', entityData[4].value, 'from');
  
        html += ' </div> </div> </div> </div> </div> </div> <div class="time-div">'+timestamp+'</div> <div class="clear"></div><input type="submit" style="display:none;"></form></div>';
  
        // html += dateTimeSec();
        return html;
        }
  
        function createFromTimeSelect(entityData,label, value, type){
          var required_flag = '';
          var autofill = entityData.auto_fill;
          if(entityData.params && !entityData.params.optional){
            required_flag = "required";
          }
          return '<select class="select-hours-parent confirm-select" name="select#@$'+label+'#@#'+entityData.eid+'" '+required_flag+'>'+createFromTimeSelectDropdown(autofill, value, type)+'</select>';
      }
  
      //create dropdownFor labels
  function createFromTimeSelectDropdown(autofill,values, type){
    var html = '';
  
    jQuery.each(values, function(i,v){
      var selected ='';
      if(autofill && v && (autofill.toLowerCase() == v.toLowerCase())){
        selected = 'selected';
      }
      if(selected){
        html += '<option class="options-selects" value="'+ v+'" '+selected+' style="color:#e64172;">'+v+'</option>';
      } else {
        html += '<option class="options-selects" value="'+ v+'" '+selected+'>'+v+'</option>';
      }
  
    });
  
    return html;
  }
  
      function loadPage(link) {
        jQuery('body').css('overflow', "hidden");
        jQuery('.cust-iframe-div').remove();
        jQuery('#cust-iframe').attr("src",link);
        jQuery('#cust-iframe').show();
        jQuery('body').scrollTop(0);
        window.history.pushState("", "",link);
  
      }
  
      function initializeSlider() {
        if(jQuery('.main-carousel').length){
  
          var galleryElems = document.querySelectorAll('.main-carousel');
          if(newFickity) {
            newFickity.destroy();
          }
            // for ( var i=0, len = galleryElems.length; i < len; i++ ) {
            jQuery(".main-carousel").each(function(i ) {
              var galleryElem = galleryElems[i];
              var flickityOptions = {};
  
              if(jQuery(this).find('.carousel-cell').length == 2){
                flickityOptions = {
                  freeScroll: false,
                  content: "left",
                  draggable: '>1',
                  pageDots: false
                };
              } else {
                flickityOptions = {
                  contain: true,
                  wrapAround: true,
                  freeScroll: false,
                  draggable: '>1',
                  pageDots: false
                };
              }
              newFickity = new Flickity(this, flickityOptions);
              // var selectedIndex = jQuery('.carousel-cell').attr('data-value');
              var selectedIndex = jQuery(this).find('.selected-slide').attr('data-value');
              console.log("slider---",selectedIndex);
  
              if(selectedIndex){
                newFickity.select( parseInt(selectedIndex ));
              }
              newFickity.resize();
            });
  
        }
      }
  
      function msgDelay(data, tmpHtml, isHistory){
        if(data.delay) {
            // console.log("in delay");
              if(!jQuery('.typing').length) {
                jQuery('#bot-content').append(typingHtml);
              }
  
              outerScroll();
  
            setTimeout(function(){
                  jQuery('.typing').remove();
                  if(isHistory || !activate_form){
                    jQuery('.bot-content').prepend(tmpHtml);
                  } else {
                    jQuery('.bot-content').append(tmpHtml);
                  }
                  initializeSlider();
  
                  outerScroll()
            }, timeout);
            timeout = timeout + 2000;
        } else {
            jQuery('.typing').remove();
          timeout = 0;
          if(isHistory || !activate_form){
            jQuery('.bot-content').prepend(tmpHtml);
          } else {
            jQuery('.bot-content').append(tmpHtml);
          }
  
  
          //create carousel
          if(jQuery('.main-carousel').length){
  
          initializeSlider();
        }
        outerScroll();
  
      }
    }
  
      function checkRequiredFlag(flag, label, class_flag){
        var html = '';
        var class_name = class_flag ? '' : '';
        // if(flag == "required"){
        //   html += '<div class="skillOptions '+class_name+'"><span class="required">*</span>'+label+'</div>';
        // } else {
        //   html += '<div class="skillOptions '+class_name+'">'+label+'</div>';
        // }
  
        html += '<div class="skillOptions '+class_name+'">'+label+'</div>';
  
        return html;
      }
  
      function createFormFeilds(entityData, isHistory) {
          console.log("in create form");
          var html = '';
          var questionTypeHtml = '';
          var btn_flag = true;
          html += '<div class="skill_option_container">';
          //input type
          if(entityData.field_type == 'plain_text' || entityData.field_type == 'password'){
              var inputType = (entityData.field_type == 'password') ? "password" : "text";
              if (checkObject(entityData.labels)) {
                 btn_flag = false;
                  for (var row in entityData.labels) {
                    var value_autofill = entityData.labels[row].auto_fill[0] ? entityData.labels[row].auto_fill[0] : "";
                    var required_flag = '';
                    if(entityData.params && !entityData.params.optional){
                      required_flag = "required";
                    }
                    html += checkRequiredFlag(required_flag, entityData.labels[row].label_name, 0); // 0 for not to add option_class
                    html += '<input type="'+inputType+'" class="formInput" value="'+value_autofill+'" '+required_flag+' placeholder="Enter your input here..." name="input#@$'+entityData.labels[row].label_name+'#@#'+entityData.eid+'"/>';
                  }
              } else {
                var value_autofill = entityData.auto_fill ? entityData.auto_fill : "";
                var required_flag = '';
                if(entityData.params && !entityData.params.optional){
                  required_flag = "required";
                }
                html += '<input type="'+inputType+'" class="formInput" value="'+value_autofill+'" '+required_flag+' placeholder="Enter your input here..." name="input#@$#@#'+entityData.eid+'"/>';
  
              }
  
          } else if(entityData.field_type == 'checkbox'){
                btn_flag = false;
              if (checkObject(entityData.labels)) {
  
                  for (var row in entityData.labels) {
                      var required_flag = '';
                      if(entityData.params && !entityData.params.optional){
                        required_flag = "required";
                      }
                      html += checkRequiredFlag(required_flag, entityData.labels[row].label_name, 1);
                    if (checkObject(entityData.value)) {
  
                        for (var sub_row in entityData.value) {
                            html += createCheckBox(entityData.labels[row].auto_fill[0], entityData.value[sub_row], entityData.labels[row].label_name ,entityData);
                            html += checkRequiredFlag("", entityData.value[sub_row], 1);
                            // html += '<div class="clear"></div>';
                        }
                    } else {
                        // questionTypeHtml += createCheckBox(entityData.labels[row].autofill, entityData.labels[row].label_name, entityData);
                    }
                  }
              } else if (checkObject(entityData.value)) {
                    for (var sub_row in entityData.value) {
                        html += createCheckBox(entityData.auto_fill, entityData.value[sub_row], '', entityData);
                        html += checkRequiredFlag("", entityData.value[sub_row], 1);
                        // html += '<div class="clear"></div>';
                    }
              }
  
  
          } else if(entityData.field_type == 'radio_button'){
              btn_flag = false;
              if (checkObject(entityData.labels)) {
                  for (var row in entityData.labels) {
                      var required_flag = '';
                      if(entityData.params && !entityData.params.optional){
                        required_flag = "required";
                      }
                      html += checkRequiredFlag(required_flag, entityData.labels[row].label_name, 1);
                    if (checkObject(entityData.value)) {
                        html += '<div>';
                        for (var sub_row in entityData.value) {
                            html += createRadio(entityData.labels[row].auto_fill[0], entityData.value[sub_row], entityData.labels[row].label_name ,entityData);
                            html += checkRequiredFlag("", entityData.value[sub_row], 1);
                            // html += '<div class="clear"></div>';
                        }
                        html += '</div>';
                        html += '<div class="clear"></div>';
  
                    } else {
                        // questionTypeHtml += createCheckBox(entityData.labels[row].auto_fill, entityData.labels[row].label_name, entityData);
                    }
                  }
              } else if (checkObject(entityData.value)) {
                    for (var sub_row in entityData.value) {
                        var required_flag = '';
                        if(entityData.params && !entityData.params.optional){
                          required_flag = "required";
                        }
                        // console.log(checkRequiredFlag(required_flag, entityData.value[sub_row], 1));
                        html += createRadio(entityData.auto_fill, entityData.value[sub_row], '', entityData);
                        html += checkRequiredFlag("", entityData.value[sub_row], 1);
                        // html += '<div class="clear"></div>';
                    }
              }
  
  
          } else if(entityData.field_type == 'dropdown' && entityData.value){
              btn_flag = false;
              if (checkObject(entityData.labels) && checkObject(entityData.value)) {
                  for (var row in entityData.labels) {
  
                    var required_flag = '';
                    if(entityData.params && !entityData.params.optional){
                      required_flag = "required";
                    }
                    html += checkRequiredFlag(required_flag, entityData.labels[row].label_name, 0);
                    html += createSelect(entityData, entityData.labels[row].label_name, entityData.value);
  
                  }
              } else if (checkObject(entityData.value)){
  
                html += createSelect(entityData, '', entityData.value);
              }
  
  
          } else if(entityData.field_type == 'rating' && entityData.value){
                btn_flag = false;
              if (checkObject(entityData.labels)) {
                  for (var row in entityData.labels) {
                    var required_flag = '';
                    if(entityData.params && !entityData.params.optional){
                      required_flag = 'required';
                    }
                    html += checkRequiredFlag(required_flag, entityData.labels[row].label_name, 0);
                    html += createRating(entityData.labels[row].auto_fill[0], entityData.value, entityData.labels[row].label_name, entityData.eid);
                  }
  
  
              } else if (entityData.value) {
                  html += createRating(entityData.auto_fill, entityData.value, '', entityData.eid);
              }
  
  
          } else if(entityData.field_type == 'buttons' && entityData.value){
            if (checkObject(entityData.labels)) {
                for (var row in entityData.labels) {
                  var required_flag = '';
                  if(entityData.params && !entityData.params.optional){
                    required_flag = "required";
                  }
                  html += checkRequiredFlag("", entityData.labels[row].label_name, 0);
                  html += createButtons(entityData.eid,entityData.value);
                }
            } else if(checkObject(entityData.value)) {
  
                html += createButtons(entityData.eid,entityData.value);
            }
  
          } else if(entityData.field_type == 'calendar'){
            var value_autofill = entityData.auto_fill ? entityData.auto_fill : "";
            var required_flag = '';
            if(entityData.params && !entityData.params.optional){
              required_flag = "required";
            }
            // html += '<input type="text" class="formInput date-picker" value="'+value_autofill+'" '+required_flag+' placeholder="Enter your input here..." name="input#@$#@#'+entityData.eid+'" id="datePicker_'+entityData.eid+'"/>';
  
  
            if (checkObject(entityData.labels)) {
              for (var row in entityData.labels) {
                var value_autofill = entityData.labels[row].auto_fill[0] ? entityData.labels[row].auto_fill[0] : "";
                html += checkRequiredFlag(required_flag, entityData.labels[row].label_name, 0);
                html += '<input type="text" class="formInput date-picker" value="'+value_autofill+'" '+required_flag+' placeholder="Enter your input here..." name="input#@$#@#'+entityData.eid+'" id="datePicker_'+entityData.eid+'"/>';
              }
            } else {
              html += '<input type="text" class="formInput date-picker" value="'+value_autofill+'" '+required_flag+' placeholder="Enter your input here..." name="input#@$#@#'+entityData.eid+'" id="datePicker_'+entityData.eid+'"/>';
            }
  
          } else if(entityData.field_type == 'slider_button' && entityData.value){
              html += sliderButtons(entityData.eid,entityData.value, isHistory);
          } else if(entityData.field_type == 'customize_button' && entityData.value){
          html += initalButtons(entityData.eid,entityData.value, isHistory);
          }else if(entityData.field_type == 'calendar_slots'){
                //set selected time slot
                if(entityData.auto_fill != "" && entityData.value.length == 0 && entityData.header_name == ""){
                  selectedTime = entityData.auto_fill;
                }
                if((isHistory && Object.keys(timeSlotObj).length < 3) || !isHistory){
                  if(!timeSlotObj.hasOwnProperty(entityData.eid)){
                    timeSlotObj[entityData.eid] = [];
                  }
                }
  
  
                if(entityData.value.length){
                    appointMentData = entityData.value;
  
                    if(entityData.auto_fill){
                      selectedDate = entityData.auto_fill;
                    }
                    // console.log("in create feilds", entityData, selectedTime);
                    html += createDateSecHtml();
                }
              }
  
  
              html += '<div class="skillValueField">'+questionTypeHtml+'</div>';
              if((entityData.field_type != 'calendar_slots') || (entityData.field_type == 'calendar_slots' && entityData.value.length))
              {
                     //close of skill_option_container
                html += '</div>';
              }
              return html;
      }
  
      function createDateSecHtml() {
        // timeSlotObj = {};
        // jQuery('.typing').css('opacity',0);;
        var html='';
        var tmpHtml = jQuery(formHtml);
        html += '<div class="dates_sections">';
        // date buttons
        html += createDateButtons(appointMentData);
  
        //time section
        html += '<div class="time-sec">';
        // time buttons
        html += createTimeButtons(appointMentData, 0);
  
        html += '</div>';
  
        html += '</div>';
        return html;
      }
  
      //create date buttons
      function createDateButtons(dateData){
        // selectedDate = Object.keys(dateData[0])[0];
        var html = "";
        html += '<div class="button-sec">';
        for(var i = 0; i < dateData.length; i++){
          if(selectedDate == ""){
            html += '<button class="common-button-sec active" data-id="'+i+'">'+Object.keys(dateData[i])[0]+'</button>';
            selectedDate = Object.keys(dateData[0])[0];
          } else if(selectedDate && selectedDate == Object.keys(dateData[i])[0]) {
            html += '<button class="common-button-sec active" data-id="'+i+'">'+Object.keys(dateData[i])[0]+'</button>';
          } else {
            html += '<button class="common-button-sec" data-id="'+i+'">'+Object.keys(dateData[i])[0]+'</button>';
          }
  
        }
        html += '</div>';
        return html;
      }
  
      //create time buttons
      function createTimeButtons(dateData, key){
        // selectedTime = "";
        var html = "";
  
        html += '<table>';
  
        // for(var i = 0; i < dateData.length; i++){
        var dateKey = Object.keys(dateData[key])[0];
        var timeArr = dateData[key][dateKey];
        for(var j=0; j<timeArr.length; j++){
          // if(selectedTime == "" && timeArr[j].Flag){
          //   selectedTime = timeArr[j].From+"-"+timeArr[j].To;
          // }
  
          if(j%4 == 0){
            html += "<tr>";
          }
  
          var sTime = timeArr[j].From+"-"+timeArr[j].To;
  
          if(selectedTime == sTime){
            html += (timeArr[j].Flag) ? '<td class="custom-time-button active" data-id="'+sTime+'">'+timeArr[j].From+'</td>' : '<td class="disabled">'+timeArr[j].From+'</td>';
          } else {
            html += (timeArr[j].Flag) ? '<td class="custom-time-button" data-id="'+sTime+'">'+timeArr[j].From+'</td>' : '<td class="disabled">'+timeArr[j].From+'</td>';
          }
  
  
          if((j+1)%4 == 0){
            html += "</tr>";
          }
        }
  
        html += '</table>';
        // }
        return html;
      }
  
      function initalButtons(id,value, isHistory){
  
        jQuery.each(value, function(i, v){
  
          html += '<div class="text-wrapper bounceIn animated inital-buttons-aiexpert">';
  
          html += '<div class="bot-chat">';
          html += '<div class="inner-bot-chat">';
          html += '<div class="parent-buttondiv">';
  
          html += '<div class="free-website btn-options-form" data-eid="'+id+'">';
  
          html += '<img src="'+serverUrl + url_extension+v.Img+'" alt=""> ';
          html += '<div class="ai-expert-text">'+v.Title+'</div>';
          html += '</div>';
          html += '</div>';
          html += '</div>';
          html += '</div>';
          html += '</div>';
        });
  
       return html;
      }
  
      function sliderButtons(id,value,auto_fill, isHistory){
  
        var html = '';
          html += "<div class='main-carousel'>";
        jQuery.each(value, function(i, v){
          if(v.Desc === ''){
            if(auto_fill){
              var index = 0;
              if(i == auto_fill){
                index = auto_fill;
                html += '<div class="carousel-cell slider-text selected-slide" data-title="'+v.Title+'" data-value = "'+index+'" data-index="'+i+'">';
              }else{
                html += '<div class="carousel-cell slider-text" data-title="'+v.Title+'" data-value = "0" data-index="'+i+'">';
              }
            }else{
              html += '<div class="carousel-cell slider-text" data-title="'+v.Title+'" data-value = "0" data-index="'+i+'">';
            }
            jQuery('.bot-section-div .flickity-page-dots').css("bottom", "-3px !important");
          }else{
            if(auto_fill){
              var index = 0;
              if(i == auto_fill){
                index = auto_fill;
                html += '<div class="carousel-cell slider-text selected-slide" data-title="'+v.Title+'" data-value = "'+index+'" data-index="'+i+'">';
              }else{
                html += '<div class="carousel-cell slider-text" data-title="'+v.Title+'" data-value = "0" data-index="'+i+'">';
              }
          }else{
            html += '<div class="carousel-cell slider-text" data-title="'+v.Title+'" data-value = "0" data-index="'+i+'">';
          }
        }
  
          html += '<div class="image-sec-slider"><img src="'+serverUrl + url_extension+v.Img+' " alt=""></div>';
          html += '<div class="process">'+v.Title+'</div>';
          html += '<div class="bottom-text">'+v.Desc+' </div>';
          html += '</div>';
        });
        html += '</div>';
       return html;
      }
  
      function createCheckBox(autofill, value, label, entityData){
  
        var required_flag = '';
        if(entityData.params && !entityData.params.optional){
          required_flag = "required";
        }
        // checkRequiredFlag(required_flag, label, 1); // 1 for add option class
        if(label && autofill){
              var autofilled = autofill.toLowerCase() == label.toLowerCase() ? 'checked="checked"' : '';
          }
        if(value && autofill){
              var autofilled = autofill.toLowerCase() == value.toLowerCase() ? 'checked="checked"' : '';
          }
        return '<input '+autofilled+' '+required_flag+' type="checkbox"  value="'+value+'" data-name="'+label+'" name="check#@$'+label+'#@#'+entityData.eid+'"/>';
      }
  
  
  
      function createRadio(autofill, value, label, entityData){
          var autofilled = '';
          // if(label && autofill){
          //     autofilled = autofill.toLowerCase() == label.toLowerCase() ? 'checked="checked"' : '';
          // }else
          if(value && autofill){
              autofilled = autofill.toLowerCase() == value.toLowerCase() ? 'checked="checked"' : '';
          }
  
          var required_flag = '';
          if(entityData.params && !entityData.params.optional){
            required_flag = "required";
          }
  
          // checkRequiredFlag(required_flag, label, 1);
          return '<input '+autofilled+' '+required_flag+' value="'+value+'" type="radio" data-name="'+label+'" name="radio#@$'+label+'#@#'+entityData.eid+'"/>';
      }
  
      function createSelect(entityData, label, value){
        var required_flag = '';
        var autofill = '';
        if(entityData.params && !entityData.params.optional){
          required_flag = "required";
        }
        // checkRequiredFlag(required_flag, entityData.labels[row].label_name, 0);
  
        if (checkObject(entityData.labels)) {
          autofill = entityData.labels[0].auto_fill[0];
        } else {
          autofill = entityData.auto_fill;
        }
  
        // return '<select name="select#@$'+label+'#@#'+entityData.eid+'">'+createSelectDropdown(entityData.auto_fill, value)+'</select>';
        return '<select name="select#@$'+label+'#@#'+entityData.eid+'" '+required_flag+'>'+createSelectDropdown(autofill, value)+'</select>';
      }
  
  
      /* GET SURVEY HTML */
      function createSurvey(chatObj){
  
          var SurveyOpt = new Object();
          SurveyOpt = chatObj;
          var survey_answer_flag = false;
          var defVal = '';
          var rating = false;
          var tmpHtml = jQuery(surveyHtml);
          var history = arguments[1] || false;
  
          jQuery(tmpHtml).find('.survey').attr('id','survey_'+chatObj.survey_id);
          jQuery(tmpHtml).find('.survey_opt').text(btoa(JSON.stringify(SurveyOpt)));
          jQuery(tmpHtml).find('h5 span').after(SurveyOpt.survey_title);
          jQuery(tmpHtml).find('h6').html(SurveyOpt.question);
          jQuery(tmpHtml).find('h6').html(SurveyOpt.question);
  
          //console.log('\n\n SurveyOpt',SurveyOpt);
  
          // CHECK IF SURVEY ANSWER IS PRESENT, IF PRESENT FILL RESPONSES
          if(typeof SurveyOpt.survey_answer != 'undefined'){
            survey_answer_flag = true;
            //console.log('\n\nSurveyOpt.survey_answer',SurveyOpt.survey_answer)
          }
  
          if(SurveyOpt.question_type==0) // IF INPUT TYPE TEXT
          {
              if(survey_answer_flag)
              defVal = SurveyOpt.survey_answer.answerlist[0];
  
              var formInput = jQuery('<div class="form-group" style="margin-bottom: 0px;"><textarea id="s_qid_'+SurveyOpt.survey_id+'_'+SurveyOpt.survey_qid+'" class="form-control" placeholder="Type your comments here...">'+defVal+'</textarea></div>');
          }
          else if(SurveyOpt.question_type==1 || SurveyOpt.question_type==2) // IF INPUT MULTIPLE CHOICE
          {
              var formInput = '';
              var chkdefault = '';
              defVal = [];
  
              type = 'checkbox'
              if(SurveyOpt.question_type==2)
              type = 'radio'
  
              if(survey_answer_flag)
              defVal = SurveyOpt.survey_answer.answerlist;
  
              jQuery.each(SurveyOpt.options, function(i,v){
  
                chkdefault = '';
  
                //console.log('\n jQuery.inArray(i,defVal)',chatObj.survey_id,jQuery.inArray(i,defVal));
  
                if(jQuery.inArray(String(i),defVal)>-1)
                  chkdefault = 'checked="checked"';
  
                formInput += '<div class="'+type+'"><label><input id="s_qid_'+SurveyOpt.survey_id+'_'+SurveyOpt.survey_qid+'_'+i+'" type="'+type+'" name="s_qid_'+SurveyOpt.survey_id+'_'+SurveyOpt.survey_qid+'" '+chkdefault+' value="'+i+'"></input>'+v+'</label></div>';
              })
  
          }
          else // IF INPUT RATING TYPE
          {
              var formInput = '<ul class="ratingFacesList"><li> <a href="javascript:void(0)" class="face1" id="rating_1"><img src="'+serverUrl + url_extension+'/images/1.png"></a></li><li> <a href="javascript:void(0)" class="face2" id="rating_2"><img src="'+serverUrl + url_extension+'/images/2.png"></a></li><li> <a href="javascript:void(0)" class="face3" id="rating_3"><img src="'+serverUrl + url_extension+'/images/3.png"></a></li><li> <a href="javascript:void(0)" class="face4" id="rating_4"><img src="'+serverUrl + url_extension+'/images/4.png"></a></li><li> <a href="javascript:void(0)" class="face5" id="rating_5"><img src="'+serverUrl + url_extension+'/images/5.png"></a></li></ul><input type="hidden" class="userRating">';
  
              rating = true;
          }
  
          jQuery(tmpHtml).find('.survey_option_container div:last').before(formInput);
  
          if(survey_answer_flag){
            jQuery(tmpHtml).find(":input").attr('disabled',true);
            jQuery(tmpHtml).find('.smiley_feedback_sbmt').removeClass('active').attr('disabled',true);
  
            if(rating)
            {
              jQuery(tmpHtml).find('.userRating').val(SurveyOpt.survey_answer.answerlist[0]);
              jQuery(tmpHtml).find('.ratingFacesList a[id="rating_'+SurveyOpt.survey_answer.answerlist[0]+'"]').addClass('active');
              jQuery(tmpHtml).find('.ratingFacesList a').addClass('disabled');
            }
          }
  
          var resHtml = jQuery(tmpHtml).wrap('<p></p>').html();
          jQuery(tmpHtml).unwrap();
  
          if(!history)
          updateSurvey(chatObj); // UPDATE SURVEY STATUS RECEIVED BY CLIENT
          return resHtml;
      }
  
      /******** Our main function ********/
      function main() {
  
  
  
  
      var stats = {status: false, nlpbot: 0, bot: 0 , light: 0};
      var myId = '';
  
      //set theme color
      var root = document.documentElement;
  
      //commented & added if loop for theme changes Prerana 7-8-2020
      /*if(bot_configurations_params.theme.toLowerCase() == "purple"){
        root.style.setProperty('--main-color', "#6232b9");
      } else if(bot_configurations_params.theme.toLowerCase() == "green"){
        root.style.setProperty('--main-color', "#3DAB76");
        root.style.setProperty('--accentureBg', '#3DAB76');
      } else if(bot_configurations_params.theme.toLowerCase() == "nlp blue"){
        root.style.setProperty('--main-color', "#4a587b");
        root.style.setProperty('--accentureBg', '#7990ca');
      } else if(bot_configurations_params.theme.toLowerCase() == "blue"){
        root.style.setProperty('--main-color', "#2E76BC");
        root.style.setProperty('--accentureBg', '#2E76BC');
      } else if(bot_configurations_params.theme.toLowerCase() == "black"){
        root.style.setProperty('--main-color', "#1F2224");
        root.style.setProperty('--accentureBg', '#1F2224');
      } else {
        root.style.setProperty('--main-color', "#2F639F");
      }*/
  
      if(bot_configurations_params.theme.toLowerCase() == "blue"){
        root.style.setProperty('--main-color', "#2E76BC");
        root.style.setProperty('--accentureBg', '#2E76BC');
      } else if(bot_configurations_params.theme.toLowerCase() == "green"){
        root.style.setProperty('--main-color', "#3DAB76");
        root.style.setProperty('--accentureBg', '#3DAB76');
      } else if(bot_configurations_params.theme.toLowerCase() == "black"){
        root.style.setProperty('--main-color', "#1F2224");
        root.style.setProperty('--accentureBg', '#1F2224');
      } else if(bot_configurations_params.theme){
        root.style.setProperty('--main-color', bot_configurations_params.theme);
        root.style.setProperty('--accentureBg', bot_configurations_params.theme);
      }
  
      function notificationHtml(){
        var html = '';
        html += '<div id="notification_panel" class="sidenav" style="padding: 0px;">';
        html += '<a href="javascript:void(0)" class="closebtn">&times;</a>';
        html += '<h4 style="margin:20px 30px 0px 15px">Notifications</h4>';
        html += '<div class="notificationList scrollbox3">';
        html += '<div class="detail_notification" style="display: none">';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        return html
      }
      function documentPanel() {
        var html = '';
        html += '<div class="document_panel" id="document_panel">';
          html += '<div class="header header-img">';
            html += '<div class="headerLeft"><h2 id="doc_name_heading">Terms</h2></div>';
            html += '<div class="headerRight">';
              html += '<a href="javascript:void(0)" class="close"></a>';
              // html += '<a href="javascript:void(0)" class="document_download"></a>';
            html += '</div>';
          html += '</div>';
          html += '<div class="document_content">';
      html += '<img src="'+serverUrl + url_extension+'/image/help.jpg" class="help-img">';
        html +=  '</div>';
        html += '</div>';
        return html;
      }
  
      // function documentPanel(){
      //   var html = '';
      //   html += '<div class="document_panel">';
      //     html += '<div class="header">';
      //       html += '<div class="headerLeft"><h2>Mera term Plan</h2></div>';
      //       html += '<div class="headerRight">';
      //         html += '<a href="javascript:void(0)" class="close"></a>';
      //         html += '<a href="javascript:void(0)" class="document_download"></a>';
      //       html += '</div>';
      //     html += '</div>';
      //
      //     html += '<div class="document_content">adsfasdf</div>';
      //   html += '</div>';
      //   return html;
      // }
  
      function rightHeader(){
        var html = '';
        html +='<div class="rightHeader">';
        html +='<div class="notification_container" id="notification_container" style="display: block; width: 32px; background-color: rgb(204, 204, 204);">';
        html +='<span id="bell" class="notification animated tada"><img src="'+serverUrl + url_extension+'/image/notification.png" alt=""></span>';
        html +='<span id="unread" class="unread animated zoomIn">0</span>';
        html +='<span class="notification_content"></span>';
        html +='</div>';
        html +='<!-- history lable -->';
        html +='<div class="history-badge"><div style=" display: none;" class="badge">Today</div></div>';
        html +='<div class="clear"></div>';
        html +='</div>';
        return html;
      }
  
      function header(){
        var html = '';
        html +='<div class="header" style="background-color: '+bot_configurations_params.theme+'">';
            html +='<div class="headerLeft">';
              // html +='<div class="bot_logo"><img src="'+serverUrl + url_extension+'/image/assist-big.png"></div>';
              // html +='<div class="bot_assist_name">NLPBots</div>';
              // html +='<div class="bot_logo"><img src="/image/assist-big.png"></div>';
              html +='<div class="bot_logo"><img src="'+apiUrl+bot_configurations_params.logo+'"></div>';
              // html +='<div class="bot_assist_name">Accenture Hiring Assist</div>';
              html +='<div class="bot_assist_name">'+bot_configurations_params.bot_name+'</div>';
            html +='</div>';
            html +='<div class="headerRight"><a href="javascript:void(0)" class="minimise_btn"></a></div>';
          html +='</div>';
          return html;
      }
      function initialButtonsHtml(){
        var html = '';
          html +='<div id="bottomNav" class="bottonnav">';
            html +='<a href="javascript:void(0)" class="closebtn">×</a>';
            html +='<div class="initial_buttons_container_mobile btn-wrap">';
            html +='<form class="form_card optionsbox" data-type="buttons">';
            html +='<div class="entityContainer" data-type="buttons">';
            for (var key in bot_configurations_params.hamburgerButton){
  
              //commented & added if Prerana 24-8-2020
               // if(bot_configurations_params.hamburgerButton.hasOwnProperty(key)){
               //   for(var innerKey in bot_configurations_params.hamburgerButton[key]){
               //   //html += '<div class="option_container">';
               //   html += '<a href="javascript:void(0)" data-eid="'+ innerKey +'" class="btn btn-options-form ham-btn">'+ bot_configurations_params.hamburgerButton[key][innerKey] +'</a>';
               //   //html += ' </div>';
                 //   //html +='<a href="javascript:void(0)" class="btn initial_btn" id="'+ innerKey +'">'+ bot_configurations_params.hamburgerButton[key][innerKey] +'</a>';
               //   }
               // }
  
  
               if(bot_configurations_params.hamburgerButton.hasOwnProperty(key)){
                 html += '<a href="javascript:void(0)" data-eid="'+ bot_configurations_params.hamburgerButton[key]['taid'] +'" class="btn btn-options-form ham-btn" style="padding: 5px 15px!important;border-radius: 25px; border: 2px solid '+bot_configurations_params.theme+'"><img class="hamburger-img" src="'+apiUrl+bot_configurations_params.hamburgerButton[key]['icon_path']+'"><span class="hamburger-text">'+ bot_configurations_params.hamburgerButton[key]['name'] +'</span></a>';
               }
            }
            html +='</div>';
            html +='</form>';
        //html +='<a href="javascript:void(0)" class="btn initial_btn" id="jd">User Manual</a>';
        //html +='<a href="javascript:void(0)" class="btn initial_btn disabled">Track Application</a>';
            //html +='<a href="javascript:void(0)" class="btn initial_btn help-btn" id="help">Help</a>';
              //html +='<a href="javascript:void(0)" class="btn initial_btn disabled">Track Application</a>';
              html +='<div class="clear"></div>';
            html +='</div>';
          html +='</div>';
        return html;
      }
  
      //added function for vertical hamburger menu Prerana 24-8-2020
      function createSideMenuUi() {
        var html = "";
        var botDiv = document.createElement('DIV');
        botDiv.setAttribute("class", "botSideMenuWrapper");
        html += '<nav class="main-menu">';
        html += '<ul>';
  
        for(var key in bot_configurations_params.hamburgerButton){
          html += '<li class="bot_main_menu" data-cid="'+bot_configurations_params.hamburgerButton[key]['taid']+'"><a href="#"><img src="'+apiUrl+bot_configurations_params.hamburgerButton[key]['icon_path']+'" style="width: 35px; height: 35px; border-radius: 50%; margin: 7px;"><span class="nav-text">'+bot_configurations_params.hamburgerButton[key]['name']+'</span></a></li>'
        }
  
       //  html += '<li class="bot_main_menu active" data-cid="functionalities"><a href="#"><i class="fa fa-comments-o fa-2x"></i><span class="nav-text">Functionalities</span></a></li>';
       //  html += '<li class="bot_main_menu" data-cid="web"><a href="#"><i class="fa fa-globe fa-2x"></i><span class="nav-text">Web</span></a></li>';
       //  html += '<li class="bot_main_menu" data-cid="help"><a href="#"><i class="fa fa-question-circle fa-2x"></i><span class="nav-text">Help</span></a></li>';
       //  html += '<li class="bot_main_menu" data-cid="express_yourself"><a href="#"><i class="fa fa-smile-o fa-2x"></i><span class="nav-text">Express Yourself</span></a></li>';
       //  html += '<li class="bot_main_menu" data-cid="perform_kyc"><a href="#"><i class="fa fa-camera-retro fa-2x"></i><span class="nav-text">KYC</span></a></li>';
       // html += '<li class="bot_main_menu" data-cid="Pullback and Approvals"><a href="#"><i class="fa fa-check-square-o fa-2x"></i><span class="nav-text">Pullback and Approvals</span></a></li>';
       // html += '<li class="bot_main_menu" data-cid="videos"><a href="#"><i class="fa fa-video-camera fa-2x"></i><span class="nav-text">Videos</span></a></li>';
        html += '</ul>';
        html += '</nav>';
          html += '</div>';
          botDiv.innerHTML = html;
  
          document.getElementsByClassName('chat_wrapper')[0].appendChild(botDiv);
      }
  
  
      function createBasicBotHtml(){
        var html = "";
        html += '<div class="chat_wrapper cleanslate">';
              html += '<div class="bot-content scrollbox3" id="bot-content">';
            html += '</div>';
        html += '</div>';
       html += '<div class="bottom_input_text_container">';
          html += '<div class="input_wrapper">';
            html += '<ul>';
              if(bot_configurations_params.hamburgerMenu && bot_configurations_params.hamburgerButton.length && bot_configurations_params.hamburgerMenuType != "vertical"){
                html +='<li class="menu"><a href="javascript:void(0)" class="mob_open_initial_btns"><img src="'+serverUrl + url_extension+'/image/list-green.svg" class="svg"></a></li>';
              } else {
                html +='<li class="menu">&nbsp;</li>';
              }
              html += '<li class="inpt_wrp">';
                html += '<div id="result" style="position: absolute; bottom: -30px;"></div>';
  
                if(bot_configurations_params.autocomplete || true){
                  html += '<input value="" placeholder="Write something" type="text" name="input" class="input typeahead" id="input" /> </li>';
                } else {
                  html += '<input value="" placeholder="Write something" type="text" name="input" class="input" id="input" /> </li>';
                }
  
                if(bot_configurations_params.emojiOn){
                  html += '<li class="emojis" style="pointer-events: all; cursor: pointer; width:8%;"><div class="emoji-sym"><span class="emoji_span" style="display: block;"><img src="'+serverUrl + url_extension+'/image/emoji-green.svg" class="svg"></span>'+createEmojiListHtml()+'</div></li>';
                } else {
                  html += '<li class="emojis" style="pointer-events: none; cursor: default;"><div class="emoji-sym"><span class="emoji_span" style="">&nbsp;</span></div></li>';
                }
              // html += '<li class="mic_li">';
              html += '<li style="width:3%;">';
                html += '<a href="javascript:void(0)" class="send" id="send"><img src="'+serverUrl + url_extension+'/image/rounded-green.svg" class="svg"></a></li>';
               html += '<li style="display:none;"><a href="javascript:void(0);" class="mic">';
                  html += '<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31">'
                    html += '<defs>';
                      html += '<style>';
                        html += '.cls-3 {';
                          html += 'fill: #b7b8bf;';
                        html += '}';
  
                        html += '.cls-4 {';
                          html += 'fill: #fff;';
                          html += 'fill-rule: evenodd;';
                        html += '}';
                      html += '</style>';
                    html += '</defs>';
                    html += '<circle id="BG_copy_3" data-name="BG copy 3" class="cls-3" cx="17" cy="17" r="13.5"/>';
                    html += '<path id="Microphone_Icon" data-name="Microphone Icon" class="cls-4" d="M22.575,15.432a0.432,0.432,0,0,0-.419.443A4.8,4.8,0,0,1,17.5,20.8a4.8,4.8,0,0,1-4.655-4.922,0.42,0.42,0,1,0-.839,0,5.691,5.691,0,0,0,5.075,5.786v2.444H15.006a0.444,0.444,0,0,0,0,.887h4.989a0.444,0.444,0,0,0,0-.887H17.919V21.662a5.691,5.691,0,0,0,5.075-5.786,0.432,0.432,0,0,0-.419-0.443M17.5,8.993a3.572,3.572,0,0,0-3.464,3.663v3.219A3.572,3.572,0,0,0,17.5,19.539a3.572,3.572,0,0,0,3.464-3.663V12.656A3.572,3.572,0,0,0,17.5,8.993"/>';
                  html += '</svg>';
                  html += '</a>';
              html += '</li>';
            html += '</ul>';
          html += '</div>';
          html += '<div class="clear"></div>';
          html += '</div>';
      html += '</div>';
      return html;
  
  
  
      }
  
      //to show emoji option
      function createEmojiListHtml(){
        var html = "";
        html += '<ul class="popuptext" id="myPopup">';
        html += '<li><div class="smile1 emoImgDiv" data-value="smile"></div></li>';
        html += '<li><div class="smile2 emoImgDiv" data-value="neutral"></div></li>';
        html += '<li><div class="smile3 emoImgDiv" data-value="blush"></div></li>';
        html += '<li><div class="smile4 emoImgDiv" data-value="confused"></div></li>';
        html += '<li><div class="smile5 emoImgDiv" data-value="angry"></div></li>';
        html += '<li><div class="smile6 emoImgDiv" data-value="like"></div></li>';
        html += '</ul>';
        return html;
      }
  
      jQuery(document).on('click','.emoImgDiv', function(e){
       e.preventDefault();
       var new_value = jQuery('#input').val() + replaceImages(e.target.dataset.value);
       jQuery('#input').val(new_value);
       jQuery('#input').focus();
      });
  
      //click vertical hamburger menu Prerana 24-8-2020
      jQuery(document).on('click','li.bot_main_menu', function(e){
        e.preventDefault();
        //jQuery('.overlay-black').show();
        jQuery('.bot_main_menu').removeClass('active');
        jQuery(this).addClass('active');
        var type = jQuery(this).attr("data-cid");
        var text = jQuery(this).find('.nav-text').text();
  
        if (jQuery(this).attr('disabled')) {  return e.stopImmediatePropagation(); }
            var value = jQuery(this).text();
            var eid = jQuery(this).attr('data-eid');
            var time_stamp = TimestampGenerator();
            var ic_data = {};
  
            var dataTosSend = {
              'query': value,
              'timestamp': time_stamp,
              'bid': bid,
              'channel': 'ui',
              'emp_id': user_id,
              'tid': tid,
              'region': region,
              'user_type': user_type,
              'ic_data' : ic_data,
              "job_id" : jobId,
              "name" : userName,
              "resume_id" : resumeId,
              "user_id" : user_id,
              "cid" : candidateId,
              "sll" : sll,
              "interactive_card" : true,
              "all_vars" : all_vars
            };
            console.log(dataTosSend);
            socket.emit('user_message', dataTosSend);
  
      });
  
      /*click on emoji icon*/
      jQuery(document).on('click','.emojis',function(){
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
      });
  
      //replace emotions with images
      function replaceEmoticons(text){
        var emoticons ={
          ':)': '<div class="smile1 emoImgDiv" data-value="smile"></div>',
          ':|': '<div class="smile2 emoImgDiv" data-value="neutral"></div>',
          ':-)': '<div class="smile3 emoImgDiv" data-value="blush"></div>',
          ':-$': '<div class="smile4 emoImgDiv" data-value="confused"></div>',
          ':-@': '<div class="smile5 emoImgDiv" data-value="angry"></div>',
          '(y)': '<div class="smile6 emoImgDiv" data-value="like"></div>',
        }
  
        for(var key in emoticons){
          text = text.replace(key, emoticons[key]);
        }
  
        return text;
      }
  
      //replace images with emotions
      function replaceImages(text){
        var emoticons = {
          'smile'   : ':)',
          'neutral'   : ':|',
          'blush'   : ':-)',
          'confused'   : ':-$',
          'angry'   : ':-@',
          'like'   : '(y)',
        };
  
        return text.replace(/[smile neutral blush confused angry like]+/g, function (match) {
          return emoticons[match] != 'undefined' ? emoticons[match] : match;
        });
      }
      function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
      }
  
      function startAnimationScreen(){
        var html = "";
        html += '<div class="startUpScreen">';
         html += '<div class="accentureBg"></div>';
         html += '<div class="startScreen_content">';
           // html += '<div class="startBotLogo">';
           //  html += '<div class="startBotLogoImg"><img src="'+serverUrl + url_extension+'/image/assist-big.png"></div>';
           // html += '</div>';
           // html += '<div class="hiThere"><img src="'+serverUrl + url_extension+'/image/text1.png" /></div>';
           // html += '<div class="welcomeMsg">';
           //  html += '<div class="accentureLogo"><img src="'+serverUrl + url_extension+'/image/greaterthn-icon.gif"></div>';
           //  html += '<div class="welcomeTxt"><img src="'+serverUrl + url_extension+'/image/text2.png" /></div>';
           // html += '</div>';
  
           if(bot_conf_error_msg){
             html += '<div class="startBotLogo">';
             html += '</div>';
             html += '<div class="welcomeMsg">';
             html += '<div class="welcomeTxt" style="padding-right: 34px;">'+bot_conf_error_msg+'</div>';
             html += '</div>';
           } else {
             html += '<div class="startBotLogo">';
              // html += '<div class="startBotLogoImg"><img src="'+serverUrl + url_extension+'/image/assist-big.png"></div>';
              html += '<div class="startBotLogoImg"><img src="'+apiUrl+bot_configurations_params.logo+'"></div>';
             html += '</div>';
             //html += '<div class="hiThere"><img src="'+serverUrl + url_extension+'/image/text1.png" /></div>';
             html += '<div class="welcomeMsg">';
              //html += '<div class="accentureLogo"><img src="'+serverUrl + url_extension+'/image/greaterthn-icon.gif"></div>';
              // html += '<div class="welcomeTxt"><img src="'+serverUrl + url_extension+'/image/text2.png" /></div>';
              html += '<div class="welcomeTxt">'+bot_configurations_params.welcome_text+'</div>';
             html += '</div>';
           }
  
         html += '</div>';
         html += '<div class="startLoader"><img src="'+serverUrl + url_extension+'/image/startLoader.gif"></div>';
        html += '</div>';
        return html;
      }
  
    URL = window.URL || window.webkitURL;
  
    var gumStream; 						//stream from getUserMedia()
    var rec; 						//WebAudioRecorder object
    var input; 							//MediaStreamAudioSourceNode  we'll be recording
  
  
    // shim for AudioContext when it's not avb.
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var audioContext; //new audio context to help us record
  
  
    function startRecording() {
        console.log("recordButton clicked");
  
        /*
            Simple constraints object, for more advanced audio features see
            https://addpipe.com/blog/audio-constraints-getusermedia/
        */
  
        var constraints = { audio: true, sampleRate:48000, video:false };
  
  
  
  
        /*
            We're using the standard promise based getUserMedia()
            https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
        */
  
        navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
            console.log("getUserMedia() success, stream created, initializing Recorder.js ...");
  
            /*
                create an audio context after getUserMedia is called
                sampleRate might change after getUserMedia is called, like it does on macOS when recording through AirPods
                the sampleRate defaults to the one set in your OS for your playback device
  
            */
            audioContext = new AudioContext();
  
  
  
            /*  assign to gumStream for later use  */
            gumStream = stream;
  
            /* use the stream */
            input = audioContext.createMediaStreamSource(stream);
  
            /*
                Create the Recorder object and configure to record mono sound (1 channel)
                Recording 2 channels  will double the file size
            */
            rec = new Recorder(input,{numChannels:1})
  
            //start the recording process
            rec.record()
  
            //console.log("Recording started");
  
        }).catch(function(err) {
        console.log(err);
              //enable the record button if getUserMedia() fails
            //recordButton.disabled = false;
            //stopButton.disabled = true;
            //pauseButton.disabled = true
        });
    }
  
    function pauseRecording(){
        //console.log("pauseButton clicked rec.recording=",rec.recording );
        if (rec.recording){
            //pause
            rec.stop();
            //pauseButton.innerHTML="Resume";
        }else{
            //resume
            rec.record();
            //pauseButton.innerHTML="Pause";
  
        }
    }
  
    function playSound(url){
    var audio = document.createElement('audio');
    audio.style.display = "none";
    audio.src = url;
    audio.autoplay = true;
    audio.onended = function(){
      audio.remove() //Remove when played.
    };
    document.body.appendChild(audio);
  }
  
    function stopRecording() {
        //console.log("stopButton clicked");
      console.log("sadkj hsdgf hsdfgsdf hg");
            if(rec){
                //tell the recorder to stop the recording
            rec.stop();
  
            //stop microphone access
            gumStream.getAudioTracks()[0].stop();
  
            //create the wav blob and pass it on to createDownloadLink
            rec.exportWAV(sendFile);
            gumStream = null;
  
            //rec = null;
  
            input = null;
        }
  
    }
  
  
    //helper function
    function __log(e, data) {
        // log.innerHTML += "\n" + e + " " + (data || '');
      //console.log("asdasddddddd", e);
    }
  
  
    function sendFile(file){
        rec.clear();
        audioContext.close();
        if(!jQuery('.typing').length) {
            setTimeout(function(){
                    jQuery('#bot-content').append(typingHtml);
                    var old_offset = jQuery('#bot-content').prop('scrollHeight'); // SCROLL TO LAST MSG
                    setTimeout(function () {
                    scrollBottom(old_offset);},200);
                },200);
  
        }
  
        // jQuery('.mic').addClass("disabled");
      console.log("herererer");
        var stream222 = ss.createStream();
        ss.forceBase64 = true;
        // upload a file to the server.
  
  
        // console.log("obj >>", obj);
        var time_stamp = TimestampGenerator();
  
        var user = user_type;
        var emp_id = user_id;
  
        var obj = {
          'query': "",
          'timestamp': time_stamp,
          'bid': bid,
          'tid': tid,
          'channel': 'ui',
          'emp_id': emp_id,
          'region': region,
          'user_type': user,
          'admin' : false,
        };
        obj["job_id"] = jobId;
        obj["name"] = userName;
        obj["resume_id"] = resumeId;
        obj["user_id"] = user_id;
        obj["user_type"] = user_type;
        obj["cid"] = candidateId;
        obj["sll"] = sll;
        obj["all_vars"] = all_vars;
  
  
        ss(socket).emit('user_file', stream222, obj);
        ss.createBlobReadStream(file).pipe(stream222);
    }
  
    function callChatHistory(){
    // var obj = {"tid": tid, "bid": bid, "uid": userId, "offset": 0, "limit": 10}
  
    var dataTosSend = {
      'query': '',
      // 'timestamp': time_stamp,
      'bid': bid,
      'tid': tid,
      'channel': 'ui',
      'emp_id': user_id,
      'region': region,
      'user_type': user_type,
      // 'ic_data' : final_data,
      "job_id" : jobId,
      "name" : userName,
      "resume_id" : resumeId,
      "user_id" : user_id,
      "cid" : candidateId,
      "sll" : sll,
      "all_vars" : all_vars,
      "uid":user_id,
      "limit" : limit,
      "offset" : historyOffset
    };
  
    socket.emit('get_user_chat_history',dataTosSend);
    historyOffset += 10;
  
  }
  
      function createBasicHtml(){
        var html = "";
        html += '<div class="bot-section-div">'+documentPanel()+'<div class="hiddenDiv"></div><div class="hiddenDivHtml" style="display: none;"></div><div class="bot-div-page">';
        html += initialButtonsHtml();
          html += startAnimationScreen();
           html += '<div class="page_wrapper" >';
              html += '<div class="left_panel">';
                 html += '<a href="javascript:void(0)" class="glitch" id="bot_minimize_btn"><img src="'+serverUrl + url_extension+'/image/normal_glitch.png" /></a>';
                 html += '<a href="javascript:void(0)" class="comp_logo">';
                 html += '</a>';
                 html += '<div class="wraning">';
                    html += '<span style="display:block; padding: 10px;"></span>';
                 html += '</div>';
                 html += '<ul class="main_menu_mbile">';
                    html += '<li>';
                       html += '<div class="minimise"><img src="'+serverUrl + url_extension+'/image/close.svg" alt="minimize chat"></div>';
                    html += '</li>';
  
                html += '<li><div class="notification_container" id="notification_container2" style="background-color:transparent;"> <span id="bell2" class="notification animated tada"><img src="'+serverUrl + url_extension+'/image/notification.svg" style="width: 18px;" alt=""></span><span id="unread2" class="unread animated zoomIn">0</span></div></li>';
  
                 html += '</ul>';
                 html += '<div class="BotLogo">';
                 html += '</div>';
              html += '</div>';
              html += '<div id="main_chat_bot" class="right_panel">'+header()+createBasicBotHtml()+notificationHtml()+'</div>';
           html += '</div>';
        html += '</div></div>';
        jQuery( "body" ).append(html);
  
        //added to change images according to theme color Prerana 7-8-2020
        setTimeout(() =>{
  
              // For each image with an SVG class, execute the following function.
              jQuery("img.svg").each(function () {
                // Perf tip: Cache the image as jQuery object so that we don't use the selector muliple times.
                var $img = jQuery(this);
                // Get all the attributes.
                var attributes = $img.prop("attributes");
                // Get the image's URL.
                var imgURL = $img.attr("src");
  
                // Fire an AJAX GET request to the URL.
                jQuery.get(imgURL, function (data) {
                  // The data you get includes the document type definition, which we don't need.
                  // We are only interested in the <svg> tag inside that.
                  var $svg = jQuery(data).find('svg');
                  // Remove any invalid XML tags as per http://validator.w3.org
                  $svg = $svg.removeAttr('xmlns:a');
                  // Loop through original image's attributes and apply on SVG
                  jQuery.each(attributes, function() {
                    $svg.attr(this.name, this.value);
                  });
                  // Replace image with new SVG
                  $img.replaceWith($svg);
                });
              });
  
            }, 50);
  
            //added ui for vertical hamBurger menu Prerana 24-8-2020
            if(bot_configurations_params.hamburgerMenuType == "vertical"){
              jQuery('.bot-section-div .bot-content').css('width', 'calc(100% - 50px)');
              createSideMenuUi();
            } else {
              jQuery('.bot-section-div .bot-content').css('width', '100%');
            }
  
      }
  
      // createBasicHtml();
  
      var setElementHeight = function () {
          var height = jQuery(window).height();
          var org_height  = (height*77)/100;
          var org_height1  = (height*60)/100;
          jQuery('.widget-container').css('height', org_height);
      };
  
      function getlikeDislikeHtml(qid, aid){
        var likeDislikeHtml = '<div class="feedback_container"><a href="javascript:void(0);" data-qid="'+qid+'" data-aid="'+aid+'" data-val="up" class="feedbackBtn_link upvote"><i class="fa fa-thumbs-up"></i></a><a href="javascript:void(0);" data-qid="'+qid+'" data-aid="'+aid+'" data-val="down" class="feedbackBtn_link downvote"><i class="fa fa-thumbs-down"></i></a></div>';
        return likeDislikeHtml;
      }
  
      function getCScoreHtml(score){
        var cScoreHtml = '<div class="cscore_container">Confidence Score: <span>'+score+'</span></div>';
        return cScoreHtml;
      }
  
      // Cookies
      function createCookie(name, value, days) {
          if (days) {
              var date = new Date();
              date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
              var expires = "; expires=" + date.toGMTString();
          }
          else var expires = "";
  
          document.cookie = name + "=" + value + expires + "; path=/";
      }
  
      //show message while disconnect
        function showNetError(){
          var msgDivLength = jQuery(".fixedAlert").length;
          if(msgDivLength == 0){
            jQuery('.bot-div-page').prepend('<div class="fixedAlert"></div>');
            jQuery(".fixedAlert").prepend('<div class="alert alert-danger"><strong>Error! </strong>No Internet Connection!</div>');
          }
        }
  
  
        function hideNetError(){
          jQuery('.fixedAlert').children('.alert:last-child').remove();
        }
  
  
  function createInsights(data){
      var html = "";
      if(checkObject(data.common_sense)){
          if(data.query_part) {
              html +='<h3>Query:<br> '+data.query_part+'</h3><hr>';
          }
  
          html += '<div class="relation-div">';
          html += '<h3>Relation:</h3>'
          for (var row in data.common_sense) {
              if (data.common_sense.hasOwnProperty(row) && checkObject(data.common_sense[row])) {
                  for (var i = 0; i < data.common_sense[row].relation.length; i++) {
                      html += '<span class="relation-words">'+data.common_sense[row].relation[i].join('&nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i>&nbsp</spn>');
                      html +="<br>";
                  }
              }
          }
          html += "</div><hr>"
  
          if(data.answer) {
              html += '<div class="relation-ans-div"><h3>Answer:</h3>'+data.answer+'</div>';
          }
      }
      return html;
  }
  
      jQuery(document).ready(function () {
  
        jQuery(document).on('change', '.form_container input[type="file"]', function(e) {
  
              var type = jQuery(this).attr("accept").split(',');
              var tmpAr = e.target.files[0].name.split('.');
              const extension = tmpAr[tmpAr.length -1].toLowerCase();
              var result = type.indexOf(extension);
              var size  = jQuery(this).attr("data-size");
            if(result !== -1 && e.target.files[0].size <= (size* 1000)) {
  
              jQuery('.submit_container').find('a.form_dynamic').attr('disabled','disabled');
              jQuery(this).parents().find('.text-wrapper').closest().append('<div class="loader_main_overlay"></div>');
                      var stream222 = ss.createStream();
                      ss.forceBase64 = true;
                      // upload a file to the server.
                      ss(socket).emit('user_attachment', stream222, {
                          user_id: user_id,
                          'bid': bid,
                          'tid': tid,
                          'emp_id': user_id,
                          'file_ext': extension,
                          'f_name' : jQuery(this).attr("name"),
                          "e_name": e.target.files[0].name
                      });
                     // ss.createBlobReadStream(e.target.files[0]).pipe(stream222);
                      var blobStream = ss.createBlobReadStream(e.target.files[0])
  
                              var size = 0;
                       blobStream.on('end', function(data) {
  
  
                       });
                      // blobStream.on('data', function(chunk) {
                      //          size += chunk.length;
                      //          var val = Math.floor(size / e.target.files[0].size * 100);
                      //          _this.parent().find('.progressBarFileUpload').attr('value',val);
                      //          if(val == 100){
                      //           _this.parent().find('.progressBarFileUpload').hide();
                      //            _this.parent().find('.fileUploadedTxtMsg').css('color','green');
                      //           _this.parent().find('.fileUploadedTxtMsg').html('File uploaded successfully.');
                      //          }
                      //           //console.log(Math.floor(size / e.target.files[0].size * 100) + '%');
                      //            // -> e.g. '42%'
                      //             });
  
                      blobStream.pipe(stream222);
                      blobStream.on('error', function(err) {
                          console.log('Error : ' + err);
  
                      });
            } else {
              alert("Please uplaod valid file!");
              jQuery(this).val('');
            }
  
  
  
        });
        jQuery(document).on("click", '.inner-bot-chat p a', function(e){
          e.preventDefault();
            var link = jQuery(this).attr("href");
            if(link) {
              window.open(link);
            }
        })
          jQuery(document).on("click", ".insights", function(){
          var data = jQuery(this).attr("data-info");
          var rdata = JSON.parse(atob(data));
          var html = createInsights(rdata);
          if (html) {
              var docWrap = jQuery('#document_panel .document_content')
              jQuery(docWrap).html(html);
              jQuery('#document_panel').show();
              jQuery('#doc_name_heading').text("Insights");
              windowWidth = jQuery(window).innerWidth();
              if(windowWidth <= 768){
                  // jQuery('#document_panel').fadeIn(200);
              }else if(windowWidth > 800){
                  jQuery('#document_panel').css({'right': '470px'});
              }
          }
      });
  
        /* ADDED for NLPBOTS site */
          if(jQuery('.cust-iframe-div').length) {
          if(!jQuery('#cust-iframe').length)
              jQuery('body').append('<iframe src=""  frameborder="0" style="display: none;overflow-y:hidden; overflow-x:scroll;height:100%;width:100%" height="100%" width="100%" id="cust-iframe" ></iframe>')
              createBasicHtml();
              jQuery('body').prepend('<a href="javascript:void(0)" class="botIconBtn" id="botIconBtn"><img src="'+apiUrl+bot_configurations_params.logo+'"/></a><div class="wrap_circle"><div class="wrap_initial-bot-animate"><div class="initial-bot-animate"><div class="outer-initailbotanim"><div class="inner-initailbotanim">Hi I’m “Getafix”.<br />How can I help you?</div></div>');
  
          } else  {
            jQuery('body').prepend('<a href="javascript:void(0)" class="botIconBtn" id="botIconBtn"><img src="'+apiUrl+bot_configurations_params.logo+'"/></a><div class="wrap_circle"><div class="wrap_initial-bot-animate"><div class="initial-bot-animate"><div class="outer-initailbotanim"><div class="inner-initailbotanim">Hi I’m “Getafix”.<br />How can I help you?</div></div>');
  
  
                    createBasicHtml();
                }
  
        // jQuery('#document_panel').show();
        if (bid != 10){
        if(readCookie('user_id')){
          user_id = readCookie('user_id');
            } else {
                    user_id = btoa(Math.floor(Math.random()*90000) + 10000);
                    user_id += TimestampGenerator();
                        createCookie('user_id', user_id);
                      }}
        //jQuery('.document_content').load('/privacy_statement.html');
        window.setInterval(function(){
          if(!navigator.onLine){
            showNetError();
          } else {
            hideNetError();
          }
        }, 3000);
        jQuery(document).on('click', '.checkmark .confirm_sbmt', function () {
            responseFormLoader = false;
            setTimeout(function () {
  
              if(!jQuery('.typing').length) {
                jQuery('#bot-content').append(typingHtml);
              }
  
              jQuery(".message-wrapper").find('.form_card').last().submit();
              jQuery('.checkmark').closest('.message-wrapper.them').remove();
              var old_offset = jQuery("#bot-content").prop('scrollHeight');
              scrollBottom(old_offset);
            }, 50);
          });
  
          jQuery(document).on('click', '.checkmark .cancel_sbmit', function () {
              responseFormLoader = false;
              if(!jQuery('.typing').length) {
                jQuery('#bot-content').append(typingHtml);
              }
              if (jQuery(this).attr('class') == 'cancel_sbmit') {
                formNoClick.value = 'cancel';
                formNoClick.status = true;
              }
              jQuery('.checkmark .confirm_sbmt').trigger('click');
            });
        //on click on time slite
  jQuery(document).on('click', '.custom-time-button', function(){
      jQuery('.custom-time-button').removeClass('active');
      jQuery(this).addClass('active');
      selectedTime = jQuery(this).attr("data-id");
  
      sendTimeSlot();
      appointMentData = [];
    });
  
        jQuery(document).on('click', '.initial-bot-animate', function (e) {
            jQuery('#botIconBtn').trigger('click');
  
        });
  
        jQuery(document).on("change", "#User", function(){
  
            user_type = jQuery(this).val();
            initial_flag = true;
            getUserInfo(true);
        })
        jQuery(document).on("change", "#Region", function(){
            region = jQuery(this).val();
            initial_flag = true;
            getUserInfo(true);
        })
        if (admin && jQuery("#type_options").length) {
          console.log("call to get options");
          var dataTosSend = {
            'bid': bid,
            'emp_id': user_id,
            'tid': tid,
          };
  
          socket.emit("get_options", dataTosSend);
        }
  
        jQuery(document).mouseup(function(e) {
          var container = jQuery(".bot-div-page");
          var container2 = jQuery('.botIconBtn');
          var container3 = jQuery('.document_panel');
  
          if (!container.is(e.target) && container.has(e.target).length === 0 && !container2.is(e.target) && container2.has(e.target).length === 0 && !container3.is(e.target) && container3.has(e.target).length === 0) {
            if ( e.target.id == "type_options" || e.target.id == "User" || e.target.id == "Region" || e.target.className.indexOf("pika") != -1) {
              console.log("asdasdasdasdsad", e.target.id);
              return;
            } else {
              container.fadeOut(300);
              jQuery('.document_panel').hide();
              jQuery('.botIconBtn').fadeIn(300);
            }
          }
      });
  
      jQuery(document).on('click','.headerRight  .close',function(){
            jQuery('.document_panel').hide();
      });
        jQuery(document).on('mouseover','.stars li', function(){
  
        var onStar = parseInt(jQuery(this).data('value'), 10);
        jQuery(this).parent().children('li.star').each(function(e){
            if (e < onStar) {
              jQuery(this).addClass('hover');
            }
            else {
              jQuery(this).removeClass('hover');
            }
          });
        })
  
        //after click on help button show help image
        jQuery(document).on('click','.help-btn', function(e){
           e.preventDefault();
           jQuery('.document_content').html('');
           jQuery('#doc_name_heading').text('Help');
           jQuery('#document_panel').show();
           jQuery('.document_content').append('<img src="'+serverUrl + url_extension+'/image/help.jpg" class="help-img">');
        });
  
        jQuery(document).on('click','.terms_conditions', function(e){
         e.preventDefault();
         jQuery('.document_content').html('');
         var text = jQuery(this).text();
         jQuery('#doc_name_heading').text(text);
         jQuery('#document_panel').show();
         jQuery('.document_content').load('/privacy_statement.html');
        });
  
        // jQuery(document).on('click','.external_link', function(e){
        //  e.preventDefault();
        //  var link = jQuery(this).attr('href');
        //  var text = jQuery(this).html();
        //  var html = '<iframe src="'+link+'" width="100%" height="100%" frameBorder="0"></iframe>';
        //  jQuery('#doc_name_heading').text(text);
        //  jQuery('#document_panel').show();
        //  jQuery('.document_content').html(html);
        // });
  
  
        jQuery(document).on('click','#jd', function(e){
         e.preventDefault();
         console.log('sll',sll);
         var text = jQuery(this).html();
         jQuery('#doc_name_heading').text(text);
         jQuery('#document_panel').show();
         jQuery('.document_content').load('/assist/alkem.html');
           //jQuery('.document_content').load('/assist/privacy_statement.html');
        });
  
  
       jQuery(document).on('mouseout','.stars li', function(){
          jQuery(this).parent().children('li.star').each(function(e){
            jQuery(this).removeClass('hover');
          });
        });
  
  
  
          jQuery(document).on('change','.optionsbox :checkbox[required]',function(){
                var requiredCheckboxes = jQuery('.optionsbox :checkbox');
              if(jQuery(this).is(':checked')) {
                  jQuery('.optionsbox :checkbox').each(function(){
                      jQuery(this).removeAttr('required');
                  })
              } else {
                  requiredCheckboxes.attr('required', 'required');
              }
          });
  
          //when click on slider button
      jQuery(document).on('click','.slider-text', function(e){
        showUserMsg = false;
        if (jQuery(this).attr('disabled')) {  return e.stopImmediatePropagation(); }
        // reject if not selected slide
        if (jQuery('#111').length > 0) {
           var message_text = '<img src="'+ jQuery(this).find('img').attr('src') +'" style="max-width: 350px;height: auto;">'
           //message_text += '<br>Project Name: ' + jQuery(this).find('.process').text() + '<br>Selling Price: ' + jQuery(this).find('.bottom-text').text() + '<br>  '+ jQuery(this).find('.carousal_hidden').text()
           message_text += '<br>  '+ jQuery(this).find('.carousal_hidden').text()
  
           jQuery('#bot-content').append(buildHTML.me(message_text));
           jQuery(".typing").remove();
           safeText(message_text, getCurrentTime());
           adjustScroll();
           return e.stopImmediatePropagation();
        }
        if(!jQuery(this).hasClass('is-selected')) { return e.stopImmediatePropagation(); }
          var index = jQuery(this).attr("data-index");
          jQuery(this).attr("data-value", index);
        // jQuery(this).addClass('selected-slide');
        jQuery(this).closest('.main-carousel').find('.carousel-cell').removeClass('selected-slide');
        jQuery(this).addClass('selected-slide');
        // if (jQuery(this).attr('disabled')) {  return e.stopImmediatePropagation(); }
          var value = jQuery(this).attr("data-title");
          var eid = jQuery(this).attr('data-eid');
          var time_stamp = TimestampGenerator();
          var ic_data = {};
  
          var dataTosSend = {
            'query': value,
            'timestamp': time_stamp,
            'bid': bid,
            'channel': 'ui',
            'emp_id': user_id,
            'tid': tid,
            'region': region,
            'user_type': user_type,
            'ic_data' : ic_data,
            "job_id" : jobId,
            "name" : userName,
            "resume_id" : resumeId,
            "user_id" : user_id,
            "timezone" : timezone,
            "cid" : candidateId,
            "sll" : sll,
            "interactive_card" : true,
            "all_vars" : all_vars,
            "slide_index":jQuery(this).attr('data-index')
          };
          console.log("dddd",dataTosSend);
          socket.emit('user_message', dataTosSend);
  
          // jQuery('.carousel-cell').addClass('disabled');
          // jQuery('.carousel-cell').css('cursor', 'default');
  
          // jQuery( ".carousel-cell" ).not(".selected-slide").css( "opacity", "0.5" );
          // jQuery('.carousel-cell').css('pointer-events', 'none');
  
          // jQuery('.flickity-button').attr('disabled', 'disabled'); //add disabled for previous & next button of slider
          // jQuery('.dot').attr('disabled', 'disabled'); //add disable for dots of slider
  
      });
         jQuery(document).on('submit', '.form_card', function(e) {
              e.preventDefault();
  
               if (! jQuery(this)[0].checkValidity()) {
                   jQuery(this).find(':submit').click();
               } else {
                 var ratings = {};
                 // console.log("9990",jQuery(this).find('.entityContainer'));
                 var form_data = jQuery( this ).serializeArray();
                 console.log("================");
                 console.log(form_data);
                 var final_data = {}
                 for (var i = 0; i < form_data.length; i++) {
                      var name = form_data[i].name.split('#@#');
                      if (name[0] && name[1]) {
                      //radio#@$good#@#121
  
                          // check label
                          var label = name[0].split("#@$");
                          if (label[1]) {
                              if (!final_data[name[1]]) {
                                final_data[name[1]] = {};
                              }
                              var tmp = {};
                              final_data[name[1]][label[1]] = [form_data[i].value];
                              ////final_data[name[1]].push(tmp);
                          } else {
                                if (!final_data[name[1]]) {
                                     final_data[name[1]] = [];
                                  }
                              final_data[name[1]].push(form_data[i].value);
  
                          }
                      }
                 }
                 // var eid = jQuery(this).find('li.selected').first().attr('data-eid');
                 // console.log(eid);
                 jQuery(this).find('.skill_option_container .stars').each(function(){
  
                  var eid = jQuery(this).find('li').first().attr('data-eid');
                  // console.log(eid);
                     var a = {};
                    var ratingValue = parseInt(jQuery(this).find(' li.selected').last().data('value'), 10);
  
                     var name = jQuery(this).find('li').last().attr('data-name');
                      // console.log(jQuery(this).find('li').last().data('value'));
  
                     if (name){
                        if (!final_data[eid]) {
                          final_data[eid] = {};
                        }
  
                        final_data[eid][name] = [ratingValue ? String(ratingValue) : "0" ];
  
                     } else {
                      if (!final_data[eid]) {
                        final_data[eid] = []
                     }
                     // final_data[eid] = []
                       final_data[eid].push(ratingValue ? String(ratingValue) : "0");
                     }
  
                   });
  
                   console.log("final data", final_data);
  
                   var time_stamp = TimestampGenerator();
                        var dataTosSend = {
                          'query': formNoClick.status == true ? formNoClick.value : '',
                          'timestamp': time_stamp,
                          'bid': bid,
                          'tid': tid,
                          'channel': 'ui',
                          'emp_id': user_id,
                          'region': region,
                          'user_type': user_type,
                          'ic_data' : final_data,
                          "job_id" : jobId,
                          "name" : userName,
                          "resume_id" : resumeId,
                          "user_id" : user_id,
                          "cid" : candidateId,
                          "sll" : sll,
                          "all_vars" : all_vars
                        };
  
                        socket.emit('user_message', dataTosSend);
                        formNoClick = {};
                        jQuery('.form_dynamic').attr('disabled', 'disabled');
  
                        // jQuery('.form_dynamic').css('background', 'grey');
                        jQuery('.form_dynamic').addClass('disabled');
                        jQuery('.smiley_fform_dynamiceedback_sbmt').css('cursor', 'default');
  
                        jQuery('.form_dynamic').attr('disabled', 'disabled');
  
  
  
  
                    //disable rating emoji
                    jQuery('.emoji-rating').css('cursor', 'default');
                    jQuery('.emoji-rating').css('pointer-events', 'none');
  
                    //disable edit form inputs
                    jQuery(".message-wrapper:nth-last-child(2)").find('input').prop('disabled',true);
                    jQuery(".message-wrapper:nth-last-child(2)").find('select').prop('disabled',true);
               }
  
         });
        jQuery(document).on('click','.form_dynamic', function(e){
            //added loader after submit form Prerana 7-8-2020
            jQuery('#bot-content').append(typingHtml);
            // var eid = jQuery(this).attr('data-eid');
  
            if (jQuery(this).attr('disabled')) { return e.stopImmediatePropagation(); }
             jQuery(this).parent().submit();
            // var time_stamp = TimestampGenerator();
            // var dataTosSend = {
            //   'query': '',
            //   'timestamp': time_stamp,
            //   'bid': bid,
            //   'channel': 'ui',
            //   'emp_id': user_id,
            //   'region': region,
            //   'user_type': user_type,
            //   'ic_data' : {
            //     eid : [value]
            //   }
            // };
            // console.log(dataTosSend);
            // socket.emit('user_message', dataTosSend);
  
        });
  
  
        jQuery(document).on('click','.btn-options-form', function(e){
  
          if (jQuery(this).attr('disabled')) {  return e.stopImmediatePropagation(); }
            var value = jQuery(this).text();
            var eid = jQuery(this).attr('data-eid');
            var time_stamp = TimestampGenerator();
            var ic_data = {};
  
            var dataTosSend = {
              'query': value,
              'timestamp': time_stamp,
              'bid': bid,
              'channel': 'ui',
              'emp_id': user_id,
              'tid': tid,
              'region': region,
              'user_type': user_type,
              'ic_data' : ic_data,
              "job_id" : jobId,
              "name" : userName,
              "resume_id" : resumeId,
              "user_id" : user_id,
              "cid" : candidateId,
              "sll" : sll,
              "interactive_card" : true,
              "all_vars" : all_vars
            };
            console.log(dataTosSend);
            socket.emit('user_message', dataTosSend);
            jQuery('.btn-options-form').each(function(){});
            if(!jQuery(this).hasClass('ham-btn')){
              jQuery('.btn-options-form').attr('disabled', 'disabled');
              //jQuery('.btn-options-form').css('background', 'grey');
              jQuery('.btn-options-form').addClass('disabled');
              jQuery('.btn-options-form').css('cursor', 'default');
            }
  
        });
        jQuery(document).on('click','.stars li', function(){
  
          var onStar = parseInt(jQuery(this).data('value'), 10);
          var stars = jQuery(this).parent().children('li.star');
  
          for (i = 0; i < stars.length; i++) {
            jQuery(stars[i]).removeClass('selected');
          }
          for (i = 0; i < onStar; i++) {
            jQuery(stars[i]).addClass('selected');
          }
          // // JUST RESPONSE (Not needed)
          // var ratingValue = parseInt(jQuery('.stars li.selected').last().data('value'), 10);
          // console.log('ratingValue', ratingValue);
        });
  
  
      //   buildMessageNotification('alert-danger', 'Error', "this is a design test");
      // buildMessageNotification('alert-success', 'Success', "this is a design test1111");
        // do not remove imp for typeahesd (added for jquary browser object)
      jQuery.browser = {};
      jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit    /.test(navigator.userAgent.toLowerCase());
      jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
      jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
      jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
      // imp
      //if(bot_configurations_params.autocomplete) {
         jQuery.ajax({
             type: 'POST',
             url: apiUrl + "/api/get_bot_info",
             data: {'bid': bot_id, 'all_vars': JSON.stringify(getUrlVars()), 'train_or_publish' : train_or_publish ? train_or_publish : "train"},
             success: function(resultData) {
               console.log("result"+JSON.stringify(resultData));
               tid = resultData.data.account_id;
               server_canvas = resultData.data.canvas_id;
               //added canvas id Prerana 7-8-2020
               all_vars['canvas_id'] = resultData.data.canvas_id;
               init_typehead();
             },
             error: function(){
               console.log("Error in ajax");
             }
         });
  
      //}
        var infoObj = {};
        infoObj.bid =bid;
        infoObj.tid = tid;
        infoObj.admin = false;
  
        //callHistoryChat(0);
        //callPendingSurvey();
  
    // jQuery('#document_panel').show();
  
  
  
  
    jQuery(document).on('click', '.mic', function(){
          if(jQuery(this).hasClass('disabled')){
              return;
          }
        //   if($(this).css("background-image").indexOf('mic-animate.gif') !== -1)
        //   {
              //
        //       stopRecording();
        //       $(this).css("background", 'rgba(0, 0, 0, 0) url('+botUrl+'/bots/images/microphone.svg) repeat scroll 50% 50% / 100% padding-box border-box');
        //   } else {
        //     $(this).css("background", 'rgba(0, 0, 0, 0) url('+botUrl+'/bots/images/mic-animate.gif) repeat scroll 50% 50% / 100% padding-box border-box');
        //     startRecording();
            // setTimeout(function(){
              // 		if(rec && rec.recording){
              // 				stopRecording();
              // 		}
              //
              // 	$('.mic').css("background", 'rgba(0, 0, 0, 0) url('+botUrl+'/bots/images/microphone.svg) repeat scroll 50% 50% / 100% padding-box border-box');
              //
              // }, 6000)
        //   }
              if(jQuery(this).find('.cls-4').hasClass('scale-up-center')) {
                      stopRecording();
                      jQuery(this).find('.cls-4').removeClass('scale-up-center');
                      jQuery(this).find('.cls-3').css('fill', '#b7b8bf');
  
              } else {
  
  
                  jQuery('.cls-4').addClass('scale-up-center');
                  jQuery(this).find('.cls-3').css('fill', '#E31836');
                  startRecording();
                setTimeout(function(){
                          if(rec && rec.recording){
                                  stopRecording();
                          }
                          jQuery('.cls-4').removeClass('scale-up-center');
                          jQuery('.cls-3').css('fill', '#b7b8bf');
                  }, 6000);
              }
  
      });
  
  
      if(bot_configurations_params.animation){
        setTimeout(function(){
            jQuery('.bot-div-page').fadeIn(600);
            jQuery('.accentureBg').css({'animation':'purpleSlideIn 0.5s cubic-bezier(.69,.17,.3,.8) 0.5s forwards'});
            jQuery('.startBotLogoImg').css({'animation':'botPopIn 0.8s cubic-bezier(.98,.1,.15,.88) 0.9s forwards'});
            //jQuery('.hiThere').css({'animation':'slideIn3 1s cubic-bezier(.12,.71,.65,.96) 2s forwards'});
            jQuery('.welcomeTxt').css({'animation':'slideIn 1s cubic-bezier(.12,.71,.65,.96) 3.2s forwards'});
            jQuery('.accentureLogo').css({'animation':'slideIn2 1.2s cubic-bezier(.12,.71,.65,.96) 2.8s forwards'});
            jQuery('.startLoader').css({'animation':'startLoader 1s cubic-bezier(.98,.1,.15,.88) 3.6s forwards'});
            setTimeout(function(){
              var temp = {
                'bid': bot_id,
                'tid': account_id,
                'emp_id': user_id,
                'region': region,
                'user_type': user_type,
                'admin': false,
                "job_id": jobId,
                "name": userName,
                "resume_id": resumeId,
                "user_id": user_id,
                "timezone": timezone,
                "cid": candidateId,
                "sll": sll,
                "all_vars": all_vars,
                // "query": pageName
              };
              socket.emit('login_event', temp);
              jQuery('.startUpScreen').fadeOut(500);}, 8000);
        }, 1000);
      } else {
        jQuery('.bot-div-page').fadeOut(200)
        jQuery('#botIconBtn').fadeIn(600);
        pageOpen = 0;
      }
  
  
  
      // jQuery(document).on('click', '#botIconBtn', function(){
      //   jQuery(this).hide();
      //   jQuery('.pageWrapper').fadeIn(600);
  
      //   if(firstCount == 0){
      //     jQuery('.accentureBg').css({'animation':'purpleSlideIn 0.5s cubic-bezier(.69,.17,.3,.8) 0.5s forwards'});
      //     jQuery('.startBotLogoImg').css({'animation':'botPopIn 0.8s cubic-bezier(.98,.1,.15,.88) 0.9s forwards'});
      //     jQuery('.hiThere').css({'animation':'slideIn3 1s cubic-bezier(.12,.71,.65,.96) 2s forwards'});
      //     jQuery('.welcomeTxt').css({'animation':'slideIn 1s cubic-bezier(.12,.71,.65,.96) 3.2s forwards'});
      //     jQuery('.accentureLogo').css({'animation':'slideIn2 1.2s cubic-bezier(.12,.71,.65,.96) 2.8s forwards'});
      //     jQuery('.startLoader').css({'animation':'startLoader 1s cubic-bezier(.98,.1,.15,.88) 3.6s forwards'});
  
  
      //     setTimeout(function(){jQuery('.startUpScreen').fadeOut(500);}, 8000);
      //     // setTimeout(function(){
      //     //   messenger.recieve('Hi there! Welcome to Accenture Hiring Assist! I am Karan and I will be helping you with ...<br/><br/>Let us get started!<br/><div class="startup_btns"><a href="javascript:void(0)" class="btn initial_btn">Dummy text</a><a href="javascript:void(0)" class="btn initial_btn">Dummy text</a><a href="javascript:void(0)" class="btn initial_btn">Dummy text</a><a href="javascript:void(0)" class="btn initial_btn">Dummy text</a></div>');
      //     // }, 8700);
      //     firstCount = 1;
      //   }
  
      // });
  
  
      jQuery(document).on('click', '.bottonnav .closebtn', function(){
          jQuery(".bottonnav").css('height', 0);
        });
  
        jQuery(document).on('mouseup', function(e){
          if(e.target !== jQuery(".bottonnav") && jQuery(".bottonnav").has(e.target).length === 0)
            jQuery(".bottonnav").css('height', 0);
        });
  
        jQuery(document).on('click', '.mob_open_initial_btns', function(){
          windowWidth = jQuery(window).innerWidth();
          if(windowWidth <= 768){
              jQuery(".bottonnav").css('height', 92);
            }else{
              jQuery(".bottonnav").css('height', 60);
            }
  
        });
  
  
  
        jQuery('.nav-icon3').click(function(){
          jQuery(this).toggleClass('open');
        });
  
        jQuery(window).on("resize", function () {
            setElementHeight();
        }).resize();
  
          jQuery(document).on('click','.alert .close',function(){
            jQuery(this).parents('.alert').fadeOut();
          });
  
        jQuery(document).on('click','.document_msg',function(){
          var doc_name = jQuery(this).attr("data-doc");
          var doc_aid = jQuery(this).attr("data-aid");
          var doc_type = jQuery(this).attr("data-type");
          var doc_path = jQuery('.downloadDoc').find("a").attr('href');
          var doc_html = '';
          if (doc_name) {
             if(doc_type == 'video') {
               // doc_html = '<div class="pdf-preview">'
                        doc_html += '<div class="inner-audio">';
                            doc_html += '<video src="'+doc_path+'" style="width: 100%;height: auto;" id="video-elm" controls>';
                                doc_html += '<p>Your browser doesn\'t support HTML5 video. Here is a <a href="'+doc_path+'">link to the video</a> instead.</p>';
                            doc_html += '</video>;'
                        doc_html += '</div>'
                    // doc_html += '</div>'
             } else if(doc_type == 'audio') {
                // doc_html = '<div class="pdf-preview">';
                   doc_html += '<div class="inner-audio">';
                       doc_html += '<audio id="audio-elm" src="'+doc_path+'" controls></audio>'
                   doc_html += '</div>';
                // doc_html += '</div>';
             } else {
               doc_html = localStorage.getItem(doc_aid);
  
             }
                if (doc_html) {
                  var docWrap = jQuery('#document_panel .document_content')
                  jQuery(docWrap).html(doc_html);
                  jQuery('#document_panel').show();
                  jQuery('#doc_name_heading').text(doc_name);
                  windowWidth = jQuery(window).innerWidth();
                if(windowWidth <= 768){
                  // jQuery('#document_panel').fadeIn(200);
                }else if(windowWidth > 800){
                  jQuery('#document_panel').css({'right': '470px'});
                }
  
                  var $container = jQuery(docWrap);
                  $container.scrollTop(0);
                  var $scrollTo = $container.find('.highlight:first');
                  if($scrollTo.length)
                  {
                      setTimeout(function(){$container.animate({
                      scrollTop: $scrollTo.position().top - 350},'slow')}, 500);
                  }
                  // var doc_path = serverUrl + url_extension+"/uploads/tenant_"+tid+"/bot_"+bid+"/"+doc_name;
                  var doc_path = jQuery('.downloadDoc').find("a").attr('href');
                  var btn = jQuery('#document_panel').find('.document_download');
                  jQuery(btn).attr('href',doc_path);
                  var vtime = jQuery(this).attr("data-media_loc");
                  if(doc_type == 'video') {
                    var vid = document.getElementById("video-elm");
                    vid.currentTime=vtime;
  
                  }
                  if(doc_type == 'audio') {
                    var vid1 = document.getElementById("audio-elm");
                    vid1.currentTime=vtime;
  
                  }
                }
  
  
            }
        });
  
        //Close notification panel
        jQuery(document).on('click', '.sidenav .closebtn', function(){
                // jQuery(".seen").fadeIn(100);
                  jQuery('.sidenav').css({'width': '0px'});
          });
  
  
  
          jQuery(document).on('click', '.notification_container', function(){
            windowWidth = jQuery(window).innerWidth();
  
              if(windowWidth > 768){
              if(windowWidth > 768){jQuery("#main").css({'margin-right': 250});}
                // jQuery('.seen').fadeOut(10);
                jQuery("#notification_panel").css('width', 250);
                jQuery('.notification_content').fadeOut(100);
              jQuery('.unread').hide();
              jQuery('.notification_container').animate({'width': '32px', 'backgroundColor': '#ccc'}, 100);
              jQuery('.notification_container').addClass('notification_container');
              }else{
                jQuery("#notification_panel").css('width', '100%');
                jQuery('.notification_container').animate({'backgroundColor': '#ccc'}, 100);
                jQuery('.unread').hide();
              }
          });
  
          // close notification panel on clicking outside
          var notificationPanel = jQuery('#notification_panel');
          var notificationPanel = jQuery('.sidenav');
          var notificationLink = jQuery('#notification_container');
          jQuery(document).mouseup(function(e){
              if (!notificationPanel.is(e.target) && notificationPanel.has(e.target).length === 0 && !notificationLink.is(e.target) && notificationLink.has(e.target).length === 0) {
                jQuery(".seen").fadeIn(100);
                jQuery("#notification_panel").css('width', 0);
  
                //to solve issue of disturbing enscrollbar on closing right panel
                jQuery('.handle3').hide();
                setTimeout(function(){
                  jQuery('.handle3').show();
                }, 700);
              }
          });
  
  
        /* SURVEY FEEDBACK RATING HANDLING */
        jQuery(document).on('click', '.ratingFacesList a:not(".disabled")', function(){
          //alert("asdfsaf");
          jQuery('.ratingFacesList a').removeClass('active');
          jQuery(this).addClass('active');
          var rateValue = jQuery(this).attr('id').replace(/\D+/,'')
          jQuery(this).parents('.survey_container').find('.userRating').val(rateValue);
          jQuery(this).parents('.survey_container').find('.smiley_feedback_sbmt').addClass('active');
        });
  
        //active survey submit button only on value selected
        jQuery(document).on('change keyup','.survey_option_container :input',function(e){
              // console.log('e.type',e.type);
  
              if(jQuery(this).context.type=='textarea' && jQuery(this).val()!='' && typeof jQuery(this).val()!='undefined'){
                jQuery(this).text(jQuery(this).val())
              }
  
              else if((jQuery(this).context.type=='checkbox') && e.type !='focusout'){
                // console.log('in checked');
                if(jQuery(this).is(':checked')){
                jQuery(this).attr('checked','checked')
                }
                else{
                jQuery(this).removeAttr('checked');
                }
              }
              else if((jQuery(this).context.type=='radio') && e.type !='focusout'){
  
                var curVal = jQuery(this).val();
  
                jQuery(this).parent('.survey_option_container :input').each(function(){
  
                  if(jQuery(this).val()==curVal)
                  {
                    if(jQuery(this).is(':checked'))
                    jQuery(this).attr('checked','checked')
                  }
                  else
                  {
                    jQuery(this).removeAttr('checked');
                  }
                })
              }
              jQuery(this).parents('.survey_container').find('.smiley_feedback_sbmt').addClass('active');
          });
  
  
        //Submit survey
        jQuery(document).on('click','.smiley_feedback_sbmt',function(){
  
            if(jQuery(this).is('.active'))
            {
            var $this = jQuery(this);
            var surveyObj = jQuery(this).parents('.submit_container').parents('.survey');
            var surveyInputs = jQuery(surveyObj).find(':input');
            var survey_opt = JSON.parse(atob(jQuery(surveyObj).find('.survey_opt').text()));
            var submitFlag = false;
            var survey_answer = new Object();
            var options = []
            var answerlist = []
            jQuery.each(surveyInputs,function(){
  
                if((jQuery(this).context.type=='textarea' || jQuery(this).context.type=='hidden') && jQuery(this).val()!='' && typeof jQuery(this).val()!='undefined'){
                  submitFlag = true;
                  answerlist.push(jQuery(this).val())
                }
                if(jQuery(this).context.type=='checkbox')
                {
                  options.push(jQuery(this).context.parentNode.innerText)
                  if(jQuery(this).is(':checked')){
                    submitFlag = true
                    answerlist.push(jQuery(this).val())
                  }
  
                }
                if(jQuery(this).context.type=='radio')
                {
                  options.push(jQuery(this).context.parentNode.innerText)
                  if(jQuery(this).is(':checked')){
                    submitFlag = true
                    answerlist.push(jQuery(this).val())
                  }
                }
            })
  
            if(submitFlag){
  
              survey_answer.options = options
              survey_answer.answerlist = answerlist
              survey_opt.survey_answer = survey_answer
              survey_opt.context_type = 'Survey'
              jQuery(this).removeClass('active').attr('disabled',true);
              survey_opt.action_flag = 'update';
              survey_opt.submitted = 2;
              //survey_opt.html_message = JSON.stringify(survey_opt);
              //console.log('\n survey response >>>>>> ',survey_opt,socket);
              socket.emit("getsurveylist", survey_opt);
            }
          }
        });
  
      /* NOTIFICATION ANIMATION ON HOVER */
      jQuery( ".notification_container" ).hover(
            function() {
              windowWidth = jQuery(window).innerWidth();
              unreadNotification = parseInt(jQuery('.unread').html());
              if(unreadNotification != 0 && windowWidth > 768){
                jQuery(this).animate({'width': '400px'}, 200);
                jQuery('.notification_content').fadeIn(100);
                jQuery('.unread').html('0');
                jQuery('.unread').hide();
  
                setTimeout(function(){
                jQuery('.notification_content').fadeOut(100);
                //jQuery('.unread').show();
                jQuery('.unread').html('0');
                jQuery('.notification_container').css({'width': '32px', 'background': '#ccc'}, 100);
  
                },3000);
                setTimeout(function(){jQuery('.notification_container').addClass('seen');}, 4000);
              }
        });
  
  
      var screenWidth = jQuery(window).innerWidth();
      var screenHeight = jQuery(window).innerHeight();
      var botcontainer = jQuery(".bot-div-page");
      var botIconBtn = jQuery('#botIconBtn');
  
      var firstCount = (bot_configurations_params.animation) ? 1 : 0;
      jQuery(document).on('click','#botIconBtn',function(){
        var screenWidth = jQuery(window).innerWidth();
        var screenHeight = jQuery(window).innerHeight();
            jQuery('#botIconBtn').hide();
            jQuery('.initial-bot-animate').removeClass('activeAnimation');
            jQuery('.initial-bot-animate').addClass('removeAnimation');
            jQuery('.initial-bot-animate').css('display', 'none');
  
            jQuery('.bot-div-page').fadeIn();
  
            var scrollAmt = jQuery('.bot-content .msg_container:last').prop('scrollHeight');
            pageOpen = 1;
            jQuery('.bot-div-page').fadeIn(600);
  
            if(firstCount == 0 && bot_configurations_params.animation){
              jQuery('.bot-div-page').fadeIn(600);
              jQuery('.accentureBg').css({'animation':'purpleSlideIn 0.5s cubic-bezier(.69,.17,.3,.8) 0.5s forwards'});
              jQuery('.startBotLogoImg').css({'animation':'botPopIn 0.8s cubic-bezier(.98,.1,.15,.88) 0.9s forwards'});
              //jQuery('.hiThere').css({'animation':'slideIn3 1s cubic-bezier(.12,.71,.65,.96) 2s forwards'});
              jQuery('.welcomeTxt').css({'animation':'slideIn 1s cubic-bezier(.12,.71,.65,.96) 3.2s forwards'});
              jQuery('.accentureLogo').css({'animation':'slideIn2 1.2s cubic-bezier(.12,.71,.65,.96) 2.8s forwards'});
              jQuery('.startLoader').css({'animation':'startLoader 1s cubic-bezier(.98,.1,.15,.88) 3.6s forwards'});
              if(bot_conf_error_msg == ''){
                setTimeout(function(){jQuery('.startUpScreen').fadeOut(500);}, 8000);
              }
              firstCount = 1;
            }
            else {
              jQuery(".startUpScreen").css("display", "none");
            }
  
            // SET SCROLL UPTO LAST MESSAGE THAT APPEARED
            scrollAmt = jQuery('.bot-content .message-wrapper:last').prop('scrollHeight');
            //jQuery('.bot-content').animate({'scrollTop':jQuery('.bot-content').prop('scrollHeight')-scrollAmt},"slow");
            jQuery('.bot-content').scrollTop(jQuery('.bot-content').prop('scrollHeight')-scrollAmt);
            initializeSlider();
  
      });
  
      jQuery(document).on('click','.minimise_btn',function(){
            jQuery('.bot-div-page').fadeOut(200);
            jQuery('.document_panel').fadeOut(200);
            jQuery('#botIconBtn').fadeIn(600);
            setTimeout(function() {
                jQuery('.initial-bot-animate').addClass('activeAnimation').removeClass('removeAnimation').show();
            }, 10000);
            pageOpen = 0;
      });
  
      jQuery(document).on('click','#bot_minimize_btn',function(){
          jQuery('.bot-div-page').fadeOut(200)
          jQuery('#botIconBtn').fadeIn(600);
        pageOpen = 0;
      });
  
      jQuery(document).mouseup(function(e){
        var botcontainer = jQuery('.bot-section-div');
        var botIconBtn = jQuery('#botIconBtn');
  
        if(typeof botIconBtn.length != 'undefined')
        {
          if (!botcontainer.is(e.target) && botcontainer.has(e.target).length === 0 && !botIconBtn.is(e.target) && botIconBtn.has(e.target).length === 0 ) {
            // alert('asdfasdf');
              if ( e.target.id == "type_options" || e.target.id == "User" || e.target.id == "Region" || e.target.className.indexOf("pika") != -1) {
                return;
              } else {
                jQuery('.bot-div-page').fadeOut(200)
                jQuery('#botIconBtn').fadeIn(600);
                pageOpen = 0;
              }
  
          }
        }
      });
  
  
  
  
        jQuery(document).on('click', '.readMoreBtn' , function(e){
          e.preventDefault();
          if(jQuery(this).text() == "Read More.."){
            jQuery(this).text('Read Less..');
            jQuery(this).parents('.bot-chat').find('.inner-bot-chat').css({'height':'auto'});
        adjustScroll();
  
          }else if(jQuery(this).text() == "Read Less.."){
            jQuery(this).text('Read More..');
            var newPos = jQuery(this).parents('.message-wrapper').prop('scrollHeight');
            jQuery(this).parents('.bot-chat').find('.inner-bot-chat').css({'height':'400px'});
        adjustScroll();
  
            // SET SCROLL TO THE ORIGINAL POSITION
            setTimeout(function(){
              var curPos = jQuery('#bot-content').scrollTop()-(newPos-200);
              jQuery('#bot-content').animate({'scrollTop':curPos},"slow");
            },50)
  
  
          }
  
        });
  
        /* CHAT HISTORY SCROLL */
        //if(jQuery('#chat-pager').is('.active'))
        //{
        jQuery('.bot-content').scroll(function(){
  
          if(jQuery('.bot-content').scrollTop() == 0 && !scroll_flag && history_found){
              if(!scroll_msg_flag){
                callChatHistory();
              }
            } else {
              scroll_flag = false;
              scroll_msg_flag = false;
            }
        });
      //}
  
      });
  
  
      socket = io.connect(serverUrl, {transports:["websocket"]});
          // var typingHtml = '<div class="typing" style="float:left; clear:both; padding-right:20px;"><div class="typingBot"><!--<img src="images/bot/icon1.png">--></div><div class="bubbles"><div class="bubble bubble1"></div><div class="bubble bubble2"></div><div class="bubble bubble3"></div><div class="bubble bubble4"></div></div><!--<img src="images/bot/typing.gif">--></div>';
  
      var stats = {
      status: true,
      nlpbot: 0,
      bot: 0,
      light: 0
      };
      var all_btn_list = [];
      String.prototype.replaceAll = function(search, replacement) { var target = this; return target.replace(new RegExp(search, 'g'), replacement); };
  
      function createButton(data) {
        //console.log("data===========", data);
        var btnhtm = ''
        var btn_query = ''
  
        // if (data.buttons) {
        //  if (data.buttons.length > 0) {
        //    if (data.answer != "") {
        //      btn_query = data.answer
        //    }
        //    for (var i = 0; i < data.buttons.length; i++) {
        //        var button_value = data.buttons[i];
        //        var btnid = i;
        //        btnhtm = btnhtm + '<div style = "float:left"><button type="button" data-value="' + button_value + '" data-aid="'+data.aid+'"  data-key="' + btnid + '" class = "btn-flat2 btn-options">' + button_value + '</button></div>';
        //    }
        //  }
        // }
          if (data.buttons) {
          if (data.buttons.length > 0) {
            if (data.answer != "") {
              btn_query = data.answer
            }
            if(data.source && data.source == "recommendation"){
              for (var i = 0; i < data.buttons.length; i++) {
                var button_value = data.buttons[i];
                var btnid = i;
                btnhtm = btnhtm + '<div style = "clear:both;"><button type="button" data-value="' + button_value + '" data-aid="'+data.aid+'"  data-key="' + btnid + '" class = "btn-flat2 btn-options">' + button_value + '</button></div>';
              }
            }else{
              for (var i = 0; i < data.buttons.length; i++) {
                var button_value = data.buttons[i];
                var btnid = i;
                btnhtm = btnhtm + '<div style = "float:left"><button type="button" data-value="' + button_value + '" data-aid="'+data.aid+'"  data-key="' + btnid + '" class = "btn-flat2 btn-options">' + button_value + '</button></div>';
              }
  
            }
  
          }
        }
        var htm = '';
        htm = '<div>' + btn_query + '<br/>' + btnhtm + '<br/><br/></div>';
        //htm +=  checkToIncludeConfidenceScore(data);
        htm +=  checkToIncludeLikeDislikeHtml(data);
        return htm;
      }
  
      function create_query(btn_val, key, btn_qry, question){
        var str = btn_val;
  
      var que = question;
      var org_que = que.split(" ");
      var key = key.split(" ")[1];
      var rep_data = btn_val;
      if(que.indexOf(key) !== -1 && (key != 'ecard' || key != 'card')){
          str = que.replace(que.substr(que.indexOf(key), key.length), rep_data);
      }else{
          str = que + " " + btn_val;
      }
  
        return str;
      }
  
  
      function receiveMessage(received_obj) {
      if (checkObject(received_obj)) {
        if (received_obj.notification_data) {
          HandleNotification(received_obj);
        } else {
          if (received_obj.hasOwnProperty("suggestions") && received_obj.suggestions === true) {
            messenger.recieve(received_obj.response_text);
          } else {
            if (received_obj.answer_text) {
              if (received_obj.type && received_obj.type == "user") {
                messenger.send(received_obj.answer_text);
              } else {
                var channel;
                if (received_obj.channel) {
                  channel = received_obj.channel;
                }
                messenger.recieve(urlify(received_obj.answer_text, channel));
              }
  
            } else {
              var channel;
              if (received_obj.channel) {
                channel = received_obj.channel;
              }
              messenger.recieve(urlify(received_obj.response_text, channel));
            }
  
  
          }
        }
      }
  
  
      }
  
      function TimestampGenerator() {
        var date = new Date();
        var timestamp = date.toString("dd MMM yyyy hh:mm:ss");
        date = new Date(timestamp);
        var time_stamp = date.getTime();
        return time_stamp;
      }
  
      function getMessageObj(){
        var text = jQuery('#input').val().replace(/\n/, '');
        text = text.replace(/</g,'&lt;')
        text = text.replace(/>/g,'&gt;')
        if (text.trim() !== '') {
          var time_stamp = TimestampGenerator();
  
          var user = user_type;
          var emp_id = user_id;
  
          var dataTosSend = {
            'query': text,
            'timestamp': time_stamp,
            'bid': bid,
            'tid': tid,
            'channel': 'ui',
            'emp_id': emp_id,
            'region': region,
            'user_type': user,
            'admin' : false
          };
          return dataTosSend;
        }else{
          console.log("blank text!");
        }
      }
  
      //check conversation possibility before sending messages
      function checkConversationPossibility(){
        var obj = {};
        obj = getMessageObj();
        // console.log("obj >>", obj);
        obj["job_id"] = jobId;
        obj["name"] = userName;
        obj["resume_id"] = resumeId;
        obj["user_id"] = user_id;
        obj["user_type"] = user_type;
        obj["cid"] = candidateId;
        obj["sll"] = sll;
        obj["all_vars"] = all_vars;
        socket.emit("checkIsConversationPossible", obj);
      }
  
      function showError(msg){
        buildMessageNotification('alert-danger', 'Error', msg);
      }
  
      function buildMessageNotification(classname, msgtype ,msg){
        var msgDivLength = jQuery(".fixedAlert").length;
        if(msgDivLength == 0){
          jQuery('.bot-div-page').prepend('<div class="fixedAlert"></div>');
        }
        jQuery(".fixedAlert").prepend('<div class="alert '+classname+' alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>'+msgtype+'! </strong> '+msg+' </div>');
        notificationTimeout(5000);
      }
  
      function notificationTimeout(wait){
        setTimeout(function(){
              jQuery('.fixedAlert').children('.alert:last-child').remove();
          }, wait);
  
      }
  
      /* CREATE NOTIFICATION */
  
      function createNotification(chatObj){
                  jQuery('.unread').html('0').hide(); // HIDE TOTAL NOTIFICATIONS INITIALLY
  
                   if(chatObj.notification.length)
                   {
                     // console.log('chatObj.notification',chatObj.notification);
  
                     // APPEND HTML IN REVERSE ORDER TO GET LATEST ONE ON TOP
                     var newNotes = chatObj.notification[0].new;
                     var totNote = newNotes.length;
                     var i = 0;
                     var historyNote = chatObj.notification[0].historical;
                     var totHistoryNote = historyNote.length;
                     var j = 0;
                     var strL = chatObj.notification[0].start;
                     var remainL = chatObj.notification[0].left;
                     var countL = chatObj.notification[0].count;
                     // IF THERE ARE NEW NOTIFICATIONS EMPTY THE NOTIFICATION CONTAINER
                     if(totNote>0 || chatObj.initial_flag==1){
                     jQuery('.detail_notification').not(':last').remove();
  
                     if(jQuery('.note-pager').length)
                        jQuery('.note-pager').attr('rel','1');
                    }
  
                     while(i<totNote)
                     {
                        if(i>chatObj.notification[0].end)
                          break;
  
                        var tmpHtml = jQuery(botNotificationHtml);
                        var curText = newNotes[i].text;
                        var chatTime = TimestampGenerator();
                        jQuery(tmpHtml).find('.bullet').after(curText);
                        jQuery(tmpHtml).find('.time').html(chatTime);
  
                        jQuery('.detail_notification:first').before(tmpHtml);
  
                        if(i==(totNote-1))
                          jQuery('.notification_content').html(curText);
  
                        i++;
                     }
  
                     while(j<(totHistoryNote-totNote))
                     {
                        var tmpHtml = jQuery(botNotificationHtml);
                        var curText = historyNote[j].text;
                        jQuery(tmpHtml).find('.bullet').after(curText);
                        jQuery(tmpHtml).find('.time').html(chatTime);
  
                        jQuery('.detail_notification:last').before(tmpHtml);
  
                        j++;
                     }
  
                     if((remainL)>0)
                     {
                      var userData = new Object();
                      userData.emp_id = chatObj.emp_id;
                      //userData.user_id = chatObj.notification[0].user_id;
  
                      if(!jQuery('.note-pager').length){
  
                        jQuery('.notificationList').after('<span id="note-pager" class="note-pager active" title="View more" data="'+countL+'" rel="1" data-rel="'+btoa(JSON.stringify(userData))+'"><span id="load-text">Load more</span></span>');
                      }
                      else
                      {
                        jQuery('.note-pager').attr('data',countL);
                        jQuery('.note-pager').attr('data-rel',btoa(JSON.stringify(userData)));
  
                      }
                    }
                    // else if(jQuery('.note-pager').length){
                    //   jQuery('.note-pager').removeClass('active');
                    // }
  
                    setTimeout(function(){
  
                        //jQuery('#load-text').html('Load more');
  
                        if(remainL>0){
                        jQuery('.note-pager').removeClass('active');
                        jQuery('.note-pager').show();
                      }
  
                        if(jQuery('.detail_notification:last').prev('.detail_notification').length)
                        {
                        var targetScroll = jQuery('.detail_notification:last').prev('.detail_notification').position();
                        jQuery('.notificationList').animate({'scrollTop':targetScroll.top},500);
                        }
                      },1000)
  
                     if(totNote>0){ // UPDATE ICON IF MORE THAN 0 NEW NOTIFICATIONS
                     jQuery('.unread').html(totNote).show();
                     addNotification();
                     addNotification2();
                    }
            }
  
            if(totNote>0)
            updateNotification(chatObj);
      }
  
  
  
      function appendMessage(query){
  
        messenger.send(query);
        $input.val('');
        //disable button options (if any prev button options is enabled when user submit new query)
        jQuery(".btn-options").attr("disabled", "disabled");
        $input.val($input.val().replace(/^\s*(\n)\s*$/, ''));
        if (window.innerWidth >= 300 && window.innerWidth <= 900) {
          jQuery('#input').blur();
        } else {
          $input.focus();
        }
      }
  
      socket.on('get_doc', function(data) { //connected event
  
          //console.log("\n data = ",data);
          var doc = data.html_data;
          var link = data.link;
  
          if(doc){
  
              var docWrap = jQuery('#document_panel .document .doc_content')
              jQuery(docWrap).html(doc);
  
              windowWidth = jQuery(window).innerWidth();
            if(windowWidth <= 768){
              jQuery('#document_panel').css({'width': '100%'});
            }else if(windowWidth > 768 && windowWidth <= 992){
              jQuery('#document_panel').css({'width': 'calc(100% - 120px)'});
            }else if(windowWidth > 992){
              jQuery('#document_panel').css({'width': 'calc(100% - 170px)'});
            }
  
              var $container = jQuery(docWrap);
              $container.scrollTop(0);
              var $scrollTo = $container.find('.highlight:first');
              if($scrollTo.length)
              {
                  setTimeout(function(){$container.animate({
                  scrollTop: jQueryscrollTo.position().top - 350},'slow')}, 500);
              }
              var btn = jQuery('#document_panel').find('.docuent_download');
              jQuery(btn).attr('href',link);
          }
      });
  
  
  
      function updateBotLogoImg(imgurl) {
        var styletag = jQuery("<style type='text/css'></style>");
        var stylestr = ".bot-section-div .message-wrapper .circle-wrapper{ background:#fefefe url(../" + imgurl + ")  center center no-repeat!important }";
        stylestr += " .bot-section-div .typingBot{ background:#fefefe url(../" + imgurl + ")  center center no-repeat!important }";
        jQuery(styletag).html(stylestr);
        jQuery("head").append(styletag);
      }
  
  
  
      //load all the required information and display in dropdown
      socket.on("showAllBotChatInfo", function (data) {
        // console.log(data);
        if (data.code == 400) {
          showError(data.msg);
        } else {
          // var publish_list = data.user_type.sort(compFuncIgnoreCase);
          // createPublishList(publish_list);
          // var region_list = data.region.sort(compFuncIgnoreCase);
          // createRegionList(region_list);
          // var emp_list = data.emp_list.sort(compFunc);
          // createEmpIdList(emp_list);
          var imgurl = '';
          if (data.defaultLogo == 'NO')
            imgurl = "/uploads/tenant_" + data.tid + "/bot_" + data.bid + "/" + data.logo;
          if (data.defaultLogo == 'YES')
            imgurl = "/images/" + data.logo;
          updateBotLogoImg(imgurl);
        }
      });
  
  
  
      //if conversation is possible then only send messages
      socket.on("checkIsConversationPossibleStatus", function(data){
        //console.log(data);
        if(data.code == 400 || data.code == 500){
          showError(data.msg);
        }else{
          //sendMessage();
        }
      });
      function createOptions(id, data){
        var html = '<select id="'+id+'">';
        html += '<option value="" >Select '+id+'</option>';
        for (var row in data) {
          html += '<option value="'+data[row]+'" >'+data[row]+'</option>';
        }
        html+="</select>";
        return html;
      }
  
  
      function setOptions(data){
        var html = "";
        if (checkObject(data)) {
          if (checkObject(data.region)) {
               html += createOptions("Region", data.region);
  
          }
          if (checkObject(data.user_type)) {
              html += createOptions("User", data.user_type);
          }
          if(jQuery("#type_options").length){
              jQuery("#type_options").html(html);
          }
        }
      }
  
      socket.on("set_options", function(data){
        setOptions(data);
      });
      //set chat history
        socket.on("set_user_chat_history_ui", function (data) {
            if(data.data){
              console.log("fffffffff",data, historyOffset);
        //assign only for 1st time history loaded
        if(historyOffset == 0){
          activate_form = (data.activate_form) ? data.activate_form : false;
        }
  
        history_flag = true;
              createChats(data.data);
              // var chatTimeWrapper = formatAMPM(data.time*1000);
            }
  
        });
  
        //to create chat history
        function createChats(data){
          if (checkObject(data)) {
            history_found = true;
            for(var i=0; i< data.length; i++){
  
              //create bot message
              if(checkObject(data[i].answers)){
                for(var j=0; j< data[i].answers.length; j++){
                  var botMsg = {};
  
                  if(data[i].answers[j].answer != null){
                      // preserve newlines, etc - use valid JSON
                      var ans = data[i].answers[j].answer.replace(/\\n/g, "\\n")
                                   .replace(/\\'/g, "\\'")
                                   .replace(/\\"/g, '\\"')
                                   .replace(/\\&/g, "\\&")
                                   .replace(/\\r/g, "\\r")
                                   .replace(/\\t/g, "\\t")
                                   .replace(/\\b/g, "\\b")
                                   .replace(/\\%/g, " ")
                                   .replace(/\\f/g, "\\f");
                    // remove non-printable and other non-valid JSON chars
                    ans = ans.replace(/[\u0000-\u0019]+/g,"");
                  } else {
                    var ans = data[i].answers[j].answer;
                  }
  
  
  
                  //get answer object
                  var answerObj = {};
                  try {
                      answerObj = JSON.parse(ans);
                  } catch(e) {
                     // error in the above string (in this case, yes)!
                  }
  
                  // console.log('answerObj',answerObj);
  
                  //create form
                  if(answerObj && answerObj.form_data){
                    botMsg['form_data'] = answerObj.form_data;
                  }
  
                  if(answerObj  && answerObj.doc_name){
                    botMsg['doc_name'] = answerObj.doc_name;
                  }
  
                  if(answerObj && answerObj.doc_html){
                    botMsg['doc_html'] = answerObj.doc_html;
                  }
  
                  if(answerObj && answerObj.url_list){
                    botMsg['url_list'] = answerObj.url_list;
                  }
  
                  //create buttons
                  if (answerObj && answerObj.buttons.length) {
                    botMsg['buttons'] = answerObj.buttons;
                  }
  
                  // botMsg['text'] = data[i].answers[j].answer;
                  botMsg['text'] = (answerObj != null && answerObj.answer) ? answerObj.answer : "";
                  botMsg['time'] = data[i].time;
  
                  chatBuildRecieved(botMsg);
  
                }
              }
  
  
  
              //get query object
              var queryObj = {};
              //create user message
              var userMsg = {};
              try {
                  queryObj = JSON.parse(data[i].query);
              } catch(e) {
                 // error in the above string (in this case, yes)!
              }
  
              if(queryObj.query){
                userMsg['text'] = queryObj.query;
                // userMsg['text'] = data[i].query;
                userMsg['time'] = data[i].time;
                chatBuildSent(userMsg);
              }
  
            }
            if(jQuery('.div-pos-bot').length) {
  
              setTimeout(function(){
  
                jQuery(jQuery('#bot-content')).animate({
                  scrollTop: jQuery('.div-pos-bot').offset().top
                }, 1, function(){
                      jQuery('.div-pos-bot').removeClass('div-pos-bot');
                      jQuery('#bot-content').children('.message-wrapper.me').first().addClass("div-pos-bot");
  
                  } );
  
                });
              } else {
  
                jQuery('#bot-content').children('.message-wrapper.me').first().addClass("div-pos-bot");
                scrollBottom();
              }
  
              //disabled all input fields of form
              // jQuery(".bot-section-div .form_card :input").prop("disabled", true);
              // jQuery(".bot-section-div .form_container .btn").prop("disabled", true);
              // jQuery(".bot-section-div .form_container .btn").addClass("disabled");
  
              //disable read more url
              jQuery('#bot-content').children('.message-wrapper.them').find('.readMoreBtnUrl').prop("disabled", true).addClass("disabled");
  
              //disable rating emoji
              jQuery('.emoji-rating').css('cursor', 'default');
              jQuery('.emoji-rating').css('pointer-events', 'none');
  
              //disable calendar
              jQuery('.common-button-sec').addClass('disabled');
              jQuery('.custom-time-button').addClass('disabled');
              jQuery('.calendar-div').addClass('disabled');
  
              // console.log("activate", activate_form);
  
              //disable carousel cell
              // jQuery('#bot-content').find(".carousel-cell").not(".selected-slide").css('opacity', '0.5');
  
              if(activate_form){
                //activate primary buttons
                jQuery('#bot-content').children().last().find(".inital-buttons-aiexpert").css('cursor', 'pointer');
                jQuery('#bot-content').children().last().find(".inital-buttons-aiexpert").css('pointer-events', 'all');
                jQuery('#bot-content').children().last().find(".inital-buttons-aiexpert").removeClass("disabled");
  
  
                jQuery('#bot-content').children().last().find(".btn").prop("disabled", false).removeClass("disabled");
  
                //disabled all input fields of form
                jQuery('#bot-content').children().last().find(".form_card :input").prop("disabled", false);
                jQuery('#bot-content').children().last().find(".form_container .btn").prop("disabled", false);
                jQuery('#bot-content').children().last().find(".form_container .btn").removeClass("disabled");
  
                //disable read more url
                jQuery('#bot-content').children('.message-wrapper.them').last().find('.readMoreBtnUrl').prop("disabled", false).removeClass("disabled");
  
                //disable rating emoji
                jQuery('#bot-content').children().last().find('.emoji-rating').css('cursor', 'pointer');
                jQuery('#bot-content').children().last().find('.emoji-rating').css('pointer-events', 'all');
  
                //disable calendar
                jQuery('#bot-content').children().last().find('.common-button-sec').removeClass('disabled');
                jQuery('#bot-content').children().last().find('.custom-time-button').removeClass('disabled');
                jQuery('#bot-content').children().last().find('.calendar-div').removeClass('disabled');
  
                //to enable edit form if last div contains confirm
                var checkConfirmPresent = jQuery('#bot-content').children().last().find('confirm-button');
                if(checkObject(checkConfirmPresent)){
                  jQuery(".message-wrapper:nth-last-child(2)").find('input').prop('disabled',false);
                  jQuery(".message-wrapper:nth-last-child(2)").find('select').prop('disabled',false);
                }
  
                //enable confirm button is last
                jQuery('#bot-content').children().last().find('.confirm-submit-button').css('opacity', '1');
                jQuery('#bot-content').children().last().find('.confirm-submit-button').css('pointer-events', 'all');
                jQuery('#bot-content').children().last().find('input[type="checkbox"]').removeAttr('checked');
                jQuery('#bot-content').children().last().find('.checkmark').show();
              }
         } else { history_found = false; }
          scroll_flag = true;
        }
  
        socket.on('get_speech_text', function(data) {
          if(data && data.text) {
              jQuery('#input').val(data.text);
  
              jQuery('#input').focus();
  
          }
          jQuery(".typing").remove();
          jQuery('.mic').removeClass("disabled");
          if(rec) {
            rec.clear();
          }
        });
        function chatBuildRecieved(message) {
          jQuery('.typing').css('opacity',0);;
  
          // jQuery('.hiddenDiv').append(message.text);
          // HiddenDivHeight = jQuery('.hiddenDiv').height();
          var likeHtml = jQuery(".hiddenDivHtml").html();
  
          // console.log('messagedddd',HiddenDivHeight);
          //create form data
          if(message.form_data && !jQuery.isEmptyObject(message.form_data)){
            createForm(message.form_data,message, true)
          } else if(message.buttons && (message.buttons.length > 0)){ //create buttons
            createButton(message.buttons);
          } else if(checkObject(message.url_list)) {
              var msgHtml = '';
              var title=message.text ? message.text : "";
              var ans = {"url": message.url_list, "answer": title};
              // localStorage.setItem("urlList", JSON.stringify(ans));
              var tmp_url = [];
              var tmp_html = "";
  
  
              msgHtml = '<div class="bot-chat"><div class="inner-bot-chat">' + title + tmp_html + '</div>'+likeHtml+'</div>';
  
              jQuery("#bot-content").prepend(buildHTML.them(msgHtml));
              safeHistoryText(msgHtml, message.time, 1);
  
          } else if(message.text){ //create answer
            jQuery('.hiddenHistoryDiv').html(message.text);
            HiddenDivHeight = jQuery('.hiddenHistoryDiv').height();
  
  
            var msgHtml = '';
            if (HiddenDivHeight > 400 && (message.text.search('survey')<0) && (message.text.search('UrlList')<0)) {
              if (message.text.trim()) {
                msgHtml = '<div class="bot-chat"><div class="inner-bot-chat" style="height: 400px; overflow:hidden">' + message.text + '</div><a href="javascript:void(0);" class="readMoreBtn">Read More..</a>'+likeHtml+'</div>';
              }
            } else {
              msgHtml = '<div class="bot-chat"><div class="inner-bot-chat">' + message.text + '</div>'+likeHtml+'</div>';
              myclick = jQuery('#myclick');
            }
  
            message.text = msgHtml;
            jQuery("#bot-content").prepend(buildHTML.them(message.text));
  
            if (message.doc_name && message.doc_html) {
                localStorage.setItem(message.doc_name, message.doc_html);
                var docName = checkDocumentName(message);
                jQuery("#bot-content").children(".message-wrapper").first().append(docName + '<div class="clear"></div>');
            }
  
            safeHistoryText(message.text, message.time, 1);
  
          }
  
          jQuery('.hiddenHistoryDiv').html('');
          jQuery('.hiddenDivHtml').html('');
  
          //set selected time slot
          jQuery('.custom-time-button').each(function(){
              if(jQuery(this).attr('data-id') == selectedTime){
                jQuery(this).addClass('active');
              }
            });
  
          var old_offset = jQuery("#bot-content").prop('scrollHeight');
        }
  
        function safeHistoryText(text,time){
          var newTime = new Date(time * 1000).toLocaleString('en-US', dateFormatOptions)
          var newText = replaceEmoticons(text);
  
          // jQuery("#bot-content").find('.message-wrapper').last().find('.text-wrapper').html(text + '<div class="rightCorner"></div>');
          jQuery("#bot-content").find('.message-wrapper').first().find('.text-wrapper').html(newText + '<div class="rightCorner"></div>');
          jQuery("#bot-content").find('.message-wrapper').first().find('.time-div').html(newTime);
          // jQuery("#bot-content").find('.them').first().find('.text-wrapper').addClass('bounceIn').addClass('animated');
          // jQuery("#bot-content").find('.me').first().find('.text-wrapper').addClass('bounceIn').addClass('animated');
  
        }
  
        function chatBuildSent(message) {
            var old_offset = jQuery("#bot-content").prop('scrollHeight');
  
            //console.log(' in history scroll send 1',history);
            jQuery('#bot-content').prepend(buildHTML.me(message.text));
            // console.log("buildHTML.me(message.text)", buildHTML.me(message.text));
  
            jQuery('.typing').css('opacity',0);;
  
            if(message.time){
              safeHistoryText(message.text, message.time, 1);
            } else {
              safeHistoryText(message.text, getCurrentTime(), 1);
            }
  
        }
  
        socket.on("attachment_ack", function (data) {
          if(data && data.path) {
            jQuery("input[type='text'][name='"+data.f_name+"']").val(data.path);
          }
          jQuery("input[type='text'][name='"+data.f_name+"']").siblings().find('.loader_main_overlay').remove();
          jQuery('.submit_container').find('a.form_dynamic').attr('disabled',false);
  
        });
  
      socket.on("send_notification", function(data) {
        var msg;
        if(data.bid == bid) {
          data.message_text = data.message_text.replace(/&lt;/g,'<')
          data.message_text = data.message_text.replace(/&gt;/g,'>')
  
         messenger.recieve(data.message_text);
        }
      });
      socket.on("bot_message", function (data) {
        if(bot_configurations_params.autocomplete || true){
            if(server_canvas === 0){
                server_canvas = data.canvas_id;
                server_train_publish = data.train_or_publish;
                //init_typehead();
            }
        }
  
  
        var msg;
        history_flag = false;
        // if (data.initial_msg) {
        //  msg = data.initial_msg;
        // }
        if(data.query){
          appendMessage(data.query);
          lastAnswer = false;
          if(jQuery('.bot-ans-scroll').length) {
  
            jQuery('.bot-ans-scroll').removeClass('bot-ans-scroll');
          }
        }
        else if (data.buttons && data.buttons.length) {
          msg = createButton(data);
        } else if (data.answer) {
          if (data.flag && !initial_flag) {
            data.answer = data.answer.replace(/&lt;/g,'<')
            data.answer = data.answer.replace(/&gt;/g,'>')
  
           msg = createAnswer(data);
         }
  
        }
        else if (data.context_type && data.context_type.toLowerCase()=='survey') {
  
          // console.log('data in survey',data);
  
          if(data.action=='update' && data.submitted==2){
             //if(parseInt(data.error)>0)
              msg = data.msg;
              disableSurvey(data);
          }
          else{
          msg = createSurvey(data);
          }
        }
        else if (data.context_type && data.context_type.toLowerCase()=='notification')
        {
            // console.log('\n data in notification',data);
            createNotification(data);
        }
        else if (data.form_data)
        {
            // console.log('\n data in notification--------------',data);
            activate_form = true;
            createForm(data.form_data, data, false);
        }
  
        if(data.delay) {
            if(!jQuery('.typing').length) {
              jQuery('#bot-content').append(typingHtml);
            }
              setTimeout(function () {
                var old_offset = jQuery("#bot-content").prop('scrollHeight');
                scrollBottom(old_offset);
              }, 50);
  
            setTimeout(function(){
                  jQuery(".typing").remove();
                  messenger.recieve(msg);
                  if(data.audio) {
                    playSound(data.audio);
                  }
            }, timeout);
            timeout = timeout + 2000;
        } else {
          timeout = 0
  
            if(data.answer && data.answer.indexOf('main-carousel') !==-1) {
          jQuery(".typing").remove();
              var tmp = jQuery(msg).find('.form_container').addClass('sliderButtonDiv carousel-sliderright')
  
              // msg = .outerHTML
  
  
              jQuery('.bot-content').append(tmp);
          initializeSlider()
       setTimeout(function () {
                var old_offset = jQuery("#bot-content").prop('scrollHeight');
                scrollBottom(old_offset);
              }, 50);
  
  
            } else if(data.type_response == "graph"){ //changes for graph Prerana 24-8-2020
              messenger.recieve(msg);
              setTimeout(() => {
  
                drawPerformanceAppraisalChart(JSON.parse(data.answer),data.aid);
                var old_offset = jQuery("#bot-content").prop('scrollHeight');
                adjustScroll();
                setTimeout(function () {
                      scrollBottom(old_offset);
                }, 50);
  
            }, 50);
  
          } else if(data.type_response == "calendar"){ //changes for calendar Prerana 24-8-2020
              messenger.recieve(msg);
              showAttendanceCalendar(JSON.parse(data.answer),data.aid);
                      var old_offset = jQuery("#bot-content").prop('scrollHeight');
                      adjustScroll();
                      setTimeout(function () {
                            scrollBottom(old_offset);
                      }, 50);
  
            } else {
              messenger.recieve(msg);
            }
  
      if (data.doc_name && data.doc_html) {
      //localStorage.setItem(data.doc_name, data.doc_html);
      localStorage.setItem(data.aid, data.doc_html);
      var docName = checkDocumentName(data);
      jQuery('.message-wrapper:last').append(docName + '<div class="clear"></div>');
      }
  
          if(data.audio) {
            playSound(data.audio);
          }
        }
  
        if(data.url_list && data.url_list.length){
          if(data.url_list[0].link){
            loadPage(data.url_list[0].link);
          }
  
       }
  
       if (data.common_sense && checkObject(data.common_sense)) {
  
        var docName = showInsights(data);
        // jQuery('#bot-content').append(docName);
        jQuery('.message-wrapper:last').append(docName + '<div class="clear"></div>');
  
    }
  
  })
  
      //added function for calendar & graph Prerana 18-8-2020
      function dynamicColors () {
       var r = Math.floor(Math.random() * 256);
       var g = Math.floor(Math.random() * 256);
       var b = Math.floor(Math.random() * 256);
       var clr = {};
         clr.bgcolor = "rgb(" + r + "," + g + "," + b + ",0.2)";
         clr.bordercolor = "rgb(" + r + "," + g + "," + b + ",1)";
       return clr;
    }
  
      //added function for calendar & graph Prerana 18-8-2020
      function drawPerformanceAppraisalChart(graphData, chartIdName) {
      jQuery('#performanceAppraisalChart'+chartIdName).show();
  
      if(graphData){
        var xlabels = graphData.xAxisValues;
        var yseries = graphData.labels;
        var bgcolorArr = [];
        var bordercolorArr = [];
        var len = graphData.xAxisValues.length;
        for(let i = 0; i < len; i++){
          var clrObj = dynamicColors();
          bgcolorArr[i] = clrObj.bgcolor;
          bordercolorArr[i] =clrObj.bordercolor;
        }
  
         var ctx = document.getElementById('performanceAppraisalChart'+chartIdName);
         var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
          labels: xlabels,
            datasets: [{
              data: yseries,
            backgroundColor: bgcolorArr,
              borderColor: bordercolorArr,
            borderWidth: 1
            }]
        },
        options: {
            responsive: true,
          legend: {
               display: false
  
          },
            scales: {
            yAxes: [{
               ticks: {
                      beginAtZero: true
               }
            }]
          }
        }
      });
      }
    }
  
    function showAttendanceCalendar(attendance_data,aid){
      var idname = "showAttendanceCalender"+aid;
      var calendarEl = document.getElementById(idname);
      jQuery('#'+idname).show();
      if(calendarEl){
      // var month = attendance_data.calendar_data.month;
      // var year = attendance_data.calendar_data.year;
      // var dt = year+'-'+month+'-01';
      var dt = attendance_data[0]['date'];
      var dateString = new Date(dt);
      var evtArr = [];
      var colorData = attendance_data;
      var clrArr = {
        mLeave:'#3c00ff',
        mAbsent:'#ff0000',
        mPresent:'#168800',
        mWO:'#00baff',
        mHalfLeave:'#FF99FF',
        mHalfPresent:'#CCCCFF',
        mWorkedOnWeekOff:'#FFFACD',
        mAR:'#26D574',
        mHol:'#ff9600',
        mWorkedOnHoliday:'#BEBE07',
        mMultiple:'#cbcd40',
        Empty:'#cbc9ca'
      }
      for (var i = 0; i < colorData.length; i++) {
        var evt = {};
        evt.title= colorData[i]['status'];
        evt.start= colorData[i]['date'].split('T')[0];
        evt.overlap= false;
        //evt.rendering= 'background';
        let v = colorData[i]['color'];
        evt.color= clrArr[v];
        evtArr.push(evt);
      }
  
        var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'interaction', 'dayGrid' ],
        defaultView: 'dayGridMonth',
        defaultDate: dateString,
        header: {
          left: '',
          center: 'title',
          right: ''
        },
        events: evtArr
      });
      calendar.render();
      }
    }
  
  
      function sendMessage() {
      var text = jQuery('#input').val().replace(/\n/, '');
      //inital();
      if (stats.status === true) {
        console.log("sending message sekhar ");
  
        if (text.trim() !== '') {
          var time_stamp = TimestampGenerator();
          var dataTosSend = {
            'query': text,
            'timestamp': time_stamp,
            'bid': bid,
            'channel': 'ui',
            'emp_id': user_id,
            'region': region,
            'user_type': user_type,
            "job_id" : jobId,
            "name" : userName,
            "resume_id" : resumeId,
            "user_id" : user_id,
            "cid" : candidateId,
            "sll" : sll,
            "all_vars" : all_vars
          };
  
          socket.emit('user_message', dataTosSend);
          messenger.send(text);
          jQuery('#input').val('');
  
          //disable button options (if any prev button options is enabled when user submit new query)
          jQuery(".btn-options").prop("disabled", "disabled");
          jQuery('#input').val(jQuery('#input').val().replace(/^\s*(\n)\s*$/, ''));
          jQuery('#input').focus();
          //resetRadio();
          jQuery("input.company_list").attr("disabled", true);
  
        }
      } else {
        //inital();
        jQuery('#input').val('');
  
        jQuery('#input').val(jQuery('#input').val().replace(/^\s*(\n)\s*$/, ''));
        jQuery('#input').focus();
        console.log("\n Communication status is offline!!!");
  
      }
      }
      function showInsights(data){
        var html = '';
        if(checkObject(data)){
          if(data.doc_html) {
            delete data.doc_html;
          }
          html = '<div class="insights" data-info="'+btoa(JSON.stringify(data))+'">Click to view insights</div></div>';
        }
        return html;
    }
      function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
      }
  
      var Messenger = function () {
      function Messenger() {
        _classCallCheck(this, Messenger);
        this.messageList = [];
        this.deletedList = [];
        this.me = 1; // completely arbitrary id
        this.them = 5; // and another one
        this.onRecieve = function (message) {
          return console.log('Recieved: ' + message.text);
        };
        this.onSend = function (message) {
          return console.log('Sent: ' + message.text);
        };
        this.onDelete = function (message) {
          return console.log('Deleted: ' + message.text);
        };
      }
  
      Messenger.prototype.send = function send() {
        var text = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  
        text = this.filter(text);
  
        if (this.validate(text)) {
          var message = {
            user: this.me,
            text: text,
            time: new Date().getTime()
          };
  
          this.messageList.push(message);
  
          this.onSend(message);
        }
      };
  
      Messenger.prototype.recieve = function recieve() {
        var text = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  
        text = this.filter(text);
  
        if (this.validate(text)) {
          var message = {
            user: this.them,
            text: text,
            time: new Date().getTime()
          };
  
          this.messageList.push(message);
  
          this.onRecieve(message);
        }
      };
  
      Messenger.prototype.delete = function _delete(index) {
        index = index || this.messageLength - 1;
  
        var deleted = this.messageLength.pop();
  
        this.deletedList.push(deleted);
        this.onDelete(deleted);
      };
  
      Messenger.prototype.filter = function filter(input) {
        var output = input.replace('bad input', 'good output'); // such amazing filter there right?
        return output;
      };
  
      Messenger.prototype.validate = function validate(input) {
        return !!input.length; // an amazing example of validation I swear.
      };
  
      return Messenger;
      }();
  
  
      var BuildHTML = function () {
      function BuildHTML() {
        _classCallCheck(this, BuildHTML);
  
        this.messageWrapper = 'message-wrapper';
        this.circleWrapper = 'circle-wrapper';
        this.textWrapper = 'text-wrapper';
  
        this.meClass = 'me';
        this.themClass = 'them';
      }
      //<div class="time">2.00 PM</div>
      BuildHTML.prototype._build = function _build(text, who) {
  
        // return '<div class="' + this.messageWrapper + ' ' + this[who + 'Class'] + '">\n              <div class="' + this.circleWrapper + ' animated"><div class="status"></div><div class="time-div">09: 30 pm</div></div>\n              <div class="' + this.textWrapper + '"></div>\n            <div class="clear"></div></div>';
        return '<div class="' + this.messageWrapper + ' ' + this[who + 'Class'] + '">\n              <div class="' + this.circleWrapper + ' animated"><div class="status"></div></div>\n              <div class="' + this.textWrapper + '"></div><div class="time-div">09: 30 pm</div>\n            <div class="clear"></div></div>';
      };
  
      BuildHTML.prototype.me = function me(text) {
        return this._build(text, 'me');
      };
  
      BuildHTML.prototype.them = function them(text) {
        return this._build(text, 'them');
      };
  
      return BuildHTML;
      }();
  
      /*
      * get current time for append msgs
      * params null
      * return curent time string
      */
      function getCurrentTime() {
      var date = new Date();
      //var timestamp = date.toLocaleString('en-US', {
      //  hour: 'numeric',
      //  minute: 'numeric',
      //  hour12: true
      //});
      var timestamp = date.toLocaleString('en-US', {});
      return timestamp;
      }
  
      function scrollBottom(old_offset) {
      //console.log("scroll to bottom", old_offset);
      if (jQuery('.bot-ans-scroll').length) {
        // var scr = jQuery("#bot-content").find('.bot-ans-scroll').last().offset().top - jQuery("#bot-content").find('.bot-ans-scroll').last().parents().find('.message-wrapper').last().parent().offset().top + jQuery("#bot-content").find('.bot-ans-scroll').last().parents().find('.message-wrapper').last().parent().scrollTop();
        //changes scr value Prerana 6-8-2020
        var scr = jQuery('.bot-content').prop('scrollHeight');
  
        // var scr = jQuery('.bot-ans-scroll').offset().top;
        jQuery(jQuery('#bot-content')).animate({
          // scrollTop: scr - 200
          scrollTop: scr - 50 //changed Prerana 6-8-2020
        }, 300);
  
      } else {
        if (jQuery("#bot-content").find(".message-wrapper:last").length) {
          var pos = jQuery("#bot-content").find('.message-wrapper').last().offset().top - jQuery("#bot-content").find('.message-wrapper').last().parent().offset().top + jQuery("#bot-content").find('.message-wrapper').last().parent().scrollTop();
          jQuery(jQuery('#bot-content')).animate({
            scrollTop: pos
          }, 1);
        }
      }
      }
  
  
      function buildSent(message) {
      var old_offset = jQuery("#bot-content").prop('scrollHeight');
  
      //console.log(' in history scroll send 1',history);
      jQuery('#bot-content').append(buildHTML.me(message.text));
      jQuery(".typing").remove();
  
      safeText(message.text, getCurrentTime());
      jQuery('#bot-content').append(typingHtml);
      adjustScroll();
  
      setTimeout(function () {
        scrollBottom(old_offset);
      }, 50);
  
      }
  
      function adjustScroll() {
  
       if (jQuery('#bot-content').innerHeight() >= jQuery('.chat_wrapper').innerHeight()) {
         jQuery('#bot-content').css("overflow-y", "auto");
      } else {
        //jQuery('#bot-content').css("overflow", "hidden");
  
      }
      }
      function buildRecieved(message) {
  
      jQuery(".typing").remove();
  
      jQuery('.hiddenDiv').append(message.text);
      HiddenDivHeight = jQuery('.hiddenDiv').height();
      var likeHtml = jQuery(".hiddenDivHtml").html();
  
      // console.log('message',message);
  
      var msgHtml = '';
      var className = '';
      if (!lastAnswer) {
        className = 'bot-ans-scroll';
      }
      if (HiddenDivHeight > 400 && (message.text.search('survey')<0)) {
        if (message.text.trim()) {
          msgHtml = '<div class="bot-chat '+className+'"><div class="inner-bot-chat" style="height: 400px; overflow:hidden">' + message.text + '</div><a href="javascript:void(0);" class="readMoreBtn">Read More..</a>'+likeHtml+'</div>';
        }
      } else {
        msgHtml = '<div class="bot-chat '+className+'"><div class="inner-bot-chat">' + message.text + '</div>'+likeHtml+'</div>';
        myclick = jQuery('#myclick');
      }
      message.text = msgHtml;
      jQuery('.hiddenDiv').html('');
      jQuery('.hiddenDivHtml').html('');
      var old_offset = jQuery("#bot-content").prop('scrollHeight');
  
      jQuery("#bot-content").append(buildHTML.them(message.text));
  
      safeText(message.text, getCurrentTime());
  
      adjustScroll();
  
      setTimeout(function () {
        scrollBottom(old_offset);
        jQuery(".readMoreBtn").siblings('.feedback_container').addClass("feedbackMargin");
      }, 50);
      lastAnswer = true;
  
      }
  
      var messenger = new Messenger();
      var buildHTML = new BuildHTML();
  
      messenger.onSend = buildSent;
      messenger.onRecieve = buildRecieved;
  
  
      var $input = jQuery('#input');
      var $send = jQuery('#send');
      // var jQuery('#bot-content') = jQuery('#bot-content');
      var $inner = jQuery('#inner');
      var myclick = jQuery('#myclick');
  
  
  
      jQuery(document).on('click','#send', function (e) {
        var text_val = jQuery('#input').val();
        if (text_val != "") {
          if (window.innerWidth >= 300 && window.innerWidth <= 900) {
            jQuery(this).blur();
          }
          //sendMessage();
          checkConversationPossibility();
        }
      });
  
  
      jQuery(document).on('keyup', '#input',function (e) {
      var key = e.which || e.keyCode;
  
      if (key === 13) {
        if (window.innerWidth >= 300 && window.innerWidth <= 900) {
          jQuery(this).blur();
        }
        // enter key
        e.preventDefault();
        if (!jQuery('.dropdown-menu').is(":visible")) {
          if(jQuery(this).val().trim() !== ""){
           console.log("input not null");
             checkConversationPossibility();
  
           }
        } else if(jQuery('.dropdown-menu').is(":visible") && !jQuery('.dropdown-menu').find(".active").length){
            if(jQuery(this).val().trim() !== ""){
             console.log("input not null");
               checkConversationPossibility();
  
             }
        }
  
      }
      });
  
      jQuery(document).on('click','.upvote',function(){
        var btn_val = jQuery(this).attr('data-val');
        var aid = jQuery(this).attr('data-aid');
        var qid = jQuery(this).attr('data-qid');
        // jQuery(this).css('background-image', 'url('+serverUrl + url_extension+'/bot/image/thumbs-up_2.png)');
        // jQuery(this).next('.downvote').css('background-image', 'url('+serverUrl + url_extension+'/bot/image/thumbs-down_1.png)');
        jQuery(this).addClass('selected');
        jQuery(this).next().removeClass('selected');
        optionsFeedback(qid, aid, btn_val);
        });
  
  
        jQuery(document).on('click','.downvote',function(){
          var btn_val = jQuery(this).attr('data-val');
          var aid = jQuery(this).attr('data-aid');
          var qid = jQuery(this).attr('data-qid');
          // jQuery(this).css('background-image', 'url('+serverUrl + url_extension+'/bot/image/thumbs-down_2.png)');
          // jQuery(this).prev('.upvote').css('background-image', 'url('+serverUrl + url_extension+'/bot/image/thumbs-up_1.png)');
          jQuery(this).addClass('selected');
          jQuery(this).prev().removeClass('selected');
          optionsFeedback(qid, aid, btn_val);
        });
  
        jQuery(document).on('click', '.btn-options', function(){
          var btn_value  = jQuery(this).attr('data-value');
          var btn_key  = jQuery(this).attr('data-aid');
          var btn_qry  = jQuery(this).attr('data-qry');
          //var question = jQuery('#bot-content').find('.me').last().find('.text-wrapper').text();
          var question = btn_qry;
          jQuery('.btn-options').prop("disabled", "disabled");
          jQuery(this).addClass("clicked");
      var corpus = jQuery(this).attr('data-corpus');
          btn_click(btn_value, btn_key, btn_qry, question,corpus);
      });
  
      function btn_click(btn_value, question){
        jQuery('#input').val(btn_value); //set selected value in input box field
        checkConversationPossibility();
      }
      var compFuncIgnoreCase = function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      };
  
      function init_typehead() {
        jQuery.get("/assist/faqs/"+server_train_publish+"/"+tid+"_"+bid+"/"+server_canvas+"/autocomplete_en.json", function(data, status){
          var typeHeadQueries = data;
          var key = region + "_" + user_type;
          //console.log("key", key);
          function extractor(query) {
            var result = /[^ ]+\s+[^ ]+\s?$/.exec(query);
            if(result && result[0]){
              result[0] = result[0].replace(/\s+/g," ");
              return result[0].trim();
            }
            return '';
          }
          jQuery('.typeahead').typeahead({
            source: typeHeadQueries,
            items: 3,
            matcher: function (item) {
              var tquery = extractor(this.query);
              if(!tquery) return false;
              return ~item.toLowerCase().indexOf(tquery.toLowerCase());
            },
            highlighter: function (item) {
  
            var query = extractor(this.query).replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
            return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
                return '<strong>' + match + '</strong>'
              })
            }
          });
        }).fail(function(e) {
            console.log("--");
        });
      }
  
      function createAnswer(data){
        var html = '';
        var likehtml = '';
        //likehtml += checkToIncludeConfidenceScore(data);
        likehtml += checkToIncludeLikeDislikeHtml(data);
        jQuery(".hiddenDivHtml").html(likehtml);
        // html = '<div>' + data.answer + '<br/>' + docName + '</div>';
        if(data.type_response != "graph" && data.type_response != "calendar"){
          html = '<div>' + data.answer  + '</div>';
        }
  
        //added code for calendar & graph Prerana 18-8-2020
        if(data.type_response == "graph"){
          html += "<canvas id='performanceAppraisalChart"+data.aid+"' style='display:none;' width='450' height='250'></canvas>";
        }
  
        if(data.type_response == "calendar"){
          html += "<div id='showAttendanceCalender"+data.aid+"' style='display:none;' width='200' height='200'></div>";
        }
        return html;
      }
  
      function checkDocumentName(data){
        var html = '';
        if(data.doc_name){
          var doc_path = "";
          if(data.doc_type == "video" || data.doc_type == "audio") {
            doc_path = serverUrl +"/static/upload/account_"+data.tid+"/bot_"+data.bid+"/"+data.doc_type+"/"+data.doc_name;
  
          } else {
             doc_path = serverUrl +"/static/upload/account_"+data.tid+"/bot_"+data.bid+"/"+data.doc_name;
          }
          html = '<div class="document_msg" data-aid="'+data.aid+'" data-type="'+data.doc_type+'" data-media_loc="'+data.media_loc+'" data-doc="'+data.doc_name+'">'+data.doc_name+'<div class="downloadDoc"><a href="'+doc_path+'" download="" target="_blank"></a></div></div>';
        }
        return html;
      }
  
  
      function checkToIncludeLikeDislikeHtml(data){
        var html = '';
        if(data.feedback){
          html = getlikeDislikeHtml(data.qid, data.aid);
        }
        return html;
      }
  
      function checkToIncludeConfidenceScore(data){
        var html = '';
        if(data.confidence_score != ""){
          html = getCScoreHtml(data.confidence_score);
        }
        return html;
      }
  
      function safeText(text, time) {
      //jQuery('#bot-content').find('.message-wrapper').last().find('.text-wrapper').html(text + '<div style="" class="time-div"></div><div class="rightCorner"></div>');
      //console.log('\n\n in safeText',text,time);
  
      var newText1 = replaceEmoticons(text);
      var newText = newText1.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g,'&');
  
      // jQuery("#bot-content").find('.message-wrapper').last().find('.text-wrapper').html(text + '<div class="rightCorner"></div>');
      jQuery("#bot-content").find('.message-wrapper').last().find('.text-wrapper').html(newText + '<div class="rightCorner"></div>');
      jQuery("#bot-content").find('.message-wrapper').last().find('.time-div').html(time);
      jQuery("#bot-content").find('.them').last().find('.text-wrapper').addClass('bounceIn').addClass('animated');
  
      //commenter for theme changes Prerana 7-8-2020
      //jQuery("#bot-content").find('.me').last().find('.text-wrapper').addClass('bounceIn').addClass('animated').addClass('header-'+bot_configurations_params.theme.toLowerCase());
      jQuery("#bot-content").find('.me').last().find('.text-wrapper').addClass('bounceIn').addClass('animated').css('background-color', bot_configurations_params.theme);
  
      }
  
      jQuery.urlParam = function (name) {
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      return results[1] || 0;
      }
  
  
      socket.on('grab_room_name',function(){
      getUserInfo(true);
      stats.status = true;
      hideNetError();
        var temp = {'bid': bot_id,'tid': account_id,
        'emp_id':user_id,'region':region,'user_type':user_type,
        'admin':false,
        "job_id" : jobId,
        "name" : userName,
        "resume_id" : resumeId,
        "user_id" : user_id,
        "timezone" : timezone,
        "cid" : candidateId,
        "sll" : sll,
        "all_vars" : all_vars,
        };
        socket.emit('authenticate',temp);
      });
  
  
      socket.on('get_bot_logo',function (data) {
        if(data.botlogoinfo){
          var imgurl = '';
          if (data.botlogoinfo.defaultlogo == 'NO')
            imgurl = serverUrl + url_extension+"/uploads/tenant_" + tenant_id + "/bot_" + bot_id + "/" + data.botlogoinfo.logo;
          if (data.botlogoinfo.defaultlogo == 'YES')
            imgurl = serverUrl + url_extension +"/images/" + data.botlogoinfo.logo;
          var styletag = jQuery("<style type='text/css'></style>");
          var stylestr = ".bot-section-div .message-wrapper .circle-wrapper{ background:#fefefe url(" + imgurl + ")  center center no-repeat!important }";
          stylestr += ".bot-section-div .typingBot{ background:#fefefe url(" + imgurl + ")  center center no-repeat!important }";
          jQuery(styletag).html(stylestr);
          jQuery("head").append(styletag);
        }
      });
  
      //check connection
      socket.on("disconnect", function () {
          if(init) {
            showNetError();
          }
      });
  
      function TimestampGenerator() {
        var date = new Date();
        var timestamp = date.toString("dd MMM yyyy hh:mm:ss");
        date = new Date(timestamp);
        var time_stamp = date.getTime();
        time_stamp = time_stamp / 1000;
        return time_stamp;
      }
  
      function optionsFeedback(qid, aid, vote) {
        var time_stamp = TimestampGenerator();
        var emp_id = user_id;
  
        dataTosSend = {
          'bid' : bid,
          'tid' : tid,
          'user_id' : emp_id,
          'qid' : qid,
          'aid' : aid,
          'query' : '',
          'feedback': vote,
          'admin' : false,
          'all_vars' : typeof paramsObject !== 'undefined' ? paramsObject : getUrlVars()
        };
        socket.emit('voteUpdate', dataTosSend);
      }
  
      //For datepicker
      //For datepicker
  jQuery(document).on('click','.date-picker',function(){
    var _reference = jQuery(this);
    var id = jQuery(this).attr('id');
    var min = jQuery(this).attr('min');
    var max = jQuery(this).attr('max');
    var minD;
    var maxD;
    if(min) {
      minD = min.split("/");
    }
    if(max) {
      maxD = min.split("/");
    }
    var className = jQuery(this).attr('class');
  
    // console.log("in picker", jQuery(this).attr('class'))
  
    if (picker1) {
      picker1.destroy();
    }
    picker1 = new Pikaday({
            // field: jQuery('#input')[0],
            field: jQuery(this)[0],
            format: 'D/M/YYYY',
            //changed mindate to 60 days previous date Prerana 21-8-2020
            // minDate: minD ? new Date(minD[2], minD[1], minD[0]) : new Date(),
            minDate: minD ? new Date(minD[2], minD[1], minD[0]) : new Date(Date.now() - 61 * 24 * 60 * 60 * 1000),
            maxDate: maxD ? new Date(maxD[2], maxD[1], maxD[0]) : new Date().setFullYear(new Date().getFullYear() + 1),
            // defaultDate: new Date(2019, 5, 14),
            defaultDate: new Date(),
            toString: function(date, format) {
                // you should do formatting based on the passed format,
                // but we will just return 'D/M/YYYY' for simplicity
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
  
                // return day+'/'+month+'/'+year;
                //commented & new code Prerana 20-8-2020
                // return day+' '+monthArr[date.getMonth()]+', '+year;
                const hrs = (date.getHours() < 10) ? '0'+date.getHours() : date.getHours();
                const mins = (date.getMinutes() < 10) ? '0'+date.getMinutes() : date.getMinutes();
                const secss = (date.getSeconds() < 10) ? '0'+date.getSeconds() : date.getSeconds();
  
                return day+' '+monthArr[date.getMonth()]+', '+year+' '+hrs+':'+mins+':'+secss;
  
            },
            parse: function(dateString, format) {
                // dateString is the result of `toString` method
                const parts = dateString.split('/');
                const day = parseInt(parts[0], 10);
                const month = parseInt(parts[1], 10) - 1;
                const year = parseInt(parts[2], 10);
                return new Date(year, month, day);
            },
            onClose:function() {
              picker1.destroy();
              //if click on calendar img
              if(className.indexOf('calendar-div') != -1){
                if(picker1.toString()){
                  // var dateArr = picker1.toString().split('/');
                  // selectedDate = dateArr[2]+"-"+dateArr[1]+"-"+dateArr[0];
                  // selectedDate = dateArr[0]+"/"+dateArr[1]+"/"+dateArr[2];
                  selectedDate = picker1.toString();
                  // sendTimeSlot("dateSelected");
  
                  jQuery(_reference).removeClass('date-picker').css({'cursor': 'not-allowed'});
                  sendTimeSlot(selectedDate);
                }
  
              } else if(className.indexOf('confirm-edit') != -1 && picker1.toString() != ""){
  
                // var dateArr = picker1.toString().split('/');
                // var month = '';
                // var date = '';
  
                // //append 0 to month
                // if(dateArr[1] < 9){
                //   month="0"+dateArr[1];
                // }else {
                //   month = dateArr[1];
                // }
                //
                // //append 0 to date
                // if(dateArr[0] < 9){
                //   date="0"+dateArr[0];
                // }else {
                //   date = dateArr[0];
                // }
  
                // selectedDate = dateArr[2]+"-"+month+"-"+date;
                selectedDate = picker1.toString();
  
                setFromToTimeSlot(selectedDate);
              }
            },
            disableDayFn: function(date){
              // Disable dates
              var DD = ('0' + date.getDate()).slice(-2);
              var MM = ('0' + (date.getMonth() + 1)).slice(-2);
              var YYYY = date.getFullYear();
              var DDMMYYYY = DD + '/' + MM + '/' + YYYY;
              var publicHolidy = [];
              var publicData;
              // for(var row in formDataGlobal.headers){
              //   if((formDataGlobal.headers[row].field_type == "calendar_slots" || formDataGlobal.headers[row].field_type == "calendar") && formDataGlobal.headers[row].public_holidays != undefined){
              //     publicHolidy.push(formDataGlobal.headers[row].public_holidays)
              //   }
              // }
              // if(publicHolidy[0] === undefined){
              //   publicData= publicHolidy;
              // }else{
              //   publicData = publicHolidy[0];
              // }
              // var publicHolidyTooltip = '<div id="pop-up"><p>This div only appears when the trigger link is hovered over. Otherwise it is hidden from view.</p></div>';
              // if(publicData.length != 0){
              //   for (var index = 0; index < publicData.length; index++) {
              //       if(DDMMYYYY == publicData[index].day){
              //         return date;
              //       }
              //   }
              // }
            },
            disableWeekends: false,
            //added for time Prerana 20-8-2020
            showTime: true,
            showMinutes: true,
            showSeconds: true,
            use24hour: false
  
            // block all dates after 1 year from current date on the calendar
            // maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
            // block past dates right current date
            // minDate: new Date()
            // minDate: new Date(new Date().setDate(new Date().getDate() + 7))
          });
          picker1.show();
      });
  
    function setFromToTimeSlot(selectedDate){
      jQuery(".message-wrapper:nth-last-child(2)").find('.select-hours-parent').addClass('loading');
      jQuery.ajax({
          url: serverUrl+"/api/get_slots_list",
          // url: "https://autobotsv2.lightinfosys.com/api/get_slots_list",
          data: {date : selectedDate, tid: tid, bid: bid, uid: user_id},
          method:'POST',
          cache: false,
          success: function(html){
            // console.log("hhhh", html.data.available_slots);
            // console.log("dd",jQuery(".message-wrapper:nth-last-child(2)").find('.select-hours-parent')[0]);
            if(html.data.hasOwnProperty('available_slots') && html.data.available_slots.length && html.data.available_slots[0] != "No available slots"){
              slotSelected = true;
              jQuery(".message-wrapper:nth-last-child(2)").find('.select-hours-parent').find('option').remove().end().append(createFromTimeSelectDropdown('',  html.data.available_slots, ''));
              jQuery(".message-wrapper:nth-last-child(2)").find('.select-hours-parent').removeClass('loading');
  
              if(nameEmailPresent){
                jQuery('#bot-content').children().last().find('.confirm-submit-button').css('opacity', '1');
                jQuery('#bot-content').children().last().find('.confirm-submit-button').css('pointer-events', 'all');
              }
  
  
            } else if(html.data.hasOwnProperty('available_slots') && html.data.available_slots.length && html.data.available_slots[0] == "No available slots"){
              slotSelected = false;
              jQuery(".message-wrapper:nth-last-child(2)").find('.select-hours-parent').find('option').remove().end().append(createFromTimeSelectDropdown('',  html.data.available_slots, ''));
              jQuery(".message-wrapper:nth-last-child(2)").find('.select-hours-parent').removeClass('loading');
  
              if(jQuery('#bot-content').children().last().find('.confirm-submit-button').css('opacity') == 1){
                jQuery('#bot-content').children().last().find('.confirm-submit-button').css('opacity', '0.5');
                jQuery('#bot-content').children().last().find('.confirm-submit-button').css('pointer-events', 'none');
              }
  
            } else {
              slotSelected = false;
              if(jQuery('#bot-content').children().last().find('.confirm-submit-button').css('opacity') == 1){
                jQuery('#bot-content').children().last().find('.confirm-submit-button').css('opacity', '0.5');
                jQuery('#bot-content').children().last().find('.confirm-submit-button').css('pointer-events', 'none');
              }
            }
  
            // jQuery(jQuery(".message-wrapper:nth-last-child(2)").find('.select-hours-parent')[1]).find('option').remove().end().append(createFromTimeSelectDropdown('',  html.data.available_slots, 'to'));
            // createFromTimeSelectDropdown('', html.data.available_slots, 'to')
          },
        error: function(){
            jQuery('#bot-content').children().last().find('.confirm-submit-button').css('opacity', '0.5');
            jQuery('#bot-content').children().last().find('.confirm-submit-button').css('pointer-events', 'none');
          }
        });
      // console.log("selecccc", selectedDate);
    }
  
    function sendTimeSlot(flag){
      //append typing & scroll to bottom
      if(!jQuery('.typing').length)
        jQuery('.typing').css('opacity',0);
        setTimeout(function () {
          var old_offset = jQuery("#bot-content").prop('scrollHeight');
          scrollBottom(old_offset);
        }, 50);
  
      var dateSelected = (flag) ? flag : "";
  
      // console.log("timeSlotObj", timeSlotObj);
  
      var i = 0;
      for(var key in timeSlotObj){
        if(i == 0){
          timeSlotObj[key] = (dateSelected == "") ? [selectedDate] : [];
        } else if(i == 1){
          timeSlotObj[key] = (dateSelected == "") ? [selectedTime] : [];
        } else {
          timeSlotObj[key] = (dateSelected != "") ? [selectedDate] : [];
        }
        i++;
      }
  
      var time_stamp = TimestampGenerator();
           var dataTosSend = {
             'query': dateSelected,
             'timestamp': time_stamp,
             'bid': bid,
             'tid': tid,
             'channel': 'ui',
             'emp_id': user_id,
             'region': region,
             'user_type': user_type,
             'ic_data' : timeSlotObj,
             "job_id" : jobId,
             "name" : userName,
             "resume_id" : resumeId,
             "user_id" : user_id,
             "timezone" : timezone,
             "cid" : candidateId,
             "sll" : sll,
             "all_vars" : all_vars
           };
  
      console.log("time slot", dataTosSend);
      socket.emit('user_message', dataTosSend);
      timeSlotObj = {};
      jQuery('.common-button-sec').addClass('disabled');
      jQuery('.custom-time-button').addClass('disabled');
      jQuery('.calendar-div').addClass('disabled');
  
    }
  
        /* NOTIFICATION HISTORY TRIGGER */
        jQuery(document).on('click','.note-pager:not(".active")',function(){
  
            // SHOW SPINNER WHILE GETTING NOTIFICATION FROM SERVER
            //$(this).attr('id','note-pager');
           // $(this).find('#load-text').html('<i class="fa fa-spinner fa-spin" style="font-size:14px;"></i>');
  
            jQuery(this).addClass('active');
            jQuery(this).hide();
            var nextPage = eval(parseInt(jQuery(this).attr('rel')));
            // console.log('note-page called');
            var noteHisData = new Object();
            noteHisData = getUserInfo();
            noteHisData.start = nextPage;
            noteHisData.count = eval(parseInt(jQuery(this).attr('data')));
            noteHisData.context_type = 'notification'
            noteHisData.initial_flag = 0
            noteHisData.history_flag = true
            jQuery(this).attr('rel',nextPage+1);
  
            //console.log('\n in notification scroll >>>>',noteHisData);
  
            // REQUESTING SERVER TO GET HISTORY
            setTimeout(function(){
              socket.emit('createNotification',noteHisData);
            },500)
        });
  
        ! function(e) {
            // console.log(e);
            "use strict";
            var t = function(t, n) {
                this.$element = e(t), this.options = e.extend({}, e.fn.typeahead.defaults, n), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.$menu = e(this.options.menu).appendTo("#result"), this.source = this.options.source, this.shown = !1, this.listen()
            };
            t.prototype = {
                constructor: t,
                select: function() {
                    var e = this.$menu.find(".active").attr("data-value");
                 if (this.updater(e)) {
                     return this.$element.val(this.updater(e)).change(), this.hide()
                 }
                 return  this.hide()
                },
                removeOnEnter: function() {
                    this.$menu.find(".active").attr("data-value","");
                    return this.hide()
                },
                updater: function(e) {
                    return e
                },
                show: function() {
                    var t = e.extend({}, this.$element.offset(), {
                        height: this.$element[0].offsetHeight
                    });
                    return this.$menu.css({
                        bottom: "67px",
                        left: "2%",
  
                    }), this.$menu.show(), this.shown = !0, this
                },
                hide: function() {
                    return this.$menu.hide(), this.shown = !1, this
                },
                lookup: function(t) {
                    var n;
                    return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (n = e.isFunction(this.source) ? this.source(this.query, e.proxy(this.process, this)) : this.source, n ? this.process(n) : this)
                },
                process: function(t) {
                    var n = this;
                    return t = e.grep(t, function(e) {
                        return n.matcher(e)
                    }), t = this.sorter(t), t.length ? this.render(t.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
                },
                matcher: function(e) {
                    return ~e.toLowerCase().indexOf(this.query.toLowerCase())
                },
                sorter: function(e) {
                    var t = [],
                        n = [],
                        r = [],
                        i;
                    while (i = e.shift()) i.toLowerCase().indexOf(this.query.toLowerCase()) ? ~i.indexOf(this.query) ? n.push(i) : r.push(i) : t.push(i);
                    return t.concat(n, r)
                },
                highlighter: function(e) {
                    var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
                    return e.replace(new RegExp("(" + t + ")", "ig"), function(e, t) {
                        return "<strong>" + t + "</strong>"
                    })
                },
                render: function(t) {
                    var n = this;
                    return t = e(t).map(function(t, r) {
                        return t = e(n.options.item).attr("data-value", r), t.find("a").html(n.highlighter(r)), t[0]
                    }), this.$menu.html(t), this
                },
                next: function(t) {
                    //t.first().addClass("active")
                    var n = this.$menu.find(".active").removeClass("active"),
                        r = n.next();
  
                    r.length || (r = e(this.$menu.find("li")[0])), r.addClass("active")
                    //this.$menu.scrollTop(0)
                    // console.log(this.$menu.height());
                    // this.$menu.find(".active").focus()
                    //this.$menu.scrollTop(0)
                    var cnt = this.$menu.find("li").length;
  
  
                },
                prev: function(e) {
                    var t = this.$menu.find(".active").removeClass("active"),
                        n = t.prev();
                    n.length || (n = this.$menu.find("li").last()), n.addClass("active")
  
                },
                listen: function() {
                    this.$element.on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this)), (e.browser.chrome || e.browser.webkit || e.browser.msie) && this.$element.on("keydown", e.proxy(this.keydown, this)), this.$menu.on("click mousedown", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this))
                },
                move: function(e) {
                    if (!this.shown) return;
                    switch (e.keyCode) {
                        case 9:
                        case 13:
                        case 27:
                            e.preventDefault();
                            break;
                        case 38:
                            e.preventDefault(), this.prev();
                            break;
                        case 40:
                            e.preventDefault(), this.next()
                    }
                    e.stopPropagation()
                },
                keydown: function(t) {
                    this.suppressKeyPressRepeat = !~e.inArray(t.keyCode, [40, 38, 9, 13, 27]), this.move(t)
                },
                keypress: function(e) {
                    if (this.suppressKeyPressRepeat) return;
                    this.move(e)
                },
                keyup: function(e) {
                    switch (e.keyCode) {
                        case 40:
                        case 38:
                            break;
                        case 9:
                        case 13:
                             if (!this.shown){
                                return;
                             } else {
                               this.select();
                             }
                             jQuery('#send').trigger('click');
                            //added for removing suggestions box on enter
                            this.removeOnEnter();
                            break;
                        case 27:
                            if (!this.shown) return;
                            this.hide();
                            break;
                        default:
                            this.lookup()
                    }
                    e.stopPropagation(), e.preventDefault()
                },
                blur: function(e) {
                    var t = this;
                    setTimeout(function() {
                        t.hide()
                    }, 150)
                },
                click: function(e) {
                    e.stopPropagation(), e.preventDefault(), this.select()
                },
                mouseenter: function(t) {
                    this.$menu.find(".active").removeClass("active"), e(t.currentTarget).addClass("active")
                }
            }, e.fn.typeahead = function(n) {
                return this.each(function() {
                    var r = e(this),
                        i = r.data("typeahead"),
                        s = typeof n == "object" && n;
                    i || r.data("typeahead", i = new t(this, s)), typeof n == "string" && i[n]()
                })
            }, e.fn.typeahead.defaults = {
                source: [],
                items: 8,
                menu: '<ul class="typeahead dropdown-menu"></ul>',
                item: '<li><a href="#"></a></li>',
                minLength: 1
            }, e.fn.typeahead.Constructor = t, e(function() {
                e("body").on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(t) {
                    var n = e(this);
                    if (n.data("typeahead")) return;
                    t.preventDefault(), n.typeahead(n.data())
                })
            })
        }(jQuery), ! function(e) {
            "use strict";
            var t = function(t, n) {
                this.options = e.extend({}, e.fn.affix.defaults, n), this.$window = e(window).on("scroll.affix.data-api", e.proxy(this.checkPosition, this)), this.$element = e(t), this.checkPosition()
            };
            t.prototype.checkPosition = function() {
                if (!this.$element.is(":visible")) return;
                var t = e(document).height(),
                    n = this.$window.scrollTop(),
                    r = this.$element.offset(),
                    i = this.options.offset,
                    s = i.bottom,
                    o = i.top,
                    u = "affix affix-top affix-bottom",
                    a;
                typeof i != "object" && (s = o = i), typeof o == "function" && (o = i.top()), typeof s == "function" && (s = i.bottom()), a = this.unpin != null && n + this.unpin <= r.top ? !1 : s != null && r.top + this.$element.height() >= t - s ? "bottom" : o != null && n <= o ? "top" : !1;
                if (this.affixed === a) return;
                this.affixed = a, this.unpin = a == "bottom" ? r.top - n : null, this.$element.removeClass(u).addClass("affix" + (a ? "-" + a : ""))
            }, e.fn.affix = function(n) {
                return this.each(function() {
                    var r = e(this),
                        i = r.data("affix"),
                        s = typeof n == "object" && n;
                    i || r.data("affix", i = new t(this, s)), typeof n == "string" && i[n]()
                })
            }, e.fn.affix.Constructor = t, e.fn.affix.defaults = {
                offset: 0
            }, e(window).on("load", function() {
                e('[data-spy="affix"]').each(function() {
                    var t = e(this),
                        n = t.data();
                    n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n)
                })
            })
        }(jQuery);
        // release all resources and destroy all html
        this.releaseAll = function socket_dis(){
  
          if(jQuery('.bot-section-div').length) {
            jQuery('.bot-section-div').remove();
          }
          if(jQuery('#botIconBtn').length) {
            jQuery('#botIconBtn').remove();
          }
          if(jQuery('.wrap_circle').length) {
            jQuery('.wrap_circle').remove();
          }
          if(socket) {
            socket.disconnect();
          }
        };
  
        this.openBot = function(options) {
          jQuery('#botIconBtn').trigger("click");
        }
      }// main end
  
  
  
  }// constructor NLPbot
  
  NLPbot.prototype.destroy = function(){
      this.releaseAll();
      init = false;
  }
  var dd = new NLPbot();
  window.NLPbot = NLPbot;
  
  })(); // We call our anonymous function immediately
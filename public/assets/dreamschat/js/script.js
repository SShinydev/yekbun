/*
Author       : Dreamguys
Template Name: Videocall - Bootstrap  Template
Version      : 1.0
*/

(function($) {
  "use strict";

// Variables declarations
var $wrapper = $('.main-wrapper');
var $slimScrolls = $('.slimscroll');
var $sidebarOverlay = $('.sidebar-overlay');

// Sidebar
var Sidemenu = function() {
  this.$menuItem = $('#sidebar-menu-one a');
};

// Darkmode
if($('.toggle-switch').length > 0) {
  const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme');
  var app = document.getElementsByTagName("BODY")[0];

  if (currentTheme) {
    app.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
      app.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
      app.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

  toggleSwitch.addEventListener('change', switchTheme, false);
}

if(window.location.hash == "#LightMode"){
  localStorage.setItem('theme', 'dark');
}
else {
  if(window.location.hash == "#DarkMode"){
    localStorage.setItem('theme', 'light');
  }
}

// Tooltip

if($('[data-bs-toggle="tooltip"]').length > 0) {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
}

// Popover

if($('.popover-list').length > 0) {
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })
}

// Left Sidebar Scroll
if($slimScrolls.length > 0) {
  $slimScrolls.slimScroll({
    height: 'auto',
    width: '100%',
    position: 'right',
    size: '7px',
    color: '#ccc',
    wheelStep: 10,
    touchScrollStep: 100
  });
  var wHeight = $(window).height() - 60;
  $slimScrolls.height(wHeight);
  $('.sidebar .slimScrollDiv').height(wHeight);
  $(window).resize(function() {
    var rHeight = $(window).height() - 60;
    $slimScrolls.height(rHeight);
    $('.sidebar .slimScrollDiv').height(rHeight);
  });
}

// Small Sidebar
if(screen.width >= 992) {
  $(document).on('click', '#chat_toggle_btn', function() {
    if($('body').hasClass('mini-sidebar')) {
      $('body').removeClass('mini-sidebar');
      $('.subdrop + ul').slideDown();
    } else {
      $('body').addClass('mini-sidebar');
      $('.subdrop + ul').slideUp();
    }
    return false;
  });
  $(document).on('mouseover', function(e) {
    e.stopPropagation();
    if($('body').hasClass('mini-sidebar') && $('#chat_toggle_btn').is(':visible')) {
      var targ = $(e.target).closest('.sidebar').length;
      if(targ) {
        $('body').addClass('expand-menu');
        $('.subdrop + ul').slideDown();
      } else {
        $('body').removeClass('expand-menu');
        $('.subdrop + ul').slideUp();
      }
      return false;
    }
  });
}

//Chat Search Visible
$('.chat-search-btn').on('click', function () {
  $('.chat-search-blk').addClass('visible-chat');
});
$('.close-btn-chat').on('click', function () {
  $('.chat-search-blk').removeClass('visible-chat');
});
$(".chat-search-blk .form-control").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $(".chat-body .messages .chats").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
});

//Chat Search Visible
$('.group-file-download').on('click', function () {
  $('.channel-down-blk').addClass('visible-group');
});
$('.close-btn-download').on('click', function () {
  $('.channel-down-blk').removeClass('visible-group');
});

// Sidebar overlay
function sidebar_overlay($target) {
  if($target.length) {
    $target.toggleClass('opened');
    $sidebarOverlay.toggleClass('opened');
    $('html').toggleClass('menu-opened');
    $sidebarOverlay.attr('data-reff', '#' + $target[0].id);
  }
}

// Mobile menu sidebar overlay
$(document).on('click', '#mobile_btn_chat', function() {
  var $target = $($(this).attr('href'));
  sidebar_overlay($target);
  $wrapper.toggleClass('slide-nav');
  $('#chat_sidebar').removeClass('opened');
  return false;
});

// Chat sidebar overlay
$(document).on('click', '#task_chat', function() {
  var $target = $($(this).attr('href'));
  console.log($target);
  sidebar_overlay($target);
  return false;
});

// Sidebar overlay reset
$sidebarOverlay.on('click', function() {
  var $target = $($(this).attr('data-reff'));
  if($target.length) {
    $target.removeClass('opened');
    $('html').removeClass('menu-opened');
    $(this).removeClass('opened');
    $wrapper.removeClass('slide-nav');
  }
  return false;
});

// Darkmode
if($('#dark-mode-toggle').length > 0) {
  let darkMode = localStorage.getItem('darkMode');

  const darkModeToggle = document.querySelector('#dark-mode-toggle');

  const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
  }

  const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
  }

  if (darkMode === 'enabled') {
    enableDarkMode();
  }

  darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
    enableDarkMode();
    } else {
    disableDarkMode();
    }
  });
}

// Darkmode Call
if($('#dark-mode-call').length > 0) {
  let darkMode = localStorage.getItem('darkMode');

  const darkModeToggle = document.querySelector('#dark-mode-call');

  const enableDarkMode = () => {
    document.body.classList.add('darkcall');
    localStorage.setItem('darkMode', 'enabled');
  }

  const disableDarkMode = () => {
    document.body.classList.remove('darkcall');
    localStorage.setItem('darkMode', null);
  }

  if (darkMode === 'enabled') {
    enableDarkMode();
  }

  darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
    enableDarkMode();
    } else {
    disableDarkMode();
    }
  });
}

// Mute Audio

if($('.mute-bt').length > 0) {
  $(".mute-bt").on('click', function(){
    if($(this).hasClass("stop")) {
      $(this).removeClass("stop");
      $(".mute-bt i").removeClass("fa fa-microphone-slash");
      $(".mute-bt i").addClass("fa fa-microphone");
      $(this).attr("data-bs-original-title","Mute Audio");
      $(".join-video.user-active .more-icon").removeClass("mic-view");

      $(".action-info.vid-view li .mute-mic i").removeClass("fa fa-microphone-slash");
      $(".action-info.vid-view li .mute-mic i").addClass("fa fa-microphone");
    }
    else{
      $(this).addClass("stop");
      $(".mute-bt i").removeClass("fa fa-microphone");
      $(".mute-bt i").addClass("fa fa-microphone-slash");
      $(this).attr("data-bs-original-title","Unmute Audio");
      $(".join-video.user-active .more-icon").addClass("mic-view");

      $(".add-list .user-active .action-info").addClass("vid-view");
      $(".action-info.vid-view li .mute-mic i").removeClass("fa fa-microphone");
      $(".action-info.vid-view li .mute-mic i").addClass("fa fa-microphone-slash");
    }
  });
}

// Mute Video

if($('.mute-video').length > 0) {
  $(".mute-video").on('click', function(){
    if($(this).hasClass("stop")) {
      $(this).removeClass("stop");
      $(".mute-video i").removeClass("fa fa-video-slash");
      $(".mute-video i").addClass("fa fa-video");
      $(".join-call .join-video").removeClass("video-hide");
      $(".video-avatar").removeClass("active");
      $(this).attr("data-bs-original-title","Stop Camera");
      $(".meeting .join-video.user-active").removeClass("video-hide");

      $(".join-video.user-active .more-icon").removeClass("vid-view");
      $(".action-info.vid-view li .mute-vid i").removeClass("fa fa-video-slash");
      $(".action-info.vid-view li .mute-vid i").addClass("fa fa-video");
    }
    else{
      $(this).addClass("stop");
      $(".mute-video i").removeClass("fa fa-video");
      $(".mute-video i").addClass("fa fa-video-slash");
      $(".join-call .join-video").addClass("video-hide");
      $(".video-avatar").addClass("active");
      $(this).attr("data-bs-original-title","Start Camera");
      $(".meeting .join-video.user-active").addClass("video-hide");

      $(".add-list .user-active .action-info").addClass("vid-view");
      $(".action-info.vid-view li .mute-vid i").removeClass("fa fa-video");
      $(".action-info.vid-view li .mute-vid i").addClass("fa fa-video-slash");
    }
  });
}

// Record

if($('.record-icon').length > 0) {
  $(".record-icon").on('click', function(){
    if($(".record-icon").hasClass("active")) {
      $(".record-icon").removeClass("active");
      $(".show-record").css("display", "none");
      $(".record-icon i").removeClass("far fa-stop-circle");
      $(".record-icon i").addClass("far fa-dot-circle");
    }
    else {
      $(".record-icon").addClass("active");
      $(".show-record").css("display", "block");
      $(".record-icon i").removeClass("far fa-dot-circle");
      $(".record-icon i").addClass("far fa-stop-circle");
    }
  });
}

// Handrise

if($('.hand-raise').length > 0) {
  $(".hand-raise").on('click', function(){
    if($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".join-video.user-active .more-icon .handraise-on").removeClass("active");
    }
    else {
      $(this).addClass("active");
      $(".join-video.user-active .more-icon .handraise-on").addClass("active");
    }
  });
}

// toggle-password

if($('.toggle-password').length > 0) {
  $(document).on('click', '.toggle-password', function() {
    $(this).toggleClass("feather-eye-off feather-eye");
    var input = $(".pass-input");
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
}
if($('.reg-toggle-password').length > 0) {
  $(document).on('click', '.reg-toggle-password', function() {
    $(this).toggleClass("feather-eye-off feather-eye");
    var input = $(".pass-confirm");
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
}


// Whiteboard
if($('.whiteboard').length > 0) {
  $(".whiteboard").on('click', function(){
    if($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".join-contents.show-whiteboard").css("display", "none");
      $(".join-contents.fade-whiteboard").css("display", "flex");
    }
    else {
      $(this).addClass("active");
      $(".join-contents.show-whiteboard").css("display", "flex");
      $(".join-contents.fade-whiteboard").css("display", "none");
      Painterro({
        id: 'my-holder'
      }).show();
    }
  });
}

// Chat

var toggleChatList = 0;
if($('.showChatList').length > 0) {
  $('.showChatList').on('click', function(e){
    e.preventDefault()
    if($('body').hasClass("show-invite-list")){
      $(".invite-sidebar-right").css("margin-right", "-100%");
      $('body').removeClass('show-invite-list');
      $('.showInviteList').removeClass('active');
      $(this).addClass('active');
      $('body').addClass('show-chat-list');
      $(".show-chat-list .user-sidebar-right").css("margin-right", "20px");
      toggleChatList=1;
      toggleInviteList=0;
    }
    else {
      if(toggleChatList==0) {
        toggleChatList=1;
        $(this).addClass('active');
        $('body').addClass('show-chat-list');
        $(".show-chat-list .user-sidebar-right").css("margin-right", "20px");
      }
      else {
        toggleChatList=0;
        $(this).removeClass('active');
        $('body').removeClass('show-chat-list');
        $(".user-sidebar-right").css("margin-right", "-100%");
      }
    }
  })
}

if($('#chatClose').length > 0) {
  $('#chatClose').on('click', function(e){
    e.preventDefault()
    $('body').removeClass('show-chat-list');
    $('.showChatList').removeClass('active');
    $(".user-sidebar-right").css("margin-right", "-100%");
    toggleChatList=0;
  })
}

var toggleInviteList = 0;
if($('.showInviteList').length > 0) {
  $('.showInviteList').on('click', function(e){
    e.preventDefault()
    if($('body').hasClass("show-chat-list")){
      $('body').removeClass('show-chat-list');
      $('.showChatList').removeClass('active');
      $(".user-sidebar-right").css("margin-right", "-100%");
      $(this).addClass('active');
      $('body').addClass('show-invite-list');
      $(".show-invite-list .invite-sidebar-right").css("margin-right", "20px");
      toggleInviteList=1;
      toggleChatList=0;
    }
    else {
      if(toggleInviteList==0) {
        toggleInviteList=1;
        $(this).addClass('active');
        $('body').addClass('show-invite-list');
        $(".show-invite-list .invite-sidebar-right").css("margin-right", "20px");
      }
      else {
        toggleInviteList=0;
        $(this).removeClass('active');
        $('body').removeClass('show-invite-list');
        $(".invite-sidebar-right").css("margin-right", "-100%");
      }
    }
  })
}

if($('#InviteClose').length > 0) {
  $('#InviteClose').on('click', function(e){
    e.preventDefault()
    $('body').removeClass('show-invite-list');
    $(".invite-sidebar-right").css("margin-right", "-100%");
    $('.showInviteList').removeClass('active');
    toggleInviteList=0;
  })
}

if($('.win-maximize').length > 0) {
  $('.win-maximize').on('click', function(e){
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  })
}

// Chat

var chatAppTarget = $('.chat-window');
(function() {
  if ($(window).width() > 991)
    chatAppTarget.removeClass('chat-slide');

  $(document).on("click",".chat-window .chat-users-list a.media",function () {
    if ($(window).width() <= 991) {
      chatAppTarget.addClass('chat-slide');
    }
    return false;
  });
  $(document).on("click","#back_user_list",function () {
    if ($(window).width() <= 991) {
      chatAppTarget.removeClass('chat-slide');
    }
    return false;
  });
})();

$(window).on('load',function(){
  $('.page-loading').fadeOut();
});

// Resize

function resizeInnerDiv() {

  var height = $(window).height();
  var screen_height = $(window).height() - 252;
  var screen_height_vertical_view = $(window).height() - 232;
  var screen_height_horizontal_view = $(window).height() - 292;



  $(".meeting-wrapper .join-contents").css("min-height", screen_height);
  $('.join-contents .join-video').css('height', (screen_height_horizontal_view / 4)*2.8);
  $('.join-contents .join-video img').css('height', (screen_height_horizontal_view / 4)*2.8);

  $('.join-contents .join-video.single-user img').css('height', screen_height / 4);
  $('.join-contents .join-video.single-user').css('height', screen_height / 4);
  $('.join-contents .join-video.single-user').css('min-height', screen_height / 4);

  $('.horizontal-view .join-video.single-user img').css('height', screen_height / 3);
  $('.horizontal-view .join-video.single-user').css('height', screen_height / 3);
  $('.horizontal-view .join-video.single-user').css('min-height', screen_height / 3);

  $('.grid-view .join-video.single-user img').css('height', screen_height / 2);
  $('.grid-view .join-video.single-user').css('height', screen_height / 2);
  $('.grid-view .join-video.single-user').css('min-height', screen_height / 2);

  $('.vertical-view .join-video').css('height', (screen_height_vertical_view / 4)*3);
  $('.vertical-view .join-video img').css('height', (screen_height_vertical_view / 4)*3);

  $('.vertical-view .join-video.single-user img').css('height', screen_height / 4);
  $('.vertical-view .join-video.single-user').css('height', screen_height / 4);
  $('.vertical-view .join-video.single-user').css('min-height', screen_height / 4);

  $(".meeting-wrapper .join-contents.single-view").css("height", screen_height);
  $(".meeting-wrapper .join-contents.single-view .user-active img").css("height", screen_height);
  $('.join-contents.single-view .join-video.user-active').css('height', screen_height);

  if($(window).width() < 768 ) {

    screen_height = $(window).height() - 232;
    screen_height_horizontal_view = $(window).height() - 232;

    $('.join-contents .join-video').css('height', screen_height_horizontal_view / 4);
    $('.join-contents .join-video img').css('height', screen_height_horizontal_view / 4);

    $('.join-contents .join-video.single-user img').css('height', screen_height / 4);
    $('.join-contents .join-video.single-user').css('height', screen_height / 4);
    $('.join-contents .join-video.single-user').css('min-height', screen_height / 4);

    $('.grid-view .join-video.single-user img').css('height', screen_height / 4);
    $('.grid-view .join-video.single-user').css('height', screen_height / 4);
    $('.grid-view .join-video.single-user').css('min-height', screen_height / 4);

    $('.vertical-view .join-video.single-user img').css('height', screen_height / 4);
    $('.vertical-view .join-video.single-user').css('height', screen_height / 4);
    $('.vertical-view .join-video.single-user').css('min-height', screen_height / 4);

    $(".meeting-wrapper .join-contents.single-view").css("height", screen_height);
    $(".meeting-wrapper .join-contents.single-view .user-active img").css("height", screen_height);
    $('.join-contents.single-view .join-video.user-active').css('height', screen_height);
  }
}

if($('.page-content').length > 0 ){
  resizeInnerDiv();
}

$(window).resize(function(){
  if($('.page-content').length > 0 ){
    resizeInnerDiv();
  }
});

})(jQuery);

$(document).ready(function(){
        $(".fa-bell").click(function(){
            $(".hidden-list").fadeToggle(2);
        }); 
        $(".fa-user").click(function(){
            $(".hidden-list-friends-request").fadeToggle(2);
        }); 
        $(".fa-caret-down").click(function(){
            $(".hidden-list-caret").fadeToggle(2);

        });   
        $(".fa-question-circle").click(function(){
            $(".hidden-list-message").fadeToggle(2); 
         }); 
         $(".fa-comment").click(function(){
            $(".hidden-list-question").fadeToggle(2); 
         });
        $('.fa-times').click(function(){
            $('.chat').hide();
        });

        $('.edit-btn').click(function(){
            $('.edit-bio').fadeIn();
            $('.edit-btn').fadeOut();
        });
        $('.cancel').click(function(){
            $('.edit-bio').fadeOut();
            $('.edit-btn').fadeIn();

        });
       
        $('.dashboard li').click(function(){
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.chat').hide();
        $('.'+$(this).data('class')).fadeIn();
        });
  
    $(".btn-post").click(function(){
       $(".postsCreated").text( $("textarea").val());
        $(".postsCreated").css({background:"white", "margin-top":"2%" ,padding:"20px"})
        });
    $(".dashboard").niceScroll({cursorcolor:"gray",autohidemode: true ,cursorminheight: 7});
      
}); 
var myNav = document.getElementById("nav"),
    myDiv = document.getElementById("nav"),
    divPosts=document.getElementById("posts-textarea");
var allimage=document.getElementsByTagName('img');
var div1=document.getElementById('lighter');
var div2=document.getElementById('lighter-item');
var wclose=document.getElementById('wclose');
var btn_post=document.getElementById('btn-post');
var postpart2=document.getElementById('postsCreatedpart2')
var line2=document.getElementById('line2');
var line3=document.getElementById('line3');
var chat=document.getElementById('chat');
var dashboardli=document.getElementById('dashboard-li');
var headerpost=document.getElementById('headerPost');
var closeChat=document.getElementById('closeChat');
var seeMore=document.getElementById('seeMore');
var seeMoreList=document.getElementById('seeMoreList');


window.onscroll = function say() {
    "use strict";
    if (window.scrollY <= myDiv.offsetHeight) {
        myNav.classList.remove("pos");
    }else if (window.scrollY > myDiv.offsetHeight) {
        myNav.classList.add("pos");
    }  
};


closeChat.addEventListener('click',function(){
    chat.classList.add("show");
})

wclose.addEventListener('click',function(){
    div1.classList.add("show");
 })
 document.addEventListener("keydown",function(e){
    if(e.keyCode==27){ //لما يدوس على الزرار اللى اسمة escواللى رقمة 27 يخفى الكلاس
       div1.classList.add("show"); 
    }
 })
 div1.addEventListener("click",function(e){
    if(e.target==div1){
       div1.classList.add("show");
    }
 })

 divPosts.addEventListener("click",function(){
    div1.classList.remove("show");
 });
 btn_post.addEventListener('click',function(){
    div1.classList.add("show");
    headerpost.classList.remove("show");
    line3.classList.remove("show");
    line2.classList.remove("show");
    postpart2.classList.remove("show");
 })

 seeMore.addEventListener('click',function(){
    seeMoreList.classList.remove("show");
    seeMore.classList.add("show");
})


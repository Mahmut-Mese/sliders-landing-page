(function($){
window.onscroll = function() {isScrolledIntoView()};



 
 
function isScrolledIntoView() {
    var d = document.getElementById("contenty");
    var elem = document.getElementById("contenth2");
    var elem2 = document.getElementById("contentimg");
    var topPos = d.offsetTop;
    var bottomwindows = window.pageYOffset+window.innerHeight;

   
 
  if (bottomwindows > topPos) {
        elem.classList.add("fadeInLeft");
        elem2.classList.add("fadeInRight");
        
      }  
      else{
        elem.classList.remove("fadeInLeft");
        elem2.classList.remove("fadeInRight");
      }
  }
/*   if(elem.scrollIntoView()){
      alert("ddd");
  } */

  $( ".icon-div" ).click(function() {
    $( ".content-bottom" ).toggleClass( "long-explanation" );
 
 

/* function playVid() { 
    vid.play(); 
} 

function pauseVid() { 
    vid.pause(); 
} */

   // $("p").css("background-color", "yellow");
  });
  var vid = document.getElementById("videoNike"); 
  // vid.paused ? vid.play() : vid.pause();

 
  var clk=false;
  $('.video-row .overlay-desc').click(function() {
    vid.paused ? vid.play() : vid.pause();
    $(".video-row .overlay-desc h2,.video-row .overlay-desc h3").css("display", "none");
    if (vid.paused == false) {
     
     
        $(".video-row .overlay-desc img").css("opacity", "0");

     
      $(".landing .overlay-desc").css("background-color", "rgba(0,0,0,0)");
        
    } else {
        
        $(".video-row .overlay-desc img").css("opacity", "1");

        $(".landing .overlay-desc").css("background-color", "rgba(0,0,0,0.6)");
      
        
    }
  });
  
/*   $('.overlay-desc:not(.hvr-grow)').click(function() {
    if (vid.paused == false) {
     
     
        $(".video-row .overlay-desc img").css("opacity", "0");
      
        vid.pause();
    }
  }); */
/*   $('.overlay-desc').click(function() {
      if (!clk) {
        var vid = document.getElementById("videoNike"); 
        vid.paused ? vid.play() : vid.pause();
        $(".video-row .overlay-desc h2,.video-row .overlay-desc h3").css("display", "none");
        
        if (vid.paused == false) {
          
            $(".video-row .overlay-desc img").attr("src","./img/nike-modelleri-iconpause.png");
            $(".video-row .overlay-desc img").css("opacity", "1");
          
            
        } 
        else{
             
            $(".video-row .overlay-desc img").css("opacity", "1");
            $(".video-row .overlay-desc img").attr("src","./img/nike-modelleri-iconplay.png");
        }
      }

clk=true;
  }); */
  var elem3 = $(".overlay-desc h2");   
      elem3.addClass( "fadeInDown" );
    
  var elem4 = $(".overlay-desc h1");
 
   setTimeout(function(){ 
       
       elem4.addClass( "fadeInDown" );
    }, 1000);
    $(".four-img .back-img").mouseenter(function(){
        $( this ).children( '.filter-img' ).css("visibility", "visible");
    });
    $(".four-img .back-img").mouseleave(function(){
        $( this ).children( '.filter-img' ).css("visibility", "hidden");
    });
var choosed=false;
    $('.heart').click(function() {
       if (choosed) {
        $(this).attr("src","./img/group17.png");  
        choosed=false;
       }
      else{
        $(this).attr("src","./img/group16.png");
        choosed=true;
      }
       
    });

 })(jQuery);
    
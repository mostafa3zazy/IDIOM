 $(document).ready(function(){
  $('#slide1,#slide2,#slide3,#slide4,#slide5,#slide6').hide();
      var n=0;
                var $elem=$('#slide1,#slide2,#slide3,#slide4,#slide5,#slide6');
                function slides(index){
                $elem.eq(index).fadeIn(500,function(){
                 var $self=$(this);
                 setTimeout(function(){
                  $self.fadeOut(1);
                  slides((index + 1) % $elem.length);
                     
                  },4000);    
                });      
                }
                slides(0);
     
                $("#click").click(function(){
                if(n===0){
                $("#dissapear-list").css({"display":"block"});n++;
                }
                else if(n===1){
                $("#dissapear-list").css({"display":"none"});n--;
                }    
                });
     
     
     
     
     
     
     
     
     
     
     
     
});
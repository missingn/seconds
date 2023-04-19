 
var Body= {SetColor:function(color){$('body').css('color',color) },//글씨 색깔
    BackSetColor:function(color){$('body').css('backgroundColor',color);}  //배경 색깔
    }

 var link={asetColor:function(color) { $('a').css('color',color);}}

 var boder={setbodercolor:function(color){$('div').css('borderColor',color)}}

function NightDay(self){ 
var target=document.querySelector('body');
if(self.value === 'night' ) { 

Body.BackSetColor("black") ;    //큰 따옴표랑 작은 따옴표 차이가 없네?
Body.SetColor("white") ;  
self.value='day';
link.asetColor('yellow');
boder.setbodercolor('white'); 
 
}

else { Body.BackSetColor('white') ;
 Body.SetColor('black')
 self.value='night' ;
link.asetColor('blue');
boder.setbodercolor('black');
} 

}

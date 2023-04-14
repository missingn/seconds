 
    var Body= {SetColor:function(color){$('body').css('color',color) },//글씨 색깔
    BackSetColor:function(color){$('body').css('backgroundColor',color);}  //배경 색깔
    

    }

 var link={asetColor:function(color) { $('a').css('color',color);}}


function NightDay(self){ 
var target=document.querySelector('body');
if(self.value === 'night' ) { 

Body.BackSetColor('black') ;  
Body.SetColor('white') ;  
self.value='day';
link.asetColor('yellow');
document.getElementById("gri").style.borderColor = "white"; 
document.getElementById("grid2").style.borderColor = "white"; 
}

else { Body.BackSetColor('white') ;
 Body.SetColor('black')
 self.value='night' ;
link.asetColor('blue');
document.getElementById("gri").style.borderColor = "black"; 
document.getElementById("grid2").style.borderColor = "black"; 
} 

}

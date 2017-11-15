window.onload=start;
function start(){
	//顶部input部分
	var search=document.querySelector("#search");
	search.onfocus=function(){
		search.setAttribute("placeholder","");
	}
	search.onblur=function(){
		search.setAttribute("placeholder","好枕头好睡眠")
	}
	var btn=document.querySelector("button");
	btn.style.cursor="pointer";
	btn.onclick=function(){
		window.location="https://www.baidu.com/";//举个例子
	}
	//顶部----我的淘宝；
	var myTB=document.querySelector("#myTB");//a
	var myMalla=document.querySelector("#myMalla");//与a同级的div
	var myMallTB=document.querySelector("#myMallTB"); //span
	var myMallaa=myMalla.querySelectorAll("a");
	myMallTB.onmouseover=function(){
		myMalla.style.display="block";
		myMallTB.style.backgroundColor="white";
	}	
	myMallTB.onmouseout=function(){
		myMalla.style.display="none";
		this.style.backgroundColor="";
	}
	//顶部----手机版
	var phone=document.querySelector("#phone");
	var phoneMall=phone.querySelector("#phoneMall");
	var phonea=phone.querySelector("#phonea");
	phonea.onmouseover=function(){			
		phoneMall.style.display="block";
	}
	phonea.onmouseout=function(){
		
		phoneMall.style.display="none";		
	}
	//顶部----收藏夹
	var myCtrlt=document.querySelector("#myCtrlt");
	var myCtrlb=document.querySelector("#myCtrlb");
	var myCtrl=document.querySelector("#myCtrl"); 
	var myCtrlba=myCtrlb.querySelectorAll("a");
	myCtrl.onmouseenter=function(){
		myCtrlb.style.display="block";
		myCtrl.style.backgroundColor="white";
	}		
	myCtrl.onmouseleave=function(){
		myCtrlb.style.display="none";
		myCtrl.style.backgroundColor="";		
	} 	
	//顶部商家支持、网站导航的代码块和我的淘宝的代码块格式一样，暂时不写；
	//顶部背景图片轮播
	var headImg=document.querySelector("#head-img");
	var menuImg=headImg.querySelector(".menu-img");
	var timer;
	var n=0;
	var ln=0;
	var cir=document.querySelector(".cir");
	var cirSpan=cir.querySelectorAll("span");
	var innerHead=headImg.querySelector("#inner-head");
	var timer;
	function backfun(){
		n++;
		if(n>5){
		    n=0;	
		}
        var img=innerHead.querySelector("img");		
        //innerHead.style.opacity="0";
       // innerHead.style.transition="0.2s";
		img.style.opacity="0.4";
		img.style.transition="0.2s";
		img.addEventListener("transitionend",function(){			
		    innerHead.innerHTML='<img src="img/img'+n+'.jpg"></img>';			
			//innerHead.style.backgroundImage="url(img/img"+n+".jpg)";
		})
//		innerHead.addEventListener("transitionend",function(){			
//			innerHead.style.backgroundImage="url(img/img"+n+".jpg)";	
//			innerHead.style.opacity="1";
//		})
		cirSpan[n].className="active";
		cirSpan[ln].className="";					
		ln=n;
		if(n==1||n==2||n==4||n==3){
			menuImg.style.display="none";
		}
		else{
			menuImg.style.display="block";
		}
		//console.log(n)			
	}
	timer=setInterval(backfun,4000);
	for (i=0;i<cirSpan.length;i++) {
		cirSpan[i].index=i;
		cirSpan[i].onclick=function(){			
			clearInterval(timer);
			n=this.index-1;
			backfun();
			//console.log(n);
            timer=setInterval(backfun,4000);
		}
	}
	menuImg.onmouseover=function(){
		clearInterval(timer);
	}
	menuImg.onmouseout=function(){
		timer=setInterval(backfun,3000);
	}
	//.brand中右边的旋转效果
	var change=document.querySelector("#change");
	var changeImg=change.querySelector("#change-img");
	var focus=document.querySelectorAll(".focus");
//	var bn=0;
	//var called=true;
	//旋转函数-----没有采取很多图片，只做示范，若要每个span的图片不一样，只要在后台编写对应每个span包含图片的数组，直接调用
//  function move(){    	
//  	bn++;
//  	var focusSpan=document.querySelectorAll(".focus-span");
//  	var focusImgs=document.querySelectorAll(".focus-img");
////  	function motion(obj,time,dofu,callFun){
////  		dofu.call(obj);
////  		obj.style.transition=time;
////  		for (var i=0;i<focusSpan.length;i++) {
////  			
////  		}
////  	}
//      if(bn>3){
//      	bn=0;
//      }
//      //响应越来越慢，如何优化？
//      for (var i=0;i<focusSpan.length;i++) {
//      	focusSpan[i].index=i;
//      	(function(i){       		
//      		setTimeout(function(){
//      			focusSpan[i].style.transition="0.4s linear";       			
//      	        focusSpan[i].style.transform="rotateY(90deg)" ;      	        
//      		},i*Math.random()*40);
//      		    //console.log(1);
//      		    focusSpan[i].addEventListener("transitionend",function(){       			
//			        	//console.log(2);	
//			      		focusSpan[i].innerHTML='<img src="img/brand1'+bn+'.jpg" ></img>';
//			      		focusSpan[i].style.transform="";
//			      		focusSpan[i].style.transition="0.4s linear";    
//      	        },false)
//      	})(i);
//      	
//		} 
//  }
    //函数优化  ----- 抛硬币原理
    var j=0;//点击次数
    var focusSpan=document.querySelectorAll(".focus-span");
    var len=focusSpan.length;
    var lineNum=6;
    var m=1; //控制图片切换
    var focusSpanf=document.querySelectorAll(".focus-span-front");
    var focusSpanc=document.querySelectorAll(".focus-span-cen");
    function move(){   	
    	j++;
    	m++;
    	if(m>3){
    			m=0;   			
    		}
    	for (var i=0;i<len;i++) {   		  		
    		var rowNum=i%lineNum;
    		var colNum=parseInt(i/lineNum);
    		delayTime=(rowNum+colNum)*100;
            focusSpan[i].style.transition=".3s "+delayTime+"ms linear";
    		//focusSpan[i].style.transition=".3s"+delayTime+"ms linear";//空格害死人
    		focusSpan[i].style.transform = "rotateY("+j*180+"deg)";    		
    	}
    	
    	if(j>=1){
    		for(i=0;i<len;i++){
    			focusSpan[i].index=i;   			
    			focusSpan[i].addEventListener("transitionend",function(){ 
    				if(j%2==1){
     				focusSpanf[this.index].innerHTML='<img src="img/brand'+this.index+m+'.jpg"/class="focus-img">';   				
    				}
    				else{
    					focusSpanc[this.index].innerHTML='<img src="img/brand'+this.index+m+'.jpg"/class="focus-img">';
    			    }
    				
    			}) 		    		    				
    		}    		   	   		
    	} 
    	
    	if(j==3){
    		alert("总共需要72张图，前三个只做示范")
    	}
    }	   
    change.onclick=move;
    //美丽人生---左边字体轮换
    var t=0;  
    function textMove(){
    	//console.log(1)
    	var mi=document.querySelector("#mi");        
        t++;
        //console.log(t) ;
        if(t==80){        	
        	t=0;       	
        }
        if(t%20==0){
        	setTimeout(textMove,2500);
        }
        else{
        	setTimeout(textMove,10); //必须要设置一个10ms延时才有时间让t=0;transition不行        	
        }
        mi.style.top=-t+"px";
        
    }
    setTimeout(textMove,2500);
   
    
}  
  

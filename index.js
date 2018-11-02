/*
 function clearDisplay()
 {
	
 	document.getElementById("mydisplay").innerHTML="";

 }

 function getIt(val)
 {

	
 	console.log(val);

 	//document.getElementById("mydisplay").innerHTML+=arg;
 let abc=document.getElementById("mydisplay").innerHTML.trim();
console.log(abc);

 if (abc.length<=8)
{
document.getElementById("mydisplay").innerHTML+=arg ;  
}
else
{
 //document.getElementById("res").innerHTML="E"; 
 alert("Limit Exceeded");
}


}*/


//rc


function clearDisplay()
{
	
	document.getElementById("mydisplay").innerHTML="";

}

 function getIt(val)
 {

	
 	console.log(val);

 	//document.getElementById("mydisplay").innerHTML+=arg;
 let abc=document.getElementById("mydisplay").innerHTML.trim();
console.log(abc);

 if (abc.length<=8)
{
document.getElementById("mydisplay").innerHTML+=val ;  
}
else
{
 //document.getElementById("res").innerHTML="E"; 
 alert("Limit Exceeded");
}

}

function calc()
{
		let str= document.getElementById("mydisplay").innerHTML ;
	
		   
      var end=0,strt=0,i,u=0;
       
        var arr1=[];
        for (i=0;i<str.length;i++)
        {
           var p=str.charAt(i);
            if (p=='+'||p=='-'||p=='*'||p=='/')
            {
            end= i;
          arr1[u++]=str.substring(strt,end);
          arr1[u++]=p;
          strt=i+1;
            }
            }
            end=str.length;
             arr1[u++]=str.substring(strt,end);
            console.log(arr1);
            solve();
 function solve () {
 if (arr1.length==1){
   console.log(arr1);
 }  
else{
 if (arr1.includes('/')){
   var ct=arr1.indexOf('/');
   var ct1=parseInt(arr1[ct-1])/parseInt(arr1[ct+1]);
  arr1.splice(ct-1,3);
   arr1.splice(ct-1,0,ct1);
  solve();
  }
   

   else if (arr1.includes('*')){
   var ct=arr1.indexOf('*');
   var ct1=parseInt(arr1[ct-1])*parseInt(arr1[ct+1]);
   arr1.splice(ct-1,3);
   arr1.splice(ct-1,0,ct1);
   solve();
  }

   else if (arr1.includes('+')){
   var ct=arr1.indexOf('+');
   var ct1=parseInt(arr1[ct-1])+parseInt(arr1[ct+1]);
   arr1.splice(ct-1,3);
   arr1.splice(ct-1,0,ct1);
   solve(); 
  }

   else if (arr1.includes('-')){
   var ct=arr1.indexOf('-');
   var ct1=parseInt(arr1[ct-1])-parseInt(arr1[ct+1]);
   arr1.splice(ct-1,3);
   arr1.splice(ct-1,0,ct1);
   solve();
  }
  }
}


		document.getElementById("mydisplay").innerHTML = arr1;
}

function clr1(){
  var clr_r= document.getElementById("mydisplay").innerHTML;
  document.getElementById("mydisplay").innerHTML=clr_r.substring(0,clr_r.length -1);
}

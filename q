[1mdiff --git a/calc.html b/calc.html[m
[1mindex e1a50fb..06ef4a7 100644[m
[1m--- a/calc.html[m
[1m+++ b/calc.html[m
[36m@@ -59,30 +59,43 @@[m
 */			;[m
         }[m
 [m
[31m-        .extra-display{[m
[32m+[m[32m        .main-display{[m
         		padding:12px;[m
[31m-        		border:4px inset black;[m
[32m+[m[41m        [m		[32mborder:3px outset black;[m
         		height: 40px;[m
[32m+[m[41m         [m		[32mbackground-color: whitesmoke;[m
         }[m
 [m
         .my-table[m
         {[m
         	width:100%;[m
 /*        	background-color: #333;[m
[31m-*/			background-color: black;[m
[32m+[m[32m*/			background-color: darkgrey;[m
[32m+[m[32mborder:teal;[m
 [m
         }[m
[32m+[m
[32m+[m[32m        .device-name{[m
[32m+[m
[32m+[m[32m/*        	height: 20px[m
[32m+[m[32m*/  /*      	font-color: grey;[m
[32m+[m[32m    */    	font-weight: bolder;[m
[32m+[m[41m        [m	[32mwidth: 10px;[m
[32m+[m[41m        [m	[32mheight:20px;[m
[32m+[m[41m        [m	[32mpadding: 30px 0px 0px 70px;[m
[32m+[m[41m    [m		[32mfont-size: x-large;[m
[32m+[m[32m        }[m
[32m+[m
     </style>[m
 <body style="background-color: white">[m
     <div class="parent-Div">[m
         <div class="display-text">[m
[31m-        	<div class="extra-display">[m
[32m+[m[41m        [m	[32m<div class="main-display">[m
         		[m
         	</div>[m
 			[m
[32m+[m[41m        [m	[32m <span class="device-name">CALCULATOR</span>[m[41m [m
 [m
[31m-        	CODED CALCULATOR[m
[31m-        	[m
         </div>[m
         <table border="1" class="my-table"> [m
         [m

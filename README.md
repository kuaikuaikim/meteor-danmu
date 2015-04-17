# meteor-danmu
a barrage of video for meteor (meteor的一个弹幕视频插件)  
this package has exsit on the [meteor atmosphere](https://atmospherejs.com/jquick/video-danmu)
#### Add to your project
    meteor add jquick:video-danmu  
  
#### The demo
a barrage video named [danketv](http://www.danketv.com), you can check some video to see the effect.  
This site address: [www.danketv.com](http://www.danketv.com)

#### Simple API (how tu use it)
    ( More detail you can see the jquery.danmu.js which exsit on this package, it is pretty simple )  
##### 1. add a div to your page  
        <div id="danmu"></div>
##### 2. init barrage plugin  
<pre>  
<strong>You may needn't init plugin with this api, cause plugin has some default parameters inside.</strong>    
<strong>This api will customize your barrage as you want.</strong>
<code>$("#player-container").danmu({ //"player-container" is the id of barrage playing area  
left: 0, // offset of the left border  
top: 0 , // offset of the right borde
height: 450, // height of barrage playing area
width: player_width, // width of barrage playing area  
zindex :500, //div zindex  
speed:5000, // speed of barrage element, millisecond
sumtime:65535, // total time of the barrage playing
danmuss:{}, // objects of the barrage, major content of barrage playing
default_font_color:"#FFFFFF", // font color
font_size_small:24, // small barrage font size
font_size_big:28, // big barrage font size   
opacity:"0.7", //o pacity   
top_botton_danmu_time:4000    
});  </code></pre>
##### 3. add barrage content(object) 
<pre><code>
var theTime = $('#danmu').data('nowtime') + 5;
$('#player-container').danmu("add_danmu",{"text":"test danmu" , "color":"white", "size":"1","position":"0","time":theTime ,"isnew":" "});  
//<strong>I assign the time to the variable "theTime", this example will send the barrage content after 5 seconds.</strong>
</code></pre>
##### 4. start barrage playing 
<pre><code>$('#player-container').danmu('danmu_start'); </code></pre>
##### 5. stop barrage playing 
<pre><code>$('#player-container').danmu('danmu_stop'); </code></pre>
##### 6. pause barrage playing 
<pre><code>$('#player-container').danmu('danmu_stop'); </code></pre>

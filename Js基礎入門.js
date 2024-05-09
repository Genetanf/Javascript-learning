// 第一個基本的js程式碼
var today=new Date();
var hourNow=today.getHours();
var greeting;

if(hourNow>18){
    greeting="Good evening!";
}else if(hourNow>12){
    greeting="Good afternoon!";
}else if(hourNow>0){
    greeting="Good morning!";
}else{
    greeting="Welcome!";
}

document.write("<h3>"+greeting+"</h3>")


// 第一個基本的js程式碼(2)
var price;
var quantity;
var total;

price=5;
quantity=14;
total=price*quantity;

var el=document.getElementById("cost");
el.textContent="$"+total;


// 反斜線 backward slash 與引號的使用關係
var title;
var message;
title="Molly's special offers";
message="<a href=\'https://www.google.com/\'>25% off!</a>";

var elTitle=document.getElementById("title");
elTitle.innerHTML=title;
var elNote=document.getElementById("note");
elNote.innerHTML=message;


/* 利用縮寫表示法建立變數 */
//(1)
var price=5;
var quantity=14;
var total=price*quantity;

//(2)
var price, quantity, total;
price=5;
quantity=14;
total=price*quantity;

//(3)
var price=5, quantity=14;
var total=price*quantity;

//(4) 將 total 寫入至具有id屬性值為 cost 的元件中
var el=document.getElementById('cost');
el.textContent="$"+total;


/* 陣列 Array */
/* 兩種陣列的表示法 */
//(1) 陣列實字法 Array Literal
var color;
color=["red","blue","green"];

var el=document.getElementById("color");
el.textContent=color[0];

//(2)陣列構造子 Array Constructor
var colors=new Array('pink','blue','green');

var el=document.getElementById("colors");
el.textContent=colors[1] ;

//兩種振烈表示法皆可通用，但須注意括號種類以及使用的名稱等差別


/* 函式 */
//基礎函式
var msg="Sign up to receive our newsletter for 10% off!";
function updateMessage(){
    var el=document.getElementById("message");
    el.textContent=msg;
}
updateMessage();

//函式與參數
function getArea(width,height){
    return width*height;
}
var Area=document.getElementById("area");
Area.textContent=getArea(5,3);

//立即執行函數 / 匿名函數
var area=(function(){
    var width=3;
    var height=2;
    return width*height;
}())
var anonymous=document.getElementById("anonymous");
anonymous.textContent=area;


/* 物件、特性、方法 */
var hotel={
    name:"Quay",
    rooms:40,
    booked:25,
    gym:true,
    roomTypes:["twin","double","suite"],
    //以上是由變數所組成的特性
    checkAvailability:function(){
        return this.rooms-this.booked;
    }
    //以上是由函示所組成的方法
}

var elName=document.getElementById("hotelName");
elName.textContent=hotel.name;
var elRooms=document.getElementById("rooms");
elRooms.textContent=hotel.rooms;
var elleft=document.getElementById("left");
elleft.textContent=hotel.checkAvailability();
var eltype=document.getElementById("type");
eltype.textContent=hotel.roomTypes[0];

//建立多個物件
function Hotel(name,rooms,booked){
    this.name=name;
    this.rooms=rooms;
    this.booked=booked;
    this.checkAvailability=function(){
        return this.rooms-this.booked;
    };
}

var QuayHotel=new Hotel("quay",40,25);
var ParkHotel=new Hotel("Park",122,75);
var Quay=document.getElementById("Quay");
Quay.textContent=QuayHotel.checkAvailability();
var Park=document.getElementById("Park");
Park.textContent=ParkHotel.name;

var details1=QuayHotel.name+" rooms:";
    details1+=QuayHotel.checkAvailability();
var elHotel1=document.getElementById("hotel1");
elHotel1.textContent=details1;

//使用 new Object()建立物件
var hotel=new Object();
hotel.name="Gene";
hotel.rooms=50;
hotel.booked=12;
hotel.checkAvailability=function(){
    return this.name-this.booked;
};

var elobject=document.getElementById("object");
elobject.textContent=hotel.name;

/* 比較運算子 Comparison Operators */
//單項比較
var pass=60;
var score=95;

var hasPassed=score>=pass;
var elpass=document.getElementById("pass1");
elpass.textContent=hasPassed;

//多項比較
var score1=60;
var score2=75;
var highscore1=75;
var highscore2=90;

var compare=(highscore1+highscore2)>=(score1+score2);
var comparison=document.getElementById("compare");
comparison.textContent="New higher score: "+compare;


/* 條件判斷句 */
var score=50;
var msg=""
function Congratulation(){
    msg+="Congratulations!";
};

if(score>=60){
    Congratulation();
    msg+=" Proceed to next round!";
}
else{
    msg="Sorry, you're failed";
}
var examine=document.getElementById("examine");
examine.textContent=msg;


/* Siwtch 條件判斷句 */
var msg1;
var level=2;

switch(level){
    case 1:
        msg1="First test";
        break;
    
    case 2:
        msg1="Second test";
        break;
    
    case 3:
        msg1="Third test";
        break;
}

var elswitch=document.getElementById("switch");
elswitch.textContent=msg1;


/* 迴圈 Loops */
//For 迴圈
var score=[24,32,56];
var arrayLength=score.length;
var roundNumber=0;
var msg="";
var i;

for(i=0;i<arrayLength;i++){
    roundNumber=(i+1);
    msg+="Round"+roundNumber;
    msg+=":"+score[i]+"\n"; //使用 "\n" 搭配 css white-space:pre-line 來實現換行
}

var forLoops=document.getElementById("for");
forLoops.textContent=msg;

//While 迴圈
var i=1;
var msg="";

while(i<10){
    msg+=i+" x 5 ="+(i*5)+"\n";
    i++;
}

var whileLoops=document.getElementById("while");
whileLoops.textContent=msg;

//do while 迴圈
var i=1;
var msg="";

do{
    msg+=i+" x 5 ="+(i*5)+"\n";
    i++;
}while(i<1);

var doWhileLoops=document.getElementById("doWhile");
doWhileLoops.textContent=msg;


/* DOM 控制處理加入文件 */
var elCreat=document.createElement("li");
var elText=document.createTextNode("zero item");
elCreat.appendChild(elText);

//獲取要插入的位置
var elPosition=document.getElementById("elList");
var position=elPosition.getElementsByTagName("li")[0];

// 利用 inserBefore 將新的 <li> 元素插入到指定位置
elPosition.insertBefore(elCreat,position);


/* DOM 控制處裡移除元件 */
var remove=document.getElementsByTagName("li")[1]
var containerE1=remove.parentNode;
containerE1.removeChild(remove);



/* 事件 Event */
//傳統 DOM 事件處理器 (較少用，只能綁定一個函式)
function checkUsername(){
    var elMsg= document.getElementById("feedback");
    if(this.value.length<5){
        elMsg.textContent="Too less";
    }else{
        elMsg.textContent="";
    }
}

var eltraditional=document.getElementById("traditional");
eltraditional.onblur=checkUsername;

//事件監聽器 (較常使用，可綁定多個函式)
function listener(){
    var elMsg=document.getElementById("comment");
    if(this.value.length<5){
        elMsg.textContent="too less!";
    }else{
        elMsg.textContent="good!";
    }
}

var elListener=document.getElementById("present");
elListener.addEventListener("blur",listener,false);

//Event 物件
function explain(e){
    var target=e.target;
}

var el=document.getElementById("explain");
el.addEventListener("blur",explain,false);



/* Event物件案例 P269頁 */
function getTarget(e){
    if(!e){
        e=window.event;
    }
    return e.target||e.srcElement;
}

function itemDone(e){
    //自清單中移除項目
    var target,elParent,elGrandparent;
    target=getTarget(e);
    elParent=target.parentNode;
    elGrandparent=target.parentNode.parentNode;
    elGrandparent.removeChild(elParent);

    //避免超連接將使用者帶離頁面
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue=false;
    }
}

//設置事件監聽器，當click事件啟動時便呼叫itemDone()
var el=document.getElementById("shopping");
if(el.addEventListener){
    el.addEventListener("click",function(e){
        itemDone(e);
    },false);
}else{
    el.attachEvent("onclick",function(e){
        itemDome(e);
    });
}



/* Focus/Blur 事件 */
var el=document.getElementById("forcus");
var elMsg=document.getElementById("feed");

function checkc(){
    var user=el.value;
    if(user.length<5){
        elMsg.textContent="too less";
    }else{
        elMsg.textContent="good enough";
    }
}
function tipUsername(){
    elMsg.textContent="Must be at least 5 words";
}

elMsg.addEventListener("blur",checkc,false);
el.addEventListener("focus",tipUsername,false);

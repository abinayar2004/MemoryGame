var co=0;
var te;
var k1;
var fb1;
var won=0;
var ar=[1,2,3,4,5,6,1,2,3,4,5,6];
var idi=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
 function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        for(i=0;i<=11;i++){
        var i1=document.createElement("img");
        i1.style.height="98%";
        i1.style.width="98%";
        i1.id=(idi[i]);
        i1.value=(idi[ar[i]-1]);
        var t=(i1.value)+".webp";
        i1.setAttribute("src",t);
        var t1="b"+i;
        document.getElementById(t1).append(i1);
        }
    }
shuffleArray(ar);
function turn(event){
    var t=(event.target.parentElement.id);
    var v;
    let matches = t.match(/(\d+)/);
    if (matches) {
        var fboxid=(idi[matches[0]]);
        rimg=ar[matches[0]];
        v=(idi[rimg-1]);
    }
    var k="img"+matches[0];
    document.getElementById(k).style.display="none";
    document.getElementById(fboxid).style.display="block";
    co++;
    if(co==2){
        if(te==v){
            won++;
        }
        else{
            setTimeout(function() {
                document.getElementById(k).style.display="block";
                document.getElementById(fboxid).style.display="none";
                document.getElementById(k1).style.display="block";
                document.getElementById(fb1).style.display="none";
            }, 500);
        }
        co=0;
    }  
    console.log(won);
    te=v;
    if(co==1){
    k1=k;
    fb1=fboxid;
    }
    setTimeout(function() {
    if(won==6){
        console.log("You Won");
        alert("you Won!!!");
        location.reload();
    }}, 500);
}
function start(){
    document.getElementById("desc").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("time").style.display="block";
    var t;
    var ele=document.getElementById("t");
    (function(){
        var sec=59;
        t=setInterval(() => {
            ele.innerHTML="00:"+sec;
            sec--;
            if(sec==0)
            {
                alert("Time up");
                location.reload();
            }
        }, 1000);
    })()
}

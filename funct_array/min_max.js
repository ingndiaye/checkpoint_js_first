
function minimum(chn) { 
    let min=chn[0];
    for(i=0;i<chn.length;i++){
        if(min>chn[i])min=chn[i];
    }
    return min;
}
function maximum(chn) { 
    let max=chn[0];
    for(i=0;i<chn.length;i++){
        if(max<chn[i])max=chn[i];
    }
    return max;
}

//document.getElementById("demo0").innerHTML ="Minimum du tableau: "+minimum([5,2,15,1,0,25,-1]);
//document.getElementById("demo1").innerHTML ="Maximum du tableau: "+maximum([5,2,15,1,0,25,-1]);

function inferieur_a_10(chn) { 
    let sm=[];
    for(i=0;i<chn.length;i++){
        if(chn[i]<10)sm.push(chn[i]); 
    }
    return sm;
}
//document.getElementById("demo0").innerHTML ="Les élements inférieur à 10 : "+inferieur_a_10([5,2,15,10,0,25,-1]);
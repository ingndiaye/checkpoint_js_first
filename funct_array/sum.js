function somme(chn) { 
    let sm=0;
    for(i=0;i<chn.length;i++){
        sm+=chn[i];
    }
    return sm;
}
//document.getElementById("demo0").innerHTML ="La somme de élement du tableau: "+somme([5,2,15,1,0,25,-1]);

 
function est_nbre_premier(nb) { 
    if(!((typeof nb)=='number')) return "c'est pas un nombre";
    if(nb==1) return true;
    if(nb==2) return true;
    let prm=true; 
    for(i=2;i<nb;i++){
        var rs=Math.floor(nb/i);
        if((rs*i)==nb) prm=false; 
    }
    return prm;
}
/*
let message="";
let val=2;
if(est_nbre_premier(val)) message=val+" est un nombre premier";
else message=val+" n'est pas un nombre premier";
document.getElementById("demo0").innerHTML =message;*/
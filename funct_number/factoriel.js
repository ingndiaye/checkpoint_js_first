 
function factoriel_nbr(nb) { 
    if(!((typeof nb)=='number')) return "c'est pas un nombre";
    let fctrl=1; 
    for(i=1;i<=nb;i++){
        fctrl*=i;
    }
    return fctrl;
}
//document.getElementById("demo0").innerHTML ="le factoriel est : "+factoriel_nbr(10);
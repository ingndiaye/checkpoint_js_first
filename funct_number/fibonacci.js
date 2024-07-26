
function suite_fibonacci(nb) { 
    let nbr1 = 0;
    let nbr2 = 1; 
    let nbr3; 
 
    let suit_tab=[nbr1,nbr2];
 
    for (i = 2; i <= nb; ++i) {
        nbr3 = nbr1 + nbr2;
        nbr1 = nbr2;
        nbr2 = nbr3;
        suit_tab.push(nbr3); 
    }
    return suit_tab;
} 

//document.getElementById("demo0").innerHTML ="La suite fibonacci de 16 : ["+suite_fibonacci(16)+"]";
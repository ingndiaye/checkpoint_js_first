function to_upp_first(chn) {
    var tb = chn.split(" ");
    var lgr = tb.length;
    var arr=[""];
    for (i = 0; i < lgr; i++) {
        var mot=tb[i]; 
        mot = mot.charAt(0).toUpperCase() + mot.slice(1); 
        arr.push(mot); 
    }

    return arr.join(" ");
}
//document.getElementById("demo0").innerHTML ="Premier en majuscule : "+to_upp_first("Je suis sage à ma place");
function language(){
    con1 = document.getElementsByClassName("con1");
    if (document.getElementById("eng_flag").style.display=="block"){
        document.getElementById("eng_flag").style.display = "none";
        document.getElementById("gr_flag").style.display = "block";
    }else{
        document.getElementById("gr_flag").style.display = "none";
        document.getElementById("eng_flag").style.display = "block";
    }
    for (let nd = 0; nd < con1.length; nd ++){
        if (con1[nd].style.display == "none"){
            con1[nd].style.display = "block";
        } else {
            con1[nd].style.display = "none";
        }
    }
    if (document.getElementsByClassName("home")[0].style.display == "none"){
        document.getElementsByClassName("home")[0].style.display = "block";
        document.getElementsByClassName("home")[1].style.display = "none";
    } else {
        document.getElementsByClassName("home")[1].style.display = "block";
        document.getElementsByClassName("home")[0].style.display = "none";
    }
}
function focus(){
    const params = new URLSearchParams(window.location.search);
    const id = params.get('ind');
    const cons = document.getElementsByClassName('ind');
    let result = [];
    for (let x = 0;x < cons.length;x++){
        if (cons[x].style.display != "none"){
            result.push(cons[x]);
        }
    }
    result[id].scrollIntoView();
}
function printe(){
    let start=document.getElementById("start").value;
    let end=document.getElementById("end").value;
    let bos=document.getElementById("bos");

    for( let i=start;i<=end;i++){

        if (i%2==0){ 
            bos.innerHTML +="<li>"+i+"</li>";
        }
        else{
            bos.innerHTML +="<li style='background-color: aqua;'>"+i+"</li>";
        }
    }
}
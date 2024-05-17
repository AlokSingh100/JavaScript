function print(){
    let start=document.getElementById("start").value;
    let end=document.getElementById("end").value;
let bos=document.getElementById("bos");

    for( let i=start;i<=end;i++)
        bos.innerHTML +=<li>+i+</li>;
}
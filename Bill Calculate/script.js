
function bill(){
     product = document.getElementById("product").value;
     price = document.getElementById("price").value;
     quantity = document.getElementById("quantity").value;
     option= document.getElementById("option").value;
     pr = (price * quantity);
   
     total1=document.getElementById("total");
    switch(option){
        case "5": total1.innerHTML=+((pr * 5)/100) + + pr;
        break;
        case "12": total1.innerHTML=+((pr * 12)/100) + + pr;
        break;
        case "18": total1.innerHTML=+((pr * 18)/100) + + pr;
        break;
        case "28": total1.innerHTML=+((pr * 28)/100) + + pr;
        break;
        default:alert("Pleac select any 1 option");
    }
document.getElementById("pri").innerHTML=pr;
    document.getElementById("pro1").innerHTML=product;
    document.getElementById("gs").innerHTML=option;
}
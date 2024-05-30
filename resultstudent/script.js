function Submit1(){
   let snames=document.getElementById("snames").value;
   let roll=document.getElementById("roll").value;
   let clas=document.getElementById("clas").value;
   let javaM=document.getElementById("javaM").value;
   let cM=document.getElementById("cM").value;
   let cplM=document.getElementById("cplM").value;
   let pythonM=document.getElementById("pythonM").value;
   let phpM=document.getElementById("phpM").value;

   let total= +javaM + +cM + +cplM + +pythonM + +phpM;
   let percentage= (total*100)/500;
   if(javaM>=35 && cM>=35 && cplM>=30 && pythonM>=35 && phpM>=35)
    {
       if(percentage>=80 && percentage<=100){
        document.getElementById("gread").innerHTML="A"
       }
       else if(percentage>=70 && percentage<=79){
        document.getElementById("gread").innerHTML="B"
       }
       else if(percentage>=60 && percentage<=69){
        document.getElementById("gread").innerHTML="C"
       }
       else if(percentage>=50 && percentage<=59){
        document.getElementById("gread").innerHTML="D"
       }
        
    }
    else{
        document.getElementById("gread").innerHTML="Fail"
    }
    document.getElementById("naame").innerHTML=snames;
    document.getElementById("rno").innerHTML=roll;
    document.getElementById("class").innerHTML=clas;
    document.getElementById("per").innerHTML=percentage;


    if (percentage<=35) {
        
        document.getElementById("java").innerHTML=javaM+"/100"+"f";
    } else {
        document.getElementById("java").innerHTML=javaM+"/100";
    }
    if (percentage<=35) {

        document.getElementById("c").innerHTML=cM+"/100"+"F";
    } else {
        
        document.getElementById("c").innerHTML=cM+"/100";
    }
    if (percentage<=35) {
        
        document.getElementById("cpl").innerHTML=cplM+"/100"+"F";
    } else {
        
        document.getElementById("cpl").innerHTML=cplM+"/100";
    }
    if (percentage<=35) {
        
        document.getElementById("python").innerHTML=pythonM+"/100"+"F";
    } else {
        
        document.getElementById("python").innerHTML=pythonM+"/100";
    }
    if (percentage<=35) {
        document.getElementById("php").innerHTML=phpM+"/100"+"F";

    } else {
        
        document.getElementById("php").innerHTML=phpM+"/100";
    }
    if (percentage<=35) {
        document.getElementById("total1").innerHTML=total+"/500"+"F";
    } else {
        
        document.getElementById("total1").innerHTML=total+"/500";
    }



}
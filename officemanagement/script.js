function Salary(){
    let emName=document.getElementById("emName").value;
    let emSalary=document.getElementById("emSalary").value;
    let emday=document.getElementById("emday").value;
    let tds=document.getElementById("tds").value;
    let pf=document.getElementById("pf").value;
    let yer=document.getElementById("yer").value;
    let month=document.getElementById("month").value;

    let yearctc=emSalary*12;
    let monthctc=0;
    switch(month) {
        case "January":
            monthctc=31;
            break;
        case "February":
            if(yer%400==0){
                monthctc=29;
            }
            else{
                monthctc=28;
            }
            break;
        case "March":
            monthctc=31;
            break;
        case "April":
            monthctc=30;
            break;
        case "May":
            monthctc=31;
            break;
        case "June":
            monthctc=30;
            break;
            case "July":
                monthctc=31;
            break;
        case "August":
            monthctc=31;
            break;
        case "September":
            monthctc=30;
            break;
        case "October":
            monthctc=31;
            break;
        case "November":
            monthctc=30;
            break;
            case "December":
                monthctc=31;
                break;
            }
            let holiday=emSalary/monthctc*emday;
            
    
    
    document.getElementById("Ctc").innerHTML=yearctc;
    document.getElementById("name").innerHTML=emName;
    document.getElementById("salary").innerHTML=emSalary;
    document.getElementById("date").innerHTML=month+" "+yer;
    document.getElementById("leave").innerHTML=holiday;
    
}
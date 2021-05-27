const calc = ()=>{
    let Economics = document.getElementById('eco').value;
    let English = document.getElementById('eng').value;
    let physcology = document.getElementById('phy').value;
   let totalGrades = parseFloat(Economics) + parseFloat(English) + parseFloat(physcology);
//    alert(totalGrades);
   let grades ="";

   let perc = (totalGrades/300)*100;
//    alert(perc);
if(perc<= 100&& perc>=80){
    grades = 'A'
    }else if (perc<=79 && perc>=60){
        grades = "B"
    }else if(perc<=59&& perc>=40){
        grades = "C"
    }else{
        grades = "Fail"
    }

 

    let result = document.getElementById('results');
    
     result.innerHTML = `out of 300 your total is ${totalGrades} and percentage is ${perc}% and grade is ${grades}`;
    
     if(perc >=39){
        result.innerHTML = `out of 300 your total is ${totalGrades} and percentage is ${perc}% <br/>and grade is ${grades}.you are pass`;
    
        
    }else{
        result.innerHTML = `out of 300 your total is ${totalGrades} and percentage is ${perc}% <br/>and grade is ${grades}.you are fail`;
    
    }
    



} 

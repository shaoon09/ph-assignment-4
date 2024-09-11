function calculateTax(income, expenses) {
    if(typeof income !== 'number' || typeof expenses !== 'number' || income < 0 || expenses < 0 ||  income < expenses )
    {
        return "Invalid Input";
    }
    const tax = (income - expenses) * 0.20;
    return tax;
    


}



function sendNotification(email) {
    if(!email.includes('@'))
    {
        return "Invalid Email";
    }
    let parts = email.split('@');
    
    if (parts.length !== 2 || parts[0].length === 0 || parts[1].length === 0)
    {
        return "Invalid Email"; 
    }
   let username = parts[0];
   let domainName = parts [1];
   return `${username} sent you an email from ${domainName}`;

}


function checkDigitsInName(name) {
    
    if (typeof name !== 'string') {
        return "Invalid Input";
    }

    
    for (let i = 0; i < name.length; i++) {
        
        if (!isNaN(name[i])) {
            return true;
        }
    }

    
    return false;
}



function calculateFinalScore(obj){
    if(typeof obj !== 'object'){

        return  "Invalid Input";

    }
    const { name, testScore, schoolGrade, isFFamily } = obj;
    if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean' || testScore > 50 || schoolGrade > 30) {
        return "Invalid Input";
}
let finalscore = testScore + schoolGrade;
if(isFFamily){
    finalscore +=20;
}
return finalscore >= 80;
}




function waitingTime(waitingTimes, serialNumber) {

    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    let sum = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        sum += waitingTimes[i];
    }
    let averageTime = Math.round(sum / waitingTimes.length);

    let remainingPeople = serialNumber - waitingTimes.length - 1;
    let isratWaitingTime = remainingPeople * averageTime;

    return isratWaitingTime;
}


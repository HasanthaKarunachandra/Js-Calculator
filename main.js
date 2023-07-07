let inputElementobj = document.getElementById('inputE1');
let numberOne;
let numberTwo;
inputElementobj.addEventListener('keyup',(event)=>{
    if(event.key=='Enter'|| event.keyCode==13){
        let tempVal=inputElementobj.value;
        if(!isNaN(tempVal)){
            numberOne=parseInt(tempVal);
            console.log(numberOne+10);
        }
        
    }
});

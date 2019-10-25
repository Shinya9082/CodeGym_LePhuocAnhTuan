let result=0;
let operatorOverlap=false;

function buttonNumber(name) {
    if (document.getElementById('result').value === '0') {
        document.getElementById('result').value=name;
    } else if (result === 0) {
        document.getElementById('result').value+=name;
    } else {
        document.getElementById('result').value=name;
        result = 0;
    }
    operatorOverlap=false;
}
function buttonOperator(name) {
    if(!operatorOverlap){
        if(name==='='){
            result=eval(document.getElementById('result').value);
            document.getElementById('result').value=result;
  //          console.log(result);
       //     result = 0;
//            console.log(result);
            operatorOverlap=true;
        }else
            document.getElementById('result').value+=name;
        operatorOverlap=true;
    }

}
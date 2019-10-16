let year = parseInt(prompt("Hãy nhập số năm"));
if(year%4===0&& year%100!==0 || year%400===0){
    alert("Là năm nhuận")
}else{
    alert("Không phải năm nhuận")
}
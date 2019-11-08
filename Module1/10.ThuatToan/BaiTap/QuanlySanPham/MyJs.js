let arrayProduct=['Iphone','Asus'];


function add() {
    arrayProduct.push(document.getElementById("productName").value);
    showProduct();
}

function showProduct() {
    let text= "<table><tr>" +
        "<th>ID</th>" +
        "<th>ProductName</th>" +
        "<th>"+arrayProduct.length+" Product</th>";
    for(let i=0;i<arrayProduct.length;i++){
        text+="<tr>" +
            "<td>"+(i+1)+"</td>"+ "<td>"+arrayProduct[i]+"</td>" +
            "<td><input id='"+i+"' type='button' value='Edit' onclick='editProduct(this.id)'>     "+
            "<input id='"+i+"' type='button' value='Delete' onclick='deleteProduct(this.id)'></td>"+
            "</tr>";
    }
    text+=  "</tr></table>";
    document.getElementById("P1").innerHTML=text;
}

function editProduct(num) {
    num=parseInt(num);
    arrayProduct[num]=prompt("Input name");
    showProduct();
}

function deleteProduct(num) {
    num=parseInt(num);
    let n=arrayProduct.length;
    for (let i=num;i<n;i++){
        if(i!==(n-1))
            arrayProduct[i]=arrayProduct[i+1];
        else
            arrayProduct.pop();
    }
    showProduct();
}
showProduct();
function display(val) {
    document.getElementById("display").value += val
}
function result(){
    var chuoi = document.getElementById("display").value;
    document.getElementById("display").value = eval(chuoi);
}
function clean(){
    document.getElementById("display").value = "";
}
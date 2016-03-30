var readonlyProperty = true;

$(document).ready(function () {
    $(function(){
        document.getElementById("addNewLine").style.visibility='hidden';

    });
});

function loadContent(content){
    if(content === 'logout'){
        window.location = "../login.html";
    }
    $("#includedContent").load(content + ".html");
}

function showInputForm(){
    document.getElementById("addNewLine").style.visibility='visible';
}

function modifyMark(id){
    if(readonlyProperty == true){
        document.getElementById(id).removeAttribute("readonly");
        readonlyProperty = false;
    }else{
        document.getElementById(id).readOnly = "true";
        readonlyProperty = true;
    }
}

function validate(){
    var avg = document.getElementById("avg").value;
    var quant = document.getElementById("studQuant").value;
    if(avg > 5 || avg < 0 || quant <= 0 || quant > 999){
        alert ("FAIL!");
    }else{
        var table = document.getElementById("statistics");
        var row = table.insertRow(1);
        row.className = "info";
        var subjCode = row.insertCell(0);
        var semester = row.insertCell(1);
        var quantity = row.insertCell(2);
        var averGrade = row.insertCell(3);
        subjCode.innerHTML = document.getElementById("subjectCode").value;
        semester.innerHTML = document.getElementById("semester").value;
        quantity.innerHTML = quant;
        averGrade.innerHTML = avg;
        document.getElementById("addNewLine").style.visibility='hidden';
    }

    function autocompleteFunc(value){
        var currentName = document.getElementById("stName").value;
        alert(value);
    }
    $(function() {
        var availableTags = [
            "Teet tee",
            "Anna Ravi",
            "Mait Punane",
            "Mari Oja",
            "Liis Leht"
        ];
        $( "#stName" ).autocomplete({
            source: availableTags
        });
    });
}
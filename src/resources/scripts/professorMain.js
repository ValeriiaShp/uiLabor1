var readonlyProperty = true;

$(document).ready(function () {
    $(function () {
        document.getElementById("addNewLine").style.visibility = 'hidden';

    });
});


function loadContent(content) {
    if (content === 'logout') {
        window.location = "../login.html";
    }
    //disable others
    document.getElementById('professorHome').style.display = 'none';
    document.getElementById('professorNotifications').style.display = 'none';
    document.getElementById('profEnterMarks').style.display = 'none';
    document.getElementById('professorMarks').style.display = 'none';
    document.getElementById('profStatistics').style.display = 'none';
    document.getElementById('professorSearch').style.display = 'none';
    //enable one
    document.getElementById(content).style.display = 'block';
}

function showInputForm() {
    document.getElementById("addNewLine").style.visibility = 'visible';
}

function modifyMark(id) {
    if (readonlyProperty == true) {
        document.getElementById(id).removeAttribute("readonly");
        readonlyProperty = false;
    } else {
        document.getElementById(id).readOnly = "true";
        readonlyProperty = true;
    }
}

function validate() {
    var avg = document.getElementById("avg").value;
    var quant = document.getElementById("studQuant").value;
    if (avg > 5 || avg < 0 || quant <= 0 || quant > 999) {
        alert("FAIL!");
    } else {
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
        document.getElementById("addNewLine").style.visibility = 'hidden';
    }
}
var data = [
    { value: "Teet Tee", label: "Teet Tee" },
    { value: "Anna Puu", label: "Anna Puu" },
    { value: "Siim Orav", label: "Siim Orav" },
    { value: "Kadri Voi", label: "Kadri Voi" },
    { value: "Mait Kass", label: "Mait Kass" }
];
$(function() {
    $("#sdName").autocomplete({
        source: data
    });
});



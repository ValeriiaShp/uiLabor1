var readonlyProperty = true;


var studentsArray = '{ "students" : [' +
    '{ "firstName":"John" , "lastName":"Doe", "email":"john.doe@ttu.ee", "subjectCode":"IDU0021", "grade":"3"},' +
    '{ "firstName":"Anna" , "lastName":"Smith", "email":"anna.smith@ttu.ee","subjectCode":"IDU0021", "grade":"5" },' +
    '{ "firstName":"Peter" , "lastName":"Jones", "email":"peter.jones@ttu.ee", "subjectCode":"IDU0021", "grade":"2"} ' +
    ']}';

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
    document.getElementById('professorNotifications').style.display = 'none';
    document.getElementById('profEnterMarks').style.display = 'none';
    document.getElementById('professorMarks').style.display = 'none';
    document.getElementById('profStatistics').style.display = 'none';
    document.getElementById('professorSearch').style.display = 'none';
    //enable one
    var div = document.getElementById(content);
    div.style.display = 'block';
    if (content === "professorNotifications") {
        professorNotifications();
    } else if (content === "profEnterMarks") {
        profEnterMarks();
    } else if (content === "professorMarks") {
        professorMarks();
    } else if (content === "profStatistics") {
        professorStatistics();
    }

}

function professorNotifications() {

}

function profEnterMarks() {

}

function professorMarks() {
    var table = document.getElementById("marksProf");
    table.tBodies[0].remove();
    for (var i = 0; i < Object.keys(studentsArray).length - 1; i++) {
        changedPage = false;
        obj = JSON.parse(studentsArray);
        var row = table.insertRow(1);
        row.className = "info";
        var studentName = row.insertCell(0);
        var subjectCode = row.insertCell(1);


        var grade = row.insertCell(2);
        studentName.innerHTML = obj.students[i].firstName + " " + obj.students[i].lastName;
        subjectCode.innerHTML = obj.students[i].subjectCode;
        grade.innerHTML = obj.students[i].grade;
    }

}
function professorStatistics() {
    var table = document.getElementById("marksProf");
    table.tBodies[0].remove();
    for (var i = 0; i < Object.keys(studentsArray).length - 1; i++) {
        changedPage = false;
        obj = JSON.parse(studentsArray);
        var row = table.insertRow(1);
        row.className = "info";
        var studentName = row.insertCell(0);
        var subjectCode = row.insertCell(1);


        var grade = row.insertCell(2);
        studentName.innerHTML = obj.students[i].firstName + " " + obj.students[i].lastName;
        subjectCode.innerHTML = obj.students[i].subjectCode;
        grade.innerHTML = obj.students[i].grade;
    }

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
    {value: "Teet Tee", label: "Teet Tee"},
    {value: "Anna Puu", label: "Anna Puu"},
    {value: "Siim Orav", label: "Siim Orav"},
    {value: "Kadri Voi", label: "Kadri Voi"},
    {value: "Mait Kass", label: "Mait Kass"}
];
$(function () {
    $("#sdName").autocomplete({
        source: data
    });
});



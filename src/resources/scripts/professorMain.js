var readonlyProperty = true;


var studentsArray = '{ "students" : [' +
    '{ "name":"John Doe", "studentCode":"124578", "email":"john.doe@ttu.ee", "subjectCode":"IDU0021", "grade":"3"},' +
    '{ "name":"Anna Smith", "studentCode":"135478", "email":"anna.smith@ttu.ee","subjectCode":"IDU0021", "grade":"5" },' +
    '{ "name":"Peter Jones", "studentCode":"137964", "email":"peter.jones@ttu.ee", "subjectCode":"IDU0021", "grade":"2"} ' +
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
    document.getElementById("addNewLine").style.visibility = 'hidden';
    var table = document.getElementById("marksProf");
    table.tBodies[0].remove();
    table.appendChild(document.createElement('tbody'));
    var tableBody = table.getElementsByTagName('tbody')[0];
    for (var i = 0; i < Object.keys(studentsArray).length - 1; i++) {
        obj = JSON.parse(studentsArray);
       var row = tableBody.insertRow(0);
        row.className = "info";
        var studentName = row.insertCell(0);
        var subjectCode = row.insertCell(1);
        var grade = row.insertCell(2);
        studentName.innerHTML = obj.students[i].name;
        subjectCode.innerHTML = obj.students[i].subjectCode;
        grade.innerHTML = obj.students[i].grade;
    }

}
function professorStatistics() {
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
    var studentName = document.getElementById("studentName").value;
    var subjectCOde = document.getElementById("subjectCode").value;
    var grade = document.getElementById("grade").value;
    if (grade > 5 || grade < 0) {
        alert("FAIL!");
    } else {
        var obj = JSON.parse(studentsArray);
        obj['students'].push({"name":studentName,"email":null, "subjectCode":subjectCOde, "grade":grade});
        studentsArray = JSON.stringify(obj);
        document.getElementById("studentName").value = "";
        document.getElementById("subjectCode").value = "";
        document.getElementById("grade").value = "";
        professorMarks();
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



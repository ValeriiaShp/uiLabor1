var readonlyProperty = true;


var studentsArray = '{ "students" : [' +
    '{ "name":"John Doe", "studentCode":"124578", "email":"john.doe@ttu.ee", "subjectCode":"IDU0021", "grade":"3"},' +
    '{ "name":"Anna Smith", "studentCode":"135478", "email":"anna.smith@ttu.ee","subjectCode":"IDU0021", "grade":"5" },' +
    '{ "name":"Peter Jones", "studentCode":"137964", "email":"peter.jones@ttu.ee", "subjectCode":"IDU0021", "grade":"2"} ' +
    ']}';
var jsonSize = 2;
var data = [
    {value: "John Doe"},
    {value: "Anna Smith"},
    {value: "Peter Jones"},
];

$(document).ready(function () {
    $(function () {
        document.getElementById("addNewLine").style.visibility = 'hidden';

    });
});

function showInputForm() {
    document.getElementById("addNewLine").style.visibility = 'visible';
}


function loadContent(content) {
    if (content === 'logout') {
        window.location = "../login.html";
    }
    //disable others
    document.getElementById('professorNotifications').style.display = 'none';
    document.getElementById('professorMarks').style.display = 'none';
    document.getElementById('profStatistics').style.display = 'none';
    document.getElementById('professorSearch').style.display = 'none';
    //enable one
    document.getElementById(content).style.display = 'block';
    if (content === "professorNotifications") {
        professorNotifications();
    } else if (content === "professorMarks") {
        professorMarks();
    }

}

function professorNotifications() {

}

function professorMarks() {
    document.getElementById("addNewLine").style.visibility = 'hidden';
    var table = document.getElementById("marksProf");
    table.tBodies[0].remove();
    table.appendChild(document.createElement('tbody'));
    var tableBody = table.getElementsByTagName('tbody')[0];
    for (var i = 0; i <= jsonSize; i++) {
        var obj = JSON.parse(studentsArray);
        var row = tableBody.insertRow(0);
        row.className = "info";
        var studentName = row.insertCell(0);
        var studentCode = row.insertCell(1);
        var subjectCode = row.insertCell(2);
        var grade = row.insertCell(3);
        studentName.innerHTML = obj.students[i].name;
        subjectCode.innerHTML = obj.students[i].subjectCode;
        studentCode.innerHTML = obj.students[i].studentCode;
        grade.innerHTML = obj.students[i].grade;


    }

}


function detailedInfo() {
    var table = document.getElementById("detailedInfo");
    table.tBodies[0].remove();
    table.appendChild(document.createElement('tbody'));
    var tBody = table.getElementsByTagName('tbody')[0];
    var name = document.getElementById("sdName").value;
    var obj = JSON.parse(studentsArray);
    for (var i = 0; i <= jsonSize; i++) {
        if (name === obj.students[i].name) {
            var row = tBody.insertRow(0);
            row.className = "info";
            var studentName = row.insertCell(0);
            var studentCode = row.insertCell(1);
            var subjectCode = row.insertCell(2);
            var grade = row.insertCell(3);
            studentName.innerHTML = obj.students[i].name;
            subjectCode.innerHTML = obj.students[i].subjectCode;
            studentCode.innerHTML = obj.students[i].studentCode;
            grade.innerHTML = obj.students[i].grade;
        }
    }
    document.getElementById("detailedInfo").style.display = "block";
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
    var studentCode = document.getElementById("studentCode").value;
    var subjectCOde = document.getElementById("subjectCode").value;
    var grade = document.getElementById("grade").value;
    if (grade > 5 || grade < 0 || studentCode.length < 6) {
        alert("FAIL!");
    } else {
        var obj = JSON.parse(studentsArray);
        obj['students'].push({
            "name": studentName,
            "studentCode": studentCode,
            "email": null,
            "subjectCode": subjectCOde,
            "grade": grade
        });
        studentsArray = JSON.stringify(obj);
        document.getElementById("studentName").value = "";
        document.getElementById("studentCode").value = "";
        document.getElementById("subjectCode").value = "";
        document.getElementById("grade").value = "";
        jsonSize += 1;
        data.push(studentName);
        professorMarks();
    }
}

$(function () {
    $("#sdName").autocomplete({
        source: data
    });
});

$(function () {

    $("#studentName").autocomplete({
        source: data,
        minLength: 1,
        change: function (event, ui) {
            var inputValue = document.getElementById('studentName').value;
            var obj = JSON.parse(studentsArray);
            for(var i = 0; i <= jsonSize; i++){
                if(inputValue === obj.students[i].name){
                    document.getElementById('studentCode').value = obj.students[i].studentCode;
                }
            }
        }
    });


});



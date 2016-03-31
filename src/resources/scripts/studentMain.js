var submissionsJSON = {
    "submissions": [
        {
            "subject": "IDU0013 Programming IV",
            "task": "Code something cool",
            "link": "goo.gl/123",
            "grade": "5"
        },
        {
            "subject": "IDU0013 Programming IV",
            "task": "Code something very cool",
            "link": "goo.gl/234"
        },
        {
            "subject": "IDU0013 Programming IV",
            "task": "Code something very super cool"
        }
    ]
};

var workgroupsJSON = {
    "workgroups": [
        {
            "subject": "IDU0013 - Programmig IV",
            "group": "Alpha",
            "members": [
                "Ann Krown",
                "Mick Ael"
            ],
            "canBeAdded": true
        },
        {
            "subject": "IDU0013 - Programmig IV",
            "group": "Beta",
            "members": [
                "Kirill Bolshoj",
                "Ivan Dron",
                "Katya Sinyaja"
            ],
            "canBeAdded": false
        },
        {
            "subject": "IDU0013 - Programmig IV",
            "group": "Gamma",
            "members": [
                "Kadastr String"
            ],
            "canBeAdded": true
        }
    ]
};

var notificationsJSON = {
    "notifications": [
        {
            "id" : "msg1",
            "sender_name": "Teet Puu",
            "sender_email": "teet.puu@example.com",
            "content": "Hi. This is a message from Teet Puu",
            "unread": true
        },
        {
            "id" : "msg2",
            "sender_name": "Teet Tee",
            "sender_email": "teet.Tee@example.com",
            "content": "Hi. This is a message from Teet Tee",
            "unread": false
        },
        {
            "id" : "msg3",
            "sender_name": "Teet Teepuu",
            "sender_email": "teet.teepuu@example.com",
            "content": "Hi. This is a message from Teet Teepuu",
            "unread": true
        }
    ]
};

var gradesJSON = {
    "grades": [
    {
        "code": "IDU0010",
        "title": "Programming I",
        "grade": "3"
    },
    {
        "code": "IDU0011",
        "title": "Programming II",
        "grade": "4"
    },
    {
        "code": "IDU0012",
        "title": "Programming III",
        "grade": "5"
    }
]
};

var unreadNotifications = 0;


$(document).ready(function () {
    $(function(){
        //$("#includedContent").load("studentHeader.html");

        initNotifications();
        initGrades();
        initSubmissions();
        initGroups();

        loadContent('notifications');
    });
});


function loadContent(content) {
    if (content === 'logout') {
        window.location = "../login.html";
    }
    //disable others
    document.getElementById('notifications').style.display = 'none';
    document.getElementById('studentStudyResults').style.display = 'none';
    document.getElementById('studentWorkSubmission').style.display = 'none';
    document.getElementById('studentStudentGroups').style.display = 'none';
    //enable one
    document.getElementById(content).style.display = 'block';

}

function initNotifications() {
    unreadNotifications = 0;

    var table = document.getElementById("notificationsTable");
    table.tBodies[0].remove();
    table.appendChild(document.createElement('tbody'));
    var tBody = table.getElementsByTagName('tbody')[0];

    for (var i = 0; i < notificationsJSON.notifications.length; i++) {

        var row1 = tBody.insertRow(0);
        var nameCell = row1.insertCell(0);
        //nameCell.innerHTML = notificationsJSON.notifications[i].sender_name;

        var span1 = document.createElement('span');
        nameCell.appendChild(span1);

        var span2 = document.createElement('span');
        span2.innerHTML = notificationsJSON.notifications[i].sender_name + " ";
        span1.appendChild(span2);

        var span3 = document.createElement('span');
        span3.className = 'badge';
        span3.innerHTML = 'NEW';
        span1.appendChild(span3);



        var emailCell = row1.insertCell(1);
        emailCell.innerHTML = notificationsJSON.notifications[i].sender_email;

        var contentId = "content" + notificationsJSON.notifications[i].id;

        var row2 = tBody.insertRow(1);
        row2.id = contentId;
        var contentCell = row2.insertCell(0);
        contentCell.colSpan = 2;
        contentCell.innerHTML = notificationsJSON.notifications[i].content;

        //row1.onclick(alert(notificationsJSON.notifications[i].content));

        contentCell.style.display = 'none';
        if (notificationsJSON.notifications[i].unread ) {

            unreadNotifications++;
        } else {
            span3.style.display = 'none';
        }
    }

    populateUnreadNotificationsToNavbar();
}

function initGrades() {
    var table = document.getElementById("gradesTable");
    table.tBodies[0].remove();
    table.appendChild(document.createElement('tbody'));
    var tBody = table.getElementsByTagName('tbody')[0];
    for (var i = 0; i < gradesJSON.grades.length; i++) {
        var row = tBody.insertRow(0);
        var code = row.insertCell(0);
        var title = row.insertCell(1);
        var mark = row.insertCell(2);
        code.innerHTML = gradesJSON.grades[i].code;
        title.innerHTML = gradesJSON.grades[i].title;
        mark.innerHTML = gradesJSON.grades[i].grade;
    }

}

function initGroups(){
    var groupsHtml = document.getElementById("workgroups");

    for (var i = 0; i < workgroupsJSON.workgroups.length; i++) {

        var ppp = document.createElement('p');
        var span1 = document.createElement('span');
        span1.innerHTML = workgroupsJSON.workgroups[i].subject;
        ppp.appendChild(span1);
        var brr = document.createElement('br');
        ppp.appendChild(brr);
        var span2 = document.createElement('span');
        span2.innerHTML = "<b>" + workgroupsJSON.workgroups[i].group + ": </b>";
        ppp.appendChild(span2);

        var allMembers = "";
        for (var j = 0; j < workgroupsJSON.workgroups[i].members.length; j++) {
            allMembers += workgroupsJSON.workgroups[i].members[j] + ", ";
        }

        if (allMembers != "") {
            allMembers = allMembers.substr(0, allMembers.length - 2);
        }

        var workgroupid = "workgroup" + i;

        var span3 = document.createElement('span');
        span3.id = workgroupid;
        span3.innerHTML = allMembers;
        ppp.appendChild(span3);

        if (workgroupsJSON.workgroups[i].canBeAdded) {
            var span4 = document.createElement('span');
            span4.innerHTML = ' <button class="btn btn-info" onclick="addToGroup(\'' + workgroupid + '\', this)">Add me</button>';
            ppp.appendChild(span4);
        }

        groupsHtml.appendChild(ppp);

    }

}

function initSubmissions() {

    var submissionsHTML = document.getElementById("submissions");

    for (var i = 0; i < submissionsJSON.submissions.length; i++) {

        var ppp = document.createElement('p');
        var span1 = document.createElement('span');
        span1.innerHTML = submissionsJSON.submissions[i].subject;
        ppp.appendChild(span1);
        var brr = document.createElement('br');
        ppp.appendChild(brr);
        var span2 = document.createElement('span');
        span2.innerHTML = "<b>" + submissionsJSON.submissions[i].task + ": </b>";
        ppp.appendChild(span2);

        var idd = "submission" + i;
        var span3 = document.createElement('span');
        span3.id = idd + "link";
        ppp.appendChild(span3);
        if (submissionsJSON.submissions[i].link != null) {

            span3.innerHTML = submissionsJSON.submissions[i].link + " ";



            var span4 = document.createElement('span');
            span4.className = 'badge';
            if (submissionsJSON.submissions[i].grade != null) {
                span4.innerHTML = submissionsJSON.submissions[i].grade;
            } else {
                span4.innerHTML = "Not graded yet";
            }

            ppp.appendChild(span4);

        } else {
            span3.innerHTML = " ";


            var inp = document.createElement('input');
            inp.id = idd + "inp";
            ppp.appendChild(inp);

            var span4 = document.createElement('span');
            span4.innerHTML = ' <button class="btn btn-info" onclick="submitTask(\'' + idd + '\', this)">Submit</button> ';
            ppp.appendChild(span4);

            var span5 = document.createElement('span');
            span5.id=idd+"sp";
            span5.className = 'badge';
            span5.innerHTML = 'Not submitted yet';
            ppp.appendChild(span5);
        }

        submissionsHTML.appendChild(ppp);

    }

}

function populateUnreadNotificationsToNavbar() {
    var el = document.getElementById('unreadNotifications');
    if (unreadNotifications > 0) {
        el.style.display = 'inline-block';
        el.innerHTML = "" + unreadNotifications;

    } else {
        el.style.display = 'none';
    }
}

function addToGroup(workgroupid, btn) {
    btn.style.display = 'none';
    var group = document.getElementById(workgroupid);

    var initText = group.innerHTML;

    if (initText != "") {
        initText += ", ";
    }

    initText+="Me";
    group.innerHTML = initText;
}

function submitTask(submitid, btn) {
    var inpField = document.getElementById(submitid+"inp");
    var inputFieldText = inpField.value;

    btn.style.display = 'none';

    inpField.style.display = 'none';
    document.getElementById(submitid+"link").innerHTML = inputFieldText;
    document.getElementById(submitid+"sp").innerHTML = "Not graded yet";
/*
    var initText = group.innerHTML;

    if (initText != "") {
        initText += ", ";
    }

    initText+="Me";
    group.innerHTML = initText;*/
}


function upd() {
    notificationsJSON.notifications[0].unread = false;
    initNotifications();
}
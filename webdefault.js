function nextChar(char) {
    return String.fromCharCode(char.charCodeAt(0) + 1);
}

function pullSessions(input) {
    var dict = {};
    var char = 'a';
    var sessions = document.getElementsByClassName(input);

    //populate the dictionary
    for (var i = 0; i < sessions.length; i++) {
        var checked = sessions[i].checked;
        dict[char] = checked;
        char = nextChar(char);
    }
    return dict;
}
var formSubmit;

function check() {
    if (formSubmit === true) {
        window.open('thankyou.html');
    }
}

function logicTestSessions() {
    var dict = pullSessions("sessions");
    if (dict.b && (dict.d || dict.e || dict.f)) {
        document.getElementById('modalA').style.display = "block";
        formSubmit = false;
    } else if (dict.f && !dict.h || !dict.f && dict.h) {
        document.getElementById('modalB').style.display = "block";
        formSubmit = false;
    } else formSubmit = true;
}
var submitRegistration = document.getElementById("submit");


document.getElementById('closeA').onclick = function() {
    document.getElementById('modalA').style.display = "none";
}



document.getElementById('closeB').onclick = function() {
    document.getElementById('modalB').style.display = "none";
}

document.getElementById('vote').onclick = function() {
    var vote = pullSessions('vote');
    if (vote.a) alert("thank you for voting for " + vote[0].value);
    else if (vote.b) alert("thank you for voting for " + vote[1].value);
    else alert("thank you for voting for " + vote[1].value);
}
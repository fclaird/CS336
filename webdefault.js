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

function logicTestSessions() {
    var dict = pullSessions("session");
    if (dict.b && (dict.d || dict.e || dict.f)) {
        popA();
    } else if (dict.f && !dict.h || !dict.f && dict.h) {
        popB();
    }
}


function popA() {
    var windowFeatures = "left=300,top=300,width=500,height=400";
    var w = window.open("popA.html", "msg", windowFeatures);
    window.close();
}

function popB() {
    var windowFeatures = "left=300,top=300,width=500,height=400";
    var w = window.open("popB.html", "msg", windowFeatures);
    window.close();
}

function closeOpenedWindow() {
    window.open("registration.html");
    window.close();
}
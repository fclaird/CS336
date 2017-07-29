//document.cookie = '098765' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
window.alert(document.cookie);

function nextChar(char) {
    return String.fromCharCode(char.charCodeAt(0) + 1);
}

function makeCookie() {
    let dataString = makeDataString();
    let key = document.getElementById("confrenceId").value;
    document.cookie = key + '=' + dataString + ";";
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
    makeCookie();
}


function popA() {
    var windowFeatures = "left=300,top=300,width=500,height=400,status=yes,resizable=0";
    var w = window.open("popA.html", "msg", windowFeatures);
    window.close();
}

function popB() {
    var windowFeatures = "left=300,top=300,width=500,height=400,status=yes,resizable=0";
    var w = window.open("popB.html", "msg", windowFeatures);
    window.close();
}

function closeOpenedWindow() {
    window.open("registration.html");
    window.close();
}

function makeDataString() {
    let list = document.querySelectorAll("input");
    let string = '';
    list.forEach((node) => {
        if (node.type === "text") {
            string = string + node.name + ':' + node.value + '..'
        } else if (node.type === "radio") {
            string = string + node.name + ':' + node.checked + '..'
        }
    });
    return string;
}



function getData() {
    let key = document.getElementById("confrenceId").value;
    let dataArray = document.cookie.split("..");
    delete dataArray[dataArray.length - 1];
    let trimedArray = dataArray.map((value) => {
        return value.substring(value.indexOf(':') + 1);
    });
    return trimedArray;
}

function setData() {
    let data = getData();
    let list = document.querySelectorAll("input");
    data.map((value, i) => {
        if (list[i].type !== "radio") {
            list[i].value = value;
        } else {
            list[i].checked = value;
        }
    });
}

function onBlur() {
    let elementVal = document.getElementById("confrenceId").value;
    if (elementVal.length === 6)
        setData();
}



function pollSubmit() {
    var vote = document.getElementsByClassName("voteA");
    for (var i in vote) {
        if (vote[i].checked) {
            alert("Thank you for voting for: " + vote[i].value);
            break;
        }
    }
}
//document.cookie = '123456' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
//window.alert(document.cookie);




function makeDataString() {
    let list = document.querySelectorAll("input");
    let string = '';
    list.forEach((node) => {
        if (node.type === "radio") {
            string = string + node.name + ':' + node.checked + '..';
        } else {
            string = string + node.name + ':' + node.value + '..';
        }
    });
    return string;
}


function makeCookie() {
    let dataString = makeDataString();
    let key = document.getElementById("confrenceId").value;
    if (key.length === 6) {
        document.cookie = key + '=' + dataString + ";";
    }

}


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
    } else {
        makeCookie();
    }
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


function trim(inputString) {
    let dataArray = inputString.split("..");
    dataArray = dataArray.slice(0, 32); //31 values needed
    let trimedArray = dataArray.map((value) => {
        return value.substring(value.indexOf(':') + 1)
    });
    return trimedArray;
}

function getData() {
    let key = document.getElementById("confrenceId").value;
    let cookies = document.cookie;
    let trimedCookieArray = null;
    if (cookies.includes(key)) {
        let i = cookies.indexOf(key);
        let cookie = cookies.slice(i);
        trimedCookieArray = trim(cookie);
    }
    return trimedCookieArray;
}


function setData() {
    let data = getData();
    if (data) {
        let list = document.querySelectorAll("input");
        data.map((value, i) => {
            if (list[i].type !== "radio") {
                list[i].value = value;
            } else {
                list[i].checked = value;
            }
        });
    }
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
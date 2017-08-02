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
    let key = document.getElementById("confrenceId").value;
    if (key === '') {
        key = document.getElementById("confrenceId").value = "123456";
    }
    let dataString = makeDataString();

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


function getCookie() {
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


function displayData() {
    let data = getCookie();
    if (data) {
        let list = document.querySelectorAll("input");
        data.map((value, i) => {
            if (list[i].type !== "radio") {
                list[i].value = value;
            } else if (value === "true") {
                list[i].checked = true;
            }
        });
    }
}


function onBlur() {
    let elementVal = document.getElementById("confrenceId").value;
    if (elementVal.length === 6)
        displayData();
}


function makeVoteCookie(dataArray) {
    //[#, #, #] format of data array
    var votes = document.querySelectorAll(".voteA");
    votes.forEach((val, i) => {
        if (val.checked) {
            alert("Thank you!  Your vote for: " + val.value + " is being recorded.");
            dataArray[i] += 1;
        }
    });
    let dataString = dataArray.join("..");
    document.cookie = 'vote' + '=' + dataString + ";";
    return dataArray;
}


function getVoteCounts(key) {
    let cookies = document.cookie;
    if (cookies.includes(key) && cookies.length > 10) {
        let i = cookies.indexOf(key) + key.length + 1;
        let cookie = cookies.slice(i);
        cookie = cookie.split('..');
        let intArray = cookie.map((value) => {
            return value = Number(value);
        });
        return intArray;
    } else return [0, 0, 0];
}


function displayVoteCookieTallies(updatedDataArray) {
    let elon = document.getElementById("Elon");
    elon.innerHTML = "votes: [" + updatedDataArray[0] + ']';

    let peyton = document.getElementById("Peyton");
    peyton.innerHTML = "votes: [" + updatedDataArray[1] + ']';

    let bradshaw = document.getElementById("Bradshaw");
    bradshaw.innerHTML = "votes: [" + updatedDataArray[2] + ']';

    return updatedDataArray;
}

function pollSubmit() {
    makeVoteCookie(dataArray);
}

let dataArray = displayVoteCookieTallies(getVoteCounts('vote'));
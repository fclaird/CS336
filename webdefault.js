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

function makeCookie() {
    let dataString = makeDataString();
    let key = document.getElementById("confrenceId").value;
    document.cookie = key + '=' + dataString + ";";
    console.log(document.cookie);
}


function makeDataString() {
    let list = document.querySelectorAll("input");
    let string = '';
    list.forEach((node) => {
        string = string + node.name + ':' + node.value + '..'
    });
    return string;
}

window.onload = () => {

    document.cookie = '000000' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    alert(document.cookie);

    let key = document.getElementById("confrenceId").value;
    if (document.cookie.includes(key)) {
        let dataArray = document.cookie.split("..");
        delete dataArray[0];
        delete dataArray[dataArray.length - 1];
        let trimedArray = dataArray.map((value) => {
            return value.substring(value.indexOf(':') + 1);
        });
        console.log(trimedArray);


    }


}

function getData() {
    let key = document.getElementById("confrenceId").value;
    if (document.cookie.includes(key)) {
        let dataArray = document.cookie.split("..");
        delete dataArray[0];
        delete dataArray[-1];
        let trimedArray = dataArray.map((value) => {
            return value.substring(value.indexOf(':'));
        });
        console.log(trimedArray);


    }
    //" 098765=confrenceId:098765,first_name:aaaaaaa,last_name:,address_line_1:,address_line_2:,City:,zip_code:,phone_number:,email:,site:,title:,company_name:,meal plan:meal pack,meal plan:day 2 dinner,billing_name_first:,billing_name_last:,card type:visa,card type:mastercard,card type:amex,card_number:,security_code:,exp_year:,mont_exp:,session 1:on,session 1:on,session 1:on,session 2:on,session 2:on,session 2:on,session 3:on,session 3:on,session 3:on,"




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
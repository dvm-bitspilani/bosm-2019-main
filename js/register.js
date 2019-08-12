var selected_sport = document.getElementsByClassName("selected-sports")[0];
var sports_opt = document.getElementById("sports_opt");
var college_opt = document.getElementById("college_opt");
var sportsarr = [];
var yos_value;
var gender_value;
var collegeid;

function getsportsvalue() {
    const val = document.getElementById("sports_opt").value;
    const sports_id = document.getElementById("sports_opt")[
        document.getElementById("sports_opt").selectedIndex
    ].id;
    var div = document.createElement("div");
    div.className += "sports";
    var span = document.createElement("span");
    span.className += "sports-name";
    span.innerHTML = val;
    div.appendChild(span);
    selected_sport.appendChild(div);
    div.onclick = function() {
        this.parentNode.removeChild(this);
    };
    console.log(val);
    console.log(sports_id);
    sportsarr.push(parseInt(sports_id));
    console.log(sportsarr);
}

function getyosvalue() {
    const val = document.getElementById("yos_opt").value;
    yos_value = parseInt(val);
}

function getgendervalue() {
    const val = document.getElementById("gender_opt").value;
    gender_value = val;
    console.log(val);
}

function getcollegeid() {
    const val = document.getElementById("college_opt").value;
    console.log(val);
    collegeid = parseInt(val);
    console.log(collegeid);
}

window.onload = function() {
    const URL = "http://test1.bits-bosm.org/registrations/get_sports";
    const URL2 = "http://test1.bits-bosm.org/registrations/get_colleges";

    fetch(URL)
        .then(resp => resp.json())
        .then(function(resp) {
            console.log(resp);
            for (var i = 0; i < resp.data.length; i++) {
                var opt = document.createElement("option");
                opt.value = resp.data[i].name;
                opt.innerHTML = resp.data[i].name;
                opt.setAttribute("id", resp.data[i].id);
                sports_opt.appendChild(opt);
            }
        })
        .catch(function(error) {
            console.log(error);
        });

    fetch(URL2)
        .then(resp => resp.json())
        .then(function(resp) {
            console.log(resp);
            for (var i = 0; i < resp.data.length; i++) {
                var opt = document.createElement("option");
                opt.value = resp.data[i].id;
                opt.innerHTML = resp.data[i].name;
                college_opt.appendChild(opt);
            }
        })
        .catch(function(error) {
            console.log(error);
        });
};

function bosmreg() {

    if (!document.getElementById('txtInput').value) {
        return alert("Please! Enter the captcha");
    }

    if (!ValidCaptcha()) {
        alert("Invalid captcha!");
        return Captcha();
    }

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;

    if (
        name == "" ||
        email == "" ||
        phone == "" ||
        city == "" ||
        state == "" ||
        sportsarr == [] ||
        collegeid == null ||
        yos_value == null ||
        gender_value == null
    ) {
        alert("Please fill all mentioned feilds");
    } else {
        data = {
            name: name,
            email_id: email,
            phone: phone,
            gender: gender_value,
            year_of_study: yos_value,
            sports_ids: sportsarr,
            college_id: collegeid,
            city: city,
            state: state
        };

        fetch(" http://test1.bits-bosm.org/registrations/register/", {
                method: "post",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                alert(result.message);
            })
            .catch(function(error) {
                console.log(error);
            });
        console.log(data);
    }
}

function Captcha() {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
    document.getElementById("mainCaptcha").innerHTML = code
    document.getElementById("mainCaptcha").value = code
}

function ValidCaptcha() {
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 = removeSpaces(document.getElementById('txtInput').value);
    if (string1 == string2) {
        return true;
    } else {
        return false;
    }
}

function removeSpaces(string) {
    return string.split(' ').join('');
}

document.onload = Captcha();
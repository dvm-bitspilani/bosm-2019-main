var selected_sport = document.getElementsByClassName("selected-sports")[0];
var sports_opt = document.getElementById("sports_opt");
var college_opt = document.getElementById("college_opt");
var sportsarr = [];
var a = [];
var yos_value;
var gender_value;
var collegeid;
var no_of_sports = 0;
var is_coach = false;

function isCoachCheck() {
  if (document.getElementById('is_coach').checked === true) {
    is_coach = true;
  } else {
    is_coach = false;
  }
}

function getsportsvalue() {
  if (sportsarr.length == 0) {
    selected_sport.innerHTML = "";
  }
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
  div.innerHTML +=
    '<i class="fas fa-times" style="padding-left:1vh;color:#34aafc"></i>';
  div.onclick = function() {
    this.parentNode.removeChild(this);
    const x = this.getElementsByTagName("span");
    console.log(x[0].innerHTML);
    console.log(document.getElementsByClassName("sports-tag")[5]);
    for (var i = 1; i < no_of_sports; i++) {
      if (
        x[0].innerHTML ==
        document.getElementsByClassName("sports-tag")[i].innerHTML
      ) {
        document.getElementsByClassName("sports-tag")[i].disabled = false;
        for (var j = 0; j < sportsarr.length; j++) {
          if (
            sportsarr[j] ==
            parseInt(document.getElementsByClassName("sports-tag")[i].id)
          ) {
            sportsarr.splice(j, 1);
            j--;
          }
        }
        console.log(sportsarr);
      }
    }
  };
  document.getElementById("sports_opt").options[
    document.getElementById("sports_opt").selectedIndex
  ].disabled = true;
  console.log(val);
  console.log(sports_id);
  sportsarr.push(parseInt(sports_id));
  console.log(sportsarr);
}

function getyosvalue() {
  const val = document.getElementById("yos_opt").value;
  yos_value = parseInt(val);
}

function getgendervalue(i) {
  switch (i) {
    case 0:
      document.getElementsByClassName("gender")[0].style.color = "#34AAFC";
      document.getElementsByClassName("gender")[0].style.border =
        "2px solid #34AAFC";
      document.getElementsByClassName("gender")[1].style.color = "#686868";
      document.getElementsByClassName("gender")[1].style.border =
        "2px solid #686868";
      document.getElementsByClassName("gender")[2].style.color = "#686868";
      document.getElementsByClassName("gender")[2].style.border =
        "2px solid #686868";
      gender_value = "M";
      console.log(gender_value);
      break;
    case 1:
      document.getElementsByClassName("gender")[1].style.color = "#34AAFC";
      document.getElementsByClassName("gender")[1].style.border =
        "2px solid #34AAFC";
      document.getElementsByClassName("gender")[0].style.color = "#686868";
      document.getElementsByClassName("gender")[0].style.border =
        "2px solid #686868";
      document.getElementsByClassName("gender")[2].style.color = "#686868";
      document.getElementsByClassName("gender")[2].style.border =
        "2px solid #686868";
      gender_value = "F";
      break;
    case 2:
      document.getElementsByClassName("gender")[2].style.color = "#34AAFC";
      document.getElementsByClassName("gender")[2].style.border =
        "2px solid #34AAFC";
      document.getElementsByClassName("gender")[1].style.color = "#686868";
      document.getElementsByClassName("gender")[1].style.border =
        "2px solid #686868";
      document.getElementsByClassName("gender")[0].style.color = "#686868";
      document.getElementsByClassName("gender")[0].style.border =
        "2px solid #686868";
      gender_value = "O";
      break;
  }
}

function getcollegeid() {
  const val = document.getElementById("college_opt").value;
  console.log(val);
  collegeid = parseInt(val);
  console.log(collegeid);
}

window.onload = function() {
  const URL = "https://bits-bosm.org/registrations/get_sports";
  const URL2 = "https://bits-bosm.org/registrations/get_colleges";

  fetch(URL)
    .then(resp => resp.json())
    .then(function(resp) {
      console.log(resp);
      for (var i = 0; i < resp.data.length; i++) {
        var opt = document.createElement("option");
        opt.value = resp.data[i].name;
        opt.innerHTML = resp.data[i].name;
        opt.setAttribute("id", resp.data[i].id);
        opt.className += "sports-tag";
        opt.onclick = function() {
          console.log(1);
        };
        sports_opt.appendChild(opt);
        no_of_sports++;
      }
      console.log(no_of_sports);
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
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  grecaptcha.execute();
  var v = grecaptcha.getResponse();
  console.log(v);
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
      state: state,
      captcha: v,
      is_coach
    };

    fetch(" https://bits-bosm.org/registrations/register/", {
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

function validate() {
  // grecaptcha.execute();
  // var v = grecaptcha.getResponse();
  // console.log(v);
  grecaptcha.execute();
  console.log("Works");
}

var selected_sport = document.getElementsByClassName("selected-sports")[0];

function getsportsvalue() {
  const val = document.getElementById("sports_opt").value;
  var div = document.createElement("div");
  div.className += "sports";
  var span = document.createElement("span");
  span.className += "sports-name";
  span.innerHTML = val;
  div.appendChild(span);
  selected_sport.appendChild(div);
  console.log(val);
}

window.onload = function() {
  const URL = "http://test1.bits-bosm.org/registrations/get_sports";
  fetch(URL)
    .then(resp => resp.json())
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

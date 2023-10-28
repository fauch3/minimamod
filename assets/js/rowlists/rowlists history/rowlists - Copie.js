const rowlist_ = document.querySelectorAll('.rowlist');
const colors = ['rgb(255, 127, 127)','rgb(255, 191, 127)','rgb(255, 223, 127)','rgb(255, 255, 127)','rgb(191, 255, 127)','rgb(127, 255, 127)','rgb(127, 255, 255)'];

rowlist_.forEach((rowlist, index) => {
  const labellist = rowlist.querySelector('.labellist');
  labellist.style.backgroundColor = colors[index];
})

function faitCheck() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  //Get card
  var card = document.getElementById("first")

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
    card.style.backgroundColor = "rgb(144,238,144)";
  } else {
    text.style.display = "none";
    card.style.backgroundColor = "white";
  }
}

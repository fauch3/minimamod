const rowlist_ = document.querySelectorAll('.rowlist');
const colors = ['rgb(255, 127, 127)','rgb(255, 191, 127)','rgb(255, 223, 127)','rgb(255, 255, 127)','rgb(191, 255, 127)','rgb(127, 255, 127)','rgb(127, 255, 255)'];

const cardsList = ['first','paquetWelcomeOfferBetting'];
const cardsCheckboxes = ['myCheck','myCheckPaquetWelcomeOfferBetting'];

const checksBooleans = ['firstcheck', 'secondcheck'];

rowlist_.forEach((rowlist, index) => {
  const labellist = rowlist.querySelector('.labellist');
  labellist.style.backgroundColor = colors[index];
})


//ITERATION

//const myCheck = document.querySelector(".myCheck");
var myCheck = document.getElementById("myCheck");

var myCheckPaquetWelcomeOfferBetting = document.getElementById("myCheckPaquetWelcomeOfferBetting");

/*
if(localStorage.getItem("firstcheck")) {
  myCheck.checked = true;
  faitCheck();

};
*/

cardsCheckboxes.forEach((checksBooleans, index) => {

  cardsCheckboxes.addEventListener("click", () => {
    // Remove the stored name from web storage
    if (localStorage.getItem(checksBooleans[index]) && checksBooleans[index].checked == false) {
      // could add additionnal check firstcheck == true..
      localStorage.removeItem(checksBooleans[index]);
      faitCheck();
    }

 if(localStorage.getItem(checksBooleans[index])) {
  cardsCheckboxes[index].checked = true;
  faitCheck();
 }
});

/*

// run function when the 'click' button is clicked to uncheck
myCheck.addEventListener("click", () => {
  // Remove the stored name from web storage
  if (localStorage.getItem("firstcheck") && myCheck.checked == false) {
    // could add additionnal check firstcheck == true..
    localStorage.removeItem("firstcheck");
    faitCheck();
  }
  */


  // run faitCheck() to sort out displaying the generic greeting again and updating the form display

});


function faitCheck() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  //Get card
  var card = document.getElementById("first")

  /*
  if (localStorage.getItem("firstcheck")) {
    // could add additionnal check firstcheck == true..
    checkBox.checked = true;
  }
  */

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true ){
    text.style.display = "block";
    card.style.backgroundColor = "rgb(144,238,144)";

    //LocalStorage. Ne pas oublier unclick;
    //need to do it for each card :as array/list....

    //check existe pas pour moins de redondance
    localStorage.setItem("firstcheck", true);

  } else {
    text.style.display = "none";
    card.style.backgroundColor = "white";

    //localStorage.removeItem("firstcheck");
  }

  // delete from storage if unclick vs setting it to false

}

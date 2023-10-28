const rowlist_ = document.querySelectorAll('.rowlist');
const colors = ['rgb(255, 127, 127)','rgb(255, 191, 127)','rgb(255, 223, 127)','rgb(255, 255, 127)','rgb(191, 255, 127)','rgb(127, 255, 127)','rgb(127, 255, 255)'];


const cardsList = ['card0','card1','card2','card3','card4','card5','card6','card7','card8','card9','card10','card11','card12','card13','card14','card15',
'card16','card17','card18','card19','card20'];
const checkCardsCheckboxes = ['checkCard0','checkCard1','checkCard2','checkCard3','checkCard4','checkCard5','checkCard6','checkCard7','checkCard8','checkCard9','checkCard10','checkCard11','checkCard12','checkCard13','checkCard14','checkCard15',
'checkCard16','checkCard17','checkCard18','checkCard19','checkCard20'];

const checksBooleans = ['boolCheckCard0','boolCheckCard1','boolCheckCard2','boolCheckCard3','boolCheckCard4','boolCheckCard5','boolCheckCard6','boolCheckCard7','boolCheckCard8','boolCheckCard9','boolCheckCard10','boolCheckCard11','boolCheckCard12','boolCheckCard13','boolCheckCard14','boolCheckCard15',
'boolCheckCard16','boolCheckCard17','boolCheckCard18','boolCheckCard19','boolCheckCard20'];

rowlist_.forEach((rowlist, index) => {
  const labellist = rowlist.querySelector('.labellist');
  labellist.style.backgroundColor = colors[index];
});


//ITERATION

//const myCheck = document.querySelector(".myCheck");
var myCheck = document.getElementById("myCheck0");

var myCheckPaquetWelcomeOfferBetting = document.getElementById("myCheckPaquetWelcomeOfferBetting");


//iterate. separate loop, maybe, for clarity?
if(localStorage.getItem("firstcheck0")) {
  myCheck.checked = true;
  faitCheck();

};



cardsCheckboxes.forEach((checksBooleans, index) => {

  cardsCheckboxes.addEventListener("click", () => {

    //UNCLICKING AFTER STORED CLICK, REFRESH

    // Remove the stored name from web storage
    if (localStorage.getItem(checksBooleans[index]) && checksBooleans[index].checked == false) {
      // could add additionnal check firstcheck == true..
      localStorage.removeItem(checksBooleans[index]);
      faitCheck();
    }


/*
 if(localStorage.getItem(checksBooleans[index])) {
  cardsCheckboxes[index].checked = true;
  faitCheck();
 }
*/

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
  var checkBox = document.getElementById("myCheck0");
  // Get the output text
  var text = document.getElementById("text0");

  //Get card
  var card = document.getElementById("card0")

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

    localStorage.setItem("firstcheck0", true);

  } else {
    text.style.display = "none";
    card.style.backgroundColor = "white";

    localStorage.removeItem("firstcheck0");
  }

  // delete from storage if unclick vs setting it to false

};

const rowlist_ = document.querySelectorAll('.rowlist');
const colors = ['rgb(255, 127, 127)','rgb(255, 191, 127)','rgb(255, 223, 127)','rgb(255, 255, 127)','rgb(191, 255, 127)','rgb(127, 255, 127)','rgb(127, 255, 255)'];


const cardsList = ['card0','card1','card2','card3','card4','card5','card6','card7','card8','card9','card10','card11','card12','card13','card14','card15',
'card16','card17','card18','card19','card20'];

const CardsCheckboxes = ['checkCard0','checkCard1','checkCard2','checkCard3','checkCard4','checkCard5','checkCard6','checkCard7','checkCard8','checkCard9','checkCard10','checkCard11','checkCard12','checkCard13','checkCard14','checkCard15',
'checkCard16','checkCard17','checkCard18','checkCard19','checkCard20'];

const checksBooleans = ['boolCheckCard0','boolCheckCard1','boolCheckCard2','boolCheckCard3','boolCheckCard4','boolCheckCard5','boolCheckCard6','boolCheckCard7','boolCheckCard8','boolCheckCard9','boolCheckCard10','boolCheckCard11','boolCheckCard12','boolCheckCard13','boolCheckCard14','boolCheckCard15',
'boolCheckCard16','boolCheckCard17','boolCheckCard18','boolCheckCard19','boolCheckCard20'];

const textsList = ['text0','text1','text2','text3','text4','text5','text6','text7','text8','text9','text10','text11','text12','text13','text14','text15',
'text16','text17','text18','text19','text20'];

rowlist_.forEach((rowlist, index) => {
  const labellist = rowlist.querySelector('.labellist');
  labellist.style.backgroundColor = colors[index];
});


console.log('array test');
console.log(checksBooleans);

//ITERATION

//const myCheck = document.querySelector(".myCheck");

/*
var myCheck = document.getElementById("myCheck0");

var myCheckPaquetWelcomeOfferBetting = document.getElementById("myCheckPaquetWelcomeOfferBetting");

*/

//myCheck = checkCardX

// instead of var use, iterate

//iterate. separate loop, maybe, for clarity?

/*
if(localStorage.getItem("firstcheck0")) {
  myCheck.checked = true;
  faitCheck();

};

*/

CardsCheckboxes.forEach((checksBooleans, index) => {

  //console.log('foreach1', checksBooleans[0]);
  console.log(localStorage.getItem('boolCheckCard0'));
  console.log('boo :',checksBooleans[0]);
  //console.log(checksBooleans);

  //console.log(localStorage.getItem(checksBooleans[index]));


  if(localStorage.getItem(checksBooleans[index])) {

    console.log('exists');

    var checkBox = document.getElementById(CardsCheckboxes[index]);
    var card = document.getElementById(cardsList[index]);
    var checkBool = document.getElementById(checksBooleans[index]);
    var text = document.getElementById(textsList[index]);

    checkBox.checked = true;

    //myCheck.checked = true;
    faitCheck(checkBox,checkBool, text, card);

  };


});




CardsCheckboxes.forEach((checksBooleans, index) => {

  console.log('foreach2');


  // get doc object w name
  //test
  var CardcheckBox = document.getElementById(CardsCheckboxes[index]);
  //

  // §§§ Revert to list enum si nec

  if (CardcheckBox) {



  CardcheckBox.addEventListener("click", () => {

    //UNCLICKING AFTER STORED CLICK, REFRESH

    // Remove the stored name from web storage
    if (localStorage.getItem(checksBooleans[index]) && checksBooleans[index].checked == false) {

      console.log('click off');



      var checkBox = document.getElementById(CardsCheckboxes[index]);
      var card = document.getElementById(cardsList[index]);
      var checkBool = document.getElementById(checksBooleans[index]);
      var text = document.getElementById(textsList[index]);

      // could add additionnal check firstcheck == true..
      localStorage.removeItem(checksBooleans[index]);
      faitCheck(checkBox, checkBool,text, card);
    }


/*
 if(localStorage.getItem(checksBooleans[index])) {
  cardsCheckboxes[index].checked = true;
  faitCheck();
 }
*/

});
  };

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


//replace w a num.
function faitCheck(checkBox, checkBool, text, card) {

  console.log('faitcheck0');
  console.log(checkBool);


  /*
  // Get the checkbox
  var checkBox = document.getElementById("myCheck0");
  // Get the output text
  var text = document.getElementById("text0");

  //Get card
  var card = document.getElementById("card0")
  */

  /*
  if (localStorage.getItem("firstcheck")) {
    // could add additionnal check firstcheck == true..
    checkBox.checked = true;
  }
  */

  //Text non nécessaire ?

  text = document.getElementById(text);
  card = document.getElementById(card);
  checkBox = document.getElementById(checkBox);
  //checkBool = document.getElementById(checkBool);

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true ){


    console.log('in');

    text.style.display = "block";
    card.style.backgroundColor = "rgb(144,238,144)";

    //LocalStorage. Ne pas oublier unclick;
    //need to do it for each card :as array/list....

    //check existe pas pour moins de redondance

    console.log('Storing');
    console.log(checkBool);
    localStorage.setItem(checkBool, true);

    console.log(localStorage.getItem(checkBool));

  } else if (text) {

    console.log('out');

    text.style.display = "none";
    card.style.backgroundColor = "white";

    localStorage.removeItem(checkBool);
  }

  // delete from storage if unclick vs setting it to false

};

function faitCheck2(num) {
  console.log('faitcheck surcharge 1');
  faitCheck(CardsCheckboxes[num], checksBooleans[num], textsList[num], cardsList[num]);

};

function faitCheck3() {
  console.log('faitcheck surcharge 2');
  faitCheck2(0);
}

// need an initial faitcheck; doesnt exist yet in doc ? or able to fetch from js ?

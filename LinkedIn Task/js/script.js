
function toggleText() {

    // Get all the elements from the page
    var points = 
        document.getElementById("points");

    var showMoreText =
        document.getElementById("moreText");

    var buttonText =
        document.getElementById("textButton");

    // If the display property of the dots 
    // to be displayed is already set to 
    // 'none' (that is hidden) then this 
    // section of code triggers
    if (points.style.display == "none") {
        

        // Hide the text between the span
        // elements
        showMoreText.style.display = "none";

        // Show the dots after the text
        points.style.display = "inline";

        // Change the text on button to 
        // 'Show More'
        buttonText.innerHTML = "Show More";
    }

    // If the hidden portion is revealed,
    // we will change it back to be hidden
    else {

        // Show the text between the
        // span elements
        showMoreText.style.display = "inline";

        // Hide the dots after the text
        points.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        buttonText.innerHTML = "Show Less";
    }
}

// show card
function toggleCard() {

    // Get all the elements from the page
    var emptyCard = 
        document.getElementById("cardEmpty");

    var showCardUp =
        document.getElementById("showCardUp");
    var showCardBelow =
        document.getElementById("showCardBelow");

    var buttonText =
        document.getElementById("textButton");

    // If the display property of the dots 
    // to be displayed is already set to 
    // 'none' (that is hidden) then this 
    // section of code triggers
    if (emptyCard.style.display == "none") {
        

        // Hide the text between the span
        // elements
        showCardUp.style.display = "none";
        showCardBelow.style.display = "none";

        // Show the dots after the text
        emptyCard.style.display = "inline";

        // Change the text on button to 
        // 'Show More'
        buttonText.innerHTML = "Show More";
    }

    // If the hidden portion is revealed,
    // we will change it back to be hidden
    else {

        // Show the text between the
        // span elements
        showCardUp.style.display = "inline";
        showCardBelow.style.display = "inline";

        // Hide the dots after the text
        emptyCard.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        buttonText.innerHTML = "Show Less";
    }
}

document.querySelector(".header-part").onclick=function(){
    if(document.getElementById("check").checked){
      document.querySelector(".symbol").style.transform="rotate(-90deg)";
    }
    else{
      document.querySelector(".symbol").style.transform="rotate(90deg)";
    }
  }
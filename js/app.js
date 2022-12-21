//filter by city - and search by city//

var searchFilter = () => {
    let selectedCity = document.getElementById("filterByCity").value;
    console.log(selectedCity);
    const input = document.querySelector(".form-control");
    const cards = document.getElementsByClassName("col");
    console.log(cards[1]);

    let textBox = input.value;
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card-body");
        if ((cards[i].classList.contains(selectedCity) || selectedCity == "") && title.innerText.toLowerCase().indexOf(textBox.toLowerCase()) > -1) {
            cards[i].classList.remove("d-none");
        } else {
            cards[i].classList.add("d-none");
        }
    }
}

//include the same header.html and footer.html for each page

jQuery(document).ready(function($){
      $("#headerhtml").load("header.html");
      $("#footerhtml").load("footer.html");
  });

/* expand details working but not used


$(".dheader").click(function () {

    $dheader = $(this);
    //getting the next element
    $dcontent = $dheader.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $dcontent.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $dheader.text(function () {
            //change text based on condition
            return $dcontent.is(":visible") ? "Details" : "See Details";
        });
    });
    
});*/





/* Maybe not working - filter 
var searchFilter = () => {
    let selectedCity = document.getElementById("filterByCity").value;
    console.log(selectedCity);
    const input = document.querySelector(".form-control");
    const cards = document.getElementsByClassName("col");
    console.log(cards[1]);
​
    let textBox = input.value;
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card-body");
        if ((cards[i].classList.contains(selectedCity) || selectedCity == "") && title.innerText.toLowerCase().indexOf(textBox.toLowerCase()) > -1) {
            cards[i].classList.remove("d-none");
        } else {
            cards[i].classList.add("d-none");
        }
    }
}
*/



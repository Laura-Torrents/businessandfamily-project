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



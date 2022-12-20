
        var searchFilter = () => {
            let selectedOption = document.getElementById("inlineFormCustomSelect").value;
            console.log(selectedOption);
            const cards = document.getElementsByClassName("col");
            console.log(cards[1]);
            for (let i = 0; i < cards.length; i++) {
               
                if (cards[i].classList.contains(selectedOption) ) {
                    cards[i].classList.remove("d-none");
                } else {
                    cards[i].classList.add("d-none");
                }
            }
        }

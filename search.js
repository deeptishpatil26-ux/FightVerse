
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const fighterCards = document.querySelectorAll(".fighter-card");
const message = document.getElementById("message");

function searchFighters() {
    const searchText = searchInput.value.trim().toLowerCase();
    let found = 0;

    fighterCards.forEach(function(card) {
        const fighterName = card.querySelector("h3")
            .textContent.toLowerCase();

        if (fighterName.includes(searchText)) {
            card.style.display = "";
            found++;
        } else {
            card.style.display = "none";
        }
    });

    if (found === 0) {
        message.textContent = "No fighter found. Try another name!";
    } else {
        message.textContent = found + " fighter(s) found.";
    }

    if (searchText === "") {
        message.textContent = "Showing all fighters.";
    }
}

searchBtn.addEventListener("click", searchFighters);

searchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchFighters();
    }
});
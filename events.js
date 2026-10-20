let selectedFighter = "";

let maxPercentage = 50;
let conorPercentage = 50;



function pickFighter(fighter) {

    selectedFighter = fighter;

    if (fighter === "max") {

        document.getElementById("predictionMessage").innerText =
            "You selected Max Holloway.";

    }

    else {

        document.getElementById("predictionMessage").innerText =
            "You selected Conor McGregor.";

    }

}



function submitPrediction() {

    let points =
        document.getElementById("points").value;


    if (selectedFighter === "") {

        document.getElementById("predictionMessage").innerText =
            "Please select a fighter first.";

        return;

    }


    if (points === "" || points <= 0) {

        document.getElementById("predictionMessage").innerText =
            "Please enter valid virtual points.";

        return;

    }


    if (selectedFighter === "max") {

        maxPercentage += 1;

        conorPercentage -= 1;

    }

    else {

        conorPercentage += 1;

        maxPercentage -= 1;

    }


    if (maxPercentage > 99) {

        maxPercentage = 99;

    }


    if (conorPercentage > 99) {

        conorPercentage = 99;

    }


    if (maxPercentage < 1) {

        maxPercentage = 1;

    }


    if (conorPercentage < 1) {

        conorPercentage = 1;

    }


    document.getElementById("maxPercentage").innerText =
        maxPercentage + "%";


    document.getElementById("conorPercentage").innerText =
        conorPercentage + "%";


    document.getElementById("maxBar").style.width =
        maxPercentage + "%";


    document.getElementById("conorBar").style.width =
        conorPercentage + "%";


    document.getElementById("predictionMessage").innerText =
        "Prediction submitted: " +
        points +
        " virtual points on " +
        selectedFighter.toUpperCase() +
        ".";

}
function monthButtonClick(month) {
    alert("Selected month: " + month);
}

function createMonthButtons(season) {
    document.getElementById("months-container").innerHTML = "";

    let months = [];
    switch (season) {
        case "Winter":
            months = ["December", "January", "February"];
            break;
        case "Spring":
            months = ["March", "April", "May"];
            break;
        case "Summer":
            months = ["June", "July", "August"];
            break;
        case "Autumn":
            months = ["September", "October", "November"];
            break;
    }

    months.forEach(month => {
        const monthBtn = document.createElement("button");
        monthBtn.innerText = month;
        monthBtn.classList.add("month-btn");
        monthBtn.addEventListener("click", () => monthButtonClick(month));
        document.getElementById("months-container").appendChild(monthBtn);
    });
}

function seasonButtonClick(season) {
    alert("Selected season: " + season);
    createMonthButtons(season);
}
//Front page logo
function goToMainPage() {
    window.location.href = "https://latchycat.github.io/CharlestonLocal/"
}

// Select and options menu
function navigateToCategory() {
    var dropdown = document.getElementById("categoryDropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;

    if (selectedOption) {
        window.location.href = selectedOption + ".html";
    }
}


// RIGHT SIDE OF NAVBAR ActionBar
function setCurrentDatetime() {
    var datetimeInput = document.getElementById('datetimeInput');

    var now = new Date();
    var year = now.getFullYear();
    var month = ('0' + (now.getMonth() + 1)).slice(-2);
    var day = ('0' + now.getDate()).slice(-2);
    var hours = ('0' + now.getHours()).slice(-2);
    var minutes = ('0' + now.getMinutes()).slice(-2);

    var formattedDatetime = year + '-' + month + '-' + day + 'T' + hours + ':' + minutes;

    datetimeInput.value = formattedDatetime;
}

setCurrentDatetime();

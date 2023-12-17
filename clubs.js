function navigateToCategory() {
    var dropdown = document.getElementById("categoryDropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;

    if (selectedOption) {
        window.location.href = selectedOption + ".html";
    }
}

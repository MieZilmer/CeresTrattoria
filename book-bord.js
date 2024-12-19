"use strict";

function showWhenSection() {
    document.getElementById('antal-section').style.display = 'none';
    document.getElementById('when-section').style.display = 'block';
}

function showKontaktInfoSection() {
    document.getElementById('when-section').style.display = 'none';
    document.getElementById('kontakt-info-section').style.display = 'block';
}

function showTakSection() {
    document.getElementById('kontakt-info-section').style.display = 'none';
    document.getElementById('tak-section').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.querySelector("select[name='dag']");
    for (let day = 1; day <= 31; day++) {
        const option = document.createElement("option");
        option.value = day;
        option.textContent = day;
        selectElement.appendChild(option);
    }
});

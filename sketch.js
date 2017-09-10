function myuploadsbutton() {
    document.getElementById("myuploads").style.display = "block";
    document.getElementById("history").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById("favourites").style.display = "none";

}
function historybutton() {
    document.getElementById("myuploads").style.display = "none";
    document.getElementById("history").style.display = "block";
    document.getElementById("settings").style.display = "none";
    document.getElementById("favourites").style.display = "none";

}

function settingsbutton() {
    document.getElementById("myuploads").style.display = "none";
    document.getElementById("history").style.display = "none";
    document.getElementById("settings").style.display = "block";
    document.getElementById("favourites").style.display = "none";

}

function favouritesbutton() {
    document.getElementById("myuploads").style.display = "none";
    document.getElementById("history").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById("favourites").style.display = "block";

}
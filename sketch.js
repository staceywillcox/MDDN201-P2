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

function editaccount() {
    document.getElementById("editaccount").style.display = "block";
    document.getElementById("password").style.display = "none";
    document.getElementById("privacy").style.display = "none";
    document.getElementById("statistics").style.display = "none";
    document.getElementById("restrictions").style.display = "none";
}

function password() {
    document.getElementById("editaccount").style.display = "none";
    document.getElementById("password").style.display = "block";
    document.getElementById("privacy").style.display = "none";
    document.getElementById("statistics").style.display = "none";
    document.getElementById("restrictions").style.display = "none";
}

function privacy() {
    document.getElementById("editaccount").style.display = "none";
    document.getElementById("password").style.display = "none";
    document.getElementById("privacy").style.display = "block";;
    document.getElementById("statistics").style.display = "none";
    document.getElementById("restrictions").style.display = "none";
}


function statistics() {
    document.getElementById("editaccount").style.display = "none";
    document.getElementById("password").style.display = "none";
    document.getElementById("privacy").style.display = "none";
    document.getElementById("statistics").style.display = "block";
    document.getElementById("restrictions").style.display = "none";
}

function restrictions() {
    document.getElementById("editaccount").style.display = "none";
    document.getElementById("password").style.display = "none";
    document.getElementById("privacy").style.display = "none";
    document.getElementById("statistics").style.display = "none";
    document.getElementById("restrictions").style.display = "block";
}

function signup() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("signup-container").style.display = "block"; 
}

function login() {
    document.getElementById("login-container").style.display = "block";
    document.getElementById("signup-container").style.display = "none"; 
}


        $(document).ready(function() {
            $("#lightSlider").lightSlider({
                item: 4,
              
            }); 
        });
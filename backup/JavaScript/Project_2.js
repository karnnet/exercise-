var sidebar = document.getElementById('sidebar');

function sidebarClose() {
    sidebar.style.display = "none";
}

function sidebarOpen() {
    if (sidebar.style.display == "none") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }
}
var modal = document.getElementById('ticketModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// function validateForm() {
//     var y = document.forms["myForm"]["Name"].value;
//     if (y == "") {
//         alert("Name must be filled out");
//         return false;
//     }
//     var y = document.forms["myForm"]["Email"].value;
//     if (y == "") {
//         alert("Email must be filled out");
//         return false;
//     }
//     var y = document.forms["myForm"]["Message"].value;
//     if (y == "") {
//         alert("Messaage must be filled out");
//         return false;
//     }
// }
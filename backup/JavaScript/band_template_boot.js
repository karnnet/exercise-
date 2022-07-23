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
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function myFunction() {
    alert("Data Submitted!");
}
function toggleNav() {
    document.getElementById("sidebar").classList.toggle("active");
    if (document.getElementById("sidebar").style.width == "95%") {
        document.getElementById("sidebar").style.width = "0%";
    } else {
        document.getElementById("sidebar").style.width = "95%";
    }
}

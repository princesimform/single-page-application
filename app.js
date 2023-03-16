function toggleNav() {
    document.getElementById("sidebar").classList.toggle("active");
    if (document.getElementById("sidebar").style.width == "95%") {
        document.getElementById("sidebar").style.width = "0%";
    } else {
        document.getElementById("sidebar").style.width = "95%";
    }
}


// Header Position
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currrenPos = window.pageYOffset;
    if (prevScrollpos > currrenPos || currrenPos > 3800) {
        document.getElementById('header').style.top = "0";
        document.getElementById('header').style.boxShadow = "0 0 1.5rem #00000033";
        document.getElementById('header-container').style.border = "none";
    } else {
        document.getElementById('header').style.top = "-80px";
    }

    if (window.pageYOffset == 0) {
        document.getElementById('header').style.boxShadow = "none"
        document.getElementById('header-container').style.borderBottom = '1px solid #9ea5a5'
    }


    prevScrollpos = currrenPos;
}


function active(positionName) {

    let btns = document.querySelectorAll('.menu-item');
    console.log(btns);
    btns.forEach((element, inx) => {
        if (element.classList.contains(positionName)) {
            element.classList.add('active-section')
        } else {
            element.classList.remove('active-section')
        }
    });
    document.getElementById("sidebar").style.width = "0%";
    document.getElementById("sidebar").classList.toggle("active");
}


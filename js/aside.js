/* 设置侧边栏的宽度为 250px（显示）*/
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* 设置侧边栏的宽度为 0（隐藏它） */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


// -----------------------------------------------------------------------------------------------------------




// upbtn

//Get the button
var mybutton = document.getElementById("myBtn");
            
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



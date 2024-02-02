var nav = document.getElementById("nav");
var zain = document.getElementById("zain");
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var nav4 = document.getElementById("nav4");
var nav5 = document.getElementById("nav5");
var nav6 = document.getElementById("nav6");
window.addEventListener("scroll", function()
{
        if(window.scrollY >= 85)
        {
            nav.classList.add("sticky")
            nav.style.backgroundColor = 'white';
            zain.style.color = 'black';
            nav1.style.color = 'black';
            nav2.style.color = 'black';
            nav3.style.color = 'black';
            nav4.style.color = 'black';
            nav5.style.color = 'black';
            nav6.style.color = 'black';
        }
        else
        {
            nav.classList.remove("sticky")
            nav.style.backgroundColor = 'black';
            zain.style.color = 'white';
            nav1.style.color = 'white';
            nav2.style.color = 'white';
            nav3.style.color = 'white';
            nav4.style.color = 'white';
            nav5.style.color = 'white';
            nav6.style.color = 'white';
        }
})
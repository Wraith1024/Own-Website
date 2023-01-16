window.onscroll = function () {

	//Navbar

   if (document.documentElement.scrollTop > 15) {
    document.getElementById("nav-main").style.opacity = 0;
    document.getElementById("nav-main").style.transition = "0.95s";
     document.getElementById("head-main").style.borderRadius = "0px";
    document.getElementById("arg0").style.transform = "scale(1)";
    document.getElementById("arg2").style.transform = "scale(1)";
    document.getElementById("arg3").style.transform = "scale(1)";
    document.getElementById("arg0").style.transition = "2.45s";
    document.getElementById("arg2").style.transition = "4.75s";
    document.getElementById("arg3").style.transition = "6.75s";
    document.getElementById("img0").style.transform = "scale(1)";
    document.getElementById("img0").style.transition = "5s";
    document.getElementById("img2").style.transform = "scale(1)";
    document.getElementById("img2").style.transition = "6s";
    document.getElementById("img3").style.transform = "scale(1)";
    document.getElementById("img3").style.transition = "7s";
   }
	
   if (document.documentElement.scrollTop < 30) {

    document.getElementById("nav-main").style.opacity = 1;
    document.getElementById("nav-main").style.transition = "0.95s";
   }
}

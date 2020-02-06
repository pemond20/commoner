window.addEventListener('click', function (e) {
  if (document.getElementById('menu-wrapper').contains(e.target)) {
    console.log("inside");
  } else {
	  console.log("outside");
    document.getElementById("show-menu").checked = false;
    document.getElementById("show-articles").checked = false;
  }
});

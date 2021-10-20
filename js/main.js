console.log("hello world!");

function action (eventbutton) {

    // Toggle 'active' class
    console.log("press button: " + eventbutton.parentNode.id);

    if (eventbutton.parentNode.childNodes[1].classList.contains("active")) {
        eventbutton.parentNode.childNodes[1].classList.remove("active");
        eventbutton.parentNode.childNodes[1].innerHTML = "inactive";
    } else {
        eventbutton.parentNode.childNodes[1].classList.add("active");
        eventbutton.parentNode.childNodes[1].innerHTML = "active";
    }
}

console.log("hello world!");

function action (eventbutton) {

    // Toggle 'active' class

    if (eventbutton.parentNode.childNodes[1].classList.contains("active"))
        eventbutton.parentNode.childNodes[1].classList.remove("active");
    else
        eventbutton.parentNode.childNodes[1].classList.add("active");
}

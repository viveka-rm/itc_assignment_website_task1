function openMenu() {
    var menu = document.getElementById("dropdown1-menu");

    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function filterEvents(type) {
    var events = document.getElementsByClassName("event-card");
    var selected = document.getElementById("selected");

    if (type == "all") {
        selected.innerText = "All Events";
    } else if (type == "past") {
        selected.innerText = "Past";
    } else if (type == "current") {
        selected.innerText = "In Progress";
    } else {
        selected.innerText = "Future";
    }

    for (var i = 0; i < events.length; i++) {
        var eventType = events[i].getAttribute("data-type");

        if (type == "all") {
            events[i].style.display = "block";
        } else if (eventType == type) {
            events[i].style.display = "block";
        } else {
            events[i].style.display = "none";
        }
    }

    document.getElementById("dropdown1-menu").style.display = "none";
}
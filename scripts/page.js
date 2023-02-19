//tab function
function openTab(evt, tabName) {
    let i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tabLink");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultTab").click();

function disableButton(buttonName, cooldownMs) {
    function enableButton() {
        document.getElementById(buttonName).disabled = false;
    }
    document.getElementById(buttonName).disabled = true;
    setTimeout(enableButton, cooldownMs);
}

function updateResourceCount(resourceName) {
    if (resources[resourceName].type === 'countable') {
        document.getElementById(resourceName + "Count").innerHTML = resources[resourceName].title + ": " + data.resources[resourceName].amount;
    } else if (resources[resourceName].type === 'uncountable') {
        document.getElementById(resourceName + "Count").innerHTML = resources[resourceName].title + ": " + data.resources[resourceName].amount + " kg";
    } else if (resources[resourceName].type === 'liquid') {
        document.getElementById(resourceName + "Count").innerHTML = resources[resourceName].title + ": " + data.resources[resourceName].amount + " L";
    }
}
function yes(){
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "HEHEHE <3";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/lol.gif";

    document.getElementById("yesButton").remove();
    
}

function not() {
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yesButton");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    noButton.style.position = "absolute";

    // Define an array of random messages
    const randomMessages = [
        "PWEASE",
        "SAY YES PLEASEEEEEE", 
        "WHY NO???",
        "BE MINE PLEASE",
    ];

    // Get a random message from the array
    const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];

    // Change the text content of the "No" button to the random message
    noButton.textContent = randomMessage;

    document.getElementsByClassName("image")[0].src = "images/cry.gif";

    let randomX, randomY;

    // Calculate random position while avoiding overlap with the "Yes" button
    do {
        randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
        randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
    } while (
        randomX >= yesButton.offsetLeft - noButton.offsetWidth &&
        randomX <= yesButton.offsetLeft + yesButton.offsetWidth &&
        randomY >= yesButton.offsetTop - noButton.offsetHeight &&
        randomY <= yesButton.offsetTop + yesButton.offsetHeight
    );

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    document.getElementById("question").textContent = "TAKE. IT. BACK. NOW!";
    document.getElementById("name").style.display = "none";
}



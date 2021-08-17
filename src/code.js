let count = 0;

document.getElementById("button").onclick = function () {
    count++;
    if (count % 2 === 0) {
        document.getElementById("main__creationsImg-underDiv").style.display = "grid";
        document.getElementById("button").style.backgroundColor = "hsl(0, 0%, 100%)";
        document.getElementById("button__text").style.color = "hsl(0, 0%, 0%)";
    }
    else {
        document.getElementById("main__creationsImg-underDiv").style.display = "none";
        document.getElementById("button").style.backgroundColor = "hsl(0, 0%, 0%)";
        document.getElementById("button__text").style.color = "hsl(0, 0%, 100%)";
    }
}


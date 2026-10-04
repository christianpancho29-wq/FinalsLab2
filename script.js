function evaluateScore(score) {
    if (score >= 90 && score <= 100) {
        return "Excellent";
    } else if (score >= 75 && score <= 89) {
        return "Passed";
    } else if (score > 0 && score < 75) {
        return "Failed";
    } else {
        return "Invalid score";
    }
}

function checkScore() {
    alert("Welcome to the Score Checker!");
    var result = document.getElementById("result");
    result.style.color = "black";

    var name = prompt("Enter your name:");
    var score = prompt("Enter your score:");

    if (name === null || score === null || name.trim() === "" || score.trim() === "") {
        result.innerHTML = "Error: Name and score are required.";
    } else if (isNaN(score)) {
        result.innerHTML = "Error: Score must be a number.";
    } else if (Number(score) === 0) {
        result.innerHTML = "Error: Score cannot be zero.";
    } else if (Number(score) < 0) {
        result.innerHTML = "Error: Score cannot be negative.";
    } else if (Number(score) > 100) {
        result.innerHTML = "Error: Score cannot be more than 100.";
    } else {
        var proceed = confirm("Do you want to continue?");

        if (proceed) {
            var remark = evaluateScore(Number(score));
            result.innerHTML = "Name: " + name + "<br>Score: " + score + "<br>Remark: " + remark;

            if (remark === "Excellent" || remark === "Passed") {
                result.style.color = "green";
            } else if (remark === "Failed") {
                result.style.color = "red";
            } else {
                result.style.color = "orange";
            }
        } else {
            result.innerHTML = "You chose not to continue. Goodbye!";
        }
    }
}
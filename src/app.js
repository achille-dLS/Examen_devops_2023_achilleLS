/* istanbul ignore file */
try {
    const { isEmpty, isValidGamertag } = require("./services/validations");
    const gamerTagInput = document.getElementById("gamerTagInput");
    const checkButton = document.getElementById("gamerTagCheckButton");
    const feedbackMessage = document.getElementById("gamerTagFeedback");

    var gamerTagValue;
    var feedbackMessageText;

    gamerTagInput.addEventListener("change", (event) => {
        gamerTagValue = event.target.value;
    });

    checkButton.addEventListener("click", () => {
        if(!isEmpty(gamerTagValue) && isValidGamertag(gamerTagValue) ){
            feedbackMessageText ="Gamer tag is valid";
        }
        else{
            feedbackMessageText ="Gamer tag is not valid";
        }
        feedbackMessage.textContent = feedbackMessageText;
    });
} catch (err) {
    console.error(JSON.stringify(err));
}

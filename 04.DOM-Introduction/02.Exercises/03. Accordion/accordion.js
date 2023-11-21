function toggle() {
    
    //constants
    const MORE = "More";
    const LESS = "Less";

    // capture element
    const buttonSpan = document.querySelector(".button");
    const divWrapperText = document.querySelector("#extra");

    //toggle functionality
    buttonSpan.textContent = buttonSpan.textContent === MORE ? LESS : MORE;

    // hide/show the text
    divWrapperText.style.display =
     divWrapperText.style.display === "none" ||
      divWrapperText.style.display === ""
    ? "block"
    : "none";
}
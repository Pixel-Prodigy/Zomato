const searchBarText = document.querySelector(".search_bar_text");
const searchTextBox = document.querySelector(".search_bar_textbox");
const inputElement = searchBarText.querySelector(".search_bar_inner_location");
const svgElement = searchBarText.querySelector(".search_bar_input_svg");

const locationBox = () => {
    if (document.activeElement === inputElement || document.activeElement === svgElement) {
        searchTextBox.style.cssText = `
            opacity: 1;
            transform: scale(0.8);
        `;
        svgElement.style.transform = "rotate(0deg)";
    } else {
        searchTextBox.style.cssText = `
            opacity: 0;
            transform: scale(0.6);
        `;
        svgElement.style.transform = "rotate(180deg)";
    }
};

inputElement.addEventListener("focus", locationBox);
inputElement.addEventListener("blur", locationBox);
svgElement.addEventListener("click", locationBox);

const logInButton = document.querySelector(".log_in");
const signUpButton = document.querySelector(".sign_up");
const logInBox = document.querySelector(".user_check_log_in");
const overlay = document.querySelector(".user_check_overlay");
const loginCut = document.querySelector(".login_cut");
const signUpBox = document.querySelector(".user_check_sign_up");
const signUpCut = document.querySelector(".signup_cut");

const openUserCheck = (varName) => {
    varName.style.cssText = `
        visibility: visible;
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
        z-index: 100;
    `;
    overlay.style.display = "block";
};

const closeUserCheck = (varName) => {
    varName.style.cssText = `
        visibility: hidden;
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.7);
        z-index: -1; 
    `;
    overlay.style.display = "none";
};

logInButton.addEventListener("click", () => openUserCheck(logInBox));
signUpButton.addEventListener("click", () => openUserCheck(signUpBox));

overlay.addEventListener("click", () => {
    closeUserCheck(logInBox);
    closeUserCheck(signUpBox);
});

loginCut.addEventListener("click", () => {
    closeUserCheck(logInBox);
});

signUpCut.addEventListener("click", () => {
    closeUserCheck(signUpBox);
});

const signInPanel = document.querySelector('.sign-in-panel');
const signIn = document.querySelector('.sign-in button');
const signUpPanel = document.querySelector('.sign-up-panel')
const signUp = document.querySelector('.sign-up button');

signIn.onclick = () =>{
    signInPanel.classList.toggle('active-login-panel');
};
signUp.onclick = () =>{
    signUpPanel.classList.toggle('active-login-panel');
};

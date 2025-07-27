const showButton = document.getElementById('showMessageBtn');
const hideButton = document.getElementById('hideMessageBtn');
const messageContainer = document.getElementById('messageContainer');
function showMessage() {
    messageContainer.classList.add('show');
}
function hideMessage() {
    messageContainer.classList.remove('show');
}
showButton.addEventListener('click', showMessage);
hideButton.addEventListener('click', hideMessage);

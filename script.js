// Setting up let variables
let modal           = document.querySelector('#mdBackground');
let modalWindow     = document.querySelector('#mdWindow');
let modalContent    = document.querySelector('#mdContent');
let close           = document.querySelector('#close');
let modalTriggers   = document.querySelectorAll('.mdTrigger');
let allModals       = new Object();
let sound = new Audio();

//Setting up a const variable
const closeModal = () => {
    modalContent.innerHTML = "";
    modal.parentNode.removeChild(modal);
}

//Setting up a var variable & music volume


//Setting up EventListener to modalWindow to prevent closing modal
modalWindow.addEventListener('click', (e) => {
    e.stopPropagation();
})

//Adding EventListeners to the close button and modal
close.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);

//Adding EventListeners to trigger links
for(let i = 0; i < modalTriggers.length; i++) {
    let item = modalTriggers[i].hash.substr(1);
    allModals[item] = document.getElementById(item);
    // Adding Click Event
    modalTriggers[i].addEventListener('click', (e) => {
        e.preventDefault()
        modalContent.appendChild(allModals[item]);
        document.body.appendChild(modal);
        sound.src = "clicksfx.mp3";
        sound.play();
    })
}

//Removing ModalContent
for(element in allModals) {
    allModals[element].parentNode.removeChild(allModals[element]);
}
//Starting closeModal function
closeModal();
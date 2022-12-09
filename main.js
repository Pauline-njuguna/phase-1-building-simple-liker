// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function emptyHeartClick(event){

  mimicServerCall()
  .then(response => {
    if (response){
      event.target.innerText = FULL_HEART
      event.target.classList.add('activated-heart')
    }
  })
.catch(error => {
  const errorModal = document.getElementById('modal')
  const modalMessage = document.getElementById('modal-message')
  errorModal.classList.remove('hidden')
  modalMessage.innerText =error
  setTimeOut (() => errorModal.classList.add('hidden'), 3000)
})

function fullHeartClick(event){
  event.target.innerText = EMPTY_HEART
  event.target.classList.remove('activated-heart')
}
function heartClickHandler(event){
  const heart = event.target.innerTexr
  heart === EMPTY_HEART ? emptyHeartClick(event) : fullHeartClick(event)
}
function init(){
  const heartsHtmlDoc = document.getElementsByClassName('like-glyph')
  for (const heart of heartHtmlDoc){
    heart.addEventListener('click', heartClickHandler)
  }
}
init()


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
}

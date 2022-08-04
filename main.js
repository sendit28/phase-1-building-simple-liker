// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likes = document.querySelectorAll('.like-glyph')
likes.forEach(element => {
  element.addEventListener('click', function handleClick(event) {
    if (element.innerHTML === EMPTY_HEART) {
      mimicServerCall()
      .then((response) => {
        element.innerHTML = FULL_HEART
        element.classList.add("activated-heart")
      })
      .catch((error) => {
        const modal = document.getElementById('modal')
        const modalMessage = document.getElementById('modal-message')
        modalMessage.innerHTML = error
        modal.classList.remove("hidden")
        setTimeout(function() {
          modal.classList.add('hidden"')
        }, 3000)
        })
    }
    else {
      element.innerHTML = EMPTY_HEART
      modal.classList.remove("activated-heart")
    }
  })
})

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

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function(){

  const hearts =document.querySelectorAll(".like-glyph");

function likePost (e){
  const like = e.target;
  const errorModal = document.querySelector('#modal');
  mimicServerCall()
    .then (function(){
      if ( like.innerText === EMPTY_HEART){
        like.innerText = FULL_HEART;
        like.className = "activated-heart";
      } else {
        like.innerText = EMPTY_HEART;
        like.className = " ";
      }
    })
  .catch(function(error){
    setTimeOut(errorModal.classList.remove('hidden'), 300);
    console.log(error);
  });
}

for(const heart of hearts){
  heart.addEventListener("click", likePost)
}
  

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

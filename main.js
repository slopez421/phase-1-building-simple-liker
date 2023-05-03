// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hearts = document.getElementsByClassName("like-glyph")

mimicServerCall().then(function() {
  addListenerToHearts()
}).catch(function (error){
  let errorMessage = document.querySelector("#modal-message")
  document.querySelector("#modal").classList.remove('hidden')
  errorMessage.append(error.message)
  //console.log(error.message)
  setTimeout(function(){
    document.querySelector("#modal").classList.add('hidden')
  }, 3000);
  })

function addListenerToHearts(){
  for(let heart of hearts){
    heart.addEventListener('click', (event) => {
      if(event.target.innerHTML === EMPTY_HEART){
       heart.classList.add("activated-heart")
       heart.innerHTML = `${FULL_HEART}`
      } else if(event.target.innerHTML === FULL_HEART){
        heart.classList.remove("activated-heart")
       heart.innerHTML = `${EMPTY_HEART}`
      }
      })
}}

//addListenerToHearts()
// mimicServerCall().then(function(){
//   let like = document.querySelector(".like-glyph")
//   like.addEventListener('click', () => {
//   like.classList.add("activated-heart")
//   like.innerHTML = `
//   ${FULL_HEART}
//   `});
// }).catch(function (error){
//   let errorMessage = document.querySelector("#modal-message")
//   document.querySelector("#modal").classList.remove('hidden')
//   errorMessage.append(error.message)
//   console.log(error.message)
//   setTimeout(function(){
//     document.querySelector("#modal").classList.add('hidden')
//   }, 3000);
//   }).then(function(){
//     let heart = document.querySelector(".like-glyph")
//     heart.addEventListener('click', () => {
//       c
//       if (heart.className = "activated-heart"){
//     heart.classList.remove("activated-heart")}
//     })
//   })





// function updateLike() {
//   return mimicServerCall().then(heart => console.log(heart))}
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

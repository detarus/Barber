//Define Vars

const loginLinks = document.querySelectorAll(".login-link");
const mapLinks = document.querySelectorAll(".map-link");
const loginModal = document.querySelector(".modal-login");
const mapModal = document.querySelector(".modal-map");
const closeButtons= document.querySelectorAll(".modal-close");
const modals= document.querySelectorAll(".modal");
const backModal = document.querySelector(".modal-bg");

//Open Login Modal
loginLinks.forEach(function(loginLink){
    loginLink.addEventListener('click',(e)=> {
        e.preventDefault();
        loginModal.style.display="block";
        loginModal.style.position="fixed";
        backModal.style.display="block";
        })
}
)

//Open Login Modal
mapLinks.forEach(function(mapLink){
    mapLink.addEventListener('click',(e)=> {
        e.preventDefault();
        mapModal.style.display="block";
        mapModal.style.position="fixed";
        backModal.style.display="block";
        })
}
)

//Close Modals with close Button
closeButtons.forEach(function (closeButton){
  closeButton.addEventListener('click', (e) =>{
      e.preventDefault();
      modals.forEach(function(modal){
          modal.style.display="none";
      })  
      backModal.style.display="none";
    })  
})
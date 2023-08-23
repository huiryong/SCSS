// const modalOpenButton = document.getElementById("modal-open");
// const modal = document.getElementsByClassName("modal")[0];
// const modalCloseButton = document.getElementById("modal-close");

// modalOpenButton.addEventListener("click", function () {
//   modal.style.display = "block";
// });

// modalCloseButton.addEventListener("click", function () {
//   modal.style.display = "none";
// });

// function test() {
//   console.log("aaa");
// }

// {
//   function dialogOpen() {
//     document.querySelector(".jsModal"), classList.add("isShow");
//   }
//   document.querySelector(".btn").addEventListener("click", dialogOpen);
// }

$(document).ready(function () {
  $(".jsButton").on("click", function () {
    $(".jsModal").addClass("isShow");
  });

  $(".isModalClose").on("click", function () {
    $(".jsModal").removeClass("isShow");
  });
});

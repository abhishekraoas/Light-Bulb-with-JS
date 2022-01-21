const onBtn = document.querySelector(".on");
const offBtn = document.querySelector(".off");

onBtn.addEventListener("click", () => {
  document.getElementById("image").src="images/on.gif" ;
})
offBtn.addEventListener("click", () => {
  document.getElementById("image").src="images/off.gif" ;
})
$(".close-nav").click(()=>{
   $(".my-nav").animate({width:"0"},500 ,()=>{
    $(".ul-nav").css('display','none')
   })
   
})
$(".open-nav").click(()=>{
   $(".my-nav").animate({width:"300px"},500)
   $(".ul-nav").css('display','block')
})



$(".my-title1").click(()=>{
   $(".title-slide-down1").slideToggle("500");
})
$(".my-title2").click(()=>{
   $(".title-slide-down2").slideToggle("500");
})
$(".my-title3").click(()=>{
   $(".title-slide-down3").slideToggle("500");
})
$(".my-title4").click(()=>{
   $(".title-slide-down4").slideToggle("500");
})



// Set the countdown date
const countdownDate = new Date('October 25, 2023 00:00:00').getTime();

// Update the countdown every second
const countdownTimer = setInterval(updateCountdown, 1000);

function updateCountdown() {
  // Get the current date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distance = countdownDate - now;

  // Calculate the remaining days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown

  var cartona=`
  <div class="col-md-3">
  <div class="p-5 border border-light d-flex justify-content-center align-items-center">
      <p class="fs-4 fw-bold text-white">${days} D</p>
  </div>
</div>
<div class="col-md-3">
  <div class="p-5 border border-light d-flex justify-content-center align-items-center">
      <p class="fs-4 fw-bold text-white">${hours} h</p>
  </div>
</div>
<div class="col-md-3">
  <div class="p-5 border border-light d-flex justify-content-center align-items-center">
      <p class="fs-4 fw-bold text-white">${minutes} m</p>
  </div>
</div>
<div class="col-md-3">
  <div class="p-5 border border-light d-flex justify-content-center align-items-center">
      <p class="fs-4 fw-bold text-white">${seconds} s</p>
  </div>
</div>
  `;

  document.querySelector("#countDown").innerHTML=cartona;


  // Check if the countdown is finished
  if (distance < 0) {
    clearInterval(countdownTimer);
    console.log('Countdown finished!');
  }

}

let desc = document.querySelector("#my-desc");
var count = 100;
document.querySelector("#ReaminingChar").innerHTML=`<p class="mt-3"><span class="text-danger ">${count}</span>  Characyer Reamining</p>`;


desc.addEventListener("input",()=>{
  console.log(count--)
  for( var i=count; i>=0 ; i--){
    if(count==0){
      document.querySelector("#ReaminingChar").innerHTML=` <p class=" mt-3"> <span class="text-danger mx-2"> your available character finished</span> Characyer Reamining</p>`;
    }
    else{
      document.querySelector("#ReaminingChar").innerHTML=`<p class="mt-3"><span class="text-danger ">${count}</span>  Characyer Reamining</p>`;
    }

  }

})

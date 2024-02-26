function showReviews(page) {
    // Hide all review cards
    var reviewCards = document.querySelectorAll('.review-card');
    reviewCards.forEach(function(card) {
      card.style.display = 'none';
    });
  
    // Calculate the start and end index of the reviews to show based on the page number
    var startIndex = (page - 1) * 3;
    var endIndex = startIndex + 2;
  
    // Show the selected reviews
    for (var i = startIndex; i <= endIndex; i++) {
      reviewCards[i].style.display = 'block';
    }
  
    // Remove the 'active' class from all dots
    var dots = document.querySelectorAll('.dot');
    dots.forEach(function(dot) {
      dot.classList.remove('active1');
    });
  
    // Add the 'active' class to the clicked dot
    dots[page - 1].classList.add('active1');
  }


  // email.js
  
 const form = document.querySelector("#main-form")


 form.addEventListener("click",(e)=>{
 e.preventDefault();

 })

 
  function sendMail(){
    
    (function() {
      emailjs.init("S99lYlVwzfUuqPqZg");
    })();

    var params = {
      from_name: document.querySelector("#from_name").value,
      email: document.querySelector("#email").value,
      phone: document.querySelector("#phone").value,
      date: document.querySelector("#date").value,
      
    };

    var serviceID = "service_mipz4ai";
    var templateID = "template_k23gvvy";

    emailjs.send(serviceID,templateID,params)
    .then(res =>{
      alert("email sent sucessfully")
      document.querySelector("#from_name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#phone").value = "";
      document.querySelector("#date").value = "";
      

    })
    .catch();
  }
  

  // zoom 
  document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('.main-banner-image img');
    if (image) {
        image.classList.add('zoom-out');
    }
});



// fade scroll

window.addEventListener('scroll', reveal);

function reveal() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (boxTop < windowHeight * 0.75) {
      box.classList.add('visible');
    } else {
      box.classList.remove('visible');
    }
  });
}

// right fade on scroll

window.addEventListener('scroll', reveal1);

function reveal1() {
  const boxes = document.querySelectorAll('.box1');
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (boxTop < windowHeight * 0.75) {
      box.classList.add('visible1');
    } else {
      box.classList.remove('visible1');
    }
  });
}
// left fade

window.addEventListener('scroll', reveal2);

function reveal2() {
  const boxes = document.querySelectorAll('.box2');
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (boxTop < windowHeight * 0.75) {
      box.classList.add('visible2');
    } else {
      box.classList.remove('visible2');
    }
  });
}

// 
window.addEventListener('scroll', reveal3);

function reveal3() {
  const boxes = document.querySelectorAll('.box3');
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (boxTop < windowHeight * 0.75) {
      box.classList.add('visible3');
    } else {
      box.classList.remove('visible3');
    }
  });
}
// 
window.addEventListener('scroll', reveal4);

function reveal4() {
  const boxes = document.querySelectorAll('.box4');
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (boxTop < windowHeight * 0.75) {
      box.classList.add('visible4');
    } else {
      box.classList.remove('visible4');
    }
  });
}



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
  

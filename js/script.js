  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  
  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
  
    if (n > slides.length) {
      slideIndex = 1;
    }
  
    if (n < 1) {
      slideIndex = slides.length;
    }
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    slides[slideIndex - 1].style.display = "block";
  }
  
  setInterval(function() {
    plusSlides(1);
  }, 5000);


  document.getElementById('fazerPedidoBtn').addEventListener('click', function() {
    // Redirecionar para a página desejada
    window.location.href = '../pedido/pedido.html';
  });

  document.addEventListener("DOMContentLoaded", function () {
    var produtosButton = document.getElementById("produtos-button");

    produtosButton.addEventListener("click", function () {
        var cardsSection = document.querySelector(".cards");
        cardsSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  var produtosButton = document.getElementById("produtos-button");
  var inicioButton = document.querySelector(".nav-container .button:first-child");

  produtosButton.addEventListener("click", function () {
      var cardsSection = document.querySelector(".cards");
      cardsSection.scrollIntoView({ behavior: "smooth" });
  });

  inicioButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


  
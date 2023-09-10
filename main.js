// Função para destacar o link da navbar com base na posição de rolagem
function highlightNavLinkOnScroll() {
    // Obtém a posição de rolagem atual
    var scrollPosition = window.scrollY;
  
    // Obtém todos os links da navbar
    var navbarLinks = document.querySelectorAll("nav a");
  
    // Itera pelos links da navbar
    navbarLinks.forEach(function (link) {
      // Obtém o elemento correspondente à seção associada ao link
      var sectionId = link.getAttribute("href").substring(1);
      var section = document.getElementById(sectionId);
  
      // Verifica se a seção é visível na página
      if (section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
  
        // Verifica se a posição de rolagem está dentro da seção
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Remove a classe "active" de todos os links
          navbarLinks.forEach(function (navLink) {
            navLink.classList.remove("active");
          });
  
          // Adiciona a classe "active" ao link correspondente à seção visível
          link.classList.add("active");
        }
      }
    });
  }
  
  // Chama a função quando a página é carregada
  window.addEventListener("load", highlightNavLinkOnScroll);
  
  // Chama a função quando a página é rolada
  window.addEventListener("scroll", highlightNavLinkOnScroll);
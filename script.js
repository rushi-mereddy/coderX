 function ChangeTheme() {
            var element = document.getElementById("theme");
            const currentText = element.getAttribute('data-bs-theme');
                if (currentText === 'dark') {
                    element.setAttribute('data-bs-theme', 'light');
                } else {
                    element.setAttribute('data-bs-theme', 'dark');
                }

                var element = document.getElementById("silogo");
                const forLogo = element.getAttribute('src');
                if (forLogo === 'assets/Smart.png') {
                    element.setAttribute('src', 'assets/Smart-white.png');
                } else {
                    element.setAttribute('src', 'assets/Smart.png');
                }

                var element = document.getElementById("whatImg");
                const forwhatL = element.getAttribute("src");
                if (forwhatL === "assets/what-learn-dark.png") {
                  element.setAttribute("src", "assets/what-learn-light.png");
                } else {
                  element.setAttribute("src", "assets/what-learn-dark.png");
                }

            };


//faq's

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("faq-active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

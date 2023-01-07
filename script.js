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

            };


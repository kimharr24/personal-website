window.addEventListener('scroll', reveal);

        function reveal() {
            var reveals = document.querySelectorAll('.reveal');

            for(var i = 0; i < reveals.length; i++) {
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 150;

                if(revealtop < windowheight - revealpoint) {
                    reveals[i].classList.add('animate');
                }
            }
        }

        window.onload = function() {
            var content = document.getElementsByClassName('animate-on-load');

            for(var i = 0; i < content.length; i++) {
                content[i].classList.add("animate");
            }
        }
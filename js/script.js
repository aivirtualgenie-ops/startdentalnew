/* =========================================================
   STAR DENTAL
   Main JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       INTRO
    ----------------------------------------------------- */

    const intro = document.getElementById("intro");

    if (intro) {

        const introSeen =
            sessionStorage.getItem("starDentalIntro");

        if (introSeen) {

            intro.remove();

        } else {

            setTimeout(() => {

                intro.classList.add("hide");

                sessionStorage.setItem(
                    "starDentalIntro",
                    "true"
                );

            }, 4700);

        }
    }


    /* -----------------------------------------------------
       MOBILE MENU
    ----------------------------------------------------- */

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            mobileMenu.classList.toggle("open");

        });

        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    mobileMenu.classList.remove("open");

                });

            });

    }


    /* -----------------------------------------------------
       SCROLL REVEAL
    ----------------------------------------------------- */

    const revealElements =
        document.querySelectorAll(".reveal");

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        observer.observe(element);

    });


    /* -----------------------------------------------------
       YEAR
    ----------------------------------------------------- */

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* -----------------------------------------------------
       SUBTLE HERO PARALLAX
    ----------------------------------------------------- */

    const heroImage =
        document.querySelector(".hero-background img");

    if (heroImage) {

        window.addEventListener(
            "scroll",
            () => {

                const scroll =
                    window.scrollY;

                if (scroll < window.innerHeight) {

                    heroImage.style.transform =
                        `scale(1.03) translateY(${scroll * 0.08}px)`;

                }

            },
            {
                passive: true
            }
        );

    }

});

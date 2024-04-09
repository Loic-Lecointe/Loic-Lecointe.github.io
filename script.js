$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Etudiant"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    var typed1 = new Typed(".typing-2", {
        strings: ["Etudiant"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    // Sélectionnez toutes les cartes de compétences
    const skillCards = document.querySelectorAll('.card');

    // Parcourez chaque carte de compétence et attachez un gestionnaire d'événements de clic
    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('.text').textContent;
            const description = getDescription(title);
            showSkillPopup(title, description);
        });
    });

    var isPopupOpen = false;

    // Fonction pour afficher la popup avec le titre et la description
    function showSkillPopup(title, description) {
        $('.scroll-up-btn').removeClass("show");
        // Afficher la div de flou
        document.getElementById('blur-background').style.display = 'block';
        document.body.classList.add('blur-scroll');
        document.getElementById('skill-title').innerText = title;
        document.getElementById('skill-description').innerText = description;
        document.getElementById('skill-popup').style.display = 'block';
    }

    // Fonction pour obtenir la description basée sur le titre de la compétence
    function getDescription(title) {
        const descriptions = {
            "Java": "Le Java est un langage de programmation polyvalent largement utilisé pour le développement d'applications informatiques, notamment pour la création d'applications Android, de logiciels d'entreprise et de solutions Web.",
            "Java Script": "JavaScript est un langage de programmation utilisé principalement pour créer des fonctionnalités interactives sur les sites Web, telles que des animations, des menus déroulants et des formulaires dynamiques.",
            "SQL": "SQL (Structured Query Language) est un langage de requête structuré utilisé pour communiquer avec une base de données relationnelle afin de stocker, manipuler et récupérer des données.",
            "Html": "HTML (HyperText Markup Language) est un langage de balisage utilisé pour créer et structurer le contenu d'une page Web.",
            "CSS": "CSS (Cascading Style Sheets) est un langage de feuille de style utilisé pour définir la présentation visuelle d'une page Web, y compris la mise en forme, la disposition et les styles visuels.",
            "GitHub": "GitHub est une plateforme de développement collaboratif basée sur Git, permettant le stockage, la gestion et le suivi des versions de code source, ainsi que la collaboration entre développeurs.",
            "React": "React est une Bibliothèque JavaScript open-source utilisée pour construire des interfaces utilisateur interactives et dynamiques pour les applications Web.",
            "NoSQL": "NoSQL est un type de base de données conçu pour le stockage et la récupération de données non structurées ou semi-structurées, offrant une flexibilité et une évolutivité accrues par rapport aux bases de données relationnelles traditionnelles.",
            "Spring Boot": "Spring Boot est un framework Java permettant de créer des applications Spring rapidement et avec peu de configuration, favorisant le développement rapide et la facilité de déploiement.",
            "Python": "Python est un langage de programmation polyvalent et facile à apprendre, largement utilisé dans le développement web, la science des données, l'automatisation de tâches et bien plus encore. Sa syntaxe claire et concise en fait un choix populaire pour les débutants et les professionnels."
        };

        // Vérifiez si le titre de la compétence existe dans l'objet de descriptions
        if (title in descriptions) {
            return descriptions[title];
        } else {
            return "Aucune description disponible pour cette compétence.";
        }
    }

    // Fonction pour fermer la popup lorsque vous cliquez sur la croix
    document.querySelector('.close-btn').addEventListener('click', closeSkillPopup);

    // Fonction pour fermer la popup
    function closeSkillPopup() {
        // Masquer la div de flou
        document.getElementById('blur-background').style.display = 'none';
        document.body.classList.remove('blur-scroll');
        document.getElementById('skill-popup').style.display = 'none';
        $('.scroll-up-btn').addClass("show");
    }


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1200: {
                items: 3,
                nav: false
            }
        }
    });
});
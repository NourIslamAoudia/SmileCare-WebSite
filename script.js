document.addEventListener('DOMContentLoaded', function() {
    // Menu Burger pour mobile
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list');
    
    burger.addEventListener('click', function() {
        navList.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
    
    // Fermer le menu lorsqu'un lien est cliqué (sur mobile)
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                burger.classList.remove('toggle');
            }
        });
    });
    
    // Ajouter une classe scrolled au header lors du défilement
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Animation au défilement
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Appeler une fois au chargement
    
    // Gestion du formulaire (simulation)
    const appointmentForm = document.getElementById('appointmentForm');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les valeurs du formulaire
            const name = document.getElementById('name').value;
            const service = document.getElementById('service').value;
            
            // Simuler l'envoi du formulaire
            alert(`Merci ${name} ! Votre demande de rendez-vous pour ${service} a été envoyée. Nous vous contacterons bientôt pour confirmation.`);
            
            // Réinitialiser le formulaire
            appointmentForm.reset();
        });
    }
    
    // Smooth scrolling pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
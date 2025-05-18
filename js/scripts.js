/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os carrosséis na página
    const carrosseis = document.querySelectorAll('.carrossel');
    
    // Inicializa cada carrossel
    carrosseis.forEach(carrossel => {
        const slides = carrossel.querySelectorAll('.slide');
        const indicadoresContainer = carrossel.querySelector('.indicadores');
        let currentSlide = 0;
        
        // Cria indicadores para cada slide
        slides.forEach((_, index) => {
            const indicador = document.createElement('div');
            indicador.classList.add('indicador');
            if (index === 0) indicador.classList.add('ativo');
            indicador.addEventListener('click', () => {
                irParaSlide(carrossel, index);
            });
            indicadoresContainer.appendChild(indicador);
        });
        
        // Configura navegação automática para cada carrossel
        let intervalo = setInterval(() => mudarSlide(carrossel, 1), 5000);
        
        // Pausa quando o mouse está sobre o carrossel
        carrossel.addEventListener('mouseenter', () => {
            clearInterval(intervalo);
        });
        
        // Retoma quando o mouse sai
        carrossel.addEventListener('mouseleave', () => {
            intervalo = setInterval(() => mudarSlide(carrossel, 1), 5000);
        });
    });
    
    // Função para mudar de slide (avançar ou retroceder)
    function mudarSlide(carrossel, n) {
        const slides = carrossel.querySelectorAll('.slide');
        const indicadores = carrossel.querySelectorAll('.indicador');
        let currentSlide = Array.from(slides).findIndex(slide => 
            slide.classList.contains('ativo'));
        
        irParaSlide(carrossel, currentSlide + n);
    }
    
    // Função para ir para um slide específico
    function irParaSlide(carrossel, n) {
        const slides = carrossel.querySelectorAll('.slide');
        const indicadores = carrossel.querySelectorAll('.indicador');
        
        // Verifica os limites
        if (n >= slides.length) {
            n = 0;
        } else if (n < 0) {
            n = slides.length - 1;
        }
        
        // Move o container de slides
        carrossel.querySelector('.slides').style.transform = `translateX(-${n * 100}%)`;
        
        // Atualiza classes ativas
        slides.forEach(slide => slide.classList.remove('ativo'));
        slides[n].classList.add('ativo');
        
        indicadores.forEach(ind => ind.classList.remove('ativo'));
        indicadores[n].classList.add('ativo');
    }
    
    // Torna a função global para os botões no HTML
    window.mudarSlide = mudarSlide;
});


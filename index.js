
document.addEventListener('DOMContentLoaded', () => {
    // Burger Menu Logic
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burgerMenu.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    burgerMenu.classList.remove('active');
                }
            });
        });
    }

    // Testimonial Slider Logic
    const sliderContainer = document.querySelector('.testimonial-slider');
    const dotsContainer = document.querySelector('.testimonial-dots');

    if (sliderContainer && dotsContainer) {
        const sliderWrapper = sliderContainer.parentElement;
        const testimonials = [
            {
                name: "Cláudia P.",
                stars: 5,
                review: "Adorei a formação, a formadora foi excelente, muito clara na exposição dos conteúdos e sempre disponível para esclarecer as dúvidas. O curso está muito bem estruturado e os manuais são uma ótima ajuda. Recomendo vivamente.",
            },
            {
                name: "Sofia A.",
                stars: 5,
                review: "Gostei muito do curso, a formadora foi super acessível e o curso está muito bem organizado. Foi uma mais valia para o meu trabalho.",
            },
            {
                name: "Ana C.",
                stars: 5,
                review: "Gostei muito do curso, o formador foi excelente, muito claro e acessível. A formação está muito bem estruturada. Recomendo.",
            },
            {
                name: "Vanda F.",
                stars: 5,
                review: "Curso muito útil e interessante, com um formador que tem um excelente domínio dos conteúdos e uma capacidade de comunicação extraordinária. Recomendo!",
            }
        ];

        let currentSlide = 0;
        let slideInterval;

        const createSlider = () => {
            sliderContainer.innerHTML = '';
            dotsContainer.innerHTML = '';

            testimonials.forEach((testimonial, index) => {
                const slide = document.createElement('div');
                slide.classList.add('testimonial-slide');
                slide.innerHTML = `
                    <div class="testimonial-card">
                        <div class="stars">${'★'.repeat(testimonial.stars)}${'☆'.repeat(5 - testimonial.stars)}</div>
                        <p class="review">"${testimonial.review}"</p>
                        <p class="name">- ${testimonial.name}</p>
                    </div>
                `;
                sliderContainer.appendChild(slide);

                const dot = document.createElement('div');
                dot.classList.add('dot');
                dot.addEventListener('click', () => {
                    showSlide(index);
                    resetInterval();
                });
                dotsContainer.appendChild(dot);
            });
        };

        const showSlide = (index) => {
            const slides = sliderContainer.querySelectorAll('.testimonial-slide');
            const dots = dotsContainer.querySelectorAll('.dot');

            if (index >= slides.length) index = 0;
            if (index < 0) index = slides.length - 1;

            slides.forEach((s) => s.classList.remove('active'));
            dots.forEach((d) => d.classList.remove('active'));

            const activeSlide = slides[index];
            const activeDot = dots[index];
            
            if (activeSlide) {
                activeSlide.classList.add('active');
                if (sliderWrapper) {
                    sliderWrapper.style.height = `${activeSlide.offsetHeight}px`;
                }
            }

            if (activeDot) {
                activeDot.classList.add('active');
            }

            currentSlide = index;
        };

        const nextSlide = () => {
            showSlide(currentSlide + 1);
        };

        const resetInterval = () => {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        };

        const initializeSlider = () => {
            createSlider();
            showSlide(0);
            resetInterval();

            sliderContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
            sliderContainer.addEventListener('mouseleave', () => resetInterval());
        };

        document.fonts.ready.then(() => {
            initializeSlider();
        });
    }

    // Accordion Logic
    const accordionItems = document.querySelectorAll('.accordion-item');
    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            if (header) {
                header.addEventListener('click', () => {
                    item.classList.toggle('active');
                });
            }
        });
    }
});

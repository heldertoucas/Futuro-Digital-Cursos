document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Burger Menu ---
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burgerMenu.classList.toggle('active');
        });
        
        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                burgerMenu.classList.remove('active');
            });
        });
    }

    // --- Testimonial Slider ---
    const testimonials = [
        {
            name: "Andreia F.",
            stars: 5,
            review: "Excelente formação, muito bem estruturada e organizada. Conteúdos muito interessantes e relevantes. Recomendo vivamente!"
        },
        {
            name: "Margarida F.",
            stars: 5,
            review: "Uma formação muito útil, dinâmica e com um formador sempre disponível. Adorei! Recomendo."
        },
        {
            name: "Cristina M.",
            stars: 5,
            review: "Curso muito bem conseguido. O formador foi excelente, muito conhecedor da matéria, muito claro na exposição e sempre disponível. Parabéns!"
        },
        {
            name: "Carla R.",
            stars: 5,
            review: "Adorei a formação, muito útil e com um formador excelente! Muito obrigada pela partilha de conhecimentos."
        }
    ];

    const sliderWrapper = document.getElementById('testimonial-slider-wrapper');
    const slider = document.getElementById('testimonial-slider');
    const dotsContainer = document.getElementById('testimonial-dots');

    function initializeTestimonialSlider() {
        if (!slider || !dotsContainer || !sliderWrapper) return;

        let currentSlide = 0;
        let slideInterval;

        // Create slides and dots
        testimonials.forEach((testimonial, index) => {
            // Create Slide
            const slide = document.createElement('div');
            slide.className = 'testimonial-slide';
            slide.innerHTML = `
                <div class="testimonial-card">
                    <div class="stars">${'★'.repeat(testimonial.stars)}${'☆'.repeat(5 - testimonial.stars)}</div>
                    <p class="review">"${testimonial.review}"</p>
                    <p class="name">- ${testimonial.name}</p>
                </div>
            `;
            slider.appendChild(slide);

            // Create Dot
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.addEventListener('click', () => {
                showSlide(index);
                resetInterval();
            });
            dotsContainer.appendChild(dot);
        });

        const slides = slider.querySelectorAll('.testimonial-slide');
        const dots = dotsContainer.querySelectorAll('.dot');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                dots[i].classList.remove('active');
            });

            if(slides[index] && dots[index]) {
                slides[index].classList.add('active');
                dots[index].classList.add('active');
                
                // Adjust height of the wrapper
                // Make it visible before measuring
                const activeSlide = slides[index];
                if (activeSlide) {
                    const slideHeight = activeSlide.offsetHeight;
                    sliderWrapper.style.height = `${slideHeight}px`;
                }
            }
            currentSlide = index;
        }
        
        function nextSlide() {
            const newIndex = (currentSlide + 1) % slides.length;
            showSlide(newIndex);
        }

        function startInterval() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
        slider.addEventListener('mouseleave', () => startInterval());

        // Initial load
        showSlide(0);
        startInterval();
    }
    
    // Wait for custom fonts to be ready before initializing slider
    document.fonts.ready.then(() => {
        initializeTestimonialSlider();
    });

    // --- Accordion Logic ---
    function initializeAccordions() {
        const accordionItems = document.querySelectorAll('.accordion-item');
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            if(header) {
                 header.addEventListener('click', () => {
                    // Check if the clicked item is already active
                    const wasActive = item.classList.contains('active');
                    
                    // First, close all other items if you want only one open at a time
                    // accordionItems.forEach(otherItem => {
                    //     otherItem.classList.remove('active');
                    // });
                    
                    // Then, toggle the clicked item
                    if (!wasActive) {
                        item.classList.add('active');
                    } else {
                         item.classList.remove('active');
                    }
                });
            }
        });
    }

    // --- AI Studio Preview Navigation ---
    function initializePreviewNav() {
        console.log("Checking for preview nav. Hostname:", window.location.hostname);
        const navBar = document.querySelector('.preview-nav-bar');
        if (!navBar) return;

        const isProduction = window.location.hostname.includes('github.io');

        if (isProduction) {
            navBar.style.display = 'none';
        } else {
            // We are in a preview environment, so show the bar and activate links
            navBar.style.display = 'flex';
            document.body.classList.add('preview-active'); // Add padding to body

            const links = navBar.querySelectorAll('.preview-nav-link');
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';

            links.forEach(link => {
                const linkPath = link.getAttribute('href');
                if (linkPath === currentPath) {
                    link.classList.add('active');
                }

                link.addEventListener('click', e => {
                    e.preventDefault();
                    const targetPage = link.getAttribute('href');

                    fetch(targetPage)
                        .then(response => response.text())
                        .then(html => {
                            const parser = new DOMParser();
                            const doc = parser.parseFromString(html, 'text/html');
                            const newMainContent = doc.querySelector('main');
                            
                            if (newMainContent) {
                                document.querySelector('main').innerHTML = newMainContent.innerHTML;
                                document.title = doc.title; // Update page title
                                
                                // Re-initialize components that might be in the new content
                                initializeAccordions();

                                // Update active link state
                                links.forEach(l => l.classList.remove('active'));
                                link.classList.add('active');
                                
                                // Scroll to top
                                window.scrollTo(0, 0);
                            }
                        })
                        .catch(err => console.error('Failed to load page content:', err));
                });
            });
        }
    }


    // --- Initializations ---
    initializeAccordions();
    initializePreviewNav();

});

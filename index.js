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

    function initializeTestimonialSlider() {
        const sliderWrapper = document.getElementById('testimonial-slider-wrapper');
        const slider = document.getElementById('testimonial-slider');
        const dotsContainer = document.getElementById('testimonial-dots');
        
        if (!slider || !dotsContainer || !sliderWrapper) return;

        // Clear previous content if re-initializing
        slider.innerHTML = '';
        dotsContainer.innerHTML = '';

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
                    const wasActive = item.classList.contains('active');
                    if (!wasActive) {
                        item.classList.add('active');
                    } else {
                         item.classList.remove('active');
                    }
                });
            }
        });
    }

    // --- Slide Mode Presentation ---
    function initializeSlideMode() {
        const presenterRemote = document.getElementById('presenter-remote');
        if (!presenterRemote) return;

        const slides = Array.from(document.querySelectorAll('main > section[data-slide-title]'));
        if (slides.length === 0) return;

        const slideCounter = document.getElementById('slide-counter');
        const prevBtn = document.getElementById('prev-slide-btn');
        const nextBtn = document.getElementById('next-slide-btn');
        const jumpBtn = document.getElementById('jump-to-slide-btn');
        const slideMenu = document.getElementById('slide-menu');

        let currentSlideIndex = 0;
        
        slideMenu.innerHTML = ''; // Clear previous menu items

        slides.forEach((slide, index) => {
            const title = slide.dataset.slideTitle;
            const listItem = document.createElement('li');
            listItem.textContent = title;
            listItem.addEventListener('click', () => {
                scrollToSlide(index);
                slideMenu.classList.remove('visible');
            });
            slideMenu.appendChild(listItem);
        });

        const scrollToSlide = (index) => {
            if (index >= 0 && index < slides.length) {
                slides[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        };

        const updateActiveSlide = (index) => {
            currentSlideIndex = index;
            slides.forEach((slide, i) => {
                slide.classList.toggle('current-slide', i === index);
            });
            if (slideCounter) {
                slideCounter.textContent = `${index + 1} / ${slides.length}`;
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = slides.indexOf(entry.target);
                        if(index !== -1) {
                            updateActiveSlide(index);
                        }
                    }
                });
            },
            { root: null, threshold: 0.5, rootMargin: '0px' }
        );

        slides.forEach(slide => observer.observe(slide));

        prevBtn.addEventListener('click', () => scrollToSlide(currentSlideIndex - 1));
        nextBtn.addEventListener('click', () => scrollToSlide(currentSlideIndex + 1));
        jumpBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            slideMenu.classList.toggle('visible');
        });

        document.addEventListener('click', (e) => {
            if (!presenterRemote.contains(e.target)) {
                slideMenu.classList.remove('visible');
            }
        });

        if(slides.length > 0) {
            slides[0].classList.add('current-slide');
            if (slideCounter) {
                slideCounter.textContent = `1 / ${slides.length}`;
            }
        }
    }


    // --- AI Studio Preview Navigation ---
    function initializePreviewNav() {
        const navBar = document.querySelector('.preview-nav-bar');
        if (!navBar) return;

        const isProduction = window.location.hostname.includes('github.io');
        if (isProduction) {
            navBar.style.display = 'none';
            return;
        }
        
        navBar.style.display = 'flex';
        document.body.classList.add('preview-active');

        const links = navBar.querySelectorAll('.preview-nav-link');
        
        const updateActiveLink = () => {
             const pageName = document.body.dataset.pageName || 'index.html';
             links.forEach(link => {
                const linkPath = link.getAttribute('href');
                link.classList.toggle('active', linkPath === pageName);
            });
        };

        links.forEach(link => {
            link.addEventListener('click', async (e) => {
                e.preventDefault();
                const targetUrl = link.getAttribute('href');
                const currentPage = document.body.dataset.pageName || 'index.html';

                if (targetUrl === currentPage) return;

                try {
                    const response = await fetch(targetUrl);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch ${targetUrl}: ${response.statusText}`);
                    }
                    const htmlText = await response.text();
                    
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(htmlText, 'text/html');

                    const newMain = doc.querySelector('main');
                    const newTitle = doc.querySelector('title');
                    const newBodyData = doc.body.dataset.pageName;

                    if (newMain) {
                        document.querySelector('main').innerHTML = newMain.innerHTML;
                    }
                    if (newTitle) {
                        document.title = newTitle.textContent;
                    }
                    if (newBodyData) {
                        document.body.dataset.pageName = newBodyData;
                    }

                    updateActiveLink();
                    
                    // Re-initialize components for the new content
                    initializeAllComponents();
                    window.scrollTo(0, 0);

                } catch (error) {
                    console.error('Error loading page content:', error);
                }
            });
        });

        updateActiveLink(); // Set initial active link
    }
    
    // --- Global Initializer ---
    function initializeAllComponents() {
        // Initializes components that might appear on any page loaded via preview nav
        initializeAccordions();
        initializeTestimonialSlider();
        initializeSlideMode();
    }


    // --- Initializations on first load ---
    initializePreviewNav();
    initializeAllComponents();

});
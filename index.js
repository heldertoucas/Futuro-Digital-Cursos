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

    // --- Presentation (Slide) Mode ---
    let destroySlideMode = null;

    function initializeSlideMode() {
        const slides = Array.from(document.querySelectorAll('main > section[data-slide-title]'));
        if (slides.length === 0) return null;

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
            if (index === currentSlideIndex) return;
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
                const intersectingEntry = entries.find(entry => entry.isIntersecting);
                if (intersectingEntry) {
                    const index = slides.indexOf(intersectingEntry.target);
                    if (index !== -1) {
                        updateActiveSlide(index);
                    }
                }
            },
            { root: null, threshold: 0.8, rootMargin: '0px' } // Increased threshold for precision
        );

        slides.forEach(slide => observer.observe(slide));

        const handlePrevClick = () => scrollToSlide(currentSlideIndex - 1);
        const handleNextClick = () => scrollToSlide(currentSlideIndex + 1);
        const handleJumpClick = (e) => {
            e.stopPropagation();
            slideMenu.classList.toggle('visible');
        };
        const handleDocClick = (e) => {
            const presenterRemote = document.getElementById('presenter-remote');
            if (presenterRemote && !presenterRemote.contains(e.target)) {
                slideMenu.classList.remove('visible');
            }
        };

        prevBtn.addEventListener('click', handlePrevClick);
        nextBtn.addEventListener('click', handleNextClick);
        jumpBtn.addEventListener('click', handleJumpClick);
        document.addEventListener('click', handleDocClick);
        
        // Initial setup
        const firstVisibleSlideIndex = slides.findIndex(slide => slide.offsetParent !== null);
        updateActiveSlide(firstVisibleSlideIndex !== -1 ? firstVisibleSlideIndex : 0);
        slides.forEach((slide, i) => slide.classList.toggle('current-slide', i === currentSlideIndex));

        // Return a cleanup function
        return () => {
            observer.disconnect();
            prevBtn.removeEventListener('click', handlePrevClick);
            nextBtn.removeEventListener('click', handleNextClick);
            jumpBtn.removeEventListener('click', handleJumpClick);
            document.removeEventListener('click', handleDocClick);
            slides.forEach(slide => slide.classList.remove('current-slide'));
            slideMenu.classList.remove('visible');
        };
    }

    function handlePresentationMode() {
        const remoteToggle = document.getElementById('remote-slide-toggle');

        if (!remoteToggle) return;

        const setMode = (isActive) => {
            if (isActive) {
                document.body.classList.add('presentation-active');
                if (typeof destroySlideMode === 'function') destroySlideMode();
                destroySlideMode = initializeSlideMode();
            } else {
                document.body.classList.remove('presentation-active');
                if (typeof destroySlideMode === 'function') {
                    destroySlideMode();
                    destroySlideMode = null;
                }
            }
            remoteToggle.checked = isActive;
        };
        
        remoteToggle.addEventListener('change', (e) => setMode(e.target.checked));
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
        
        document.body.classList.add('preview-active');

        const updateActiveLink = () => {
             const pageName = document.body.dataset.pageName || 'index.html';
             const links = navBar.querySelectorAll('.preview-nav-link');
             links.forEach(link => {
                const linkPath = link.getAttribute('href');
                link.classList.toggle('active', linkPath === pageName);
            });
        };

        navBar.addEventListener('click', async (e) => {
            if (e.target.tagName !== 'A' || !e.target.classList.contains('preview-nav-link')) {
                return;
            }
            e.preventDefault();
            
            const link = e.target;
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

                const newTitle = doc.querySelector('title');
                const newBody = doc.querySelector('body');
                
                if (newTitle) {
                    document.title = newTitle.textContent;
                }

                if (newBody) {
                    // Preserve the preview nav bar itself
                    const previewNav = document.querySelector('.preview-nav-bar');
                    
                    // Replace the entire body's content
                    document.body.innerHTML = newBody.innerHTML;
                    
                    // Re-append the preview nav bar
                    if (previewNav) {
                        document.body.appendChild(previewNav);
                    }
                    
                    // Copy attributes from the new body
                    document.body.className = newBody.className;
                    document.body.classList.add('preview-active'); // ensure this class is always present
                    document.body.dataset.pageName = newBody.dataset.pageName;
                }
                
                updateActiveLink();
                
                // Re-initialize components for the new content
                initializeAllComponents();
                window.scrollTo(0, 0);

            } catch (error) {
                console.error('Error loading page content:', error);
            }
        });

        updateActiveLink(); // Set initial active link
    }
    
    // --- Global Initializer ---
    function initializeAllComponents() {
        // Initializes components that might appear on any page loaded via preview nav
        const burgerMenu = document.getElementById('burger-menu');
        const navLinks = document.getElementById('nav-links');
        if (burgerMenu && navLinks) {
             burgerMenu.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                burgerMenu.classList.toggle('active');
            });
        }
        
        initializeAccordions();
        initializeTestimonialSlider();
        handlePresentationMode();
    }


    // --- Initializations on first load ---
    initializePreviewNav();
    initializeAllComponents();

});
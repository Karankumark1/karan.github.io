// ========================================
// LUCIFER MORNINGSTAR PORTFOLIO ANIMATIONS
// Divine effects and celestial scroll animations
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // LOADING SCREEN
    // ========================================
    function hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    // Play a subtle "deal completed" sound effect
                    createDealCompletedEffect();
                }, 500);
            }, 2500); // Extended for Lucifer's dramatic entrance
        }
    }
    
    // ========================================
    // PARTICLES CONFIGURATION
    // ========================================
    function initParticles() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: ["#ffd700", "#dc143c", "#8b0000", "#ff6600", "#cc0000"]
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000"
                        },
                        polygon: {
                            nb_sides: 6
                        }
                    },
                    opacity: {
                        value: 0.6,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#ffd700",
                        opacity: 0.3,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse"
                        },
                        onclick: {
                            enable: true,
                            mode: "push"
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            });
        }
    }
    
    // ========================================
    // SCROLL ANIMATIONS
    // ========================================
    function initScrollAnimations() {
        const elements = document.querySelectorAll('.demon-card, .lucifer-card, .project-card, .cert-card, .timeline-item, .skill-category');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in', 'visible');
                    // Add Lucifer's dramatic entrance with golden sparks
                    createGoldenSparks(entry.target);
                }
            });
        }, observerOptions);
        
        elements.forEach(element => {
            element.classList.add('fade-in');
            observer.observe(element);
        });
    }
    
    // ========================================
    // SMOOTH SCROLLING FOR NAVIGATION
    // ========================================
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('.lucifer-nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 70;
                    // Add a brief golden flash when navigating
                    createNavigationFlash();
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================
    function initNavbarScrollEffect() {
        const navbar = document.querySelector('.demon-nav');
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.style.background = 'rgba(10, 10, 10, 0.98)';
                navbar.style.boxShadow = '0 2px 30px rgba(220, 20, 60, 0.5)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
                navbar.style.boxShadow = '0 2px 20px rgba(220, 20, 60, 0.3)';
            }
            
            lastScroll = currentScroll;
        });
    }
    
    // ========================================
    // TYPING ANIMATION FOR TITLE
    // ========================================
    function initTypingAnimation() {
        const title = document.querySelector('.lucifer-title');
        if (title) {
            const text = title.textContent;
            title.textContent = '';
            title.style.borderRight = '3px solid #ffd700';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    title.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 80); // Slightly faster, more confident
                } else {
                    // Remove cursor after typing with golden glow
                    setTimeout(() => {
                        title.style.borderRight = 'none';
                        title.style.textShadow = '0 0 30px #ffd700';
                        // Add Lucifer's signature laugh effect
                        createLuciferLaughEffect();
                    }, 1000);
                }
            };
            
            // Start typing after loading screen
            setTimeout(typeWriter, 3000);
        }
    }
    
    // ========================================
    // DEMON EYES FOLLOWING CURSOR
    // ========================================
    function initLuciferEyeFollow() {
        const luciferIcon = document.querySelector('.lucifer-icon');
        if (luciferIcon && luciferIcon.classList.contains('fa-crown')) {
            
            document.addEventListener('mousemove', (e) => {
                const rect = luciferIcon.getBoundingClientRect();
                const iconCenterX = rect.left + rect.width / 2;
                const iconCenterY = rect.top + rect.height / 2;
                
                const deltaX = e.clientX - iconCenterX;
                const deltaY = e.clientY - iconCenterY;
                
                const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
                
                // More pronounced movement for the Devil's crown
                luciferIcon.style.transform = `rotate(${angle * 0.08}deg) scale(${1 + Math.abs(deltaX + deltaY) * 0.0001})`;
                
                // Add golden glow that intensifies with movement
                const intensity = Math.min(Math.abs(deltaX + deltaY) * 0.01, 40);
                luciferIcon.style.textShadow = `0 0 ${25 + intensity}px #ffd700`;
            });
        }
    }
    
    // ========================================
    // GLITCH EFFECT ON HOVER
    // ========================================
    function initDivineGlowEffect() {
        const glowElements = document.querySelectorAll('.lucifer-title, .section-title');
        
        glowElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.animation = 'divineGlow 0.8s ease-in-out';
                setTimeout(() => {
                    this.style.animation = '';
                }, 800);
            });
        });
        
        // Add divine glow keyframes to CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes divineGlow {
                0% { transform: scale(1); text-shadow: 0 0 20px #ffd700; }
                25% { transform: scale(1.02); text-shadow: 0 0 30px #ffd700, 0 0 40px #ff6600; }
                50% { transform: scale(1.05); text-shadow: 0 0 40px #ffd700, 0 0 50px #ff6600, 0 0 60px #dc143c; }
                75% { transform: scale(1.02); text-shadow: 0 0 30px #ffd700, 0 0 40px #ff6600; }
                100% { transform: scale(1); text-shadow: 0 0 20px #ffd700; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ========================================
    // SKILL BADGES ANIMATION
    // ========================================
    function initSkillBadgesAnimation() {
        const skillBadges = document.querySelectorAll('.skill-badge');
        
        skillBadges.forEach((badge, index) => {
            // Stagger animation
            setTimeout(() => {
                badge.style.opacity = '0';
                badge.style.transform = 'scale(0.5)';
                badge.style.transition = 'all 0.5s ease';
                
                setTimeout(() => {
                    badge.style.opacity = '1';
                    badge.style.transform = 'scale(1)';
                }, 100);
            }, index * 100);
            
            // Add floating animation
            badge.addEventListener('mouseenter', function() {
                this.style.animation = 'skillFloat 0.6s ease-in-out';
            });
            
            badge.addEventListener('animationend', function() {
                this.style.animation = '';
            });
        });
        
        // Add skill float keyframes
        const skillStyle = document.createElement('style');
        skillStyle.textContent = `
            @keyframes skillFloat {
                0%, 100% { transform: scale(1) translateY(0); }
                50% { transform: scale(1.1) translateY(-5px); }
            }
        `;
        document.head.appendChild(skillStyle);
    }
    
    // ========================================
    // PROJECT CARDS HOVER EFFECT
    // ========================================
    function initProjectCardsEffect() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                // Add fire particles effect
                createFireParticles(this);
            });
        });
    }
    
    function createFireParticles(element) {
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #ff4500;
                border-radius: 50%;
                pointer-events: none;
                animation: fireParticle 1s ease-out forwards;
                z-index: 1000;
            `;
            
            const rect = element.getBoundingClientRect();
            particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
            particle.style.top = (rect.bottom - 10) + 'px';
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
        
        // Add fire particle animation
        if (!document.querySelector('#fire-particle-style')) {
            const fireStyle = document.createElement('style');
            fireStyle.id = 'fire-particle-style';
            fireStyle.textContent = `
                @keyframes fireParticle {
                    0% { 
                        transform: translateY(0) scale(1);
                        opacity: 1;
                    }
                    100% { 
                        transform: translateY(-50px) scale(0);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(fireStyle);
        }
    }
    
    // ========================================
    // CONTACT FORM GLOW EFFECT
    // ========================================
    function initContactGlowEffect() {
        const contactItems = document.querySelectorAll('.contact-item');
        
        contactItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 20px rgba(255, 69, 0, 0.5)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.boxShadow = '';
            });
        });
    }
    
    // ========================================
    // SCROLL TO TOP BUTTON
    // ========================================
    function initScrollToTop() {
        const scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        scrollBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(45deg, #8b0000, #dc143c);
            color: white;
            border: 2px solid #ff4500;
            border-radius: 50%;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            font-size: 1.2rem;
        `;
        
        document.body.appendChild(scrollBtn);
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.visibility = 'visible';
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.visibility = 'hidden';
            }
        });
        
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        scrollBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 5px 15px rgba(255, 69, 0, 0.5)';
        });
        
        scrollBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '';
        });
    }
    
    // ========================================
    // CURSOR TRAIL EFFECT
    // ========================================
    function initCursorTrail() {
        const trail = [];
        const trailLength = 20;
        
        for (let i = 0; i < trailLength; i++) {
            const dot = document.createElement('div');
            dot.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: #ff4500;
                border-radius: 50%;
                opacity: ${1 - i / trailLength};
                pointer-events: none;
                z-index: 9999;
                transition: all 0.1s ease;
            `;
            document.body.appendChild(dot);
            trail.push(dot);
        }
        
        document.addEventListener('mousemove', (e) => {
            trail.forEach((dot, index) => {
                setTimeout(() => {
                    dot.style.left = e.clientX + 'px';
                    dot.style.top = e.clientY + 'px';
                }, index * 50);
            });
        });
    }
    
    // ========================================
    // LIGHTNING EFFECT
    // ========================================
    function createLightningEffect() {
        const lightning = document.createElement('div');
        lightning.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            pointer-events: none;
            z-index: 9998;
            opacity: 0;
        `;
        document.body.appendChild(lightning);
        
        function flash() {
            lightning.style.opacity = '1';
            setTimeout(() => {
                lightning.style.opacity = '0';
            }, 100);
        }
        
        // Random lightning flashes
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every interval
                flash();
            }
        }, 5000);
    }
    
    // ========================================
    // INITIALIZE ALL ANIMATIONS
    // ========================================
    function initAllAnimations() {
        hideLoadingScreen();
        initParticles();
        initScrollAnimations();
        initSmoothScrolling();
        initNavbarScrollEffect();
        initTypingAnimation();
        initLuciferEyeFollow();
        initDivineGlowEffect();
        initSkillBadgesAnimation();
        initProjectCardsEffect();
        initContactGlowEffect();
        initScrollToTop();
        initCursorTrail();
        createLightningEffect();
        
        console.log('👑 Lucifer Morningstar Portfolio Activated 👑');
        console.log('"What is it you truly desire?"');
    }
    
    // ========================================
    // LUCIFER-SPECIFIC EFFECTS
    // ========================================
    
    function createDealCompletedEffect() {
        // Create golden sparks when loading completes
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                createGoldenSpark(window.innerWidth / 2, window.innerHeight / 2);
            }, i * 100);
        }
    }
    
    function createGoldenSparks(element) {
        const rect = element.getBoundingClientRect();
        for (let i = 0; i < 8; i++) {
            createGoldenSpark(
                rect.left + rect.width / 2, 
                rect.top + rect.height / 2
            );
        }
    }
    
    function createGoldenSpark(x, y) {
        const spark = document.createElement('div');
        spark.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: radial-gradient(circle, #ffd700, #ff6600);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${x}px;
            top: ${y}px;
            animation: goldenSparkle 1.5s ease-out forwards;
        `;
        
        document.body.appendChild(spark);
        
        setTimeout(() => {
            spark.remove();
        }, 1500);
        
        // Add sparkle animation if not exists
        if (!document.querySelector('#golden-sparkle-style')) {
            const sparkleStyle = document.createElement('style');
            sparkleStyle.id = 'golden-sparkle-style';
            sparkleStyle.textContent = `
                @keyframes goldenSparkle {
                    0% {
                        transform: scale(0) rotate(0deg);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.5) rotate(180deg);
                        opacity: 0.8;
                    }
                    100% {
                        transform: scale(0) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(sparkleStyle);
        }
    }
    
    function createNavigationFlash() {
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(255, 215, 0, 0.3), transparent);
            pointer-events: none;
            z-index: 9998;
            opacity: 0;
            animation: navigationFlash 0.3s ease-out;
        `;
        
        document.body.appendChild(flash);
        
        setTimeout(() => {
            flash.remove();
        }, 300);
        
        // Add navigation flash animation
        if (!document.querySelector('#navigation-flash-style')) {
            const flashStyle = document.createElement('style');
            flashStyle.id = 'navigation-flash-style';
            flashStyle.textContent = `
                @keyframes navigationFlash {
                    0% { opacity: 0; }
                    50% { opacity: 1; }
                    100% { opacity: 0; }
                }
            `;
            document.head.appendChild(flashStyle);
        }
    }
    
    function createLuciferLaughEffect() {
        // Create a subtle laugh ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            width: 10px;
            height: 10px;
            border: 2px solid #ffd700;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 9998;
            animation: laughRipple 2s ease-out forwards;
        `;
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 2000);
        
        // Add laugh ripple animation
        if (!document.querySelector('#laugh-ripple-style')) {
            const rippleStyle = document.createElement('style');
            rippleStyle.id = 'laugh-ripple-style';
            rippleStyle.textContent = `
                @keyframes laughRipple {
                    0% {
                        width: 10px;
                        height: 10px;
                        opacity: 1;
                    }
                    100% {
                        width: 300px;
                        height: 300px;
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(rippleStyle);
        }
    }
    
    // ========================================
    // PIANO KEYS EASTER EGG (Lucifer plays piano)
    // ========================================
    function initPianoEasterEgg() {
        const pianoSequence = ['KeyL', 'KeyU', 'KeyC', 'KeyI', 'KeyF', 'KeyE', 'KeyR'];
        let sequenceIndex = 0;
        
        document.addEventListener('keydown', (e) => {
            if (e.code === pianoSequence[sequenceIndex]) {
                sequenceIndex++;
                if (sequenceIndex === pianoSequence.length) {
                    startPianoEffect();
                    sequenceIndex = 0;
                }
            } else {
                sequenceIndex = 0;
            }
        });
        
        function startPianoEffect() {
            // Create floating musical notes
            console.log('🎹 "I don\'t play piano... I AM the piano." - Lucifer Morningstar');
            
            const notes = ['♪', '♫', '♬', '♩', '♭', '♯'];
            
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    createMusicalNote(notes[Math.floor(Math.random() * notes.length)]);
                }, i * 200);
            }
        }
        
        function createMusicalNote(note) {
            const noteElement = document.createElement('div');
            noteElement.textContent = note;
            noteElement.style.cssText = `
                position: fixed;
                font-size: 2rem;
                color: #ffd700;
                text-shadow: 0 0 10px #ffd700;
                pointer-events: none;
                z-index: 9999;
                left: ${Math.random() * window.innerWidth}px;
                top: ${window.innerHeight}px;
                animation: musicalFloat 4s ease-out forwards;
            `;
            
            document.body.appendChild(noteElement);
            
            setTimeout(() => {
                noteElement.remove();
            }, 4000);
            
            // Add musical float animation
            if (!document.querySelector('#musical-float-style')) {
                const musicStyle = document.createElement('style');
                musicStyle.id = 'musical-float-style';
                musicStyle.textContent = `
                    @keyframes musicalFloat {
                        0% {
                            transform: translateY(0) rotate(0deg);
                            opacity: 1;
                        }
                        100% {
                            transform: translateY(-${window.innerHeight + 100}px) rotate(360deg);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(musicStyle);
            }
        }
    }
    
    // ========================================
    // GOLDEN RAIN EFFECT (Better than blood)
    // ========================================
    function initGoldenRain() {
        const konamiCode = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'KeyB', 'KeyA'
        ];
        let konamiIndex = 0;
        
        document.addEventListener('keydown', (e) => {
            if (e.code === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    startGoldenRain();
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        });
        
        function startGoldenRain() {
            console.log('👑 "Let there be light!" - Lucifer\'s Golden Rain 👑');
            for (let i = 0; i < 150; i++) {
                setTimeout(() => {
                    createGoldenDrop();
                }, i * 30);
            }
        }
        
        function createGoldenDrop() {
            const drop = document.createElement('div');
            drop.style.cssText = `
                position: fixed;
                width: 3px;
                height: 15px;
                background: linear-gradient(to bottom, #ffd700, #ff6600);
                border-radius: 2px;
                top: -20px;
                left: ${Math.random() * window.innerWidth}px;
                pointer-events: none;
                z-index: 9999;
                animation: goldenFall 3s linear forwards;
                box-shadow: 0 0 5px #ffd700;
            `;
            
            document.body.appendChild(drop);
            
            setTimeout(() => {
                drop.remove();
            }, 3000);
        }
        
        // Add golden fall animation
        const goldenStyle = document.createElement('style');
        goldenStyle.textContent = `
            @keyframes goldenFall {
                to {
                    transform: translateY(${window.innerHeight + 20}px) rotate(10deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(goldenStyle);
    }
    
    // Start all animations
    initAllAnimations();
    initPianoEasterEgg();
    initGoldenRain();
    
    // ========================================
    // PERFORMANCE MONITORING
    // ========================================
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`👑 Lucifer's Portfolio manifested in ${loadTime.toFixed(2)}ms 👑`);
        
        // Add performance badge (optional)
        if (loadTime < 3000) {
            console.log('⚡ "Impressive. Even I\'m surprised by this speed." - Lucifer ⚡');
        }
    });
    
    // ========================================
    // ERROR HANDLING
    // ========================================
    window.addEventListener('error', (e) => {
        console.error('👑 "Well, that\'s embarrassing..." - Lucifer Portfolio Error:', e.error);
    });
    
    window.addEventListener('unhandledrejection', (e) => {
        console.error('👑 "I hate it when promises are broken..." - Unhandled Promise:', e.reason);
    });
    
});

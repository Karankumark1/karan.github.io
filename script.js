// ========================================
// DEMON PORTFOLIO ANIMATIONS
// Interactive effects and scroll animations
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
                }, 500);
            }, 2000);
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
                        value: ["#ff4500", "#dc143c", "#8b0000", "#ff6600"]
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
                        color: "#ff4500",
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
        const elements = document.querySelectorAll('.demon-card, .project-card, .cert-card, .timeline-item, .skill-category');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in', 'visible');
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
        const navLinks = document.querySelectorAll('.demon-nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 70;
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
        const title = document.querySelector('.demon-title');
        if (title) {
            const text = title.textContent;
            title.textContent = '';
            title.style.borderRight = '3px solid #ff4500';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    title.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    // Remove cursor after typing
                    setTimeout(() => {
                        title.style.borderRight = 'none';
                    }, 1000);
                }
            };
            
            // Start typing after loading screen
            setTimeout(typeWriter, 2500);
        }
    }
    
    // ========================================
    // DEMON EYES FOLLOWING CURSOR
    // ========================================
    function initEyeFollowCursor() {
        const demonIcon = document.querySelector('.demon-icon');
        if (demonIcon && demonIcon.classList.contains('fa-user-secret')) {
            
            document.addEventListener('mousemove', (e) => {
                const rect = demonIcon.getBoundingClientRect();
                const iconCenterX = rect.left + rect.width / 2;
                const iconCenterY = rect.top + rect.height / 2;
                
                const deltaX = e.clientX - iconCenterX;
                const deltaY = e.clientY - iconCenterY;
                
                const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
                
                // Subtle rotation following cursor
                demonIcon.style.transform = `rotate(${angle * 0.05}deg)`;
            });
        }
    }
    
    // ========================================
    // GLITCH EFFECT ON HOVER
    // ========================================
    function initGlitchEffect() {
        const glitchElements = document.querySelectorAll('.demon-title, .section-title');
        
        glitchElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.animation = 'glitch 0.5s ease-in-out';
                setTimeout(() => {
                    this.style.animation = '';
                }, 500);
            });
        });
        
        // Add glitch keyframes to CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes glitch {
                0%, 100% { transform: translate(0); }
                10% { transform: translate(-2px, -2px); }
                20% { transform: translate(2px, 2px); }
                30% { transform: translate(-1px, 2px); }
                40% { transform: translate(2px, -1px); }
                50% { transform: translate(-2px, 1px); }
                60% { transform: translate(1px, -2px); }
                70% { transform: translate(-1px, -1px); }
                80% { transform: translate(2px, 1px); }
                90% { transform: translate(-2px, -2px); }
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
        initEyeFollowCursor();
        initGlitchEffect();
        initSkillBadgesAnimation();
        initProjectCardsEffect();
        initContactGlowEffect();
        initScrollToTop();
        initCursorTrail();
        createLightningEffect();
        
        console.log('🔥 Demon Portfolio Animations Initialized 🔥');
    }
    
    // ========================================
    // BLOOD RAIN EFFECT (Easter Egg)
    // ========================================
    function initBloodRain() {
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
                    startBloodRain();
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        });
        
        function startBloodRain() {
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    createBloodDrop();
                }, i * 50);
            }
        }
        
        function createBloodDrop() {
            const drop = document.createElement('div');
            drop.style.cssText = `
                position: fixed;
                width: 2px;
                height: 20px;
                background: linear-gradient(to bottom, #8b0000, #dc143c);
                top: -20px;
                left: ${Math.random() * window.innerWidth}px;
                pointer-events: none;
                z-index: 9999;
                animation: bloodFall 3s linear forwards;
            `;
            
            document.body.appendChild(drop);
            
            setTimeout(() => {
                drop.remove();
            }, 3000);
        }
        
        // Add blood fall animation
        const bloodStyle = document.createElement('style');
        bloodStyle.textContent = `
            @keyframes bloodFall {
                to {
                    transform: translateY(${window.innerHeight + 20}px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(bloodStyle);
    }
    
    // Start all animations
    initAllAnimations();
    initBloodRain();
    
    // ========================================
    // PERFORMANCE MONITORING
    // ========================================
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`⚡ Demon Portfolio loaded in ${loadTime.toFixed(2)}ms ⚡`);
        
        // Add performance badge (optional)
        if (loadTime < 3000) {
            console.log('🚀 Blazing fast load time! The demons approve! 🚀');
        }
    });
    
    // ========================================
    // ERROR HANDLING
    // ========================================
    window.addEventListener('error', (e) => {
        console.error('👹 Demon Portfolio Error:', e.error);
    });
    
    window.addEventListener('unhandledrejection', (e) => {
        console.error('👹 Unhandled Promise Rejection:', e.reason);
    });
    
});

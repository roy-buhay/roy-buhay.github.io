/* 
********** Declarations **********
*/
const EQUALIZER_COUNT = 20,
      INIT_SLIDE_INDEX = 1


let main = document.querySelector('.main'),
    containers = main.children,  
    about = document.getElementById('about'),
    aboutBtn = document.querySelector('.content-about'),
    works = document.getElementById('works'),
    worksBtn = document.querySelector('.content-works'),
    closeBtns = document.querySelectorAll('[data-dismiss]'),
    equalizerMainGrid = document.querySelector('.audio-equalizer')

// Animation related 
let slides = document.querySelector('[data-work-slides]'),
    slide = document.querySelectorAll('[data-work]'),
    slideBtns = document.querySelectorAll('[data-work-ref]'),
    currentSlide = slide[INIT_SLIDE_INDEX],
    currentSlideIndex = INIT_SLIDE_INDEX,
    slideOffset = INIT_SLIDE_INDEX


/* 
********** Functions **********
*/
function init() {
    for(const child of containers) {
        child.addEventListener('click', (e) => openModal(e))
    }

    for(const btn of closeBtns) {
        btn.addEventListener('click', (e) => {
            if (e.target.hasAttribute('data-dismiss') && 
                e.target.getAttribute('data-dismiss') == 'modal') {

                const modal = document.querySelector('.modal.show');
                modal.classList.remove('show')
                main.classList.remove('scale-down')
                
            }
        })
    }
    startAnimation('home')
}

/* Modals */
function openModal(e) {
    if (e.target.hasAttribute('data-toggle') && 
        e.target.getAttribute('data-toggle') == 'modal') {

        const modal = e.target.getAttribute('data-target');
        document.getElementsByClassName(modal)[0].classList.add('show')
        e.preventDefault();
    }
    main.classList.add('scale-down');
    
    // setTimeout(() => main.classList.add('scale-down'), 30)
}



/* Slider */
function handleSlide(index) {
    let targetSlide = slides.querySelector(`[data-work-index="${index}"]`)

    slideBtns.forEach((_, idx) => {
        idx === index - 1 ? slideBtns[index - 1].classList.add('selected') : slideBtns[idx].classList.remove('selected')
    });

    if(index > currentSlideIndex) {
        slideWidth = -targetSlide.getBoundingClientRect().height * (index - currentSlideIndex)
    } else {
        slideWidth = targetSlide.getBoundingClientRect().height * (currentSlideIndex - index)
    } 
   
    slideOffset = slideOffset + slideWidth;
	slides.style.transform = `translateY(${slideOffset}px)`;
    currentSlideIndex = index
}

/* Animation */
function startAnimation(section) {
    let animate = document.querySelectorAll('.animate'),
        animateAbout = document.querySelectorAll('.animated-about')
        animatePop = document.querySelectorAll('.animated-pop')
  
        if(section === 'home') {
            setTimeout(() => {
                animate.forEach(e => {
                    e.classList.add('start-transition')
                })
            }, 500)
        } else if (section ==='about') {
            animateAbout.forEach(e => {
                e.classList.add('start-transition')
            })
            animatePop.forEach(e => {
                e.classList.add('start-pop')
            })
        }
}

/* Audio Equalizer */
function generateEqualizer() {
    for(let i = 0; i < EQUALIZER_COUNT; i++) {
        const main = document.createElement('span')
        equalizerMainGrid.appendChild(main)
    }
}
 
init()
// generateEqualizer()


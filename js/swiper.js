
let myBlockSliders = new Swiper('.block-slider-lifts', {
	// Стрелки
	navigation: {
		nextEl: document.querySelectorAll('.swiper-button-next')[0],
		prevEl:  document.querySelectorAll('.swiper-button-prev')[0],
	},
	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		
		// Буллеты
		type: 'bullets',
		clickable: true,
		// Динамические буллеты
		dynamicBullets: true,
		
	},

    simulateTouch: false,

    autoHeight: true,

    slidesPerView: 1,

    spaceBetween: 25,

    initialSlide: 0,

	slidesPerColumn: 1,

    slideToClickedSlide: false,

    loop: true,

	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	freeMode: true,
	// Скорость
	speed: 800,

	// Вертикальный слайдер
	direction: 'horizontal',

    // zoom: {
    //     maxRatio: 5,

    //     minRatio: 1,
    // },

    breakpoints: {
        320: {
            		slidesPerView: 1,
            	},
            	526: {
            		slidesPerView: 2,
            	},
            	992: {
            		slidesPerView: 3,
            	},
				1440: {
					slidesPerView: 4	
				},

    },
    // Доступность
	a11y: {
		// Включить/выключить
		enabled: true,
		// Сообщения
		prevSlideMessage: 'Предыдущий слайд',
		nextSlideMessage: 'Следующий слайд',
		firstSlideMessage: 'Это первый слайд',
		lastSlideMessage: 'Это последний слайд',
		paginationBulletMessage: 'Переход к {{index}} слайд',
		notificationClass: 'swiper-notification',
		containerMessage: '',
		containerRoleDescriptionMessage: '',
		itemRoleDescriptionMessage: '',
		// и т.д.
	},

	on: {
		
		init: function() {
				checkArrow(0);
		}, 
		resize: function () {
				checkArrow(0);
		}
	  },
});



let myBlockSliders3 = new Swiper('.block-slider-corporation', {
	// Стрелки
	navigation: {
		nextEl: document.querySelectorAll('.swiper-button-next')[1],
		prevEl:  document.querySelectorAll('.swiper-button-prev')[1],
	},
	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		
		// Буллеты
		type: 'bullets',
		clickable: true,
		// Динамические буллеты
		dynamicBullets: true,
		
	},

    simulateTouch: false,

    autoHeight: true,

    slidesPerView: 1,

    spaceBetween: 25,

    initialSlide: 0,

	slidesPerColumn: 1,

    slideToClickedSlide: false,

    loop: true,

	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	freeMode: true,
	// Скорость
	speed: 800,

	// Вертикальный слайдер
	direction: 'horizontal',

    // zoom: {
    //     maxRatio: 5,

    //     minRatio: 1,
    // },

    breakpoints: {
        320: {
            		slidesPerView: 1,
            	},
            	526: {
            		slidesPerView: 2,
            	},
            	992: {
            		slidesPerView: 3,
            	},
				1440: {
					slidesPerView: 4	
				},

    },
    // Доступность
	a11y: {
		// Включить/выключить
		enabled: true,
		// Сообщения
		prevSlideMessage: 'Предыдущий слайд',
		nextSlideMessage: 'Следующий слайд',
		firstSlideMessage: 'Это первый слайд',
		lastSlideMessage: 'Это последний слайд',
		paginationBulletMessage: 'Переход к {{index}} слайд',
		notificationClass: 'swiper-notification',
		containerMessage: '',
		containerRoleDescriptionMessage: '',
		itemRoleDescriptionMessage: '',
		// и т.д.
	},

	on: {
		
		init: function() {
				checkArrow(1);
		}, 
		resize: function () {
				checkArrow(1);
		}
	  },
});


let myImageSlider = new Swiper('.image-slider-works', {
	// Стрелки
	navigation: {
		nextEl: document.querySelectorAll('.swiper-button-next')[2],
		prevEl:  document.querySelectorAll('.swiper-button-prev')[2],
	},
	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		
		// Буллеты
		type: 'bullets',
		clickable: true,
		// Динамические буллеты
		// dynamicBullets: true,
	},

    simulateTouch: false,

    autoHeight: true,

    slidesPerView: 1,

    spaceBetween: 22,

    initialSlide: 1,

    slideToClickedSlide: false,

    loop: true,

    loopedSlides: 3,

    freeMode: true,

    // zoom: {
    //     maxRatio: 5,

    //     minRatio: 1,
    // },

    breakpoints: {
        320: {
            		slidesPerView: 1,
            	},
            	526: {
            		slidesPerView: 2,
            	},
            	992: {
            		slidesPerView: 3,
            	},
    },
    // Доступность
	a11y: {
		// Включить/выключить
		enabled: true,
		// Сообщения
		prevSlideMessage: 'Предыдущий слайд',
		nextSlideMessage: 'Следующий слайд',
		firstSlideMessage: 'Это первый слайд',
		lastSlideMessage: 'Это последний слайд',
		paginationBulletMessage: 'Переход к {{index}} слайд',
		notificationClass: 'swiper-notification',
		containerMessage: '',
		containerRoleDescriptionMessage: '',
		itemRoleDescriptionMessage: '',
		// и т.д.
	},

	on: {
		
		init: function() {
				checkArrow(2);
		}, 
		resize: function () {
				checkArrow(2);
		}
	  },
});


let myImageSlider2 = new Swiper('.image-slider-partners', {
	// Стрелки
	navigation: {
		nextEl: document.querySelectorAll('.swiper-button-next')[3],
		prevEl:  document.querySelectorAll('.swiper-button-prev')[3],
	},
	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		
		// Буллеты
		type: 'bullets',
		clickable: true,
		// Динамические буллеты
		// dynamicBullets: true,
	},

    simulateTouch: false,

    autoHeight: false,

    slidesPerView: 4,

    spaceBetween: 25,

    initialSlide: 0,

	slidesPerColumn: 1,

    slideToClickedSlide: false,

    loop: false,

	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	freeMode: true,
	// Скорость
	speed: 800,

	// Вертикальный слайдер
	direction: 'horizontal',

    // zoom: {
    //     maxRatio: 5,

    //     minRatio: 1,
    // },

    breakpoints: {
        320: {
            		slidesPerView: 1,
					slidesPerColumn: 1,
					loop: true,

            	},
            	526: {
            		slidesPerView: 2,
					autoHeight: true,
					loop: true,
            	},
				768: {
					slidesPerView: 3,
					autoHeight: true,
					loop: true,
				},
            	992: {
            		slidesPerView: 2.5,
					slidesPerColumn: 2,

					autoHeight: false,
					loop: false,
            	},
				1440: {
					slidesPerView: 4,
						slidesPerColumn: 2,
					loop: false,
					autoHeight: false,
				},
    },
    // Доступность
	a11y: {
		// Включить/выключить
		enabled: true,
		// Сообщения
		prevSlideMessage: 'Предыдущий слайд',
		nextSlideMessage: 'Следующий слайд',
		firstSlideMessage: 'Это первый слайд',
		lastSlideMessage: 'Это последний слайд',
		paginationBulletMessage: 'Переход к {{index}} слайд',
		notificationClass: 'swiper-notification',
		containerMessage: '',
		containerRoleDescriptionMessage: '',
		itemRoleDescriptionMessage: '',
		// и т.д.
	},

	on: {
		
		init: function() {
				checkArrow(3);
		}, 
		resize: function () {
				checkArrow(3);
		}
	  },
});



let myImageSlider3 = new Swiper('.image-slider-documents', {
	// Стрелки
	navigation: {
		nextEl: document.querySelectorAll('.swiper-button-next')[4],
		prevEl:  document.querySelectorAll('.swiper-button-prev')[4],
	},
	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		
		// Буллеты
		type: 'bullets',
		clickable: true,
		// Динамические буллеты
		// dynamicBullets: true,
	},

    simulateTouch: false,

    autoHeight: true,

    slidesPerView: 1,

    spaceBetween: 35,

    initialSlide: 0,

	slidesPerColumn: 1,

    slideToClickedSlide: false,

    loop: true,

	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	freeMode: false,
	// Скорость
	speed: 800,

	// Вертикальный слайдер
	direction: 'horizontal',

    // zoom: {
    //     maxRatio: 5,

    //     minRatio: 1,
    // },

    breakpoints: {
        320: {
            		slidesPerView: 1,
            	},
            	526: {
            		slidesPerView: 3,
            	},
            	992: {
            		slidesPerView: 5,
				
            	},
    },
    // Доступность
	a11y: {
		// Включить/выключить
		enabled: true,
		// Сообщения
		prevSlideMessage: 'Предыдущий слайд',
		nextSlideMessage: 'Следующий слайд',
		firstSlideMessage: 'Это первый слайд',
		lastSlideMessage: 'Это последний слайд',
		paginationBulletMessage: 'Переход к {{index}} слайд',
		notificationClass: 'swiper-notification',
		containerMessage: '',
		containerRoleDescriptionMessage: '',
		itemRoleDescriptionMessage: '',
		// и т.д.
	},

	on: {
		
		init: function() {
				checkArrow(4);
		}, 
		resize: function () {
				checkArrow(4);
		}
	  },
});




let myBlockSliders2 = new Swiper('.block-slider-suitableFor', {

	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		
		// Буллеты
		type: 'bullets',
		clickable: true,
		// Динамические буллеты
		// dynamicBullets: true,
		
	},

    simulateTouch: false,

    autoHeight: false,

    slidesPerView: 1,

    spaceBetween: 20,

	watchOverFlow: true,

	slidesPerColumn: 1,

    slideToClickedSlide: false,

    loop: false,

	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	freeMode: false,
	// Скорость
	speed: 800,

	// Вертикальный слайдер
	direction: 'horizontal',

    // zoom: {
    //     maxRatio: 5,

    //     minRatio: 1,
    // },

    breakpoints: {
       			 320: {
					autoHeight: true,
            	},
            	526: {
            		slidesPerView: 2,
            	},
            	992: {
            		slidesPerView: 4,
					slidesPerColumn: 2,
					
            	},
				1440: {
					slidesPerView: 4,
					slidesPerColumn: 2,
				},

    },
    

	on: {
		
		init: function() {
				checkPags();
		}, 
		resize: function () {
				checkPags();
		}
	  },
});



function checkArrow(i) {
	let swiperPrev = document.querySelectorAll('.swiper-button-prev')[i];
	let swiperNext = document.querySelectorAll('.swiper-button-next')[i];
	if ( window.innerWidth > 990  ) {
//	  console.log('Success', window.innerWidth);
	  swiperPrev.style.display = 'block';
	  swiperNext.style.display = 'block';
	} else {
	  swiperPrev.style.display = 'none';
	  swiperNext.style.display = 'none';
	}
  }

  function checkPags() {
	  let swiperParentPag = document.querySelector('.block-slider-suitableFor');
	let swiperPag = swiperParentPag.querySelector('.swiper-pagination');
	// console.log(swiperPag);
	if ( window.innerWidth > 990  ) {
	  // console.log('Success', window.innerWidth);
	  swiperPag.style.display = 'none';
	} else {
	  swiperPag.style.display = 'block';
	}
  }
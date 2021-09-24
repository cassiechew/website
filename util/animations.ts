// // Util/animations.ts

// import anime from 'animejs';

// export default function getAnimation(s: string) : void {
// 	switch (s) {
// 		case 'about': about(); break;
// 		case 'pink': pink(); break;
// 	}
// }

// const pink = () => {
// 	anime({
// 		targets: '.pink-box-1',
// 		keyframes: [
// 			{translateY: -150},
// 			{translateX: -150, translateY: 0},
// 			{translateX: 0},
// 		],
// 		loop: true,
// 		easing: 'easeOutElastic(1, .4)',
// 		duration: 3000,
// 	});
// 	anime({
// 		targets: '.down-pink-box-1',
// 		keyframes: [
// 			{translateY: 150},
// 			{translateX: -150, translateY: 0},
// 			{translateX: 0},
// 		],
// 		loop: true,
// 		easing: 'easeOutElastic(1, .4)',
// 		duration: 3000,
// 	});
// 	anime({
// 		targets: '.pink-box-2',
// 		keyframes: [
// 			{translateY: -150},
// 			{translateX: 150, translateY: 0},
// 			{translateX: 0},
// 		],
// 		loop: true,
// 		easing: 'easeOutElastic(1, .4)',
// 		duration: 3000,
// 	});
// 	anime({
// 		targets: '.down-pink-box-2',
// 		keyframes: [
// 			{translateY: 150},
// 			{translateX: 150, translateY: 0},
// 			{translateX: 0},
// 		],
// 		loop: true,
// 		easing: 'easeOutElastic(1, .4)',
// 		duration: 3000,
// 	});
// };

// const about = () => {
// 	anime({
// 		targets: '.title',
// 		opacity: [0, 100],
// 		delay: 500,
// 		easing: 'easeInOutExpo',
// 		duration: 3000,
// 	});
// 	anime({
// 		targets: '.job',
// 		opacity: [0, 100],
// 		delay: 1000,
// 		easing: 'easeInOutExpo',
// 		duration: 3000,
// 	});
// 	anime({
// 		targets: '.lang',
// 		opacity: [0, 100],
// 		delay: 1500,
// 		easing: 'easeInOutExpo',
// 		duration: 3000,
// 	});
// 	anime({
// 		targets: '.game',
// 		opacity: [0, 100],
// 		delay: 2000,
// 		easing: 'easeInOutExpo',
// 		duration: 3000,
// 	});
// 	anime({
// 		targets: '.hobb',
// 		opacity: [0, 100],
// 		delay: 2500,
// 		easing: 'easeInOutExpo',
// 		duration: 3000,
// 	});
// 	anime({
// 		targets: '.morphing .polymorph',
// 		points: [
// 			{value: [
// 				'70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
// 				'70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369',
// 			],
// 			},
// 			{value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369'},
// 			{value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369'},
// 			{value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369'},
// 		],
// 		easing: 'easeOutQuad',
// 		duration: 2000,
// 		loop: true,
// 	});
// };

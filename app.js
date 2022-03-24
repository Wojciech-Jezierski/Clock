const toggler1 = document.querySelector('.toggler-first');
const toggler2 = document.querySelector('.toggler-second');
const secondArrow = document.querySelector('.second');
const minuteArrow = document.querySelector('.minute');

toggler1.addEventListener("click", () => {
    toggler1.classList.toggle('toggler-change');

    if (secondArrow.style.visibility === "hidden") {
        secondArrow.style.visibility = "visible";
    } else {
        secondArrow.style.visibility = "hidden";
    }
})

toggler2.addEventListener("click", () => {
    toggler2.classList.toggle('toggler-change');
    if (minuteArrow.style.visibility === "hidden") {
        minuteArrow.style.visibility = "visible";
    } else {
        minuteArrow.style.visibility = "hidden";
    }
})


const hour = document.querySelector('.hour-btn');
const minute = document.querySelector('.minute-btn');

let deg = 0;
let degMin = 90;
addBorder();

hour.addEventListener("click", () => {
    sumHour();
    const arrow = document.querySelector('.hour');
    arrow.style.transform = `rotate(${deg + 'deg'})`;
    addBorder();

    if (deg >= 360) {
        deg = 0;
    }
    
    if (b > 4.7595865305) {
        clear();
        b = -1;
    }
    renderHourBorder();
    sumCanvasHour();
})

minute.addEventListener("click", () => { 
    sumMinute();
    const arrow = document.querySelector('.minute');
    arrow.style.transform = `rotate(${degMin + 'deg'})`;
    addBorder();
})

function sumHour() {
    return deg += 30;
}

function sumMinute() {
    return degMin += 30;
}


function addBorder() {
    const circle1 = document.querySelector('.circle-1');
    const circle2 = document.querySelector('.circle-2');
    const circle3 = document.querySelector('.circle-3');
    const circle4 = document.querySelector('.circle-4');
    const circle5 = document.querySelector('.circle-5');
    const circle6 = document.querySelector('.circle-6');
    const circle7 = document.querySelector('.circle-7');
    const circle8 = document.querySelector('.circle-8');
    const circle9 = document.querySelector('.circle-9');
    const circle10 = document.querySelector('.circle-10');
    const circle11 = document.querySelector('.circle-11');
    const circle12 = document.querySelector('.circle-12');
    switch(deg) {
        case 0:
            circle12.classList.add('active');
            break;
        case 30:
            circle12.classList.remove('active');
            circle1.classList.add('active');
            break;
        case 60:
            circle1.classList.remove('active');
            circle2.classList.add('active');
            break;
        case 90:
            circle2.classList.remove('active');
            circle3.classList.add('active');
            break;
        case 120:
            circle3.classList.remove('active');
            circle4.classList.add('active');
            break;
        case 150:
            circle4.classList.remove('active');
            circle5.classList.add('active');
            break;
        case 180:
            circle5.classList.remove('active');
            circle6.classList.add('active');
            break;
        case 210:
            circle6.classList.remove('active');
            circle7.classList.add('active');
            break;
        case 240:
            circle7.classList.remove('active');
            circle8.classList.add('active');
            break;
        case 270:
            circle8.classList.remove('active');
            circle9.classList.add('active');;
            break;
        case 300:
            circle9.classList.remove('active');
            circle10.classList.add('active');;
            break;
        case 330:
            circle10.classList.remove('active');
            circle11.classList.add('active');;
            break;
        case 360:
            circle11.classList.remove('active');
            circle12.classList.add('active');
            break;
    }
}


let b = -1;
var canvas = document.getElementById("canvas");

		var ctx = canvas.getContext("2d");

        function sumCanvasHour() {
            return b += 0.5235987755;
        }


		function renderHourBorder() {
            ctx.strokeStyle = '#756a9e';
		    ctx.lineWidth = 4;
			ctx.beginPath();
			ctx.arc(174,174,174, -1.5, b);
			ctx.stroke();
		}

        function clear() {
            ctx.beginPath();
            ctx.clearRect(0,0,390,390);
            ctx.closePath();
        }
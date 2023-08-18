import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const inpDate = document.querySelector(`input[type="text"]`);
const btn = document.querySelector(`[data-start]`);
const elem = {
    days: document.querySelector(`[data-days]`),
    hours: document.querySelector(`[data-hours]`),
    minutes: document.querySelector(`[data-minutes]`),
    seconds: document.querySelector(`[data-seconds]`)
}

let timeEnd;
let timeNow;
let differense;
btn.disabled = "disabled";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        timeEnd = selectedDates[0].getTime();
        timeNow = Date.now();
        differense = (convertMs(timeEnd - timeNow));
        if (timeEnd < timeNow) {
            Notiflix.Notify.failure('Please choose a date in the future');
        }
        if (timeEnd > timeNow) {
            btn.disabled = false;
        }
    },
};

flatpickr(inpDate, options);

btn.addEventListener(`click`, handlerClick)

function updateTimer(timeDifference) {
    elem.days.textContent = zeroToTime(timeDifference.days);
    elem.hours.textContent = zeroToTime(timeDifference.hours);
    elem.minutes.textContent = zeroToTime(timeDifference.minutes);
    elem.seconds.textContent = zeroToTime(timeDifference.seconds);
}

function handlerClick() {
    const id = setInterval(() => {
        const remainingTime = timeEnd - Date.now();
        updateTimer(convertMs(remainingTime));
        if (remainingTime <= 0) {
            clearInterval(id);
            updateTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
    }, 1000)
}

function zeroToTime(value) {
    return value.toString().padStart(2, `0`)
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
}

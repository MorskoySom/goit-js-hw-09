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

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

        console.log(selectedDates[0]);
        timeEnd = selectedDates[0].getTime();
        timeNow = new Date().getTime();
        differense = (convertMs(timeEnd - timeNow));
        if (timeEnd < timeNow) {
            alert("Please choose a date in the future");
        }
        elem.days.textContent = differense.days;
        elem.hours.textContent = differense.hours;
        elem.minutes.textContent = differense.minutes;
        elem.seconds.textContent = differense.seconds;
    },
};
flatpickr(inpDate, options);



function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}



// Notiflix.Notify.success('Sol lucet omnibus');
// Notiflix.Notify.failure('Qui timide rogat docet negare');
// Notiflix.Notify.warning('Memento te hominem esse');
// Notiflix.Notify.info('Cogito ergo sum');

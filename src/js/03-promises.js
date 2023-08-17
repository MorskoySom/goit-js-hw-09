import Notiflix from "notiflix";
const form = document.querySelector('.form');
const elem = {
  delay: form.querySelector('input[name="delay"]'),
  step: form.querySelector('input[name="step"]'),
  amount: form.querySelector('input[name="amount"]'),
  btn: form.querySelector('button')
}
form.addEventListener('submit', handlerSubmit);
function handlerSubmit(event) {
  event.preventDefault(); // +
  const inAmount = Number(elem.amount.value);
  const inputDelay = Number(elem.delay.value);
  const inputStep = Number(elem.step.value);
  generatePromises(inAmount, inputDelay, inputStep);
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
function generatePromises(inAmount, inputDelay, inputStep) {
  const promises = [];
  for (let i = 0; i < inAmount; i++) {
    const currentDelay = inputDelay + i * inputStep;
    const position = i + 1;
    const promise = createPromise(position, currentDelay);
    promises.push(promise);
  }
  Promise.all(promises)
    .then(results => {
      for (const result of results) {
        console.log(result);
      }
    })
    .catch(error => {
      console.error(error);
    });
}






// import Notiflix from "notiflix";

// const form = document.querySelector('.form');
// const elem = {
//   delay: form.querySelector('input[name="delay"]'),
//   step: form.querySelector('input[name="step"]'),
//   amount: form.querySelector('input[name="amount"]'),
//   btn: form.querySelector('button')
// }

// elem.btn.addEventListener('click', handlerClick);

// function handlerClick() {
//   const inAmount = Number(elem.amount.value);
//   const inputDelay = Number(elem.delay.value);
//   const inputStep = Number(elem.step.value);
//   // generatePromises(inAmount, inputDelay, inputStep)
//   console.log(createPromise(0, inputDelay))
// }

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(`Promise ${position} resolved after ${delay} ms`);
//         Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       } else {
//         reject(`Promise ${position} rejected after ${delay} ms`);
//         Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//       }
//     }, delay);
//   });
// }

// function generatePromises(inAmount, inputDelay, inputStep) {
//   const promises = [];
//   for (let i = 0; i < inAmount; i++) {
//     const currentDelay = inputDelay + i * inputStep;
//     const position = i + 1;
//     const promise = new Promise(resolve => {
//       setTimeout(() => {
//         resolve(createPromise(position, currentDelay));
//       }, currentDelay);
//     });
//     promises.push(promise);
//   }
// }






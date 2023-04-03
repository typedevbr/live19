const ratingNumbersDOM = document.querySelectorAll('.card__rating-number')
const mainCardDOM = document.querySelector('.card--main')
const thankyouCardDOM = document.querySelector('.card--thank-you')
const resultValueDOM = document.querySelector('.card__result-value')

let activeRatingNumber;

function selectRating(number) {
  const selectedRatingNumberDOM = ratingNumbersDOM[number-1]
  selectedRatingNumberDOM.classList.add('card__rating-number--active')
  
  if(activeRatingNumber) {
    const activeRatingDOM = ratingNumbersDOM[activeRatingNumber-1]
    activeRatingDOM.classList.remove('card__rating-number--active')
  }

  activeRatingNumber = number;
}

function submit() {
  if(!activeRatingNumber) return;
  
  mainCardDOM.classList.add('hide')
  thankyouCardDOM.classList.remove('hide')

  resultValueDOM.textContent = activeRatingNumber;
}
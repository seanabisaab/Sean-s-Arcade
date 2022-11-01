const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

document.addEventListener('DOMContentLoaded', () => {
const cardArray = [
    {
      name: 'viktor',
      img: 'img/viktor.png'
    },
    {
      name: 'ziggs',
      img: 'img/ziggs.png'
    },
    {
      name: 'veigar',
      img: 'img/veigar.png'
    },
    {
      name: 'ryze',
      img: 'img/ryze.png'
    },
    {
      name: 'cass',
      img: 'img/cass.png'
    },
    {
      name: 'fizz',
      img: 'img/fizz.png'
    },
    {
      name: 'viktor',
      img: 'img/viktor.png'
    },
    {
      name: 'ziggs',
      img: 'img/ziggs.png'
    },
    {
      name: 'veigar',
      img: 'img/veigar.png'
    },
    {
      name: 'ryze',
      img: 'img/ryze.png'
    },
    {
      name: 'cass',
      img: 'img/cass.png'
    },
    {
      name: 'fizz',
      img: 'img/fizz.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'img/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'img/blank.png')
      cards[optionTwoId].setAttribute('src', 'img/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'img/correct.png')
      cards[optionTwoId].setAttribute('src', 'img/correct.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'img/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
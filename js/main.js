//global variables
//Information variables
var playerTotal = 0,
    dealerTotal = 0,
    playerCards = [],
    dealerCards = [],
    inPlay = []
//DOM variables
var startGame = document.getElementById("startGame"),
	inGame = document.getElementById("inGame"),
	winner = document.getElementById("winner"),
	loser = document.getElementById("loser"),
	dealerCardsDom = document.getElementById("dealerCards"),
	playerCardsDom = document.getElementById("myCards"),
	domReset = document.getElementById("playAgain"),
  faceDown = document.getElementById("faceDown"),
  tie = document.getElementById('tie')
 //Card Values
var cards = [
  {
    cardValue: 2,
    face: "img/cards/2C.png",
  },
  {
    cardValue: 2,
    face: "img/cards/2H.png",
  },
  {
    cardValue: 2,
    face: "img/cards/2S.png",
  },
  {
    cardValue: 2,
    face: "img/cards/2D.png",
  },
  {
    cardValue: 3,
    face: "img/cards/3C.png",
  },
  {
    cardValue: 3,
    face: "img/cards/3H.png",
  },
  {
    cardValue: 3,
    face: "img/cards/3S.png",
  },
  {
    cardValue: 4,
    face: "img/cards/4D.png",
  },
  {
    cardValue: 4,
    face: "img/cards/4C.png",
  },
  {
    cardValue: 4,
    face: "img/cards/4H.png",
  },
  {
    cardValue: 4,
    face: "img/cards/4S.png",
  },
  {
    cardValue: 4,
    face: "img/cards/4D.png",
  },
  {
    cardValue: 2,
    face: "img/cards/2C.png",
  },
  {
    cardValue: 5,
    face: "img/cards/5H.png",
  },
  {
    cardValue: 5,
    face: "img/cards/5S.png",
  },
  {
    cardValue: 5,
    face: "img/cards/5D.png",
  },
  {
    cardValue: 6,
    face: "img/cards/6C.png",
  },
  {
    cardValue: 6,
    face: "img/cards/6H.png",
  },
  {
    cardValue: 6,
    face: "img/cards/6S.png",
  },
  {
    cardValue: 6,
    face: "img/cards/6D.png",
  },
  {
    cardValue: 7,
    face: "img/cards/7C.png",
  },
  {
    cardValue: 7,
    face: "img/cards/7H.png",
  },
  {
    cardValue: 7,
    face: "img/cards/7S.png",
  },
  {
    cardValue: 7,
    face: "img/cards/7D.png",
  },
  {
    cardValue: 8,
    face: "img/cards/8C.png",
  },
  {
    cardValue: 8,
    face: "img/cards/8H.png",
  },
  {
    cardValue: 8,
    face: "img/cards/8S.png",
  },
  {
    cardValue: 8,
    face: "img/cards/8D.png",
  },
  {
    cardValue: 9,
    face: "img/cards/9C.png",
  },
  {
    cardValue: 9,
    face: "img/cards/9H.png",
  },
  {
    cardValue: 9,
    face: "img/cards/9S.png",
  },
  {
    cardValue: 9,
    face: "img/cards/9D.png",
  },
  {
    cardValue: 10,
    face: "img/cards/10C.png",
  },
  {
    cardValue: 10,
    face: "img/cards/10H.png",
  },
  {
    cardValue: 10,
    face: "img/cards/10S.png",
  },
  {
    cardValue: 10,
    face: "img/cards/10D.png",
  },
  {
    cardValue: 10,
    face: "img/cards/JC.png",
  },
  {
    cardValue: 10,
    face: "img/cards/JH.png",
  },
  {
    cardValue: 10,
    face: "img/cards/JS.png",
  },
  {
    cardValue: 10,
    face: "img/cards/JD.png",
  },
  {
    cardValue: 10,
    face: "img/cards/QC.png",
  },
  {
    cardValue: 10,
    face: "img/cards/QH.png",
  },
  {
    cardValue: 10,
    face: "img/cards/QS.png",
  },
  {
    cardValue: 10,
    face: "img/cards/QD.png",
  },
  {
    cardValue: 10,
    face: "img/cards/KC.png",
  },
  {
    cardValue: 10,
    face: "img/cards/KD.png",
  },
  {
    cardValue: 10,
    face: "img/cards/KS.png",
  },
  {
    cardValue: 10,
    face: "img/cards/KD.png",
  },
  {
    cardValue: aceValue(),
    face: "img/cards/AC.png",
  },
  {
    cardValue: aceValue(),
    face: "img/cards/AH.png",
  },
  {
    cardValue: aceValue(),
    face: "img/cards/AS.png",
  },
  {
    cardValue: aceValue(),
    face: "img/cards/AD.png",
  },
]
//Sets value of ACE
function aceValue() {
  if(playerTotal < 11) {
    return 11
  }
  else {
    return 1
  }
}
//Deals the cards to player and dealer
function dealCards() {

var card = []
for(i = 0; i < 4; i++){
    var c = Math.floor(Math.random() * cards.length)
        if(i % 2 === 0) {
          playerCards.push(cards[c])
          playerTotal += Number(cards[c].cardValue)
        }else {
          dealerCards.push(cards[c])
          dealerTotal += Number(cards[c].cardValue)
        }
        inPlay.push(cards[c])
        console.log(inPlay)
        cards.splice(c, 1)
    }
renderCards()
}

//Displays cards on page
function renderCards() {
  //creates players cards
  for(i = 0; i < playerCards.length; i++) {
    var img = document.createElement("img")
    img.src = playerCards[i].face
    playerCardsDom.appendChild(img)
    playerCardsDom.className = "animated fadeInLeft"
  }
  //creates dealers cards
    var img = document.createElement("img")
    img.src = dealerCards[1].face
    dealerCardsDom.appendChild(img);
    var img = document.createElement("img")
    img.src = "img/cards/card_back.png"
    dealerCardsDom.appendChild(img);
    dealerCardsDom.className = "animated fadeInRight"
    //hides controls

    startGame.style.display = "none";
    inGame.style.display = "block";
}
//This is the hit button
function addCard() {
  //Generates a random card from the array and adds it to your hand
  var c = Math.floor(Math.random() * cards.length)
          playerCards.push(cards[c])
          playerTotal += cards[c].cardValue
          //Renders new card to DOM
          var img = document.createElement("img")
          img.src = playerCards[playerCards.length - 1].face
          playerCardsDom.appendChild(img)
          //Removes it from deck and stores it
          inPlay.push(cards[c])
          console.log(inPlay)
          cards.splice(c, 1)
          console.log(cards.length)
          //Checks to see if play wins automaticaly wins, or loses
          if(playerTotal > 21) {
            inGame.style.display = "none"
            startGame.style.display = "none"
            loser.style.display = "block"
            domReset.style.display = "block"
          }
          else if(playerTotal === 21) {
            inGame.style.display = "none"
            startGame.style.display = "none"
            winner.style.display = "block"
            domReset.style.display = "block"
          }
}
//Dealer Turn runs when Stay is clicked
function dealerTurn() {
  var back = document.querySelectorAll('img')
  back[1].src = dealerCards[0].face
	while(dealerTotal < 19 && dealerTotal < playerTotal ) {
    //Generates random card to be added to dealers hand
		var c = Math.floor(Math.random() * cards.length)
          dealerCards.push(cards[c])
          dealerTotal += cards[c].cardValue
          //Renders the card to the DOM
          var img = document.createElement("img")
          img.src = dealerCards[dealerCards.length - 1].face
          dealerCardsDom.appendChild(img)
          //takes card out of deck and stores it
          inPlay.push(cards[c])
          console.log(inPlay)
          cards.splice(c, 1)
          console.log(cards.length)
          //Checks to see if the dealer wins or loses 
	}if(dealerTotal == playerTotal) {
        inGame.style.display = "none"
        startGame.style.display = "none"
        tie.style.display = "block"
        domReset.style.display = "block"
  }
  else if(dealerTotal > 21) {
		    inGame.style.display = "none"
        startGame.style.display = "none"
        winner.style.display = "block"
        domReset.style.display = "block"
	} else if(dealerTotal < playerTotal) {
		inGame.style.display = "none"
        startGame.style.display = "none"
        winner.style.display = "block"
        domReset.style.display = "block"
	} else {
		    inGame.style.display = "none"
        startGame.style.display = "none"
        loser.style.display = "block"
        domReset.style.display = "block"		
	}

}
//Play again button
function playAgain() {
//puts cards back in deck
  for(i = 0; i < inPlay.length; i++) {
    cards.push(inPlay[i]);
  }
  //resets the DOM to blank screen
	startGame.style.display = "block"
	dealerCardsDom.innerHTML = ""
	playerCardsDom.innerHTML = ""
	domReset.style.display = "none"
  winner.style.display = "none"
  loser.style.display = "none"
  tie.style.display = "none"
  //sets all variables back to their original value of nothing
  playerCards = []
  dealerCards = []
  inPlay = []
  playerTotal = 0
  dealerTotal = 0
}

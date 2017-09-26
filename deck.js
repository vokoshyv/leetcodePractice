/*

We shall be creating a deck of cards



*/



class Deck {
  constructor() {
    this.storage = [];
  }

  size() {

  }

  shuffle() {

  }

  addCardToTop(card) {

  }

  addCardToBottom(card) {

  }

  addCardRandomly(card) {

  }

  removeCardFromTop() {

  }

  removeCardFromBottom() {

  }

  removeRandomCard() {

  }
}

class Card {
  constructor() {
    this.faceUp = false;
  }
}

class FrenchCard extends Card {
  constructor(suit, rank) {
    super();
    this.suit = suit;
    this.rank = rank;
  }
}

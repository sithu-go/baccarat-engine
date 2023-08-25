export = BaccaratGameEngine;
/**
 * Plays a baccarat game according to Punto Banco rules
 */
declare class BaccaratGameEngine {
    /**
     * Can another game be played without creating another deck.
     */
    get isBurnNeeded(): boolean;
    resultsEngine: BaccaratResultsEngine;
    shoe: Shoe;
    /**
     * Performs a burn operation
     * @return {Card} Burn indicator card
     * @return {Card[]} Burn cards
     */
    burnCards(): Card;
    /**
     * Performs a game
     * @return {Hand} Game play hand data
     */
    dealGame(): Hand;
}
import BaccaratResultsEngine = require("../baccaratResultsEngine.js");
import Shoe = require("../shoe.js");
import Hand = require("../hand.js");

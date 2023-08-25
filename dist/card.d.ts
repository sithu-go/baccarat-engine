export = Card;
/**
 * Represents a single playing card.
 */
declare class Card {
    /**
     *
     * @param {String} suit The suit of the card
     * @param {String} value The value of the card
     */
    constructor(suit?: string, value?: string);
    suit: string;
    value: string;
    /**
     * Returns a string representation of this card.
     * @return {String} The string representation of the card.
     */
    toString(): string;
}
declare namespace Card {
    let DefaultValues: string[];
    let DefaultSuits: string[];
    namespace StandardSuitUnicodeStrings {
        let heart: string;
        let diamond: string;
        let club: string;
        let spade: string;
    }
}

export = GameResult;
/**
 * @property {string} outcome The outcome of the game
 * @property {string} natural The status of a natural bet on this game
 * @property {string} pair The status of the pair bet on this game
 */
declare class GameResult {
}
declare namespace GameResult {
    let Tie: string;
    let Banker: string;
    let Player: string;
    let PlayerNatural8: string;
    let PlayerNatural9: string;
    let BankerNatural8: string;
    let BankerNatural9: string;
    let NoNatural: string;
    let PlayerPair: string;
    let BankerPair: string;
    let BothPair: string;
    let NoPair: string;
}

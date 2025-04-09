import { GameStatuses } from "./game-statuses.js";

export class Game {
  #gameStatus = GameStatuses.PENDING;

  get status() {
    return this.#gameStatus;
  }
}

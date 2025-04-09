import { Game } from "./game.js";
import { GameStatuses } from "./GAME_STATUSES.js";

describe("game", () => {
  it("shuld have Pending status after creating", () => {
    const game = new Game();
    expect(game.status).toBe(GameStatuses.PENDING);
  });

  it("shuld have InProgress status after start", () => {
    const game = new Game();
    game.start();
    expect(game.status).toBe(GameStatuses.IN_PROGRESS);
  });

  it("google shuld be on the Grid after start", () => {
    const game = new Game();
    game.start();
    expect(game.googlePosition.x).toBeLessThan(game.gridSize.columnsCount);
    expect(game.googlePosition.x).toBeGreaterThanOrEqual(0);
    expect(game.googlePosition.y).toBeLessThan(game.gridSize.rowsCount);
    expect(game.googlePosition.y).toBeGreaterThanOrEqual(0);
  });

  it("google shuld be in the Grid but in new position after jump", async () => {
    const game = new Game();
    game.googleJumpInterval = 1;
    game.start();
    for (let i = 0; i < 100; i++) {
      const prevGooglePosition = game.googlePosition;
      await delay(1);
      const currentGooglePosition = game.googlePosition;
      console.log(currentGooglePosition);
      console.log(prevGooglePosition);

      expect(prevGooglePosition).not.toEqual(currentGooglePosition);
    }
  });
});

const delay = (time) => new Promise((res) => setTimeout(res, time));

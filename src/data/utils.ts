import gamecodes from "./gamecodes.json";
import { JSDOM } from "jsdom";

type ActiveGame = {
  codename: string;
  players: number;
  name?: string;
};

const gameNames = gamecodes as Record<string, string>;

function getTrStrings(html: string): string[] {
  // Parse HTML to easy pick the table rows
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const activePlayersTable = document.querySelectorAll("tr");
  const trStrings: string[] = [];

  activePlayersTable.forEach((element) => {
    // trString = '\n            bleach2USds\n            1\n        '
    const trString = element.textContent;

    // Filter for "bleach" the common word in game codenames.
    if (trString?.includes("bleach")) {
      trStrings.push(trString);
    }
  });

  return trStrings;
}

function getActiveGame(trString: string): ActiveGame | null {
  // trString is '\n            bleach2USds\n            1\n        '
  // Applying .match to get 'bleach2USds\n            1'
  const valueString = trString.match(/\w*\n\s+\d+/g)?.toString();

  // Then, we split the value to [codename, players]
  const value = valueString?.split(/\n\s+/);

  if (value && gameNames[value[0]]) {
    return {
      codename: value[0],
      players: parseInt(value[1]),
      name: gameNames[value[0]],
    };
  }

  return null;
}

function getActiveGames(html: string) {
  const trStrings = getTrStrings(html);
  const activeGames = new Set<ActiveGame>();

  trStrings.forEach((trString) => {
    const activeGame = getActiveGame(trString);
    activeGame && activeGames.add(activeGame);
  });

  return activeGames;
}

export { getActiveGame, getTrStrings, getActiveGames };

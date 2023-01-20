import gamecodes from "./gamecodes.json";

type ActiveGame = {
  codename: string;
  players: number;
  name?: string;
};

const gameNames = gamecodes as Record<string, string>;

function getActiveGame(trString: string): ActiveGame | null {
  // trString is '\n            bleach2USds\n            1\n        '
  // Applying .match to get 'bleach2USds\n            1'
  const valueString = trString.match(/\w*\n\s+\d+/g)?.toString();

  // Then, we split the value to codename, players
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

export { getActiveGame };

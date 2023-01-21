import { getActiveGame, getTrStrings, getActiveGames } from "./utils";

const html0 = `<html><head></head><body><table border="1">
<tbody><tr>
    <td>Game ID</td><td># Players</td>
</tr>
<tr>
    <td>bleach2USds</td>
    <td><center>1</center></td>
</tr>
<tr>
    <td>bleach2ds</td>
    <td><center>1</center></td>
</tr></tbody></table>
<br>
<i>Last updated: 2023-01-20 21:55:34.304967</i><br>
</body></html>`;

const htmlEmpty = `<html><head></head><body><table border="1">
<tbody><tr>
    <td>Game ID</td><td># Players</td>
</tr></tbody></table>
<br>
<i>Last updated: 2023-01-20 22:33:57.403785</i><br>
</body></html>`;

const htmlBleach2Only = `
<html>
    <table border='1'>
        <tr>
            <td>Game ID</td><td># Players</td>
        </tr>
        <tr>
            <td>bleach2USds</td>
            <td><center>1</center></td>
        </tr></table>
    <br>
    <i>Last updated: 2023-01-20 19:55:07.609420</i><br>
</html>`;

const htmlBleach1Only = `<html><head></head><body><table border="1">
<tbody><tr>
    <td>Game ID</td><td># Players</td>
</tr>
<tr>
    <td>bleach1USds</td>
    <td><center>1</center></td>
</tr></tbody></table>
<br>
<i>Last updated: 2023-01-20 23:42:40.170214</i><br>
</body></html>`;

const trStringB2USA = "\n            bleach2USds\n            1\n        ";

test("Get nothing if there are no active games", () => {
  expect(getActiveGames(htmlEmpty)).toStrictEqual(new Set());
});

test("Get Bleach 2 with 1 player", () => {
  expect(getActiveGame(trStringB2USA)).toMatchObject({
    codename: "bleach2USds",
    players: 1,
    name: "Bleach: Dark Souls DS [USA]",
  });
});

test("Get Set of Bleach 2 with 1 player", () => {
  expect(getActiveGames(htmlBleach2Only)).toStrictEqual(
    new Set([
      {
        codename: "bleach2USds",
        players: 1,
        name: "Bleach: Dark Souls DS [USA]",
      },
    ])
  );
});

test("Get Set of Bleach 2 USA and JPN with 1 player", () => {
  expect(getActiveGames(html0)).toStrictEqual(
    new Set([
      {
        codename: "bleach2USds",
        players: 1,
        name: "Bleach: Dark Souls DS [USA]",
      },
      {
        codename: "bleach2ds",
        players: 1,
        name: "Bleach: Dark Souls DS [JPN]",
      },
    ])
  );
});

test("Get Set of Bleach 1 USA with 1 player", () => {
  expect(getActiveGames(htmlBleach1Only)).toStrictEqual(
    new Set([
      {
        codename: "bleach1USds",
        players: 1,
        name: "Bleach: The Blade of Fate DS [USA]",
      },
    ])
  );
});

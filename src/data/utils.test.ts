import { getActiveGame } from "./utils";

// const html0 = `<html><head></head><body><table border="1">
// <tbody><tr>
//     <td>Game ID</td><td># Players</td>
// </tr>
// <tr>
//     <td>bleach2USds</td>
//     <td><center>1</center></td>
// </tr>
// <tr>
//     <td>bleach2ds</td>
//     <td><center>1</center></td>
// </tr></tbody></table>
// <br>
// <i>Last updated: 2023-01-20 21:55:34.304967</i><br>
// </body></html>`;

const trString0 = "\n            bleach2USds\n            1\n        ";

test("Check if can get Bleach 2 with 1 player", () => {
  expect(getActiveGame(trString0)).toMatchObject({
    codename: "bleach2USds",
    players: 1,
    name: "Bleach: Dark Souls DS [USA]"
  })
});

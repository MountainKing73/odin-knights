const BoardSize = 8;

function checkMove(move) {
  return (
    move[0] >= 0 && move[0] < BoardSize && move[1] >= 0 && move[1] < BoardSize
  );
}

const possible = [
  [-1, 2],
  [-1, -2],
  [1, 2],
  [1, -2],
  [-2, 1],
  [-2, -1],
  [2, 1],
  [2, -1],
];

function getMoves(from) {
  let moves = new Array();

  for (const move of possible) {
    const newMove = [from[0] + move[0], from[1] + move[1]];
    if (checkMove(newMove)) {
      moves.push(newMove);
    }
  }

  return moves;
}

function knightMoves(start, end) {
  let queue = new Array();
  let visited = new Array();

  queue.push({ loc: start, path: Array(start) });

  while (queue.length > 0) {
    let entry = queue.shift();
    let current = entry.loc;
    let path = entry.path;

    visited.push(current);

    if (current[0] === end[0] && current[1] === end[1]) {
      return path;
    }

    let moves = getMoves(current);

    for (const move of moves) {
      if (!(move in visited)) {
        const newPath = path.slice();
        newPath.push(move);
        queue.push({ loc: [move[0], move[1]], path: newPath });
      }
    }
  }
}

let path = knightMoves([3, 3], [4, 3]);
for (const move of path) {
  console.log(move);
}

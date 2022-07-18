function getChessboard(height, width) {
  if (
    !Number.isInteger(height) ||
    !Number.isInteger(width) ||
    width <= 0 ||
    height <= 0
  ) {
    return undefined;
  }

  let chessBoard = "";

  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      if ((i + j) % 2) chessBoard += "#";
      else chessBoard += " ";
    }
    if (i !== height) {
      chessBoard += "\n";
    }
  }

  return chessBoard;
}

getChessboard(4, 4);

module.exports = { getChessboard };

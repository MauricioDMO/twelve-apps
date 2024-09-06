export function checkWinner({ index, table }: { index: number, table: number[] }) {
  const directions = [
    [1, 0], // horizontal
    [0, 1], // vertical
    [1, 1], // diagonal
    [1, -1] // diagonal
  ]
  const player = table[index] // 1 or 2
  const row = Math.floor(index / 7) // 0 to 5
  const col = index % 7 // 0 to 6
  
  // check in all directions
  for (let [dx, dy] of directions) {
    let count = 1
    let i = row + dx
    let j = col + dy

    // check in one direction
    while (i >= 0 && i < 6 && j >= 0 && j < 7 && table[i * 7 + j] === player) {
      count++
      i += dx
      j += dy
    }

    i = row - dx
    j = col - dy

    // check in the opposite direction
    while (i >= 0 && i < 6 && j >= 0 && j < 7 && table[i * 7 + j] === player) {
      count++
      i -= dx
      j -= dy
    }

    // check if there are 4 in a row
    if (count >= 4) {
      return player
    }
  }
  return 0
}
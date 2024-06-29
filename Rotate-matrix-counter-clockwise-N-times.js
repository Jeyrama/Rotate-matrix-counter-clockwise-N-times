/*
In this challenge your mission is to 
rotate matrix counter - clockwise N-times.

So, you will have 2 inputs:
  1) matrix
  2) a number, how many times to turn it

And an output is turned matrix.

Example:
  matrix = [[1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]]
        
  times_to_turn = 1

  It should return this -
  [[4, 8, 12, 16],
  [3, 7, 11, 15],
  [2, 6, 10, 14],
  [1, 5, 9, 13]])

Note: 
  All matrices will be square. 
  Also random tests will have big numbers in input (times to turn).
*/


// Solution

function rotateAgainstClockwise(matrix, times){
  let turns = times % 4;

  if (!turns)
    return matrix;

  if (turns !== 2)
    matrix = matrix.map((row, i) => row.map((col, j) => matrix[j][i]));

  if (turns <= 2)
    matrix = matrix.reverse();

  if (turns >= 2)
    matrix = matrix.map(row => row.reverse());

  return matrix;
}

// or

function rotateAgainstClockwise(matrix, times){
  times = times % 4;

  const helper = {
    1: () =>
      matrix.map((el, iArr, arr) =>
        el.map((_, i) => arr[i][arr.length - 1 - iArr])
      ),
    2: () => matrix.reverse().map((el) => el.reverse()),
    3: () =>
      matrix.reverse().map((el, iArr, arr) => el.map((_, i) => arr[i][iArr])),
    0: () => matrix,
  };

  return helper[times]();
}
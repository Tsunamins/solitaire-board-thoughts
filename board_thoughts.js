var color = require("cli-color");

// 3 areas of concern: extra cards, cards fininshed playing, and the main playing board
// to be formal these area called "stock/waste," "foundation," and the "tableau"
// tableau is qty 1 - 7 cards with first card flipped = 28 cards
// stock waste will be 24 left over

// tableau should be sub-arrays of each playing column, not each row
let tableau_start = [["up"], ["down", "up"], ["down", "down", "up"],
                     ["down", "down", "down", "up"], ["down", "down", "down", "down", "up"],
                     ["down", "down", "down", "down", "down", "up"],
                     ["down", "down", "down", "down", "down", "up"]]

// foundtion would prob be good to have 4 subarrays to grow, maybe length specified if in another language at times
let foundation = [[],[],[],[]]

// stock can prob be just one array? or maybe 2 sub arrays for unflipped and flipped
let stock = [[], []]





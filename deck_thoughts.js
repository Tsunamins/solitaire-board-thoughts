var color = require("cli-color");


// deck:
//heart
console.log(color.red('\u2665'))
const heart = color.red('\u2665')
//diamond
console.log(color.red('\u2666'))
const diamond = color.red('\u2666')
//spade
console.log('\u2664')
const spade = '\u2664'
//club
console.log('\u2667')
const club = '\u2667'

// build suite:
const card_series = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const hearts_build = card_series.map(i => i + heart)

//or specify in advance via array
const hearts_suite = ["AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH"]

// also need symbol though, and preferably symbol as a variable not a string from an array
// so one variable per (has to be letter first):
const HA = "A" + heart
const H2 = "2" + heart
console.log(H2)
// etc then:
const hearts_with_symbol = [HA, H2]
console.log(hearts_with_symbol) // doesn't write to console properly, duh!

// so maybe for organization and ease of reading also compatability of ideas in other languages:
//maybe an object:
const hearts = {
    A: "A" + heart,
    2: "2" + heart,
    3: "3" + heart,
    4: "4" + heart,
    5: "5" + heart,
    6: "6" + heart,
    7: "7" + heart,
    8: "8" + heart ,
    9: "9" + heart,
    10: "10" + heart,
    J: "J" + heart,
    Q: "Q" + heart,
    K: "K" + heart
    
}

console.log(hearts.A)







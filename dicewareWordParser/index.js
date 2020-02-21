const fs = require('fs');
const originalDicewareList = require('./original_diceware_list.json');
// const handKeyMap = require('./keyMap.json');

// Fingers left to right 0 indexed
// Character map to finger index.
// Macbook Pro 13 inch laptop
const fingerKeyMap = require('./fingerKeyMap.json');

console.log(`Original List Length: ${originalDicewareList.length}`);

const filteredRepeatCharacterDicewareList = [];

for(let wordObject of originalDicewareList) {
    let doAddWord = true;
    let previousCharacter = null;
    const key = Object.keys(wordObject)[0];
    const word = wordObject[key];

    for(let i = 0; i < word.length; i++) {
        const character = word[i];

        if(character === previousCharacter) {
            // BAD - Repeat Character
            doAddWord = false;
        }
        else {
            previousCharacter = character;
        }
    }

    if(doAddWord) {
        filteredRepeatCharacterDicewareList.push(wordObject);
    }
}

console.log(`After 'Repeat Character' Filtered List Length: ${filteredRepeatCharacterDicewareList.length}`);

let filteredTooMuchOneHandDicewareList = filteredRepeatCharacterDicewareList; // DEV
// let filteredTooMuchOneHandDicewareList = [];

// for(let word of filteredRepeatCharacterDicewareList) {
//     let doAddWord = true;
//     let secondPreviousCharacterHand = null;
//     let previousCharacterHand = null;
    
//     for(let i = 0; i < word.length; i++) {
//         const character = word[i];
//         const characterHand = handKeyMap[character];
        
//         if(characterHand === previousCharacterHand && characterHand === secondPreviousCharacterHand) {
//             // BAD - 3 Letters with the same hand.
//             doAddWord = false;
//         }
//         else {
//             secondPreviousCharacterHand = previousCharacterHand;
//             previousCharacterHand = characterHand;
//         }
//     }    
    
//     if(doAddWord) {
//         filteredTooMuchOneHandDicewareList.push(word);
//     }
// }

// console.log(`After '3 characters on one hand.' Filtered List Length: ${filteredTooMuchOneHandDicewareList.length}`);


let filteredFingerRepeatsDicewareList = [];

for(let wordObject of filteredTooMuchOneHandDicewareList) {
    let doAddWord = true;
    let previousFingerIndex = null;
    const key = Object.keys(wordObject)[0];
    const word = wordObject[key];    
    
    for(let i = 0; i < word.length; i++) {
        const character = word[i];
        const fingerIndex = fingerKeyMap[character];
        
        if(fingerIndex === previousFingerIndex) {
            // BAD - Repeat use of same index.
            doAddWord = false;
        }
        else {
            previousFingerIndex = fingerIndex;
        }
    }    
    
    if(doAddWord) {
        filteredFingerRepeatsDicewareList.push(wordObject);
    }
}

console.log(`After 'Repeat Finger' Filtered List Length: ${filteredFingerRepeatsDicewareList.length}`);

fs.writeFile('./optimized_diceware_list.json', JSON.stringify(filteredFingerRepeatsDicewareList), () => {});
const dummyData = require('./dummydata.json');
const express = require('express');
const router = express.Router();

let difficultQuestions = [], 
    mediumQuestions = [],
    easyQuestions = [];
dummyData.forEach(elem => {
    if (elem.difficulty === "H") {
        difficultQuestions.push(elem);
    } else if (elem.difficulty === "M") {
        mediumQuestions.push(elem);
    } else {
        easyQuestions.push(elem);
    }
});

const randomize = (arr) => {
    return arr.sort(() => Math.random - 0.5);
}
const randomQuestions = (easy, med, diff) => {
    difficultQuestions = randomize(difficultQuestions);
    mediumQuestions = randomize(mediumQuestions);
    easyQuestions = randomize(easyQuestions);
    let finalQuestions = [],
        i;

    for (i = 0; i < easy; i++) {
        finalQuestions.push(easyQuestions[i])
    };
    for (i = 0; i < med; i++) {
        finalQuestions.push(mediumQuestions[i])
    };
    for (i = 0; i < diff; i++) {
        finalQuestions.push(difficultQuestions[i])
    };

    return finalQuestions;
}

router.get('/', (req, res) => {
    res.send(randomQuestions(5, 3, 2));
})

module.exports = router;
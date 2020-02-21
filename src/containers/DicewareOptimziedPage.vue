<template>
    <div class="diceware-optimized-page-container">
        <h1>Welcome To Diceware Optimized</h1>
        <h3>Diceware is a commonly used method for picking a master password.</h3>
        <h3>The method largely relies on the fact that for the average person benefits more from a longer password is better than a very complex password.</h3>
        <h1>Let's Get Started!</h1>
        <h3>1.) Pick the number of words</h3>
        <label>
            <select v-model="numberOfWords">
                <option :value="4">4</option>
                <option :value="5">5</option>
                <option :value="6">6</option>
                <option :value="7">7</option>
            </select>
        </label>
        <button @click="showRollDice()" :disabled="stage === 1">Go</button>
        <div v-show="stage === 1">
            <h3>2.) Roll All Dice</h3>
            <div class="dice-set-box">
                <div class="dice-set" v-for="(diceSet, diceSetindex) in diceSets" :key="diceSetindex">
                    Word {{ diceSetIndex + 1 }} Dice
                    <div class="die" v-for="(die, dieIndex) in diceSet" :key="dieIndex">
                        Value: {{ die }}
                    </div>
                </div>
            </div>
            <button @click="rollTheDice()">ROLL ALL DICE</button>
        </div>
    </div>
</template>

<script>
const optimizedDicewareList = require('../optimized_diceware_list.json');

export default {
    data() {
        return {
            stage: 0,
            numberOfWords: 5,
            diceSets: []
        };
    },
    watch: {
        numberOfWords: function(oldValue, newValue) {
            if(oldValue !== newValue) {
                this.stage = 0;
            }
        }
    },
    methods: {
        showRollDice() {
            this.stage = 1;
            this.diceSets = [];

            for(let i = 0; i < this.numberOfWords; i++) {
                const diceSet = [1, 1, 1, 1, 1];

                this.diceSets.push(diceSet);
            }
        },
        rollTheDice() {
            let repeatCharacters = true;
            let repeatFingers = true;
            let repeatWords = true;

            // while(repeatCharacters || repeatFingers || repeatWords) {

            // }


            for(let i = 0; i < this.diceSets.length; i++) {
                const randomInts = this.getFiveRandomInts();
                this.diceSets[i] = randomInts;
            }

            debugger;
        },
        getFiveRandomInts() {
            const randomInts = [];

            for(let i = 0; i < 5; i++) {
                const randomNumber = this.getRandomIntInclusive(1, 6);

                randomInts.push(randomNumber);
            }

            return randomInts;
        },
        getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
        }        
    }
}
</script>

<style lang="scss">
.dice-set-box {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 10px;

    .dice-set {
        // background: gray;
        box-shadow: 3px 3px black;
        border-radius: 3px;
        border: 1px solid #696969;
        margin-right: 10px;
        padding: 6px; 
    }
}

button {
    padding: 10px;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
}
</style>
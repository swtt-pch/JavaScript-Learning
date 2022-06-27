'use strict'

const poll = {
    question: "What is your favorite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4). fill(0),
    registerNewAnswer(){
        let answer;
        while(!answer){
            answer = parseInt(prompt(`${this.question} \n ${this.options.join('\n')} \n(Write option number)`))
            if(answer>3 || answer<0) answer = NaN
        }
        this.answers[answer]++
        this.displayResults();
        this.displayResults('string');
    },

    displayResults(type = 'array'){
        if(type==='array'){
            console.log(this.answers)
        } else if(type === 'string'){
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }
}

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

const data1 = [5,2,3];
const data2 = [1,5,3,9,6,1];

poll.displayResults.call({answers: data1})
poll.displayResults.call({answers: data1}, 'string')

poll.displayResults.call({answers: data2})
poll.displayResults.call({answers: data2}, 'string')
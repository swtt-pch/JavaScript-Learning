'use strict'

const greet = function(greeting){
    return function(name){
        console.log(`${greeting}, ${name}`);
    }
};

const greeterHey = greet('hey');

greeterHey('Igor');
greeterHey('Mariana');

greet('Hello')('Jonas')

const saudacao = saudando => nome => console.log(`${saudando}, ${nome}`);

const saudacaoOla = saudacao('Ola');
saudacaoOla('Igor')
// funtional programming
// Your code here
function saturdayFun(string="roller-skate"){
    return `This Saturday, I want to ${string}!`
}

function mondayWork(string="go to the office") {
    return `This Monday, I will ${string}.`
}

function wrapAdjective(string="*") {
    return function(word="special"){
        return `You are ${string}${word}${string}!`
    }
}

const Calculator = {
    add: function(a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b
    },
    multiply: function(a, b) {
        return a * b
    },
    divide: function(a, b) {
        return a / b
    }
}

const actionApplyer = function(integer, functions) {
    let a = integer
    for (let i = 0; i < functions.length; i++){
        a = functions[i](a)
    }

    return a
}
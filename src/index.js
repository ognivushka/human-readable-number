
module.exports = function toReadable(number) {

    const numbersOnes = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }

    const numbersTeens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }

    const numbersTens = { //from 20 to 99
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }

    const numbersThousands = {
        100: 'hundred',
        1000: 'thousand'
    }

    const numConv = number.toString().split('');



    if (number < 10) {
        return numbersOnes[number]
    } else if (10 <= number && number <= 19) {
        return numbersTeens[number]
    } else if (20 <= number && number <= 99) {
        const firstNumber = numbersTens[numConv[0]];
        const secondNumber = numConv[1] !== '0' ? numbersOnes[numConv[1]] : '';
        return firstNumber + (secondNumber ? " " + secondNumber : '')
    } else if (100 <= number && number <= 999) {
        const firstNumber = numbersOnes[numConv[0]];
        const secondNumber = numConv[1] === '1' ? numbersTeens[parseInt(numConv[1] + numConv[2])] : numConv[1] !== '0' ? numbersTens[numConv[1]] : '';
        const thirdNumber = numConv[2] == '0' || numConv[1] == '1' ? '': numbersOnes[numConv[2]] ;
        return firstNumber + " " + numbersThousands[100] + (secondNumber? " " + secondNumber : '') + (thirdNumber ? " " + thirdNumber : '')
    }
    }


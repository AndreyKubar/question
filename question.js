// a = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
// function flatten(arr) {
//     let ret = []
//     for(let i = 0; i < arr.length; i++) {
//         if(Array.isArray(arr[i])) {
//             ret = ret.concat(flatten(arr[i]))

//         } else {
//             ret.push(arr[i])
//         }
//     }
//     return ret
// }
// console.log(flatten(a));


// const flatten = (arr) => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
// console.log(flatten(a));


// 1.
// a = +prompt('Введите число: ', 0)
// b = +prompt('Введите степень: ', 0)

// function pow(a, b) {
//     if(b == 1) {
//         return a
//     } else {
//         return a * pow(a, b - 1)
//     }
// }



let assocArr = [];
 
assocArr[0] = new Array("", "один", "два", "три", "четыре", "пять", "шесть", "семь","восемь", "девять");
 
assocArr["d"] = new Array("десять", "одинадцать", "двенадцать", "тринадцать", "четырнадцать","пятнадцать", "шеснадцать", "семнадцать", "восемнадцать", "девятнадцать");
 
assocArr[1] = new Array("", "", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят","семьдесят", "восемьдесят", "девяносто");
 
assocArr[2] = new Array("", "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот","семьсот", "восемьсот", "девятьсот");
 
assocArr["s"] = new Array("", "одна", "две");
 
assocArr[3] = new Array("тысяч", "тысяча", "тысячи", "тысячи", "тысячи", "тысяч", "тысяч","тысяч", "тысяч", "тысяч", "");
 
 
function numToWord(number) {
 
    let resp = "",
 
        numArr = [],
 
        flag = true;
//Проверка на вводные данные
    if (number == 0) {
        return "ноль"
    }
    console.log(number);
 
 
    if (isNaN(number) || number > 100000) {
 
        return "Invalid input!";
 
    }
    console.log(number);
 
  //преобразование в массив цифр
    for (; number != 0; number = Math.floor(number / 10)) {
 
        numArr.push(number % 10);
 
    }
    console.log(numArr);
 
//ИТЕРАЦИЯ СПИСКА С КОНЦА
    for (let i = numArr.length - 1; i >= 0 ; i--) {
 
        if (flag) {
 
            if (numArr[i] == 1 && i == 1 || numArr[i] == 1 && i == 4) {
 
                flag = false;
 
            } else {
 
                resp += digitToWord(i, numArr[i], 0);
 
            }
            console.log(resp);
 
        } else {
 
            resp += digitToWord("d", numArr[i], i);
 
            flag = true;
 
        }
 
    }
    console.log(resp);

 
    return resp.trim();
 
}

 
function digitToWord(digit, offset, char) {
 
    let resp = "";
 
    switch (digit) {
 
        case 3:
 
            resp += (offset == 1 || offset == 2 ? assocArr["s"][offset] : assocArr[0][offset]) + " ";
 
            break;

        case 4:
 
            digit = 1;
 
            break;
 //11 - 19
        case "d":
 
            resp += assocArr[digit][offset] + " ";
 
            digit = char;
 
            offset = 0;
 
            break;
 
    }

 
    return resp + assocArr[digit][offset] + " ";
 
}
console.log(numToWord());
    
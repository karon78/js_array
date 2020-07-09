"use strict";

/**
 * Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из
 * него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
 */

const arrayN4 = [1, 2, 3, 4, 5];

let arrayAdd1 = arrayN4.splice(1,0,'a', 'b');
arrayAdd1 = arrayN4.splice(6,0,'c');
arrayAdd1 = arrayN4.splice(8,0,'e');

console.log(arrayN4);


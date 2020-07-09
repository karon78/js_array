"use strict";

/**
 * Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
 * */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr = arr1.concat(arr2);
console.table(arr);

/**
 * Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
 * */

const arr1Rev = arr1.reverse();
console.log(arr1Rev);

/**
 * Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
 * */

const arr1Push = arr1.push(4,5,6);
console.dir(arr1);

/**
 * Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
 * */

const arr11 = [1, 2, 3];
const arr1Unshift = arr11.unshift(4,5,6);
console.dir(arr11);

/**
 * Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
 * */

const array1 = ['js', 'css', 'jq'];

const firstElem = array1.shift();
console.log(firstElem);

/*Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.*/

const lastElem = array1.pop();
console.log(lastElem);

/**
 *  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
 *  */

const arrayN = [1, 2, 3, 4, 5];

const arrayNStart = arrayN.slice(0, 3);
console.log(arrayNStart);

/**
 * Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
 * */

const arrayNEnd = arrayN.slice(3, 5);
console.log(arrayNEnd);

/**
 * Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
 * */

const arrayN1 = [1, 2, 3, 4, 5];

const arrayDel = arrayN1.splice(1,2);
console.log(arrayN1);

/**
 * Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
 * */

const arrayN2 = [1, 2, 3, 4, 5];

const arrayDel2 = arrayN2.splice(1,3);
console.log(arrayDel2);

/**
 *  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из
 *  него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
 */
const arrayN3 = [1, 2, 3, 4, 5];
const arrayAdd = arrayN3.splice(3,0,'a', 'b', 'c');
console.log(arrayN3);

/**
 * Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из
 * него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
 */
const arrayN4 = [1, 2, 3, 4, 5];

let arrayAdd1 = arrayN4.splice(1,0,'a', 'b');
arrayAdd1 = arrayN4.splice(6,0,'c');
arrayAdd1 = arrayN4.splice(8,0,'e');

console.log(arrayN4);


/**
 *  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
 */
const arrSort = [3, 4, 1, 2, 7];
arrSort.sort();
console.log(arrSort);

/**
 *  Дан объект {js:'test', jq: 'hello', css: 'world'}.
 *  Получите массив его ключей.
 */

const obj = {
    js: 'test',
    jq: 'hello',
    css: 'world'
};

const arrKey = Object.keys(obj);
console.log(arrKey);
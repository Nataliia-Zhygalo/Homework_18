
/*Написать функцию, которая принимает как аргумент(параметр) два массива и сравнивает суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая – должен вернутся функцией.

Пример:
a = [1,2,3, 'hello',4,5] => summA = 15
b = [1,2,3, true, 4, undefined, 6] => summB = 16
if(summA < summB) => return b*/

const firstArray = [1, true, 45, undefined, 76, 7,'hello', 3]; //132
const secondArray = ['hi', 56, 87, 1,true, 12, 'cat'];         //156

function getSumOfNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    	if(typeof arr[i] === 'number') sum += arr[i];
    }
    return sum;
}

function getBiggerArray(arr1, arr2) {
	const sumOfFirstArr = getSumOfNumbers(arr1);
	const sumOfSecondArr = getSumOfNumbers(arr2);

	return sumOfFirstArr > sumOfSecondArr ? arr1 : arr2;
}
   console.log(getBiggerArray(firstArray, secondArray));
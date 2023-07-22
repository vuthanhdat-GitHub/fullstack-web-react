var data = [
    { displayname: 'Dell', color: 'grey', size: 13, type: 'laptop' },
    { displayname: 'Asus', color: 'black', size: 14, type: 'laptop' },
    { displayname: 'HP', color: 'blue', size: 15, type: 'laptop' },
    { displayname: 'Huawei', color: 'gold', size: 13, type: 'laptop' }
]

//hàm tìm kiếm---------

// const findF = data.find(function (result) {
//     return result.color === 'blue';
// })
// console.log(findF)

console.log(data.find(ketqua => ketqua.color == 'grey'))

//hàm lọc---------------

// const findSize = data.filter(function (result) {
//     return result.size <= 13;
// })
// console.log(findSize)
console.log(data.filter((result) => result.size <= 13))
//hàm sắp xếp -----------
var number = [13, 16, 15, 14]
// const sortF = number.sort(function (a, b) {
//     return a - b
// })
// console.log(sortF[0]);

console.log(number.sort((a, b) => a - b, 0))
//hàm tính tổng ----------

console.log(number.reduce((a, b) => a + b, 0))

// function F(total,num){
//     return total + Math.round(num);
// }
// console.log(number.reduce(F,0))

//Paginate array-----------

// function paginate(array, page_size, page_number) {
//     return array.slice((page_number - 1) * page_size, page_number * page_size);
// }
const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size)
}

console.log(paginate([1, 2, 3, 4, 5, 6], 2, 2));
console.log(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4, 2));




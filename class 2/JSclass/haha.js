for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)

    }, i * 1000)
}

//function

function tong(a, b) {
    return a + b
}

console.log(tong(2, 3))

const tong2 = function (a, b) {
    return a + b

}
console.log(tong2(2, 3))

var sothunhat = {
    id: 10,
    name: 'thien'
}
let sothuhiai = sothunhat;
let sothuba = { ...sothunhat }




const { id } = sothunhat.id
const tong3 = (a, b) => {
    return a + b
}
const tong4 = (a, b) => a + b

const tong = a =>
    b => a + b
const hamtrave = tong(3)
console.log(hamtrave(3))

taorahamtong = (coso)=>()=>{
    console.log(coso)
}

const thamso1 = 10

const hamxx = (thamso1, thamso2) =>{ //callback
    console.log(thamso2(thamso1))
    
}

hamxx(10,hamtrave)
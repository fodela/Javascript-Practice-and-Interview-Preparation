function* gen (){
    yield 10
}

seq = gen()

console.log(seq.next())  // {value:10, done:false}
console.log(seq.next())  // {value:undefined, done:true}



// gen() will be treated as new instance every single time.
console.log(gen().next()) //{value:10, done:false}
console.log(gen().next()) //{value:10, done:false}
console.log(gen().next()) //{value:10, done:false}

function* gen1(){
    console.log("first")
    yield 10
    console.log("second")
    yield 20
    console.log("third")
    yield 30
    console.log("fourth")
}

console.log(seq.next())  // first {value:10, done:false}
console.log(seq.next())  // second {value:20, done:false}
console.log(seq.next())  // third {value:30, done:false}
console.log(seq.next())  // fourth {value:undefined, done:true}
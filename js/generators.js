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
function* gen (){
    yield 10
}

seq = gen()

console.log(seq.next())  // {value:10, done:false}
console.log(seq.next())  // {value:undefined, done:true}




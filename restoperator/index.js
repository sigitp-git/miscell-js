const avg = (...numbers) => {
    let sum = 0
    numbers.map((num) => sum += num)
    return sum/numbers.length
}

console.log(avg(100,100,100,100,100,100))
// here ...arrayname is to catch input into function (rest operator)
const avg = (thing1, thing2, ...numbers) => {
  let sum = 0
  numbers.map((num) => (sum += num))
  const average = sum / numbers.length
  return `The average ${thing1} is ${average} ${thing2}`
}

console.log(avg('temp', 'Fahrenheit', 100, 100, 100, 100, 100, 100))

const printTeam = (thing1, thing2, ...cats) => {
    let string = `Team "${thing1}" with Coach "${thing2}". Members are: `
    cats.map((cat) => {
        string += `${cat}, `
    })
    return console.log(string)
}

const printTeam2 = (thing1, thing2, ...cats) => {
    console.log(`Team "${thing1}" with Coach "${thing2}". Members are: ${cats.join(', ')}`)
}

printTeam('Team Cat', 'Coach Cat', 'Bici', 'Mici', 'Kong Bu', 'Ku Bu')
printTeam2('Team Cat', 'Coach Cat', 'Bici', 'Mici', 'Kong Bu', 'Ku Bu')

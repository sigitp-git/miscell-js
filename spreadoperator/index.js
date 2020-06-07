// here ...arrayname is to catch input into function (rest operator)
const printTeam2 = (thing1, thing2, ...cats) => {
  console.log(
    `Team "${thing1}" with Coach "${thing2}". Members are: ${cats.join(', ')}`
  )
}

const team = {
  name: 'Team Cat',
  coach: 'Coach Cat',
  cats: ['Bici', 'Mici', 'Kong Bu', 'Ku Bu'],
}

//printTeam2('Team Cat', 'Coach Cat', 'Bici', 'Mici', 'Kong Bu', 'Ku Bu')

// here ...arrayname (spread operator) is to feed input to a function argument that already uses ...restoperator
printTeam2(team.name, team.coach, ...team.cats)

// copy paste array into 2 different instances of arrays
const cities = ['Barcelona', 'Beijing', 'Tokyo', 'Osaka']
const citiesNext = [...cities, 'Seoul', 'Busan']
console.log(citiesNext)


// spread operator for objects{}, copy paste object into second object, both independent objects
let house = {
    bedrooms: 3,
    bathrooms: 3,
    year: 2017
}

let newHouse = {
    sold: true,
    ...house,
    city: 'Dallas'
}

console.log(newHouse)
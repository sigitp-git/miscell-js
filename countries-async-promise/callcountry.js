//getCountry('MX').then((country) => console.log(country.name), (err) => console.log(err))

//name is return country.name from restcountrieseu.js
getCountry('US').then((name) => {
    console.log(`Fetched: ${name}`)
  }).catch((err) => {
    console.log(err)
  })
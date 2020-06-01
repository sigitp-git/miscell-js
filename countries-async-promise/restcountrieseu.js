const getCountry = (countryCode) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()

  // closures, a combination of a function like callback(e) and where it was defined to access callback and countryCode args
  request.addEventListener('readystatechange', (e) => {
    if (e.target.status === 200 && e.target.readyState === 4) {
      const data = JSON.parse(e.target.responseText)
      //console.log(data)
      const country = data.find((country) => country.alpha2Code === countryCode)
      //console.log(country.name)
      resolve(country)
    } else if (e.target.readyState === 4) {
      reject('Promise Error Nih')
      //console.log(`Error Euy, HTTP ${e.target.status}`)
    }
  })

  request.open('GET', 'http://restcountries.eu/rest/v2/all')
  request.send()
})

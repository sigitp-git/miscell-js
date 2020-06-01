const getCountry = (countryCode, callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (e) => {
    if (e.target.status === 200 && e.target.readyState === 4) {
      const data = JSON.parse(e.target.responseText)
      console.log(data)
      const country = data.find((country) => country.alpha2Code === countryCode)
      console.log(country.name)
      callback(undefined, country)
    } else if (e.target.readyState === 4) {
      callback('Error Nih', undefined)
      console.log(`Error Euy, HTTP ${e.target.status}`)
    }
  })

  request.open('GET', 'http://restcountries.eu/rest/v2/all')
  request.send()
}

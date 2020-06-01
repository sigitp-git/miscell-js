getCountry('US', (error, country) => {
  if (error) {
    console.log(`Error Nih: ${error}`)
  } else {
    console.log(country)
  }
})

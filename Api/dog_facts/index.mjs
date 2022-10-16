const endpoint = "http://dog-api.kinduff.com/api/facts?number=5"
const response = await fetch(endpoint)
const data = await response.json()
console.log(data.facts)
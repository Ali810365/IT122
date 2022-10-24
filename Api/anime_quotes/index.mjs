const endpoint = "https://animechan.vercel.app/api/random"
const response = await fetch(endpoint)
const data = await response.json()
console.log(data)
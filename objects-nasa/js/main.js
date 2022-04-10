//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const date = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=1F7GbwGDtI0UdO0EXN72Yu7ejAQDtjlkdvcUzhVV&date=${date}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.title
        document.querySelector('img').src = data.hdurl
        document.querySelector('p').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

      //https://apod.nasa.gov/apod/ap${date}.html
      //https://api.nasa.gov/planetary/apod?api_key=1F7GbwGDtI0UdO0EXN72Yu7ejAQDtjlkdvcUzhVV'+date
}
import { createServer, Model } from 'miragejs'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

createServer({
  models: {
    'scale': Model
  },

  seeds(server) {
    server.db.loadData({
      scales: [
        {
          id: 1,
          openingPrayer: "Leo",
          verse: "Jorge",
          praise: "Luisa",
          word: "Aline",
          closingPrayer: "Gustavo",
          lunch: "Grupo 1",
          date: "2021-11-20T18:00",
        },
        {
          id: 2,
          openingPrayer: "Gabriel",
          verse: "Luisa",
          praise: "Jorge",
          word: "Patrick",
          closingPrayer: "Jorge",
          lunch: "Grupo 2",
          date: "2021-11-20T18:00",
        }
      ]
    })
  },

  routes() {
    this.namespace = "api";
    this.get("/scales", () => {
      return this.schema.all("scale")
    })

    this.post("/scales", (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('scale', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

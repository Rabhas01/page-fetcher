const https = require('https')
const fs = require('fs')

const domain = process.argv[2]
const path = process.argv[3] 


const options = {
  
  hostname: domain,
  method: 'GET'
}

const request = https.request(options, response => {
  console.log(`statusCode: ${response.statusCode}`)

  response.on('data', data => {
    fs.writeFile(path, data, error => { 
      if (error) {
        console.error(error)
        return
      }
    //file written successfully
      console.log(`Downloaded and saved ${data.length} to ${path}`)
    })
  }) 
})

request.on('error', error => {
  console.error(error)
})

request.end()


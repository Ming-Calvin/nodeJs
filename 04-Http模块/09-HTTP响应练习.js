const http = require('http')

const server = http.createServer((request, response) => {
  response.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Title</title>
    </head>
    <style>
      td {
        padding: 10px 20px;
      }
      
      td:nth-child(odd) {
        background-color: #bfc;
      }
      
      td:nth-child(even) {
        background-color: #cfb;
      }
      
      table,tr {
        border-collapse: collapse;
      }
    </style>
    <body>
      <table border="1">
       <tr><td></td><td></td><td></td></tr>
       <tr><td></td><td></td><td></td></tr>
       <tr><td></td><td></td><td></td></tr>
       <tr><td></td><td></td><td></td></tr>
      </table>
    </body>
    <script>
      let td = document.querySelectorAll('td')
      
      td.forEach(item => item.onclick = function (){
        this.style.backgroundColor = '#fff'
      })
    </script>
    </html>
  `)
})

server.listen(9000, () => {
  console.log('success')
})

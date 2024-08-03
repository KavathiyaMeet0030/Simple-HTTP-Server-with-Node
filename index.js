
const http = require('http');
const PORT = 3001;
const fs = require('fs');
// const { log } = require('console');





const server = http.createServer((req, res) => {

  let log = `${Math.floor(Math.random() * 100)} : New Request ... \n`;
  console.log(log);

  fs.appendFile('log.txt', log, (err, data) => {
    if (!err) {

      console.log("Append File");

    }
  })


  if (req.url === '/') {

    const log = `${req.url} : Default Request \n`

    fs.readFile('Index.html','utf-8',(err,data)=>{

      fs.appendFile('log1.txt', log, (err) => {
        if (!err) {
  
          console.log(`${log} : Default Request`);
          res.statusCode = 200;
          res.setHeader("content-type", 'text/html');
          res.end(data);
  
  
        }
      })

    })

    



  } else if (req.url === '/about') {

    const log = `${req.url} : Default Request \n`

    fs.readFile('about.html','UTF-8',(err,data)=>{

      fs.appendFile('log1.txt', log, (err) => {
        if (!err) {
  
          console.log(`${log} : About Request`);
          res.statusCode = 200;
          res.setHeader("content-type", 'text/html');
          res.end(data);
  
  
        }
      })

    })

    



  } else {

    const log = `${req.url} : Default Request \n`

    fs.appendFile('log1.txt', log, (err) => {
      if (!err) {

        console.log(`${log} : UnKnown Request`);
        res.statusCode = 400;
        res.setHeader("content-type", 'text/plain');
        res.end("Page Not Found");
  

      }
    })

   
  }


});


server.listen(PORT, (err) => {

  if (!err) {
    console.log(`server running on http://locathost:${PORT}`);
  }

})


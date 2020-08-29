let http=require('http');
const date=require('./Date');
const url= require('url');
const fs=require('fs');
let port=8080;
http.createServer(function(req, res)
{
    fs.readFile('helloWorld.html', (err, result)=>
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write(`You have request for ${req.url} endpoint`);
    res.write(result);
    var data=url.parse(req.url, true).query;
    res.write(`The date today is ${data.date} and the year is ${data.year}\n\n`);
    res.write(`\nServer is running on port ${port}\n\n`);
    res.write('Hello World\n\n'+ 'Date is  ' + date.currentDate());
    res.end();
    })
    
}
    ).listen(port);
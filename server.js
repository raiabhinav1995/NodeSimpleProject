let http=require('http');
const date=require('./Date');
const url= require('url');
const fs=require('fs');
const events=require('events');
const formidable=require('formidable');
let port=8080;
let eventEmitter=new events.EventEmitter();
http.createServer(function(req, res)
{
    const q = url.parse(req.url, true);
    // c    onsole.log(q);
    let fileName='.'+q.pathname;
    fs.readFile(fileName, (err, result)=>
    {
        if(err)
        {
            var data=q.query;
            res.writeHead(404, {'Content-Type': 'text,html'});
            res.write(`The date today is ${data.date} and the year is ${data.year}\n\n`);
            return res.end('404 not found');
        }
        
        res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write(`You have request for ${req.url} endpoint`);
    res.write(result);
    console.log(data);
    //return res.end();
    res.write(`\nServer is running on port ${port}\n\n`);
    res.write('Hello World\n\n'+ 'Date is  ' + date.currentDate());
    return res.end();
    });
    
}).listen(port)

function createScream()
{
    console.log('I just heard a scream!!');
}

eventEmitter.on('scream', createScream);

eventEmitter.emit('scream');
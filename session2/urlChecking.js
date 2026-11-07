const http=require('http');
http.createServer(function(req,res){
    if (req.url=='/contact')
    {
        res.write('about us page');
    }
    else if{
        res.write('home page')
    }
    
res.end();
}).listen(3000);
console.log('Server running on port 3000');
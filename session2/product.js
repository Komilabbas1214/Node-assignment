const http=require('http');
http.createServer(function(req,res){
    if (req.url=='/product')
    {
        res.write('iPhone 14, Nike Shoes, Boat Headphones')
    }
    else{
        res.write('page not found')
    }
res.end();

}).listen(3000);
console.log('Server running on port 3000');
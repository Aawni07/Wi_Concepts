const http = require('http')
const fs  = require('fs');

const server = http.createServer((req,res)=>{
    let path = req.url;
    const html = fs.readFileSync('../assets/index.html','utf-8') 
    if(path==='/'|| path.toLocaleLowerCase()==='/home'){
        res.writeHead(200,{
            'Content-Type':'text/html',//informs client the response fetched is having html format.
            'my-header':'HelloWorld'
        })
        res.end(html.replace('{{%CONTENT%}}','You are in homePage'))
    }else if(path.toLocaleLowerCase()==='/products'){
        res.writeHead(200,{
            'Content-Type':'application/json',
        })
        fs.readFile('../assets/products.json','utf-8',(err,data)=>{
            res.end(data)
        })
    }else if(path.toLocaleLowerCase()==='/about'){
        res.end('you are in About page..........')
    }else if(path.toLocaleLowerCase('/contact')){
        res.end('you are in contact Page..........')
    }else{
        res.end('Error_404 : Page Not Found')
    }
})

server.listen(4001, '127.0.0.1',()=>{
    console.log('Server has started.....!');
})
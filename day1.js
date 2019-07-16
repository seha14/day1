

/*const http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{
		"Content-Type"	: "text/html"
	});
	res.end("Selamat Pagi : seha");
}).listen(8080);

console.log('Server berjalan di port 8080');*/
//use path module
const path = require('path');
// use express module
const express = require ('express');
//use view hbs engine 
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
const day1 = express();


//set dinamic view
day1.set('views',path.join(__dirname,'views'));
//set view engine
day1.set('view engine','hbs');

day1.use(bodyParser.urlencoded({extended : false}));
//set public fordel as static folder for static file
day1.use(express.static('public'));

//router untuk halaman home
day1.get('/',(req, res) => {
	//render file index.hbs
	res.render('index',{
	  name : "Seha Nasution"
	});
  });

 /*  
  //route untuk halaman home dengan parameter name
  day1.get('/:name',(req, res) => {
	//render file index.hbs
	res.render('index',{
	  name : req.params.name
	});
  });
 */

//route untuk menampilkan post

day1.get('/post',(req, res) => {
	//render file form.hbs
	res.render('form');
  });

//route untuk submit form
day1.post('/post',(req, res) => {
	//render file form.hbs
	res.render('index',{
	  //ambil value dari textname
	  name : req.body.textname
	});
  });

//route halama about
day1.get('/about',(req,res) =>{
	res.send('This page about');
});


day1.listen(8000, () => {
	console.log('server running at port 8000');
});

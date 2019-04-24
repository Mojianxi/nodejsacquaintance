//引入模块
var http=require('http');
var fs=require('fs');
//创建web服务器
var server=http.createServer();
//监听请求
server.on('request',function (req,res) {
	// body...
	console.log('收到用户请求'+req.url);
	if(req.url=='/'){
		// $msg='this is index';
		fs.readFile('index.html','utf8',function (err,data) {
			// body...
			if(err) res.end('404 Not find');
			res.write(data);
			res.end();
		});
		return;
	}else if(req.url='/login'){
		$msg='this is login';
	}else{
		$msg='404';
	}
	// console.log(req.headers);
	// console.log(req.rawHeaders);
	// console.log(req.httpVersion);
	// console.log(req.url);
	res.setHeader('Content-Type','text/html;charset=utf-8');
	// res.write('hello nodejs ,这是第一个页面');
	// res.statusCode=404;
	// res.statusMessage='Not found';
	res.write($msg);
	res.end();
});
//启动服务
server.listen(8080,function () {
	// body...
	console.log('启动成功,访问路径-localhost:8080');
});
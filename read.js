//引入fs模块
var fs=require('fs');
//从a.txt读取文件内容
// fs.readFile('a.txt',function (err,data) {
fs.readFile('a.txt','utf8',function (err,data) {
	// body...
	if(err){
		console.log(err);
		return;
	}
	console.log('success'+data);//读取的内容不是我们可识别的内容
	console.log('success'+data.toString());
});

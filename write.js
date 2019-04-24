//引入fs内置模块
var fs=require('fs');
//通过fs模块创建文件写入你好,nodejs
fs.writeFile('./a.txt','你好,nodejs',function (err) {
	// body...
	// err为null 成功
	//err不为null 有问题
	if (err) {
		console.log(err);
		return;
	}
	console.log("success");
});


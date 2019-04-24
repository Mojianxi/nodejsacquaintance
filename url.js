//引入url内置模块
var url=require('url');
var data='http://example.cn?name=张三&age=18';
console.log(data);
console.log(url.parse(data));
var urlQueryObj=url.parse(data,true);
console.log(urlQueryObj.query);
console.log(urlQueryObj.query.name);
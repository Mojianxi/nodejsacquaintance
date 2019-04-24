//创建os对象(引入内置os模块)
var os=require('os');
//调用os对象方法
console.log('hello'+os.EOL +"nodejs example");
console.log('主机名'+os.hostname());
console.log('操作系统名'+os.type());
console.log('操作系统平台'+os.platform());
console.log('内存总量'+os.totalmem+"字节");
console.log('空闲内存'+os.freemem+"字节.");
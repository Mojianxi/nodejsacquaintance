//引入内置模块
var path = require('path');
var testData="G:/mythempic/picture/6.png";
console.log(path.basename(testData));
testData=path.dirname(testData);
console.log(testData);
console.log(path.basename(testData));
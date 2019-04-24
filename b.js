//步骤定义
function add() {
	// body...
	console.log('this is add');
}
function del() {
	// body...
	console.log('this is del');
}
function edit() {
	// body...
	console.log('this is edit');
}
function select() {
	// body...
	console.log('this is select');
}
//步骤2导出
exports.add = add;
exports.del = del;
module.exports.edit = edit;
exports.select = select;
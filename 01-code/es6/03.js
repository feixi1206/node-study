/*
    字符串相关扩展
    includes() 判断字符串中是否包含指定的字串（有的话返回true，否则返回false）
               参数一：匹配的字串；参数二：从第几个开始匹配
    startsWith()  判断字符串是否以特定的字串开始
    endsWith()  判断字符串是否以特定的字串结束

    模板字符串
*/
// console.log('hello world'.includes('world',7));

// let url = 'admin/index.php';
// console.log(url.startsWith('aadmin'));
// console.log(url.endsWith('phph'));

// ----------------------------------
let obj = {
    username : 'lisi',
    age : '12',
    gender : 'male'
}

let tag = '<div><span>'+obj.username+'</span><span>'+obj.age+'</span><span>'+obj.gender+'</span></div>';
console.log(tag);
// 反引号表示模板，模板中的内容可以有格式，通过${}方式填充数据
let fn = function(info){
    return info;
}
let tpl = `
    <div>
        <span>${obj.username}</span>
        <span>${obj.age}</span>
        <span>${obj.gender}</span>
        <span>${1+1}</span>
        <span>${fn('nihao')}</span>
    </div>
`;
console.log(tpl);
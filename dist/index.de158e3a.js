let html = document.querySelector("#html"); //通过CSS选择器找到demo这个元素
let style = document.querySelector("#style");
let string = `/*你好，我是一名前端新人
*接下来我演示一下我的前端功底
*首先我要准备一个div
**/
#div1{
    border: 1px solid red;
    width: 200px;
    height :200px;
}
/*接下来我把div变成一个八卦图
*注意看好了
*首先，把div变成一个圆
**/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/*八卦是阴阳形成的
*一黑一白
**/
  #div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
  }
  /*加两个风火轮*/
  #div1::before{
    width: 100px;
    height:100px;
    top: 0;
    left: 50%;
    transform:translateX(-50%);
    background: #000000;
    border-radius: 50%; 
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%); 
  }
  #div1::after{
    width: 100px;
    height:100px;
    bottom: 0;
    left :50%;
    transform: translateX(-50%);
    background: #ffffff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
  }
`;
let string2 = ""; //用来缓存显示到屏幕上的结果（存经处理后的字符串）
//string = string.replace(/\n/g, "<br>"); //replace 可以把字符串里的东西变成另一个东西，默认替换第一个，加上正则表达式，把所有的js的回车变成html的br
//console.log(string.length);
let n = 0;
//demo.innerHTML = string.substring(0, n); //设置里面的内容,substring()两个参数，子字符串从0开始，n结束
//step函数描述每一步要做什么
let step = ()=>{
    setTimeout(()=>{
        //console.log(n);
        // n = n + 1;
        //console.log(string[n]);
        if (string[n] === "\n") //如果不是回车就不照搬
        string2 = string2 + "<br>";
        else if (string[n] === " ") string2 += "&nbsp"; //HTML中回车表示成<br>，空格表示成&nbsp
        else //如果不是回车就照搬
        string2 = string2 + string[n];
        //将if else改写成问号表达式
        //string2 += string[n] === "\n" ? "<br>" : string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 9999);
        html.scrollTo(0, 9999);
        //console.log(string2);
        //假设length为55
        if (n < string.length - 1) {
            //n最大值为53
            //如果n不是最后一个，就继续
            n += 1; //54
            step();
        }
    }, 10);
};
step(); // setTimeout(() => {
 //   style.innerHTML = `
 //   body{
 //     color:red;
 //   }
 //   `;
 // }, 3000);

//# sourceMappingURL=index.de158e3a.js.map

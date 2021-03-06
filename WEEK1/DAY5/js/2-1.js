/*
 function Person() {}
 Person();//->函数执行:Person不是类,它仅仅是一个普通的函数
 */

function Person() {
    /*
     * 当Person函数执行的时候
     *   1、形成一个私有的作用域
     *   2、形参赋值和变量提升
     *   3、(构造) 浏览器会默认的在这个作用域中开辟一个堆内存(对象数据类型的值)，然后把这个对象作为函数的执行主体(THIS) =>这个对象就是当前这个类的一个实例
     *   4、JS代码自上而下执行
     *   5、(构造) 即使我们不写RETURN,浏览器也会默认返回一个结果,返回的结果就是第三步创建的那个对象(THIS) =>把浏览器默认创建的实例返回
     */
}
var p1 = new Person();//->构造函数执行:此时的PERSON不是一个普普通通的函数,而是一个自定义类,而P1接收到的返回结果就是当前这个类的一个实例
/*
 * new Person()
 *   1、把Person变为一个类：类都是函数数据类型的(包含内置类)
 *   2、把Person当做一个普通的方法来执行
 *   3、P1就是当前类的实例：实例都是对象数据类型的
 */
// console.log(typeof p1);//->'object'
// console.log(typeof 'function'Person);//->
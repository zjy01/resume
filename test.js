/**
 * Created by carvenzhang on 2016/5/26.
 */
var o1 = {
  a:1,
    b:2,
    c:{
        a: 1,
        b: 2
    }
};

var c2 = o1.c;
c2.a = 2;
console.log(c2);
console.log(o1);
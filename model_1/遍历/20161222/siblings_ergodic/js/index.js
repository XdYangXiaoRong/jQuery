/**
 * Created by qingyun on 16/12/22.
 */
$(function(){
    //同级遍历
    //siblings  next nextAll nextUntil prev prevAll prevUntil
    //siblings 所有同级元素
    //next 下一个元素
    //nextAll 下面所有的同级元素
    //prev上一个元素
    //prevAll 上面所有的同级元素

    $("#btn").click(function(){
        //$("h3").siblings("h5").css("color","red");
        //$("h3").next().css("color","red");
        $("h3").nextAll().css("color","green");
        $("h3").prev().css("color","blue");

    })


    //过滤方法
    // first() last() eq() filter() not() gt() lt()

    //eq()下标从0开始


    $("#filterBtn").click(function(){
        //$("ul li").eq(2).css("color","red");
        $("ul li").("1").css("color","red");
    })




})
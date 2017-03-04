/**
 * Created by qingyun on 16/12/22.
 */
$(function(){
    //向下遍历  children find
    //children()向下遍历直接子元素,参数为可选
    //find()向下遍历所有子代元素, 参数为必填
    $("#downBtn").click(function(){
        //$(".box1").children().css("border","3px solid red")
        $(".box1").find(".box3").css("border","3px solid red")
    })

    //向上遍历 parent() parents parentUntil
    //parent()直接父元素 参数可选
    //parents() 所有父元素 参数可选
    //parentsUntil ()父元素区间段确定

    $("#upBtn").click(function(){
        //$("p").parent(".box2").css("border","3px solid green");
        //$("p").parents(".box2").css("border","3px solid green")
        $("p").parentsUntil(".box1").css("border","3px solid green");
    })



})

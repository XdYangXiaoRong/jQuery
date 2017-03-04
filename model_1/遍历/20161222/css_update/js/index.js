/**
 * Created by qingyun on 16/12/22.
 */
var myJq = $.noConflict();

myJq(function(){
    myJq("#btn").click(function(){
        //$("div").css("background","green");
        //$("div").css({"background":"green","width":"400px","height":"400px"})
        myJq("div").toggleClass("change");
    })
    //$("#reBtn").click(function(){
    //    $("div").removeClass("change");
    //})
})
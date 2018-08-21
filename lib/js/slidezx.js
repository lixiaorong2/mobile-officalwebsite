

$(function() {
  $(".uitem").not(":eq(0)").hide(); //所有隐藏,除了第一个
  $(".litem>a").toggle(function() {
  $(this).next().slideDown(); //当前点击的展开
  var index = $(".uitem").index($(this).next()); //赋值：当前点击的的下一个元素
  $(".uitem").not(":eq(" + index + ")").slideUp(); //获取不是当前点击的的元素，然后执行函数
},//当这个函数完成时，就执行下面这个函数   
    function() {
      $(this).next().slideUp(); //当前点击的下一个元素执行函数
      var index = $(".uitem").index($(this).next()); //赋值：当前点击的的下一个元素
      $(".uitem").not(":eq(" + index + ")").slideUp(); //获取不是当前点击的的元素，然后执行函数
    });
});


  


/*$(function(){
    $("uitem").hide();
    $(".litem>a").toggle(function(){
        $()
    },function(){});
})*/

/*$(function(){
    $(".uitem").not(":eq(0)").hide();
    $(".litem>a").click(function(){
    $(this).next().slideDown();
    //var nt = $(this).next();
   // $(".uitem").siblings().slideUp(); 
    $(".litem>a").not(":eq(" + nt + ")").slideUp();
    })
});*/
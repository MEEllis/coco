(function () {

    //菜单
    $("#icon-icon11").on("click",function(){
        $(".xrk-header-pull-bg").show();
        $(".xrk-header-pull").addClass("active");
    });
    $(".xrk-header-pull-bg").on("click",function(){
        $(".xrk-header-pull-bg").hide();
        $(".xrk-header-pull").removeClass("active");
    });
    //关闭弹出框
    $(".icons-xx").on("click",function(){
        var _$this = $(this);
        _$this.parents(".alter-container").hide();
    });
    //底部关注微信
    $("#footer-weixin").on("click",function(){
        $("#guanZhuWeiXin").show();
    });

})();

$(function(){
    var mask=$(".mask");
    var zp=$(".zp");
    var img=$(".zp>img");
    zp.hover(function(){
        img.eq($(this).index()).animate({width:109+"%",height:112+"%",left:-10,top:-10});
        mask.eq($(this).index()).css("display","block").animate({width:109+"%",height:112+"%",opacity:0.6,left:-10,top:-10}).css("fontSize","24")
    },function(){
        img.eq($(this).index()).animate({width:100+"%",height:100+"%",left:0,top:0});
        mask.eq($(this).index()).animate({width:0,height:0,opacity:1}).css("fontSize","0")
    });

    $(".flipster").flipster({
        style: 'carousel',
        start: 0 });






    $('#dowebok').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fifthPage'],
        menu: '#myMenu',
        afterLoad: function(anchorLink, index) {
            var loadedSection = $(this);
            if(index == 3){
                var bj2=$(".bj2");
                var zp2=$(".zp2");
                zp2.css("marginLeft",150);

            }
        },
        onLeave: function(index, nextIndex, direction) {
            var leavingSection = $(this);
            //after leaving section 2
            if (index == 3) {
                var bj2=$(".bj2");
                var zp2 = $(".zp2");
                zp2.css("marginLeft", 0);
            }
        }
    });

    var first=$(".first");
    var num=0;
    var t=setInterval(move,3000);
    function move(){
        num++;
        if(num>first.length-1){
            num=0
        }
        first.animate({opacity:0});
        first.eq(num).finish();
        first.eq(num).animate({opacity:1});

    }

});
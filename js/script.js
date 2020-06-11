// donor script display with effects
// let donorOffset = $("#donors").offset().top;
// $(window).scroll(function(){
//     let wScroll = $(window).scrollTop();
//     if(wScroll >= donorOffset){
        $(".item").eq(0).slideDown(1000,function(){
            $(".item").eq(1).show(1000,function(){
                $(".item").eq(2).slideDown(1000,function(){
                    $("#circleTwo").fadeIn(1500,function(){
                        $("#circleOne").slideDown(1500);
                        $("#circleThree").slideDown(1500,function(){
                            $(".detail").slideDown(1000);
                        });
                    })
                })
                
            })
        })
//     }
// })

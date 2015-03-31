/**
 * Created by Joseph Tan on 15/07/2014.
 */

$(window).load(function(){

    $.ajax({
        url: "js/data.json",
        //force to handle it as text
        dataType: "text",
        success: function(data) {
            var json = $.parseJSON(data);

            $("#bar").attr("width" + json.data.lightbox.start+"%");
            $("#bar").animate({width:"+" + json.data.lightbox.finish +"%"}, {duration: json.data.lightbox.duration,
                step: function(now, fx) {
                    if(fx.prop == 'width') {
                        $("#percent span").html(Math.round(now * 100) / 100);
                    }
                },
                    complete:function(){
                        $("#bar").addClass("complete");
                        $("#percent").remove();
                        $(".progress-bar").after("<p>This task is 100% completed <span class=\"checked\"></span></p>");
                        $("a.close").on("click",function(e){
                            $(".lightboxOverlay").hide();
                        });
                    }
            });

        }
    });


    $("#reset").on("click",function(){
       location.reload();
    });

});


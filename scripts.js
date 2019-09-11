function List(plan,time,date,notes){
    this.doPlan = plan;
    this.doTime= time;
    this.doDate  = date;
    this.doNotes = notes;
}
function reset(){
$("input#new-plan").val("");
}

$(document).ready(function(){
    $("form#new-todo").submit(function(event){
        event.preventDefault();

        var userPlan = $("input#new-plan").val();
        var userTime = $("input#new-time").val().toString();
        var userDate = $("input#new-date").val().toString();
        var userNotes = $("textarea#new-notes").val();

        var newList = new List(userPlan,userTime,userDate,userNotes)

        $("ul#to-do").append("<li><span class = 'newones'>"+ newList.doPlan+", on "+ newList.doDate+"</span></li>" );
        $(".newones").last().click(function(){
            $("#show-list").fadeToggle();
            $("#show-list h2").text(newList.doPlan);
            $(".plan").text(newList.doPlan);
            $(".date").text(newList.doDate);
            $(".time").text(newList.doTime);
            $(".notes").text(newList.doNotes);
            
            $(document).reset();
            
        });

    });
});

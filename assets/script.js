var tasks = {};
var numHour = 0;
var rightNow = parseInt(moment().format("HH"));

//Load Task
var loadTasks = function() {
    for(var i=0; i <=23; i++){
    tasks = JSON.parse(localStorage.getItem("tasks"+i));
        if (tasks) {
            $("#TaskDescription"+i).text(tasks);
        }
    }
};
  
//Save Task
$("div").on("click", "button", function() {
    for(var i=0; i <= 23; i++){
        if($(this).hasClass('Btn'+i)){
            localStorage.setItem("tasks"+i, JSON.stringify($("#TaskDescription"+i).val()));
        }
    }
});

//Make the time table
for(var i=23; i >= 0; i--) {
    if(rightNow > i){
        $('<div class="row"><div class="hour col-1">'+i+':00</div><textarea id="TaskDescription'+i+'" rows="3" class="description past col-9"></textarea><button class="saveBtn col-1 Btn'+i+'">save</button></div>').insertAfter("section");
    }else if (rightNow === i){
        $('<div class="row"><div class="hour col-1">'+i+':00</div><textarea id="TaskDescription'+i+'" rows="3" class="description present col-9"></textarea><button class="saveBtn col-1 Btn'+i+'">save</button></div>').insertAfter("section");
    } else {
        $('<div class="row"><div class="hour col-1">'+i+':00</div><textarea id="TaskDescription'+i+'" rows="3" class="description future col-9"></textarea><button class="saveBtn col-1 Btn'+i+'">save</button></div>').insertAfter("section");
    }
}
loadTasks();
/**
 * Created by robert_Account on 2016-04-02.
 */

//Add Data + Convert Time
//Fix Variables

var day = "W"
var timeS = 700

//Data goes here

for (var i in classRoom){
    for (var y in classRoom[i].time[day]){
        if (timeS > classRoom[i].time[day][y][0] && timeS < classRoom[i].time[day][y][1]){
            console.log(classRoom[i].name);
        }
    }
}
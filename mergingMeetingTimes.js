/**
Your company built an in-house calendar tool called HiCal.
You want to add a feature to see the times in a day when everyone is available.
To do this, you’ll need to know when any team is having a meeting.
In HiCal, a meeting is stored as a tuple ↴ of integers (start_time, end_time). 
These integers represent the number of 30-minute blocks past 9:00am.

For example, given:
[
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]
your function would return:
[
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]
Do not assume the meetings are in order. The meeting times are coming from multiple teams. 
**/

function mergeRanges(times){

    if ( times.length <= 1 ){
        return times
    }

    let r = [];

    let index = 0;
    while ( index <= ( times.length - 1 ) ){
        console.log('index1',times[index])
        let timeBlockMin = times[index].startTime;
        let timeBlockMax = times[index].endTime;

        let index2 = index + 1;
        while ( index2 <= times.length -1 ){
            console.log('index2', times[index2])

            let checkStartTime = times[index2].startTime;
            let checkEndTime = times[index2].endTime;

            if ( ( checkStartTime >= timeBlockMin ) && ( checkStartTime <= timeBlockMax ) ){
                index++;
                index2++;
                if ( checkEndTime > timeBlockMax ){
                    timeBlockMax = checkEndTime;
                }
            } else if ( ( checkEndTime >= timeBlockMin ) && ( checkEndTime <= timeBlockMax ) ){
                index++;
                index2++;
                if ( checkStartTime < timeBlockMin ){
                    timeBlockMin = checkStartTime;
                }
            }

            index2++;
        }
        r.push({ startTime: timeBlockMin, endtime: timeBlockMax })
        index++
    }

    return r
}

function testMeetings(){
    let tests = [
        [ { startTime: 0,  endTime: 1 },
          { startTime: 3,  endTime: 5 }, ],
        [ { startTime: 0,  endTime: 1 },
          { startTime: 3,  endTime: 5 },
          { startTime: 4,  endTime: 8 }, ],
        [ { startTime: 0,  endTime: 1 },
          { startTime: 3,  endTime: 5 },
          { startTime: 4,  endTime: 8 },
          { startTime: 10, endTime: 12 }, ],
        [ { startTime: 0,  endTime: 1 },
          { startTime: 3,  endTime: 5 },
          { startTime: 4,  endTime: 8 },
          { startTime: 10, endTime: 12 },
          { startTime: 9,  endTime: 10 },]
    ];

    for (t of tests){
        console.log(mergeRanges(t, '\n'))
    }

}

testMeetings();
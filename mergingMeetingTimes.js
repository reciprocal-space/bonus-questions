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

function sortMeetings(meetingTimes){
   return meetingTimes.sort((a, b) => {
       return a.startTime - b.startTime;
   })
}

function mergeRanges(meetingTimes){

    if ( meetingTimes.length <= 1 ){
        return meetingTimes;
    }

    let sortedTimes = sortMeetings(meetingTimes);

    let mergedMeetings = [sortedTimes[0]];

    let index = 0;
    while ( index <= sortedTimes.length - 1 ){
        let currentMeeting = sortedTimes[index];
        let lastMergedMeeting = mergedMeetings[ mergedMeetings.length - 1 ];

        if ( currentMeeting.startTime <= lastMergedMeeting.endTime ){
            lastMergedMeeting.endTime = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime);
        } else {
            mergedMeetings.push(currentMeeting);
        }
        index++
    }

    return mergedMeetings;
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
          { startTime: 9,  endTime: 10 }, ],
        [ { startTime: 1, endTime: 2 },
          { startTime: 2, endTime: 3 } ],
        [ { startTime: 1, endTime: 5 },
          { startTime: 2, endTime: 3 } ],
        [ { startTime: 1, endTime: 10 },
          { startTime: 2, endTime: 6 },
          { startTime: 3, endTime: 5 },
          { startTime: 7, endTime: 9 } ] 
    ];

    for (t of tests){
        console.log('Result:', mergeRanges(t), '\n');
    }

}

testMeetings();
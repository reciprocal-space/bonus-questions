/**
Second attempt at the merging meeting times question.
Testing how well I remember/understand the algorithm.
**/
function mergeRanges(meetingTimes){
    let sortedMeetings = meetingTimes.sort((a, b) => {
        return a.startTime - b.startTime;
    })

    let mergedMeetings = [sortedMeetings[0]];
    for ( meeting of sortedMeetings) {
        let current = meeting;
        let lastMergedMeeting = mergedMeetings[ mergedMeetings.length - 1 ];

        if ( current.startTime <= lastMergedMeeting.endTime ){
            lastMergedMeeting.endTime = Math.max(current.endTime, lastMergedMeeting.endTime);
        } else {
            mergedMeetings.push(current);
        }
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
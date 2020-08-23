/**
 Write a function that takes an array of characters and reverses the letters in place.
**/

function reverseArray(array){

    let n = Math.floor( array.length / 2 );
    let N = array.length - 1; 
    for (i = 0; i < n; i++){
        N = N - i;

        let swap1 = array[i];
        let swap2 = array[N];

        array[i] = swap2;
        array[N] = swap1;
    }
    return array;
}

function test(){
    testCases = [
        [ 's', 'a', 'l', 'a', 'd' ],
        [ 'b', 'o', 'o', 't', 's' ],
        [ 'd', 'o', 'o', 'r' ]
    ];

    for ( t of testCases ){
        console.log(t);
        console.log(reverseArray(t));
        console.log('\n');
    }
}

test();

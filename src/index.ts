import { CubePuzzle1 } from "./model/CubePuzzle1";
import { IPuzzle } from "./model/IPuzzle";

function simulateMultple(puzzle: IPuzzle) {
    var count = 0;
    var beststeps: number[] = [];
    var bestcubes = "";
    do {
        var { isFinished, steps, status } = puzzle.simulateOnce();
        count++;
        if (isFinished && ((steps.length < beststeps.length && beststeps.length != 0) || (beststeps.length == 0))) {
            beststeps = steps;
            bestcubes = status;
            console.log(`${count}th simulation: ${JSON.stringify(beststeps)} | ${JSON.stringify(bestcubes)}`);
        }
    } while (count < 100000);
    if (beststeps.length != 0) {
        console.log("The cube is finished!");
    }
    else {
        console.log("The cube is not finished!");
    }
    console.log('steps:' + steps);
    console.log('status:' + status);
    console.log('beststeps:' + beststeps);
    console.log('beststate:' + bestcubes);
    console.log('count:' + count);
    //exit
}

function main() {
    simulateMultple(new CubePuzzle1([2, 0, 2, 0]))
}

main();
import { CubePuzzle1 } from "./model/CubePuzzle1";
import { CubePuzzle3 } from "./model/CubePuzzle3";
import { CubePuzzle4 } from "./model/CubePuzzle4";
import { IPuzzle } from "./model/base/Interface";
import { CubePuzzle5 } from "./model/CubePuzzle5";

function simulateMultiple(puzzle: IPuzzle) {
    var count = 0;
    var beststeps: number[] = [];
    var bestcubes = "";
    do {
        var { isFinished, steps, status } = puzzle.copy().simulateOnce();
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
    console.log('beststatus:' + bestcubes);
    console.log('count:' + count);
    //exit
}

function main() {
    //输入你想要模拟的谜题
    simulateMultiple(new CubePuzzle5([0,1,2]))
    process.exit(0);
}

main();
class cube {
    constructor(side) {
        this.side = side;
    }

    trigger() {
        this.side = this.side + 1;
        if (this.side > 3) {
            this.side = 0;
        }
    }

    //override stringify
    toString() {
        return `${this.side}`;
    }
}

function checkIsFinished(cubes) {
    // if (cubes[0].side == cubes[1].side && cubes[1].side == cubes[2].side && cubes[2].side == cubes[3].side) {
    if (cubes[0].side == 0 && cubes[1].side == 0 && cubes[2].side == 0 && cubes[3].side == 0) {
        return true;
    }
    return false;
}

function simulateOnce(cubes) {
    var isFinished = false;
    var count = 0;
    //init a empty array named "steps"
    var steps = [];
    while (!isFinished && count < 20) {
        //ramdomly choose a cube
        var index = Math.floor(Math.random() * 4);
        cubes[index].trigger();
        steps.push(index);
        count++;
        isFinished = checkIsFinished(cubes);
    }
    return { isFinished, steps, cubes };
}

function main() {
    var count = 0;
    var beststeps = [];
    var bestcubes = [];
    do {
        var { isFinished, steps, cubes } = simulateOnce([new cube(2), new cube(0), new cube(2), new cube(0)]);
        count++;
        if (isFinished && ((steps.length < beststeps.length && beststeps.length != 0) || (beststeps.length == 0))) {
            beststeps = steps;
            bestcubes = cubes;
        }
    } while (count < 100000);
    if (beststeps.length != 0) {
        console.log("The cube is finished!");
    }
    else {
        console.log("The cube is not finished!");
    }
    console.log('steps:' + steps);
    console.log('cubes:' + cubes);
    console.log('beststeps:' + beststeps);
    console.log('bestcubes:' + bestcubes);
    console.log('count:' + count);
    //exit
    process.exit();
}

main();
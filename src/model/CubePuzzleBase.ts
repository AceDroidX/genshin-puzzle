import { Cube } from "./Cube";
import { ICubePuzzle } from "./ICubePuzzle";
import { IPuzzle } from "./IPuzzle";
export class CubePuzzleBase implements IPuzzle,ICubePuzzle {
    cubes: Cube[];
    constructor(cubes: number[]) {
        this.cubes = [];
        for (var i = 0; i < cubes.length; i++) {
            this.cubes.push(new Cube(cubes[i]));
        }
    }
    trigger(i: number): void {
        throw new Error("Method not implemented.");
    }
    toString() {
        return this.cubes.map(cube => cube.toString()).join(',');
    }
    checkIsFinished() {
        // if (cubes[0].side == cubes[1].side && cubes[1].side == cubes[2].side && cubes[2].side == cubes[3].side) {
        if (this.cubes[0].side == 0 && this.cubes[1].side == 0 && this.cubes[2].side == 0 && this.cubes[3].side == 0) {
            return true;
        }
        return false;
    }
    simulateOnce() {
        var isFinished = false;
        var count = 0;
        var steps = [];
        while (!isFinished && count < 20) {
            //ramdomly choose a cube
            var index = Math.floor(Math.random() * 4);
            this.trigger(index);
            steps.push(index);
            count++;
            isFinished = this.checkIsFinished();
        }
        return { isFinished, steps, status: this.cubes.toString() };
    }
}
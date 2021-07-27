import { CubeBase } from "./CubeBase";
export class CubePuzzleBase {
    cubes: CubeBase[] = [];
    // constructor(cubenumlist: number[]) {
    //     this.cubes = [];
    //     for (var i = 0; i < cubenumlist.length; i++) {
    //         this.cubes.push(new CubeBase(cubenumlist[i]));
    //     }
    // }
    trigger(i: number): void {
        throw new Error("Method not implemented.");
    }
    toString() {
        return this.cubes.map(cube => cube.toString()).join(',');
    }
    checkIsFinished() {
        // if (cubes[0].side == cubes[1].side && cubes[1].side == cubes[2].side && cubes[2].side == cubes[3].side) {
        if (this.cubes[0].value == this.cubes[1].value && this.cubes[1].value == this.cubes[2].value && this.cubes[2].value == this.cubes[3].value) {
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
    copy() {
        throw new Error("Method not implemented.");
        // return new CubePuzzleBase(this.cubes.map(cube => cube.value));
    }
}
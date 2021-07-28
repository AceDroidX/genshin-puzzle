import { Cube4 } from "./base/Cube";
import { CubePuzzleBase } from "./base/CubePuzzleBase";
import { ICubePuzzle } from "./base/Interface";
import { IPuzzle } from "./base/Interface";


//适用的谜题类型:
//条形+旋转
export class CubePuzzle2 extends CubePuzzleBase implements IPuzzle, ICubePuzzle {
    cubes: Cube4[];
    constructor(cubenumlist: number[]) {
        super();
        this.cubes = [];
        for (var i = 0; i < cubenumlist.length; i++) {
            this.cubes.push(new Cube4(cubenumlist[i]));
        }
    }
    trigger(i: number) {
        this.cubes[i].trigger();
        if (i == 0) {
            this.cubes[1].trigger();
        } else if (i == this.cubes.length - 1) {
            this.cubes[i - 1].trigger();
        } else {
            this.cubes[i - 1].trigger();//i-1
            this.cubes[i + 1].trigger();//i+1
        }
    }
    copy() {
        return new CubePuzzle2(this.cubes.map(cube => cube.value));
    }
}
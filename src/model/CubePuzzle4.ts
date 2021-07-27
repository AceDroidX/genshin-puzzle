import { Cube3, Cube4 } from "./Cube";
import { CubePuzzleBase } from "./CubePuzzleBase";
import { ICubePuzzle } from "./Interface";
import { IPuzzle } from "./Interface";

//鸣神大社东北侧的4方块解谜
//https://github.com/AceDroidX/genshin-puzzle/blob/main/doc/20210727180204.png
//图例为simulateMultple(new CubePuzzle4([2,1,2,0]))
export class CubePuzzle4 extends CubePuzzleBase implements IPuzzle, ICubePuzzle {
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
            this.cubes[3].trigger();//i-1
            this.cubes[1].trigger();//i+1
        } else if (i == 3) {
            this.cubes[2].trigger();
            this.cubes[0].trigger();
        } else {
            this.cubes[i - 1].trigger();
            this.cubes[i + 1].trigger();
        }
    }
    copy() {
        return new CubePuzzle4(this.cubes.map(cube => cube.value));
    }
}
import { Cube3 } from "./Cube";
import { CubePuzzleBase } from "./CubePuzzleBase";
import { ICubePuzzle } from "./Interface";
import { IPuzzle } from "./Interface";

//荒海西侧的方块解谜
//https://github.com/AceDroidX/genshin-puzzle/blob/main/doc/20210726151802.png
//图例为simulateMultple(new CubePuzzle3([0,2,0,1]))
export class CubePuzzle3 extends CubePuzzleBase implements IPuzzle,ICubePuzzle {
    cubes: Cube3[];
    constructor(cubenumlist: number[]) {
        super();
        this.cubes = [];
        for (var i = 0; i < cubenumlist.length; i++) {
            this.cubes.push(new Cube3(cubenumlist[i]));
        }
    }
    trigger(i: number) {
        this.cubes[i].trigger();
        if (i == 0) {
            this.cubes[1].trigger();
        } else if (i == 3) {
            this.cubes[2].trigger();
        } else {
            this.cubes[i - 1].trigger();//i-1
            this.cubes[i + 1].trigger();//i+1
        }
    }
    copy(){
        return new CubePuzzle3(this.cubes.map(cube => cube.value));
    }
}
import { Cube3, Cube4 } from "./base/Cube";
import { CubePuzzleBase } from "./base/CubePuzzleBase";
import { ICubePuzzle } from "./base/Interface";
import { IPuzzle } from "./base/Interface";

//适用的谜题类型:
//鸣神大社东北侧的3方块解谜
//https://github.com/AceDroidX/genshin-puzzle/blob/main/doc/20210727180204.png
//图例为simulateMultiple(new CubePuzzle5([2,2,1]))
//鸣神大社西南侧的3方块解谜
//https://github.com/AceDroidX/genshin-puzzle/blob/main/doc/20210727202552.png
//图例为simulateMultiple(new CubePuzzle5([0,1,1]))
//https://github.com/AceDroidX/genshin-puzzle/blob/main/doc/20210727203059.png
//图例为simulateMultiple(new CubePuzzle5([0,1,2]))
//九条阵屋东侧的3方块解谜
//https://github.com/AceDroidX/genshin-puzzle/blob/main/doc/20210727223130.png
//图例为simulateMultiple(new CubePuzzle5([0,1,2]))
export class CubePuzzle5 extends CubePuzzleBase implements IPuzzle, ICubePuzzle {
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
        if (i == 0 || i == 2) {
            this.cubes[1].trigger();//i+1
        } else {
            this.cubes[i - 1].trigger();
            this.cubes[i + 1].trigger();
        }
    }
    copy() {
        return new CubePuzzle5(this.cubes.map(cube => cube.value));
    }
}
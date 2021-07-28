import { Cube3 } from "./base/Cube";
import { CubePuzzleBase } from "./base/CubePuzzleBase";
import { ICubePuzzle } from "./base/Interface";
import { IPuzzle } from "./base/Interface";


//适用的谜题类型:
//亮灯的方块 长条形 数量不限

//例：

//4个方块的长条形
//荒海西侧的方块解谜
//https://github.com/AceDroidX/genshin-puzzle/blob/main/doc/20210726151802.png
//图例为simulateMultiple(new CubePuzzle3([0,2,0,1]))
//稻妻城底的方块解谜
//https://github.com/AceDroidX/genshin-puzzle/blob/main/doc/20210727210637.png
//图例为simulateMultiple(new CubePuzzle3([0,1,2,1]))

//3个方块的长条形
//鸣神大社西南侧的3方块解谜
//https://github.com/AceDroidX/genshin-puzzle/blob/main/doc/20210727202552.png
//图例为simulateMultiple(new CubePuzzle3([0,1,1]))
//https://github.com/AceDroidX/genshin-puzzle/blob/main/doc/20210727203059.png
//图例为simulateMultiple(new CubePuzzle3([0,1,2]))
//九条阵屋东侧的3方块解谜
//https://github.com/AceDroidX/genshin-puzzle/blob/main/doc/20210727223130.png
//图例为simulateMultiple(new CubePuzzle3([0,1,2]))
//九条阵屋东北侧的3方块解谜
//https://github.com/AceDroidX/genshin-puzzle/blob/main/doc/20210728174646.png
//图例为simulateMultiple(new CubePuzzle3([3,0,0]))

//3个方块的长条形
//踏鞴砂东侧的方块解谜
//https://github.com/AceDroidX/genshin-puzzle/blob/main/doc/20210728184624.png
//图例为simulateMultiple(new CubePuzzle3([2,2,1,0,0]))
export class CubePuzzle3 extends CubePuzzleBase implements IPuzzle, ICubePuzzle {
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
        } else if (i == this.cubes.length - 1) {
            this.cubes[i - 1].trigger();
        } else {
            this.cubes[i - 1].trigger();//i-1
            this.cubes[i + 1].trigger();//i+1
        }
    }
    copy() {
        return new CubePuzzle3(this.cubes.map(cube => cube.value));
    }
}
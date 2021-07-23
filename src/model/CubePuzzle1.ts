import { CubePuzzleBase } from "./CubePuzzleBase";

//荒海地底的方块解谜(正方形)
export class CubePuzzle1 extends CubePuzzleBase {
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
}
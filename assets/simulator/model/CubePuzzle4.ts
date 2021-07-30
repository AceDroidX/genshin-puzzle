import { Cube4 } from './base/Cube'
import { CubePuzzleBase } from './base/CubePuzzleBase'
import { ICubePuzzle, IPuzzle } from './base/Interface'

// 适用的谜题类型:
// 环形+旋转
// 荒海地底的方块解谜(正方形)
// https://github.com/AceDroidX/genshin-puzzle/blob/main/doc/20210723181620.png
// 踏鞴砂东南侧的方块解谜
// https://github.com/AceDroidX/genshin-puzzle/blob/main/doc/20210730023857.png
// 九条阵屋东北侧的方块解谜
// https://github.com/AceDroidX/genshin-puzzle/blob/main/doc/20210728174646.png
// 图例为simulateMultiple(new CubePuzzle1([3,0,0]))
export class CubePuzzle4 extends CubePuzzleBase implements IPuzzle, ICubePuzzle {
    cubes: Cube4[];
    constructor (cubenumlist: number[]) {
      super()
      this.cubes = []
      for (let i = 0; i < cubenumlist.length; i++) {
        this.cubes.push(new Cube4(cubenumlist[i]))
      }
    }

    trigger (i: number) {
      this.cubes[i].trigger()
      if (i == 0) {
        this.cubes[3].trigger()// i-1
        this.cubes[1].trigger()// i+1
      } else if (i == 3) {
        this.cubes[2].trigger()
        this.cubes[0].trigger()
      } else {
        this.cubes[i - 1].trigger()
        this.cubes[i + 1].trigger()
      }
    }

    copy () {
      return new CubePuzzle4(this.cubes.map(cube => cube.value))
    }
}

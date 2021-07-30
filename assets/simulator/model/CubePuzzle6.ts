import { Cube4 } from './base/Cube'
import { CubePuzzleBase } from './base/CubePuzzleBase'
import { ICubePuzzle, IPuzzle } from './base/Interface'

// 类似于puzzle5，但是中间的方块无法触发

// 九条阵屋西北侧的方块解谜
// https://github.com/AceDroidX/genshin-puzzle/blob/main/doc/20210728173144.png
// 图例为simulateMultiple(new CubePuzzle6([0,3,0]))
export class CubePuzzle6 extends CubePuzzleBase implements IPuzzle, ICubePuzzle {
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
      if (i == 0 || i == 2) {
        this.cubes[1].trigger()// i+1
      } else {
        this.cubes[i - 1].trigger()
        this.cubes[i + 1].trigger()
      }
    }

    // 中间的方块无法触发，需要重写
    simulateOnce () {
      let isFinished = false
      let count = 0
      const steps = []
      while (!isFinished && count < 20) {
        const index = Math.floor(Math.random() * 2) * 2// 0 or 2
        this.trigger(index)
        steps.push(index)
        count++
        isFinished = this.checkIsFinished()
      }
      return { isFinished, steps, status: this.cubes.toString() }
    }

    copy () {
      return new CubePuzzle6(this.cubes.map(cube => cube.value))
    }
}

import { Cube3, Cube4 } from './base/Cube'
import { CubePuzzleBase } from './base/CubePuzzleBase'
import { ICubePuzzle, IPuzzle } from './base/Interface'

// TODO:添加新类型
export class CubePuzzle5 extends CubePuzzleBase implements IPuzzle, ICubePuzzle {
    cubes: Cube3[];
    constructor (cubenumlist: number[]) {
      super()
      this.cubes = []
      for (let i = 0; i < cubenumlist.length; i++) {
        this.cubes.push(new Cube3(cubenumlist[i]))
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

    copy () {
      return new CubePuzzle5(this.cubes.map(cube => cube.value))
    }
}

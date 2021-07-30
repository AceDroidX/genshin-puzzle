import { Cube4 } from './base/Cube'
import { CubePuzzleBase } from './base/CubePuzzleBase'
import { ICubePuzzle, IPuzzle } from './base/Interface'

// 荒海地底的方块解谜(条形)
export class CubePuzzle2 extends CubePuzzleBase implements IPuzzle, ICubePuzzle {
    cubes: Cube4[];
    constructor (cubenumlist: number[]) {
      super()
      this.cubes = []
      for (let i = 0; i < cubenumlist.length; i++) {
        this.cubes.push(new Cube4(cubenumlist[i]))
      }
    }

    trigger (i: number) {
      switch (i) {
        case 0:
          this.cubes[0].trigger()
          this.cubes[2].trigger()
          break
        case 1:
          this.cubes[0].trigger()
          this.cubes[1].trigger()
          this.cubes[2].trigger()
          break
        case 2:
          this.cubes[0].trigger()
          this.cubes[2].trigger()
          this.cubes[4].trigger()
          break
        case 3:
          this.cubes[2].trigger()
          this.cubes[3].trigger()
          this.cubes[4].trigger()
          break
        case 4:
          this.cubes[2].trigger()
          this.cubes[4].trigger()
          break
      }
    }

    copy () {
      return new CubePuzzle2(this.cubes.map(cube => cube.value))
    }
}

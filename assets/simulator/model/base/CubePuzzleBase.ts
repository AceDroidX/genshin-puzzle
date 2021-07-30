import { CubeBase } from './CubeBase'
export class CubePuzzleBase {
    cubes: CubeBase[] = [];
    // constructor(cubenumlist: number[]) {
    //     this.cubes = [];
    //     for (var i = 0; i < cubenumlist.length; i++) {
    //         this.cubes.push(new CubeBase(cubenumlist[i]));
    //     }
    // }
    trigger (_i: number): void {
      throw new Error('Method not implemented.')
    }

    toString () {
      return this.cubes.map(cube => cube.toString()).join(',')
    }

    checkIsFinished () {
      // if (cubes[0].side == cubes[1].side && cubes[1].side == cubes[2].side && cubes[2].side == cubes[3].side) {
      for (let i = 0; i < this.cubes.length - 1; i++) {
        if (this.cubes[i].value != this.cubes[i + 1].value) {
          return false
        }
      }
      return true
    }

    simulateOnce () {
      let isFinished = false
      let count = 0
      const steps = []
      while (!isFinished && count < 20) {
        // ramdomly choose a cube
        const index = Math.floor(Math.random() * this.cubes.length)
        this.trigger(index)
        steps.push(index)
        count++
        isFinished = this.checkIsFinished()
      }
      return { isFinished, steps, status: this.cubes.toString() }
    }

    copy () {
      throw new Error('Method not implemented.')
      // return new CubePuzzleBase(this.cubes.map(cube => cube.value));
    }
}

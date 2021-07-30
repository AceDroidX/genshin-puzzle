import { CubePuzzle2 } from './model/CubePuzzle2'
import { CubePuzzle1 } from './model/CubePuzzle1'
import { CubePuzzle3 } from './model/CubePuzzle3'
import { CubePuzzle4 } from './model/CubePuzzle4'
import { IPuzzle } from './model/base/Interface'
import { Logger } from './Logger'

function simulateMultiple (puzzle: IPuzzle) {
  let count = 0
  let beststeps: number[] = []
  let bestcubes = ''
  const logger = new Logger()
  do {
    // eslint-disable-next-line no-var
    var { isFinished, steps, status } = puzzle.copy().simulateOnce()
    count++
    if (isFinished && ((steps.length < beststeps.length && beststeps.length != 0) || (beststeps.length == 0))) {
      beststeps = steps
      bestcubes = status
      logger.log(`${count}th simulation: ${JSON.stringify(beststeps)} | ${JSON.stringify(bestcubes)}`)
    }
  } while (count < 100000)
  if (beststeps.length != 0) {
    logger.log('The cube is finished!')
  } else {
    logger.log('The cube is not finished!')
  }
  logger.log('steps:' + steps)
  logger.log('status:' + status)
  logger.log('beststeps:' + beststeps)
  logger.log('beststatus:' + bestcubes)
  logger.log('count:' + count)
  return { msg: '计算成功', steps: beststeps, status: bestcubes, count, log: logger.history }
  // exit
}

function simulate (type: number, cubestr: string) {
  if (cubestr == '') {
    return { msg: '计算失败:数组为空', steps: [], status: '', count: 0, log: '' }
  }
  // var type = parseInt(typestr)
  const cube = cubestr.split(',').map(function (x) {
    return parseInt(x)
  })
  let puzzle: IPuzzle
  switch (type) {
    case 0:
      puzzle = new CubePuzzle1(cube)
      break
    case 1:
      puzzle = new CubePuzzle2(cube)
      break
    case 2:
      puzzle = new CubePuzzle3(cube)
      break
    case 3:
      puzzle = new CubePuzzle4(cube)
      break
    default:
      return { msg: '计算失败:类型选择有误', steps: [], status: '', count: 0, log: '' }
  }
  return simulateMultiple(puzzle)
}

// function main () {
//   // 输入你想要模拟的谜题
//   simulateMultiple(new CubePuzzle3([2, 0, 0, 0]))
//   process.exit(0)
// }

export default simulate
// main();

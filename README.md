# genshin-puzzle

穷举得出原神稻妻方块解谜的步骤

Solve the Inazuma cube puzzle in Genshin Impact.

TypeScript的练手小作品

Example:
```typescript
simulateMultiple(new CubePuzzle3([0,2,0,1]))
//output:

// > genshin-puzzle@1.0.0 serve
// > tsc&&node src/index.js

// 1th simulation: [0,0,3,1,2] | "0,0,0,0"
// The cube is finished!
// steps:1,3,3,3,2,0,2,0,1,1,3,0,3,2,3,3,2,3,3,3
// status:0,0,2,0
// beststeps:0,0,3,1,2
// beststatus:0,0,0,0
// count:100000
```
![20210723181620.png](https://github.com/AceDroidX/genshin-puzzle/blob/main/doc/20210726151802.png)
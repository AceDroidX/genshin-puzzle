# genshin-puzzle

https://acedroidx.github.io/genshin-puzzle/

穷举得出原神稻妻方块解谜的步骤

Solve the Inazuma cube puzzle in Genshin Impact.

TypeScript的练手小作品

Example:
![20210723181620.png](https://cdn.jsdelivr.net/gh/AceDroidX/genshin-puzzle/static/screenshot/20210726151802.png)
1.选择谜题类型  
条形+亮灯  
2.输入描述谜题的数组  
0,2,0,1  
3.开始解谜  
计算结果：计算成功  
操作步骤：[ 0, 1, 2 ]  
最后状态：2,2,2,2  
模拟次数：100000  
查看详细日志：  
```typescript
1th simulation: [1,2,2,0,0,3,3,0,3,0,1,1,1,1,3,1,0,1,2,2] | "0,0,0,0"
2th simulation: [0,1,2] | "2,2,2,2"
The cube is finished!
steps:2,2,0,2,0,2,3,1
status:0,0,0,0
beststeps:0,1,2
beststatus:2,2,2,2
count:100000
```

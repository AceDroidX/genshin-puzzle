import { CubeBase } from "./CubeBase";

export interface ICubePuzzle {
    //触发某一个方块后的事件
    cubes:CubeBase[];
    trigger(i: number): void;
}

export interface IPuzzle {
    checkIsFinished(): boolean;
    simulateOnce(): { isFinished: boolean, steps: number[], status: string }
    copy(): IPuzzle;
}
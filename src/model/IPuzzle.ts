export interface IPuzzle {
    checkIsFinished(): boolean;
    simulateOnce(): { isFinished: boolean, steps: number[], status: string }
}
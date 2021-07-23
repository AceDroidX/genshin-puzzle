export class Cube {
    side: number;
    constructor(side: number) {
        this.side = side;
    }

    //触发后顺时针旋转
    trigger() {
        this.side = this.side + 1;
        if (this.side > 3) {
            this.side = 0;
        }
    }

    //override stringify
    toString() {
        return `${this.side}`;
    }
}
import { CubeBase } from "./CubeBase";
export class Cube4 extends CubeBase {

    //触发后顺时针旋转
    trigger() {
        this.value = this.value + 1;
        if (this.value > 3) {
            this.value = 0;
        }
    }

    //override stringify
    toString() {
        return `${this.value}`;
    }
}

export class Cube3 extends CubeBase {

    trigger() {
        this.value = this.value + 1;
        if (this.value > 2) {
            this.value = 0;
        }
    }

    //override stringify
    toString() {
        return `${this.value}`;
    }
}
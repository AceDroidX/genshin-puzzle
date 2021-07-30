export class CubeBase {
    value: number;
    constructor (value: number) {
      this.value = value
    }

    // 触发后事件
    trigger () {
      throw new Error('Method not implemented.')
    }

    // override stringify
    toString () {
      return `${this.value}`
    }
    // copy
    // copy() {
    //     throw new Error("Method not implemented.");
    //     return new CubeBase(this.value);
    // }
}

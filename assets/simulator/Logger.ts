
export class Logger {
    history:string=''

    public log (message: string): void {
      console.log(message)
      this.history += message + '\n'
    }

  // public error(message: string): void {
  //     console.error(message);
  // }
}

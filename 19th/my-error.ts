export class MyError {
  constructor(
    protected statusCode: number,
    protected errorType: string,
    private message: string,
    private errorData: any = undefined
  ) {}
}

export class ApiResponse {
  public content: any;
  public response: any;

  constructor(response: any, content: any) {
    this.response = response;
    this.content = content;
  }
}

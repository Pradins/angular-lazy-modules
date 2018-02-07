export abstract class GoalAbstract {

  constructor() {}

  protected test(): void {
    console.log('abstract test is able');
  }

  protected overrideTest(): void {
    console.log('call from super');
  }
}

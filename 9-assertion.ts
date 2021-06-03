// Assertions
// 타입을 확신할 때 사용 할 수 있다.
// 이럴 경우 타입스크립트가 타입 에러를 잡아내지 못한다.
// 정말 100% 확신이 아닌 경우 가급적 사용을 하지 않는 것이 좋다.

{
  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  (result as string).length;

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  numbers!.push(2);
}

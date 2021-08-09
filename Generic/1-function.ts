// 안좋은 예시
{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not");
    }
    return arg;
  }
}

// 제네릭 사용
function checkNotNull<T>(arg: T | null): T {
  if (arg === null) {
    throw new Error("not");
  }
  return arg;
}

const number = checkNotNull(123);
const boal = checkNotNull(true);

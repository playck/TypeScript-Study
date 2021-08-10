// class 에서 Generic을 사용해보기

interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

const either = new SimpleEither(4, 5);
either.left();
either.right();

// 제네릭 활용

const best = new SimpleEither(4, "hello");

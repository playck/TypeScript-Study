function add(num1: number, num2: number): number {
  return num1 + num2;
}

// fetch

function fetchNum(id: string): Promise<number> {
  // code ...
  return new Promise((resolve, reject) => {
    resolve(100);
  });
}

// 변수? 이렇게 쓰면 인자를 전달해도 되고 안해도 된다.

function printName(firstName: string, lastName?: string) {
  console.log(firstName);
  console.log(lastName);
}

printName("jin");

// Default parameter

function printMessage(messgae: string = "default message") {
  console.log(messgae);
}

// Rest parameter

function addNumbers(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b);
}

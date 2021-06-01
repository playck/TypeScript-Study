const frutis: string[] = ["🍎", "🍌"]; // 이 방법이 best
const scroes: Array<number> = [1, 2, 3];

function printArray(fruits: readonly string[]) {}

// Tuple -> interface , type alias, class로 대체 가능
// 서로 다른 타입의 데이터를 담을 수 있다.
// 권장하지 않음

let student: [string, number];
student = ["name", 123];
student[0]; // name

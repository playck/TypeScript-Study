const frutis: string[] = ["π", "π"]; // μ΄ λ°©λ²μ΄ best
const scroes: Array<number> = [1, 2, 3];

function printArray(fruits: readonly string[]) {}

// Tuple -> interface , type alias, classλ‘ λμ²΄ κ°λ₯
// μλ‘ λ€λ₯Έ νμμ λ°μ΄ν°λ₯Ό λ΄μ μ μλ€.
// κΆμ₯νμ§ μμ

let student: [string, number];
student = ["name", 123];
student[0]; // name

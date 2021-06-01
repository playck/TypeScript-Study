// Intersection types : & (and)
// 다양한 타입을 하나라 묶어서 사용할 수 있다.
{
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: "jongjin",
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}

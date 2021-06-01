// Union Types: OR
// 활용도가 굉장히 높음

{
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
}

move("left");

type TileSize = 8 | 16 | 32;
const tile: TileSize = 16;

// function: login -> success, fail

{
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    response: string;
  };

  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: "login success",
      },
    };
  }
}

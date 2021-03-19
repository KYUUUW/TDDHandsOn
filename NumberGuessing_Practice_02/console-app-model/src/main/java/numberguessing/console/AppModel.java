package numberguessing.console;

import numperguessing/PositiveIntegerGenerator;

// implementation of game loop
public final class AppModel {
  // 게임 루프를 제공하는데 필요한 인터페이스 제공
  public AppModel(PositiveIntegerGenerator generator) {

  }


  public boolean isCompleted() {
    return true;
  }

  // Game model 이 지나가며 만들어진 출력물을 반환하고 버퍼를 비운다.
  public String flushOutput() {
    return null;
  }

  // 사용자로부터 온 입력을 처리한다.
  public void processInput(String input) {

  }
}
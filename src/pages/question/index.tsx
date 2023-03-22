import { useEffect, useRef, useState } from "react";
import { Button, ButtonArea, Modal, Timer, Title } from "../../components";
import { useRandom, useRandomColor } from "../../hooks";
import { StyledContainer } from "./styles";

type Alternative = {
  id: string;
  value: string;
};

const fakeAlternatives: Alternative[] = [
  { id: "1factory", value: "Factory" },
  { id: "2abstract", value: "Abstract" },
  { id: "3decorator", value: "Decorator" },
  { id: "4prototype", value: "Prototype" },
];

type TimerState = "waiting" | "running" | "stoped";

export function QuestionPage() {
  const [timerState, setTimerState] = useState<TimerState>("waiting");
  const [alternatives] = useRandom<Alternative>(fakeAlternatives);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const lastSelectedButton = useRef<string | null>(null);
  const [correctAlternative] = useState<string | null>(null);
  const buttonColors = useRandomColor();

  function onClickButton(id: string) {
    if (timerState !== "running") {
      return;
    }

    if (selectedButton === id) {
      setSelectedButton(null);
      return;
    }

    lastSelectedButton.current = id;
    setSelectedButton(id);
  }

  function getColor(id: string, index: number) {
    if (timerState === "stoped" && selectedButton === null) {
      return "gray";
    }

    if (selectedButton === null || selectedButton === id) {
      return buttonColors[index];
    }

    return "gray";
  }

  function onTimeEnd() {
    setTimerState("stoped");

    if (selectedButton !== null || lastSelectedButton.current === null) {
      return;
    }

    setSelectedButton(lastSelectedButton.current);
  }

  function isCorrectAlternative(id: string) {
    if (correctAlternative === null || timerState !== "stoped") {
      return null;
    }

    return String(correctAlternative === id);
  }

  return (
    <StyledContainer center>
      <Modal>
        <Timer value={5} run={timerState === "running"} onEnd={onTimeEnd} />
        <Title>
          ❓ What design pattern can dynamically add responsibilities to an
          object?
        </Title>
        <ButtonArea>
          {alternatives.map((item, index) => (
            <Button
              key={item.id}
              color={getColor(item.id, index)}
              onClick={() => onClickButton(item.id)}
              data-correct-alternative={isCorrectAlternative(item.id)}
            >
              {item.value}
            </Button>
          ))}
        </ButtonArea>
      </Modal>
    </StyledContainer>
  );
}

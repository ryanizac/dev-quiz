import { useEffect, useRef, useState } from "react";
import { Container } from "./styles";

export function Timer(props: Timer.Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef(props.value);

  function updateUI(value: number) {
    if (!containerRef.current) {
      return;
    }

    containerRef.current.innerHTML = value + "s";
  }

  function decrement() {
    const currentValue = timeRef.current;

    if (currentValue === 0) {
      return 0;
    }

    return --timeRef.current;
  }

  function end(interval: number) {
    clearInterval(interval);
    props.onEnd?.();
  }

  useEffect(() => {
    if (!props.run) {
      return;
    }

    const interval = setInterval(() => {
      const newValue = decrement();
      updateUI(newValue);

      if (newValue === 0) {
        end(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [props.run]);

  return (
    <Container ref={containerRef} run={props.run} value={props.value}>
      {props.value}s
    </Container>
  );
}

export namespace Timer {
  export type Props = {
    value: number;
    run?: boolean;
    onEnd?: () => void;
  };
}

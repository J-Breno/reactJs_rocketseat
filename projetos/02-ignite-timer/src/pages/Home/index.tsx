import { Play } from "phosphor-react";
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmoutInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";

export function Home() {
  return (
    <>
      <HomeContainer>
        <form action="">
          <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput id="task" placeholder="dê um nome para o seu projeto" />
            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmoutInput
              type="number"
              id="minutesAmount"
              placeholder="00"
            />
            <span>minutos.</span>
          </FormContainer>
          <CountDownContainer>
            <span>0</span>
            <span>0</span>
            <Separator>:</Separator>
            <span>0</span>
            <span>0</span>
          </CountDownContainer>
          <StartCountdownButton disabled type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        </form>
      </HomeContainer>
    </>
  );
}

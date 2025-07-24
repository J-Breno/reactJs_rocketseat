import { createContext, useReducer, useState, type ReactNode } from "react";
import { ActionType, CyclesReducer, type Cycle } from '../reducers/cycles'


interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

interface CycleContextType {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  interruptCurrentCycle: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
}

export const CycleContext = createContext({} as CycleContextType);

interface CycleContextProviderProps {
  children: ReactNode;
}



export function CycleContextProvider({ children }: CycleContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    CyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    }
  );

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const { cycles, activeCycleId } = cyclesState;

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: ActionType.MARK_CURRENT_CYCLE_AS_FINISHED,
      payload: {
        activeCycleId,
      },
    });
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };
    dispatch({
      type: ActionType.ADD_NEW_CYCLE,
      payload: {
        newCycle,
      },
    });

    setAmountSecondsPassed(0);
  }

  function interruptCurrentCycle() {
    dispatch({
      type: ActionType.INTERRUPT_CURRENT_CYCLE,
      payload: {
        activeCycleId,
      },
    });
  }

  return (
    <>
      <CycleContext.Provider
        value={{
          cycles,
          activeCycle,
          activeCycleId,
          amountSecondsPassed,
          markCurrentCycleAsFinished,
          setSecondsPassed,
          createNewCycle,
          interruptCurrentCycle,
        }}
      >
        {children}
      </CycleContext.Provider>
    </>
  );
}

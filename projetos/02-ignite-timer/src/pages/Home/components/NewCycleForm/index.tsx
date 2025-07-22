import { FormContainer, MinutesAmoutInput, TaskInput } from "./styles";

export function NewCycleForm() {
  return (
    <>
      <FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput  
          id="task"
          list="task-suggestions"
          placeholder="dê um nome para o seu projeto"
          disabled={!!activeCycle}
          {...register("task")}
        />
        <datalist id="task-suggestions">
          <option value="Projeto 1" />
        </datalist>
        <label htmlFor="minutesAmount">durante</label>
        <MinutesAmoutInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={1}
          max={60}
          disabled={!!activeCycle}
          {...register("minutesAmount", { valueAsNumber: true })}
        />
        <span>minutos.</span>
      </FormContainer>
    </>
  );
}

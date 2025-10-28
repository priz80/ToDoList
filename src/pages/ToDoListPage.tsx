import { Form } from "../components/form/Form";
import { Header } from "../components/Header/Header";
import { ToDoList } from "../components/ToDoList/ToDoList";

export const ToDoListPage = () => {
  return (
    <>
      <Header />
      <Form />
      <ToDoList />
    </>
  );
};

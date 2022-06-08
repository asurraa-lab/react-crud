import { Button, Checkbox, List, Typography } from "antd";
import { FC, Fragment } from "react";
import { TodoInterface } from "../../apps/App";

type CallbackData = (data: TodoInterface[]) => void;

export interface CardTodoProps {
  todos: TodoInterface[];
  deleteCallback: CallbackData;
  editCallback: CallbackData;
}

export const CardTodo: FC<CardTodoProps> = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <List
          bordered
          dataSource={props.todos}
          renderItem={(item) => {
            return (
              <List.Item
                actions={[
                  <Checkbox
                    onChange={(e) => {
                      const value = e.target.checked;

                      const editedTodos = props.todos.map((t) => {
                        if (t.id === item.id) {
                          return { ...t, isDone: value };
                        }
                        return { ...t };
                      });
                      props.editCallback(editedTodos);
                    }}
                    checked={item.isDone}
                  />,
                  <Button
                    type="primary"
                    size="small"
                    onClick={() => {
                      const dataWithDelete = props.todos.filter(
                        (oldTOdo) => oldTOdo.id !== item.id
                      );
                      props.deleteCallback(dataWithDelete);
                    }}
                  >
                    Delete
                  </Button>,
                ]}
              >
                <span
                  style={{
                    textDecoration: item.isDone ? "line-through" : "none",
                  }}
                >
                  {item.description}
                </span>
              </List.Item>
            );
          }}
        />
      </div>
    </div>
  );
};

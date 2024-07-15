/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

interface TodoListProps {
  todoList: any;
  handleDelete: any;
  handleEdit: any;
  handleSave: any;
}

const TodoList: React.FC<TodoListProps> = ({
  todoList,
  handleDelete,
  handleEdit,
  handleSave,
}) => {
  return (
    <>
      {todoList.map((item: any) => (
        <div
          key={item?.id}
          style={{
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            width: "22.5vw",
            marginTop: "20px",
            background: "#8d4f93",
            minHeight: "5vh",
            display: "flex",
            alignItems: "center",
            borderRadius: "8px",
            //wordWrap: "break-word",
            //overflowWrap: "break-word",
            //overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "1px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flex: "1",
            }}
          >
            <div style={{}}>
              <p
                style={{
                  color: "#fff",
                  marginLeft: "5px",
                  //  textWrap: "wrap",
                  wordBreak: "break-word",
                }}
              >
                {!item?.isEditable ? (
                  <del>{item?.todoData}</del>
                ) : (
                  item?.todoData
                )}
              </p>
            </div>
            {item?.isEditable && (
              <div style={{ marginRight: "5px" }}>
                <DoneOutlineIcon
                  sx={{ color: "#fff", cursor: "pointer" }}
                  onClick={() => {
                    handleSave(item);
                  }}
                />
                <EditIcon
                  sx={{ color: "#fff", cursor: "pointer" }}
                  onClick={() => {
                    handleEdit(item);
                  }}
                />
                <DeleteIcon
                  sx={{ color: "#fff", cursor: "pointer" }}
                  onClick={() => {
                    handleDelete(item);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;

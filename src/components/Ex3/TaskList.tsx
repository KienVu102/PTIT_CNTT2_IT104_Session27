import { Link } from "react-router-dom";
import { tasks } from "./task";

function TaskList() {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Danh sách công việc</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {tasks.map((task) => (
          <div
            key={task.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <Link to={`/task/${task.id}`}>Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;

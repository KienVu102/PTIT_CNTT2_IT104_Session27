import { useParams, useNavigate } from "react-router-dom";
import { tasks } from "./task";

function TaskDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Công việc không tồn tại</h2>
        <button
          onClick={() => navigate(-1)}
          style={{
            marginTop: "10px",
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Quay lại
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Quay lại
      </button>
    </div>
  );
}

export default TaskDetail;

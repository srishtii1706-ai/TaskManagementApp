function App() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Task Management Application</h1>

      <button>Add Task</button>

      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          marginTop: "20px",
          width: "300px",
        }}
      >
        <h3>Complete UI Project</h3>
        <p>Create Login and Dashboard pages</p>
        <p>Status: Pending</p>

        <button>Edit</button>
        <button style={{ marginLeft: "10px" }}>Delete</button>
      </div>
    </div>
  );
}

export default App;

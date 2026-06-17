function App() {
  const[name,setName] = useState(""); 
    const[email,setEmail] = useState("");
      const[deparment,setDepartment] = useState("");  
        const[age,setAge] = useState("");
        
          const[students,setStudents] = useState([]); 

            const[editIndex,setIndex] = useState(null);
             
  return (
    <div 
      style={{
        width: "700px",
        margin: "30px auto",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)"
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        Learner Registration
      </h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Enter Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        style={inputStyle}
      />

      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={inputStyle}
      />

      <button onClick={handleSubmit} style={buttonStyle}>
        {editIndex !== null ? "Update Student" : "Add Student"}
      </button>

      <h2>Student List</h2>
      <tabel
      border="1"
      cellPadding="10" 
      style={{
        width:"100%",
        borderCollapse:
        "colllapse"

      }}
      >

      </tabel>
    </div>
  );
}
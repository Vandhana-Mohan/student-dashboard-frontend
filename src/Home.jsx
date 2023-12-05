import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";

function Home() {
  const [showStudent, setShowStudent] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function getStudents() {
      let req = await fetch("http://localhost:3333/students");
      let res = await req.json();
      setShowStudent(res.students);
    }
    getStudents();
  }, []);
  // console.log({showStudent})
  return (
    <div>
      <Navbar />
      <Link to="/new">
        <button>Add New Student</button>
      </Link>
      <br />
      <br />
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(event) => {
          setSearchQuery(event.target.value);
        }}
      />{" "}
      <br /> <br />
      <input type="text" placeholder="Search by tag" />
      {showStudent?.map((student) => {
        const fullName = `${student.firstName} ${student.lastName}`;
        if (
          searchQuery &&
          !fullName.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          return null;
        }
        return (
          <div key={student.id}>
            <Link to={`/students/${student.id}`}>
              <p>{fullName}</p>
              <img
                src={student.pic}
                height={50}
                width={50}
                alt="{student.firstName} {student.lastName}"
              />
            </Link>
            <p> {student.email} </p>
            <p> {student.company} </p>
            <p> {student.skill} </p>{" "}
          </div>
        );
      })}
    </div>
  );
}

export default Home;

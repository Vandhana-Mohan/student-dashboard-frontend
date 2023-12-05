import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import UpdateStudentForm from "../Components/UpdateStudentForm";
// import { useEffect, useState } from "react";

function StudentsProfile() {
  const { id } = useParams();
  // const [student, setStudent] = useState()
  // useEffect(() => {
  //   async function getStudentById(){
  //     let req = await fetch(`http://localhost:3333/students/${id}`)
  //     let res = await req.json()
  //     if(req.ok) {
  //       setStudent(res)
  //     }
  //   }
  //   getStudentById()
  // }, [])
  return (
    <div>
      <Navbar />
      <h1>Students Profile : {id} </h1>;
      <UpdateStudentForm />
    </div>
  );
}

export default StudentsProfile;

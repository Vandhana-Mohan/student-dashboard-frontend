import { useRef } from "react";

function NewStudentForm() {
  const formRef = useRef();

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Form", formRef.current);

    const formObject = new FormData(formRef.current)
    const data = {}
    for(const entry of formObject){
      data[entry[0]] = entry[1]
    }

    console.log(data)

    let req = await fetch("http://localhost:3333/students", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      method: "POST",
    });
    let res = await req.json();
    console.log("res", res);
  }

  return (
    <div>
      <h4> Add Student</h4>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input name="first_name" type="text" placeholder="First Name" /> <br />
        <input name="last_name" type="text" placeholder="Last Name" /> <br />
        <input name="email" type="text" placeholder="Email" /> <br />
        <input name="company" type="text" placeholder="Company" /> <br />
        <input name="skill" type="text" placeholder="Skill" /> <br />
        <input name="city" type="text" placeholder="City" /> <br />
        <input name="pic" type="text" placeholder="Pic Url" /> <br />
        <button type="submit"> Add </button> <br />
      </form>
    </div>
  );
}

export default NewStudentForm;

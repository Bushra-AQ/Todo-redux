import React , {useState} from "react";
import { connect } from "react-redux";
import { add_task } from "../../redux/action/action";

import "./Input.css";

const Input = (props) => {
  const [task, setTask] = useState('');
  const handleData = () => {
    // const taskText = document.getElementById("record").value;
    props.add_task(task); 
    setTask('')
  };

  return (
    <>
      <h1 style={{ marginTop: "50px" }}>Record</h1>
      <div className="container">
        <br></br>
        <input className="record" type="text" id="record" name="record"  value={task}
            onChange={(e) => setTask(e.target.value)} />
        <button className="btn" onClick={handleData}>
          Add List
        </button>
      </div>
    </>
  );
};

export default connect(null, { add_task })(Input);

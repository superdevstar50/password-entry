import { useState } from "react";
import "./App.css";

import { usePasswordEntry } from "password-entry";

function App() {
  const [name, setName] = useState("");
  const { PasswordEntryElement, password, validate } = usePasswordEntry({
    showLabel: true,
  });

  const [error, setError] = useState("");

  const checkValidation = () => {
    let error = "";
    if (!name) error = "Name field empty!";
    else {
      const { error: _error, message } = validate();
      if (_error) error = message;
    }
    setError(error);
    return error;
  };

  const handleSubmit = () => {
    if (checkValidation()) {
      return;
    }

    //do something

    console.log(name, password);
    alert(`${name} ${password} Entered`);
  };

  return (
    <div className="container">
      <h3>User Register</h3>
      <div className="inputForm">
        <input
          type="text"
          placeholder="User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        {PasswordEntryElement}
      </div>
      {error && <div className="errorMsg">{error}</div>}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;

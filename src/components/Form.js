import React, { useState } from "react";
// commented out code is what the starter code was.
function Form() {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  const [formData, setFormData] = useState({
     firstName: 'Ryan',
     lastName: 'Kotsovolos',
  });

  // function handleFirstNameChange(event) {
    // setFirstName(event.target.value);
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value,
  //   });
  // }

  // function handleLastNameChange(event) {
    // setLastName(event.target.value); <--- was original code
  //   setFormData({
  //     ...formData,
  //     lastName: event.target.value,
  //   })
  // }

  //if our inputs elements have a name attribute we can actually write one generic function to handle both name changes function above. 

  function handleChange(event) {
    //name is the KEY in the formData object we are trying to update.
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  //Lets add 'name' attributes to 
  return (
    <form>
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

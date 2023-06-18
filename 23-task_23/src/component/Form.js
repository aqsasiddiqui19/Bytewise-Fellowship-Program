import { useState } from "react";
import "./Form.css"

export default function Multiple() {
  const [formData, setFormData] = useState({name: "",email: "",message: "", pasword:"",});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}, Pasword: ${formData.pasword}`
    );
};

  return (
    <div className="container">
      <h1>Form</h1>
    <form onSubmit={handleSubmit} className="">
<div>
      <label for="name" >Name: </label>
      <input type="text" placeholder="enter your name" id="name" name="name" value={formData.name} onChange={handleChange}/>
</div> 

      <label for="email">Email:  </label>
      <input type="email" placeholder="enter your email" id="email" name="email" value={formData.email} onChange={handleChange}/>
<div>

      <label for="pasword"> Pasword: </label>
      <input type="pasword" placeholder="enter your pasword" id="pasword" name="pasword" value={formData.pasword} onChange={handleChange}/>
      </div>

      <div>
     <label for="message"> Message:</label>
     <textarea placeholder="write something..." id="message" name="message" rows="4" cols="50" value={formData.message} onChange={handleChange}>
     </textarea>
      </div>

<div>
<button type="submit">Submit</button>    
  </div>
    </form>
    </div>  );
}

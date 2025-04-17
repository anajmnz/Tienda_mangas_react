import { useState } from "react";

function Contact() {
  
    const [formData, setFormData] = useState({name: "",email: "",message: ""});
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
      );};

      return (
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
      
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
      
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>
      
            <button type="submit">Enviar</button>
          </form>
          </>
        );
  
}
  
  export default Contact


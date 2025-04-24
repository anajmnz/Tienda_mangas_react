import { useState } from "react";
import './contact.css'

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
        <> <h1 id="h1Contacto">¡Contacta con nosotros!</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <fieldset>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
            </fieldset>
            <fieldset>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
            </fieldset>
            <fieldset>
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>
            </fieldset>
            <button id="button" type="submit">Enviar</button>

          </form>
          </>
        );
  
}
  
  export default Contact


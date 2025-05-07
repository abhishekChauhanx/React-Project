import React from 'react'
import "./Contact.css"
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "6c09b3ae-9e66-4223-90b2-a214e34cd0f6");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        event.target.reset()
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact' id='Contact'>
      <div className="contact-col">
        <h3>Send Us A Message</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aut debitis aliquid quae iure ad, sapiente harum, dolore reprehenderit itaque, vel numquam! Maiores, soluta incidunt expedita repudiandae exercitationem natus sapiente.</p>
        <ul>
            <li> 📧  rajputabhic12@gmail.com</li>
            <li> 📞 +91 9871753751 </li>
            <li> 📍  Delhi,India  </li>

        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Your Name</label>
            <input type="text" name='name' id='name' placeholder='Enter Your Name' required/>
            <label htmlFor="phone">Your Phone Number</label>
            <input type="tel" name='phone' id='phone' placeholder='Enter Your Phone Number' required/>
            <label htmlFor="mess">Write Your Message!</label>
            <textarea name="message" id="mess" rows="6" placeholder='Enter Your Message'required></textarea>
            <button type='submit' className='Btn contact-btn'>Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact

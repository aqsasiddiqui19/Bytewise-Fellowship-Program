import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const Form = () => {
  const [data, setData] = useState({name:"", email:"",message:""});  
 const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({...data, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
   console.log(data);
  }

  return (
    <Wrapper className='Section'method="post" onSubmit={handleChange}>

    <div className="map-location"> 
    <div className="map-heading"><h2>Road Map</h2></div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57953.87115619198!2d67.249523946889!3d24.791448691562927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb32d9c1b1292ab%3A0x9febe76284168910!2sPort%20Qasim%20Bin%20Qasim%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1683181410093!5m2!1sen!2s" 
    
    width="100%" 
    height="600"   
    style={{ border: 0 }}
    allowFullScreen="" 
    loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    </div>


<div>
<div className="common-heading"><h2>Get In Touch</h2></div>
<div className="contact-form">
<form onsubmit={handleSubmit}>
<input
  type="text"
  name="name"
  id="2"
  onChange={handleChange}
  value={data.name}
  placeholder="Enter name"
  autoComplete="off"
  required
/>

<input
  type="email"
  name="email"
  id="2"
  onChange={handleChange}
  value={data.email}
  placeholder="example@gmail.com"
  autoComplete="off"
  required
/>

<textarea
  name="message"
  cols="30"
  rows="6"
  id="3"
  onChange={handleChange}
  value={data.message}
  autoComplete="off"
  placeholder='Type here.'
  required></textarea>

<button type="submit"
>Send</button>
</form>
</div>
</div>
    </Wrapper>
  )
}
   
const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;


export default Form

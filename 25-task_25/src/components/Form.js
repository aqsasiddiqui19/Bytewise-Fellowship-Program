import React from 'react'
import bgImg from '../assets/img.jpg';
import { useForm } from 'react-hook-form';

    export default function Form() {
      const { register,formState: { errors },
handleSubmit, } = useForm();
      const onSubmit = (data) => console.log(data);
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Registration Form</h2>
              <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

                    <input type="text"  {...register("username",{ required : true })} placeholder='username' />
                    {errors.password?.type === "required" && "Username is required"}

                    <input type="email" id="email"  {...register("email",{ required : true,
                    pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,})}
                     placeholder='email'/>
                    {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" &&
              "Entered email is in wrong format"}

                  <input type="password"
                    {...register("password",{ required : true,  minLength: 5, maxLength: 10 })} placeholder='password' />
                    {errors.password?.type === "required" && "Password is required"}
                    {errors.password?.type === "minLength" &&
              "Entered password is less than 5 characters"}
                   {errors.password?.type === "maxLength" &&
              "Entered password is more than 15 characters"}

                    <input type="tel" {...register("phone", { required : true,   maxLength: 11 , pattern:"[0-9]{3}-[0-9]{2}-[0-9]{3}"
                     })} placeholder='phone number' />
                    {errors.phone?.type === "required" && "Phone number is required"}
                    {errors.tel?.type === "pattern" &&
              "Entered phone number is in wrong format"}

                    <button className='btn'>Submit</button>
                </form>
            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}

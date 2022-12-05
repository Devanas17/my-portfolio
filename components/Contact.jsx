import React, {useRef} from 'react'
import emailjs from "@emailjs/browser";




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => { 
    e.preventDefault();

    emailjs
      .sendForm( 
        `${process.env.SERVICE_ID}`,
        `${process.env.TEMPLATE_ID}`, 
        form.current,
        `${process.env.USER_ID}`
      )
      .then(
        (result) => {
          alert(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='dark:text-white w-[300px] sm:w-[420px] md:w-[500px] mx-auto p-10 '>
      <form ref={form} onSubmit={sendEmail} className="flex items-start flex-col w-full space-y-1">
        <label className='mt-2'>Name</label>
        <input type="text" name="user_name" className='w-full h-[35px] p-2 outline-none rounded-md border border-teal-600 focus:border-2 focus:border-teal-600' />
        <label className='mt-2 '>Email</label>
        <input type="email" name="user_email" className='w-full h-[35px] p-2 outline-none rounded-md border border-teal-600 focus:border-2 focus:border-teal-600' />
        <label className=''>Message</label>
        <textarea name="message" className=' h-36 w-full p-2 outline-none rounded-md border border-teal-600 text-black my-4' />
        <input type="submit" value="Send" className=' mt-4 cursor-pointer border border-teal-600 w-32 h-12 text-teal-600 flex items-center justify-center' />
      </form>
    </div>
  )
}

export default Contact
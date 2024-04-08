import { useState } from "react";

export const Email_me = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className='bg-black p-3 '>
      <div className='  text-2xl  ml-2 my-4 p-4 font-medium text-white text-center'>
        Send me a message
      </div>
      <div className='text-white bg-black flex justify-center items-center my-6'>
        <form action='' className='flex flex-col md:w-[50%]'>
          <div className='flex flex-row space-x-3'>
            <div className='flex flex-col w-1/2'>
              <label className='font-medium' htmlFor='name'>
                Full Name
              </label>
              <input
                className='bg-gray-900  border-[1px] outline-0 focus:border-rose-600 rounded-md p-2 '
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className='font-medium' htmlFor='number'>
                Contact
              </label>
              <input
                className='bg-gray-900  border-[1px] outline-0 focus:border-rose-600 rounded-md p-2 '
                type='text'
                id='number'
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            <div className='flex flex-col w-1/2'>
              <label className='font-medium' htmlFor='country'>
                Country
              </label>
              <input
                className='bg-gray-900  border-[1px] outline-0 focus:border-rose-600 rounded-md p-2 '
                type='text'
                id='country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <label className='font-medium' htmlFor='email'>
                Email
              </label>
              <input
                className='bg-gray-900  border-[1px] outline-0 focus:border-rose-600 rounded-md p-2 '
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <label className='font-medium' htmlFor='message'>
            Message
          </label>
          <textarea
            name=''
            id='message'
            cols={15}
            rows={7}
            className='bg-gray-900  border-[1px] outline-0 focus:border-rose-600 rounded-md p-2 '
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className='flex items-center justify-center my-3'>
            <a
              href={`mailto:musinguzishafiq@outlook.com?subject=Job opportunity available&body=name:${name},country:${country},contact:${contact},${message} `}
              className='text-white font-medium text-center w-[50%] h-fit rounded-md bg-rose-600 p-3'
            >
              Send
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

import React, { useEffect, useRef, useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  const formRef = useRef(null);

  useEffect(() => {
    setIsValid(name && email && message);
  }, [name, email, message]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      alert('Form submitted');
      setName('');
      setEmail('');
      setMessage('');
      formRef.current.reset();
    }
  };

  return (
    <>
    <div className='bg-slate-200 h-screen  pb-28'>
    <h2 className='text-center text-4xl pb-14 font-semibold pt-16'>Contact Us</h2>
    <form ref={formRef} className= " max-w-lg mx-auto m-8 p-6 bg-slate-100 mb-52" onSubmit={handleSubmit}>
      <div className="mb-4 bg-slate-100">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-600  focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder=""
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-600  focus:shadow-outline"
          id="email"
          type="email"
          placeholder=""
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="shadow appearance-none border-2 focus:border-blue-600 rounded w-full sm:h-40 md:h-40 h-20  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Enter your message here"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </div>
      <div className="flex justify-center">
        <button
        type="submit"
        disabled={!isValid}
          className="bg-gradient-to-r from-blue-700 to-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
         
        >
          Submit
        </button>
      </div>
    </form>
    </div>
    </>
  );
}

export default Contact;

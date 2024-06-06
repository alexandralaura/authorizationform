import React, { useState } from 'react';

function Contact() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }
   let task;
   if (authorized) {
    task = 'Contact'
   } else {
    task = 'Enter the Password'
   };
   let login = (
    <form action="#" onSubmit={handleSubmit}>
      <input type="password" placeholder="Password"/>
      <input type="submit"/>
    </form>);
   let contactInfo = (
       <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
   );             

  return (
      <div id="authorization">
      
        <h1>{task}</h1>
        <h1>{authorized ? contactInfo : login}</h1>
        
      </div>
  );
}

export default Contact;
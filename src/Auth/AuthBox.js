import { v4 as uuidv4 } from 'uuid';

const AuthBox = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formDetails = {
      name: e.target[0].value,
      email: e.target[1].value,
      phno: e.target[2].value,
      dob: e.target[3].value,
    };
    try {
      window.localStorage.setItem(
        `user__${uuidv4()}`,
        JSON.stringify(formDetails)
      );
    } catch (err) {
      console.log('', err);
    }
  };

  return (
    <div className='center'>
      <form onSubmit={handleSubmit} className='auth-form'>
        <h3>Sign up</h3>
        <label htmlFor='name'>Name here</label>
        <input type='text' id='name' />
        <label htmlFor='email'>Email here</label>
        <input type='email' id='email' />
        <label htmlFor='phno'>Phone number here</label>
        <input type='tel' id='phno' />
        <label htmlFor='dob'>Date of birth here</label>
        <input type='date' id='dob' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AuthBox;

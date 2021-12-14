import { v4 as uuidv4 } from 'uuid';
import { Button } from '../styles/button';
import { Input } from '../styles/input';

const AuthBox = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formDetails = {
      name: e.target[0].value,
      email: e.target[1].value,
      phno: e.target[2].value,
      password: e.target[3].value,
      dob: e.target[4].value,
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
        <Input type='text' id='name' />
        <label htmlFor='email'>Email here</label>
        <Input type='email' id='email' />
        <label htmlFor='phno'>Phone number here</label>
        <Input type='tel' id='phno' />
        <label htmlFor='password'>Password here</label>
        <Input type='password' id='password' />
        <label htmlFor='dob'>Date of birth here</label>
        <Input type='date' id='dob' />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
};

export default AuthBox;

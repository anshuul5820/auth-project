import { Button } from '../styles/button';
import { Input } from '../styles/input';
import { API } from '../url';

const Login = ({ setAuthenticated }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDetails = {
      phone: e.target[0].value,
      password: e.target[1].value,
    };
    try {
      const response = fetch(`${API}/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formDetails),
      });
      response.status.match(/20[01] OK/) && setAuthenticated(true);
    } catch (err) {
      console.log('', err);
    }
  };

  return (
    <div className='center'>
      <form onSubmit={handleSubmit} className='auth-form'>
        <h3>Login</h3>
        <label htmlFor='phno'>Phone number here</label>
        <Input type='tel' id='phno' />
        <label htmlFor='password'>Password here</label>
        <Input type='password' id='password' />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
};

export default Login;

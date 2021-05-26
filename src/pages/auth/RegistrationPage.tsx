import { useState, useEffect, FormEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const initialState = {
  alert:'',
  loading: false,
  error:'',
  registerUser: () => {},
}

const RegistrationPage = () => {
  const { error, loading, registerUser } = useContext(AuthContext);
  const [formData, setFormData] = useState<User>({
    firstName:'',
    lastName:'',
    email:'',
    password:''
  })


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    registerUser(formData);

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: ''});
  };

  return (
    <div id='home'>
      <div className='row my-5 text-center'>
        <div className='col'>
          <h1>Register Now to Join our App!</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <form action=''>
            <div className='form-group my-3'>
              <input
                type='text'
                className='form-control'
                placeholder='First Name'
                value={formData.firstName}
                onChange={e =>
                  setFormData({ ...formData, firstName: e.target.value })
                  }
              />
            </div>
            <div className='form-group my-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Last Name'
                value={formData.lastName}
                onChange={e =>
                  setFormData({ ...formData, lastName: e.target.value })
                  }
              />
            </div>
            <div className='form-group my-3'>
              <input 
                type='text' 
                className='form-control' 
                placeholder='Email'
                value={formData.email}
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                  } 
                />
            </div>
            <div className='form-group my-3'>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                value={formData.password}
                onChange={e =>
                  setFormData({ ...formData, password: e.target.value })
                  }
              />
            </div>
            <div className='d-grid'>
              <button
                className='btn btn-primary btn-block'
                onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className='row my-3 text-center'>
        <div className='col-sm-12 col-md-6 offset-md-3'>
          <div>
            Already registered?{' '}
            <Link to='/auth/login'>Click here to Login!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;

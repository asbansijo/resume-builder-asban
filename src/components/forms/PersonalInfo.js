import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePersonal } from '../../redux/slices/personalSlice';

const PersonalInfo = () => {
  const personal = useSelector((state) => state.personal);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updatePersonal({ [name]: value }));
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <form>
        <input name="name" value={personal.name} onChange={handleChange} placeholder="Name" />
        <input name="email" value={personal.email} onChange={handleChange} placeholder="Email" />
        <input name="phone" value={personal.phone} onChange={handleChange} placeholder="Phone" />
        <input name="linkedIn" value={personal.linkedIn} onChange={handleChange} placeholder="LinkedIn" />
        <input name="github" value={personal.github} onChange={handleChange} placeholder="GitHub" />
      </form>
    </div>
  );
};

export default PersonalInfo;

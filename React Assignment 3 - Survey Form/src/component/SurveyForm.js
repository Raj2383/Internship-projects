import  { useState } from 'react';
import '../App.css';
const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    favoriteColors: [],
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      let updatedColors = [...formData.favoriteColors];
      if (checked) {
        updatedColors.push(value);
      } else {
        updatedColors = updatedColors.filter(color => color !== value);
      }
      setFormData({
        ...formData,
        favoriteColors: updatedColors
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here you could also send the formData to a backend server
  };

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
        <h1>Survey Form</h1>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            placeholder='Age'
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
          Gender:
        <label className='gender'>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
          /> Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
          /> Female
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={formData.gender === 'Other'}
            onChange={handleChange}
          /> Other
        </label>
      </div>
      <div>
        <label>
          Mobile no.:
          <input
            type="number"
            name="number"
            value={formData.number}
            placeholder='Number'
            onChange={handleChange}
            required
          /> 
        </label>
      </div>
      <div>
        <label>
          Adddress:
          <input
            type="text"
            name="Address"
            placeholder='Address'
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
          Comments:
        <label>
          <textarea
            name="comments"
            placeholder='comment'
            value={formData.comments}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit" className='submit'>Submit</button>
    </form>
    </div>
  );
};

export default SurveyForm;
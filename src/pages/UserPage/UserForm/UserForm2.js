import React, { useState } from 'react';
import { INITIAL_USERINFO } from '../store';

export default function UserForm() {
  const [userInfo, setUserInfo] = useState(INITIAL_USERINFO);

  function handleChange(e) {
    e.persist();
    setUserInfo((userInfo) => ({ ...userInfo, [e.target.id]: e.target.value }));

    const { gender, weight, height, age, activity, basalMetabolism } = userInfo;

    if (gender === 'male') {
      let maleBasalMetabolism = 66.5 + 13.8 * weight + 5 * height - 6.8 * age;
      setUserInfo({
        ...userInfo,
        basalMetabolism: maleBasalMetabolism,
      });
    } else if (gender === 'female') {
      let femaleBasalMetabolism =
        655.1 + 13.8 * weight + 1.8 * height - 4.7 * age;
      setUserInfo({
        ...userInfo,
        basalMetabolism: femaleBasalMetabolism,
      });
    }

    setUserInfo({
      ...userInfo,
      dailyCalories: activity * basalMetabolism,
    });
  }

  function handleSelect(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!userInfo) return;
    console.log(userInfo);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Your name:</label>
      <input type="text" id="name" onChange={handleChange} />

      <p>Your gender:</p>
      <label>
        <p>Man</p>
        <input
          type="radio"
          id="gender"
          name="gender"
          value="male"
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Woman</p>
        <input
          type="radio"
          id="gender"
          name="gender"
          value="female"
          onChange={handleChange}
        />
      </label>

      <label htmlFor="height">Your height:</label>
      <input type="number" id="height" onChange={handleChange} />

      <label htmlFor="weight">Your weight:</label>
      <input type="number" id="weight" onChange={handleChange} />

      <label htmlFor="age">Your age:</label>
      <input type="number" id="age" onChange={handleChange} />

      <label htmlFor="activity">Exercise level:</label>
      <select name="activity" id="activity" onChange={handleSelect}>
        <option value={1.2}>Sedentary</option>
        <option value={1.375}>Light exercises (1-3 days/week)</option>
        <option value={1.55}>Moderate exercises (3-5 days/week)</option>
        <option value={1.725}>Heavy exercises (5-7 days/week)</option>
      </select>

      <button type="submit">Show daily calories</button>
    </form>
  );
}

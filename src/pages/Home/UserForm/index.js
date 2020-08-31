import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import * as S from './styles';
import Swal from 'sweetalert2';

import { INITIAL_USERINFO } from '../../../store/index';

export default function UserForm() {
  const [userInfo, setUserInfo] = useState();
  const userSchema = yup.object().shape({
    name: yup.string().required('Name is required.'),
    gender: yup.string().required('Please select a gender.'),
    age: yup.number().required('Age is required.').positive().integer(),
    weight: yup.number().required('Weight is required.').positive(),
    height: yup.number().required('Height is required').positive(),
    activity: yup.string().required(),
  });

  const handleSubmit = (values) => {
    const { name, gender, weight, height, age, activity } = values;

    let updatedBasalMetabolism;
    if (gender === 'Male') {
      updatedBasalMetabolism = (
        66.5 +
        13.8 * weight +
        5 * height -
        6.8 * age
      ).toFixed(2);
    } else if (gender === 'Female') {
      updatedBasalMetabolism = (
        655.1 +
        13.8 * weight +
        1.8 * height -
        4.7 * age
      ).toFixed(2);
    }

    let parsedActivity = parseFloat(activity);
    const dailyCalories = (parsedActivity * updatedBasalMetabolism).toFixed(2);

    setUserInfo({
      name,
      gender,
      weight,
      height,
      age,
      activity: parsedActivity,
      basalMetabolism: updatedBasalMetabolism,
      dailyCalories,
    });

    Swal.fire({
      icon: 'success',
      text: `Your daily caloric need is ${dailyCalories} kcal`,
    });
    localStorage.setItem('@calorie-police/userInfo', JSON.stringify(userInfo));
    console.log(userInfo);
  };

  return (
    <>
      <Formik
        initialValues={INITIAL_USERINFO}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
        validator={() => ({})}
      >
        <Form>
          <S.InputDiv>
            <label htmlFor="name">Your name: </label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </S.InputDiv>

          <S.InputDiv>
            <label htmlFor="gender">Your gender: </label>
            <Field as="select" name="gender">
              <option name="Male">Male</option>
              <option name="Female">Female</option>
            </Field>
          </S.InputDiv>

          <S.InputDiv>
            <label htmlFor="age">Your age: </label>
            <Field type="number" min="1" name="age" />
            <ErrorMessage name="age" component="div" />
          </S.InputDiv>

          <S.InputDiv>
            <label htmlFor="height">Your height: </label>
            <Field type="number" min="1" name="height" />
            <ErrorMessage name="height" component="div" />
          </S.InputDiv>

          <S.InputDiv>
            <label htmlFor="weight">Your weight: </label>
            <Field type="number" min="1" name="weight" />
            <ErrorMessage name="weight" component="div" />
          </S.InputDiv>

          <S.InputDiv>
            <label htmlFor="activity">Exercise level: </label>
            <Field component="select" name="activity">
              <option value={1.2}>Sedentary</option>
              <option value={1.375}>Light exercises (1-3 days/week)</option>
              <option value={1.55}>Moderate exercises (3-5 days/week)</option>
              <option value={1.725}>Heavy exercises (5-7 days/week)</option>
            </Field>
            <ErrorMessage name="activity" component="div" />
          </S.InputDiv>

          <S.InputDiv>
            <button type="submit">Submit</button>
          </S.InputDiv>
        </Form>
      </Formik>
    </>
  );
}

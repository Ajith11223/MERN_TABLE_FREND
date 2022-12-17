import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { AuthForm } from '../Components/Styles/AuthForm.styled'
import { AuthFormContainer } from '../Components/Styles/AuthFormContainer.styled'
import { AuthFormContent } from '../Components/Styles/AuthFormContent.styled';
import { AuthFormTitle } from '../Components/Styles/AuthFormTitle.styled';
import { Button } from '../Components/Styles/Button.styled';
import { DontHaveAc } from '../Components/Styles/DontHaveAccount'
import { FormField } from '../Components/Styles/FormField.styled';
import { FormInput } from '../Components/Styles/FormInput.styled';
import { TextLink } from '../Components/Styles/TextLink.styled';
import { TextRed } from '../Components/Styles/TextRed.styled';
import { signup } from '../redux/auth/authActions'

function SignUp() {
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    dispatch(signup(data))
  }

  return (
    <AuthFormContainer>
      <AuthForm>
        <AuthFormContent>
          <AuthFormTitle>Registration</AuthFormTitle>
          <FormField>
            <label>Full Name</label><br />
            <FormInput type='text'
              {...register("name", { required: true, pattern: /^[A-Za-z]+$/ })}
            />
            {errors.name?.type === 'required' && <TextRed> Name is required</TextRed>}
            {errors.name?.type === 'pattern' && <TextRed>Alpahbet chararcters only</TextRed>}

          </FormField>
     
          <FormField>
            <label>Email</label><br />
            <FormInput type='text'
              {...register("email", {
                required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
            />
            {errors.email?.type === 'required' && <TextRed>Email is required</TextRed>}
            {errors.email?.type === 'pattern' && <TextRed>Invaid Email</TextRed>}
          </FormField>
          <FormField>
            <label>Password</label><br/>
            <FormInput type='password'
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password?.type === 'required' && <TextRed>Password is required</TextRed>}
            {errors.password?.type === 'minLength' && <TextRed>Atleast 8 characters</TextRed>}
          </FormField>
          <FormField>
            <label>Confirm Password</label><br />
            <FormInput type='password'
              {...register("confirmPassword", { required: true, minLength: 8 })}
            />
            {errors.confirmPassword?.type === 'required' && <TextRed> Confirm Password is required</TextRed>}
            {errors.confirmPassword?.type === 'minLength' && <TextRed>Atleast 8 characters</TextRed>}
          </FormField>
          <FormField align='center'>
            <Button type='submit'
              onClick={handleSubmit(onSubmit)}
            >
              Sign Up
            </Button>
          </FormField>
          <DontHaveAc>
          <span>Already have an account? </span><TextLink onClick={()=>{navigate('/signin')}}> Login</TextLink>
          </DontHaveAc>
        </AuthFormContent>
      </AuthForm>

    </AuthFormContainer>
  )
}

export default SignUp
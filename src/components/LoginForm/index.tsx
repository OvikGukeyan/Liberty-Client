import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './LoginForm.module.scss'
import { useAppDispatch } from '../../redux/store';
import { fetchLogin } from '../../redux/Slices/AuthSlice';

const LoginForm: React.FC = () => {
    const dispatch = useAppDispatch();

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        defaultValues: {
            email: 'test@gmail.com',
            password: '12345'
        },
        mode: 'onBlur'
    })

    const onSubmit = (values: any) => {
        dispatch(fetchLogin(values))
        console.log(values)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <input {...register('email', {
                    required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Wrong email format!'
                    }
                })} />

                <input {...register('password', {
                    required: true,
                    pattern: {
                        value: /^.{5,}$/,
                        message: 'Wrong password format!'
                    }
                })} />
                <input type="submit" />
            </form>

        </div>
    )
}

export default LoginForm;
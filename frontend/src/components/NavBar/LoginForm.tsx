import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendLoginData } from '../../redux/actions/userActions';
import { RootState } from '../../redux/store';
import { Button, Input, Form, Message } from 'semantic-ui-react'
import axios from 'axios';
import { URL } from '../../config';

interface LoginData {
    username: string,
    password: string
};

interface LoginProps {
    user: LoginData | null;
    loading: boolean;
    error: string;
    token: string | null;
    sendLoginData: ( loginData: LoginData ) => Promise<string>
};

const LoginForm: React.FC<LoginProps> = ({ user, loading, error, token, sendLoginData }) => {
    const [ formData, setFormData ] = useState<LoginData>({
        username: '',
        password: ''
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const token = await sendLoginData(formData)

            if (token) {
                localStorage.setItem('token', JSON.stringify(token));

                const userDetails = await fetchUserDetails(token);
                if(userDetails) {
                    const { userId, username } = userDetails.data;
                    localStorage.setItem('userId', userId);
                    localStorage.setItem('username', username);
                }
            }
    
            setFormData({ username: '', password: ''});
        } catch (error: any) {
            return `Login failed! Error: ${error.message}`;
        }
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <Form onSubmit={handleSubmit} error>
            <Form.Field>
                <label>username</label>
                <input placeholder='username' name='username' value={formData.username} onChange={handleChange}/>
            </Form.Field>
            <Form.Field>
                <label>Choose Password</label>
                <Input type='password' name='password' value={formData.password} onChange={handleChange}/>
            </Form.Field>
            <Button type='submit'>Login</Button>
            {loading && <p>Loading...</p>}
            <Message
                error
                header={error}
                content={error}
            />
        </Form>
    );
};

const fetchUserDetails = async (token: string) => {
    try {
        const response = await axios.get(`${URL}/api/user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error: any) {
        return `User details cannot be found! Error: ${error.message}`
    }
}

const mapStateToProps = (state: RootState) => ({
    newUser: state.login.data,
    loading: state.login.loading,
    error: state.login.error,
    token: state.login.token
})
  
  export default connect(mapStateToProps, { sendLoginData })(LoginForm);
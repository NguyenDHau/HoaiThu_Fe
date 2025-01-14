// Login Component
import { Box, Button, Divider, Link, Paper, TextField, Typography } from '@mui/material';
import { Logo } from 'components';
import { useFormik } from 'formik';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { PageURLs } from 'Routes';
import * as yup from 'yup';

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const validationSchema = yup.object({
    username: yup.string('Enter your username').required('Username is required'),
    password: yup.string('Enter your password').required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '', // Set initial value to an empty string
      password: '', // Set initial value to an empty string
    },
    validationSchema,
    onSubmit: async ({ username, password }) => {
      try {
        const response = await fetch('http://localhost:8080/api/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
          throw new Error('Login failed! Please check your credentials.');
        }

        const data = await response.json();
        // Store the access token in localStorage or state
        localStorage.setItem('accessToken', data.token);
        localStorage.setItem('userId', data.id);

        // Redirect to the register page after successful login
        navigate('/categorys');
      } catch (error) {
        console.error('Error:', error);
        // Optionally handle errors and display messages to users
      }
    },
  });

  return (
    <Paper elevation={3} sx={{ p: 2, maxWidth: 400, width: '100%' }}>
      <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" sx={{ mt: 1 }}>
        <Logo />
        <Typography variant="subtitle1" align="center" fontWeight="bold">
          Welcome To Nô Shoes
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="username"
          label="Username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          sx={{ mb: 1 }}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ mb: 2 }}
        />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button color="primary" variant="contained" type="submit">
            Login
          </Button>
          <Link component={RouterLink} to={PageURLs.Register} variant="caption">
            No account? Register!
          </Link>
        </Box>
      </form>
    </Paper>
  );
};

export default Login;

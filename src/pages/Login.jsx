import Form from "@/features/auth/components/form/Form";
import FormInput from "@/features/auth/components/form_input/FormInput";
import FormPasswordInput from "@/features/auth/components/form_input/FormPasswordInput";

const Login = () => {
   const handleSubmit = (data) => {
    console.log(data);
  };
  return (
   <Form onSubmit={handleSubmit} submitLabel="Login" required>
      <FormInput placeHolder="Email" name="email"/>
      <FormPasswordInput name="password" />
    </Form>
  );
};

export default Login;
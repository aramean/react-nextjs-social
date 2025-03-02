import Link from "next/link"
import Button from "@/components/partials/button"
import Heading from "@/components/partials/heading"
import InputText from "@/components/partials/inputText"
import InputPassword from "@/components/partials/inputPassword"
import CheckBox from "@/components/partials/checkbox"
import Hr from "@/components/partials/hr"
import Logo from "@/components/partials/logo"
import Alert from "@/components/partials/alert"

interface FormSignUpProps {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
  password2: string
  setPassword2: React.Dispatch<React.SetStateAction<string>>
  isSubmit: boolean
  onSubmit: (event: React.FormEvent) => void
  formErrors?: {
    name?: string;
    email?: string;
    password?: string;
  }
  apiError?: string
}

const FormSignUp = ({ name, setName, email, setEmail, password, setPassword, password2, setPassword2, isSubmit, onSubmit, formErrors, apiError }: FormSignUpProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row self-center items-end">
        <Logo size="45" />
        <Heading text="NEXT" size="4xl" />
        <Heading text="social" size="3xl" />
      </div>
      <div className="text-center self-center mt-4">
        Already have an account? <Link href="login">Sign in</Link>.
      </div>
      {apiError && <Alert message={apiError} />}
      <form className="grid gap-3 flex-col flex-wrap mt-5" onSubmit={onSubmit}>
        <InputText
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {formErrors?.name && <small className="text-red-500">{formErrors.name}</small>}
        <InputText
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {formErrors?.email && <small className="text-red-500">{formErrors.email}</small>}
        <InputPassword
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputPassword
          placeholder="Confirm password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <Hr></Hr>
        <CheckBox onChange={(e) => (e.target.value)} checked>
          <span className="text-base">I have read and agree to the <a target="_blank" href="terms_of_service.md">Terms of Service</a> and <a target="_blank" href="privacy_policy.md">Privacy Policy</a>.</span>
        </CheckBox>
        <Hr></Hr>
        <Button value="Sign up" disabled={isSubmit} />
      </form>
    </div>)
}

export default FormSignUp
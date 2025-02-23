import Button from "@/app/components/ui/partials/button";
import Heading from "@/app/components/ui/partials/heading";
import InputText from "@/app/components/ui/partials/inputText";
import InputPassword from "./partials/inputPassword";
import Logo from "./partials/logo";
import Br from "./partials/br";
import Alert from "./partials/alert";

interface FormSignInProps {
    email: string
    setEmail: React.Dispatch<React.SetStateAction<string>>
    password: string
    setPassword: React.Dispatch<React.SetStateAction<string>>
    isSubmit: boolean
    onSubmit: (event: React.FormEvent) => void
    formErrors?: {
        email?: string;
        password?: string;
    };
    apiError?: string
};

const FormSignIn = ({ email, setEmail, password, setPassword, isSubmit, onSubmit, formErrors, apiError }: FormSignInProps) => {
    return (
        <div className="flex flex-col w-full items-center">
            <Logo />
            <div className="flex flex-row self-center items-end">
                <Heading text="NEXT" size="4xl" />
                <Heading text="social" size="3xl" />
            </div>
            <div className="text-center mt-3">
                Open Source Social Network.
            </div>
            {apiError && <Alert message={apiError} />}
            <form className="grid gap-3 w-full size-auto mt-5" onSubmit={onSubmit}>
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
                 {formErrors?.password && <small className="text-red-500">{formErrors.password}</small>}
                <Br />
                <Button value="Sign in" disabled={isSubmit} />
            </form>
        </div>);
};

export default FormSignIn;
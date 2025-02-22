import Button from "@/app/components/ui/partials/button";
import Heading from "@/app/components/ui/partials/heading";
import InputText from "@/app/components/ui/partials/inputText";
import InputPassword from "./partials/inputPassword";
import Logo from "./partials/logo";

interface FormSignInProps {
    email: string
    setEmail: React.Dispatch<React.SetStateAction<string>>
    password: string
    setPassword: React.Dispatch<React.SetStateAction<string>>
    isSubmit: boolean
    onSubmit: (event: React.FormEvent) => void
};

const FormSignIn = ({ email, setEmail, password, setPassword, isSubmit, onSubmit }: FormSignInProps) => {
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
            <form className="grid gap-3 w-full size-auto mt-5" onSubmit={onSubmit}>
                <InputText
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputPassword
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button value="Sign in" disabled={isSubmit} />
            </form>
        </div>);
};

export default FormSignIn;
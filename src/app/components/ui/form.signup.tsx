import Button from "@/app/components/ui/partials/button";
import Heading from "@/app/components/ui/partials/heading";
import InputText from "@/app/components/ui/partials/inputText";
import InputPassword from "@/app/components/ui/partials/inputPassword";
import LinkSignIn from "./link.signin";
import CheckBox from "./partials/checkbox";

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
}

const FormSignUp = ({ name, setName, email, setEmail, password, setPassword, password2, setPassword2, isSubmit, onSubmit }: FormSignUpProps) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row self-center items-end">
                <Heading text="NEXT" size="4xl" />
                <Heading text="social" size="3xl" />
            </div>
            <div className="text-center mt-4">
                <LinkSignIn />
            </div>
            <form className="grid gap-3 flex-col flex-wrap mt-5" onSubmit={onSubmit}>
                <InputText
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                <InputPassword
                    placeholder="Confirm password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                />
                <CheckBox></CheckBox>
                <Button value="Sign up" disabled={isSubmit}/>
            </form>
        </div>);
};

export default FormSignUp;
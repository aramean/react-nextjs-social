import Link from "next/link"
import Button from "@/app/components/ui/partials/button"
import Heading from "@/app/components/ui/partials/heading"
import InputText from "@/app/components/ui/partials/inputText"
import InputPassword from "./partials/inputPassword"
import Logo from "./partials/logo"

interface FormSignInProps {
    email: string
    setEmail: React.Dispatch<React.SetStateAction<string>>
    password: string
    setPassword: React.Dispatch<React.SetStateAction<string>>
    onSubmit: (event: React.FormEvent) => void
}

const FormSignIn = ({ email, setEmail, password, setPassword, onSubmit }: FormSignInProps) => {
    return (
        <div className="flex flex-col w-full">
            <Logo />
            <div className="flex flex-row self-center items-end">
                <Heading text="NEXT" size="5xl" />
                <Heading text="social" size="4xl" />
            </div>
            <div className="text-center mt-4">
                Open Source Social Network.
            </div>
            <form className="grid gap-3 flex-col flex-wrap mt-5" onSubmit={onSubmit}>
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
                <Button value="Sign in" />
            </form>
        </div>)
};

export default FormSignIn
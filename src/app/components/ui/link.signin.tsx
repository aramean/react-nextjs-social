import Link from "next/link";

const LinkSignIn = () => {
    return (<div className="self-center">
        Already have an account? <Link href="login">Sign in</Link>.
    </div>)
};

export default LinkSignIn;
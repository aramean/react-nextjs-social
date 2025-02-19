interface ButtonProps {
    value: string
};

const Button = ({ value } : ButtonProps) => {
    return (
        <button className="btn rounded-full bg-black text-white pr-8 pl-8 shadow-md h-11">
            {value}
        </button>
    );
};

export default Button;
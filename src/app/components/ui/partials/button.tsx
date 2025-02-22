interface ButtonProps {
    value: string
};

const Button = ({ value } : ButtonProps) => {
    return (
        <button className="btn rounded-full bg-slate-900 text-white pr-8 pl-8 shadow-md h-11 hover:shadow-lg hover:bg-black active:border-solid active:border">
            {value}
        </button>
    );
};

export default Button;
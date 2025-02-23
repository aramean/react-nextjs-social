interface AlertProps {
    message: string
}

const Alert = ({ message }: AlertProps) => {
    return (<div className="bg-red-500 text-white my-3 p-4 border-1 border-solid border-red-950 rounded-sm">
        <small>{message}</small>
    </div>);
}

export default Alert;
import Alert from "./partials/alert";
import Button from "./partials/button";
import TextArea from "./partials/inputTextArea";

interface FormShareProps {
    onSubmit: (event: React.FormEvent) => void
    apiError: string
}

const FormShare = ({ onSubmit, apiError }: FormShareProps) => {
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
            <TextArea placeholder="" height="xl"></TextArea>
            <Button value="Post"></Button>
            {apiError && <Alert message={apiError} />}
        </form>
    );
};

export default FormShare;
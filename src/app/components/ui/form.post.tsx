import Button from "./partials/button";
import TextArea from "./partials/inputTextArea";

const FormShare = () => {
    return (<div className="flex flex-col gap-3">
        <TextArea placeholder="" height="xl" onChange={e => (e)}></TextArea>
        <Button value="Post"></Button>
    </div>);
};

export default FormShare;
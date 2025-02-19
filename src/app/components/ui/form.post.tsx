import Button from "./partials/button"
import TextArea from "./partials/inputTextArea"

const FormShare = () => {
    return (<div>
        <TextArea placeholder="" onChange={e => (e)}></TextArea>
        <Button value={"Post"} ></Button>
    </div>)
}

export default FormShare
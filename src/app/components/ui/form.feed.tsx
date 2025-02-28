import Alert from "./partials/alert"
import Button from "./partials/button"
import TextArea from "./partials/inputTextArea"

interface FormFeedProps {
  message: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
  onSubmit: (event: React.FormEvent) => void
  apiError: string
}

const FormFeed = ({ message, setMessage, onSubmit, apiError }: FormFeedProps) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <TextArea
        placeholder=""
        height="xl"
        value={message}
        onChange={(e) => setMessage(e.target.value)} 
      />
      <Button value="Post" />
      {apiError && <Alert message={apiError} />}
    </form>
  )
}

export default FormFeed
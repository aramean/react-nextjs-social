import Alert from "./partials/alert"
import Button from "./partials/button"
import Hr from "./partials/hr"
import TextArea from "./partials/inputTextArea"

interface FormFeedProps {
  message: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
  isSubmit: boolean
  onSubmit: (event: React.FormEvent) => void
  apiError: string
}

const FormFeed = ({ message, setMessage, isSubmit, onSubmit, apiError }: FormFeedProps) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      <fieldset className="flex flex-col gap-3" disabled={isSubmit}>
        <TextArea
          placeholder="Write a post..."
          height="xl"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button value="Post" />
        {apiError && <Alert message={apiError} />}
      </fieldset>
      <Hr/>
    </form>
  )
}

export default FormFeed
import Alert from "./partials/alert"
import Button from "./partials/button"
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
    <form onSubmit={onSubmit} className="flex flex-col bg-white border-r border-b border-l border-gray-300 lg:border-t lg:border-gray-200 rounded-b p-5 flex flex-col justify-between leading-normal shadow-sm">
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
    </form>
  )
}

export default FormFeed
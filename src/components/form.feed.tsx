import Alert from "@/components/partials/alert"
import Button from "@/components/partials/button"
import TextArea from "@/components/partials/inputTextArea"

interface FormFeedProps {
  message: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
  isSubmit: boolean
  onSubmit: (event: React.FormEvent) => void
  apiError: string
}

const FormFeed = ({ message, setMessage, isSubmit, onSubmit, apiError }: FormFeedProps) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col bg-slate-50 border-r border-b border-l border-gray-300 lg:border-t lg:border-gray-200 rounded-b p-5 justify-between leading-normal shadow-sm">
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
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'Best noice-cancellation headphones',
    message: 'Best noice-cancellation headphones'
  },
  {
    heading: 'Is the Apple Vision Pro worth buying?',
    message: 'Is the Apple Vision Pro worth buying?'
  },
  {
    heading: 'Compare Apple iPhone 13 and Google Pixel 8',
    message: 'Compare Apple iPhone 13 and Google Pixel 8'
  },
  {
    heading: 'Is iPhone 15 waterproof?',
    message: 'Is iPhone 15 waterproof?'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

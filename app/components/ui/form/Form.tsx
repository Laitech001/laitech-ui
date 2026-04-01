type FormProps = {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void; 
  className?: string;
}

export default function Form({ children, onSubmit, className }: FormProps) {
  return (
    <form className={`bg-white shadow-md rounded p-4 ${className || ''}`} onSubmit={onSubmit}>
      {children}
    </form>
  )
}
type LabelProps = {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}

export default function Label({ children, htmlFor, className}: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={`block text-gray-700 font-medium mb-2 ${className || ''}`}>
      {children}
    </label>
  )
}
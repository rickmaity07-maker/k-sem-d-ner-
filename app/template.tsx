export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-in w-full h-full">
      {children}
    </div>
  )
}
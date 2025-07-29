import {ThemeToggle} from './theme-toggle'

export function Header() {
  return (
    <header className="dark:bg-blue-900 border-b border-border p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Next.js App</h1>
        <ThemeToggle />
      </div>
    </header>
  )
}

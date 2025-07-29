import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-green-400 via-red-500 to-purple-500 dark:from-purple-900 dark:via-blue-900 dark:to-purple-900 border-b border-border shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-white tracking-wide cursor-pointer hover:scale-105 transition-transform duration-200">
          My Next.js App
        </h1>

        <nav className="hidden md:flex gap-6 text-white font-medium">
          <a href="#" className="hover:text-yellow-300 transition-colors duration-200">
            Home
          </a>
          <a href="#" className="hover:text-yellow-300 transition-colors duration-200">
            About
          </a>
          <a href="#" className="hover:text-yellow-300 transition-colors duration-200">
            Services
          </a>
          <a href="#" className="hover:text-yellow-300 transition-colors duration-200">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

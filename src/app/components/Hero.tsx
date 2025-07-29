export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-green-100 via-white to-green-50 dark:from-green-700 dark:via-purple-950 dark:to-green-700 px-4 py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6 text-gray-900 dark:text-white">
          Theme Toggle Demo
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          This is a demonstration of a working theme toggle functionality using <strong>Next.js</strong>, 
          <strong> Tailwind CSS</strong>, and <strong>next-themes</strong>. Switch between light and dark 
          mode using the toggle button in the header.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 border rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Light Mode Features
            </h3>
            <ul className="text-left space-y-2 text-gray-700 dark:text-gray-400">
              <li>• Clean white background</li>
              <li>• Dark text for readability</li>
              <li>• Light borders and accents</li>
              <li>• Sun icon visible</li>
            </ul>
          </div>

          <div className="p-6 border rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Dark Mode Features
            </h3>
            <ul className="text-left space-y-2 text-gray-700 dark:text-gray-400">
              <li>• Dark background</li>
              <li>• Light text for contrast</li>
              <li>• Dark borders and accents</li>
              <li>• Moon icon visible</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

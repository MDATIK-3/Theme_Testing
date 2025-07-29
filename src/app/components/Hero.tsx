export function Hero() {
  return (
    <section className="min-h-screen bg-white dark:bg-green-800 text-gray-900 dark:text-white flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-green-600 dark:text-blue-400 sm:text-5xl">
        Welcome to Our Site
      </h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
        Delivering quality content with a clean and minimal design.
      </p>
      <button className="mt-8 rounded-md bg-green-600 dark:bg-blue-500 px-6 py-3 text-white font-semibold hover:bg-green-700 dark:hover:bg-blue-600 transition">
        Get Started
      </button>
    </section>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6 text-center dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div>
        <p className="text-sm uppercase tracking-[0.45em] text-red-600 dark:text-red-400">Oops!</p>
        <h1 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-gray-50 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-gray-600 dark:text-gray-300 sm:text-lg">
          The page you are looking for does not exist or has been moved.
        </p>
      </div>
      <Link
        href="/"
        className="rounded-full bg-red-700 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
      >
        Back to home
      </Link>
    </section>
  );
}

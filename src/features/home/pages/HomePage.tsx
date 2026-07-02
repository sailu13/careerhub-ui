export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <p className="mb-4 text-blue-400">AI Powered Career Platform</p>

        <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
          Land Your Dream Job Faster
        </h1>

        <p className="mt-6 text-lg text-slate-300">
          Track applications, prepare for interviews, improve your resume with AI,
          and manage your entire job search from one place.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-lg border border-slate-700 px-6 py-3 font-semibold hover:bg-slate-800">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}
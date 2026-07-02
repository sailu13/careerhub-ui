import Button from "@/shared/components/ui/Button";
import Container from "@/shared/components/ui/Container";

export default function HeroSection() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full border border-blue-500 px-4 py-2 text-sm text-blue-400">
            🚀 AI Powered Career Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Land Your Dream Job Faster
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-300">
            Track applications, prepare for interviews, build resumes,
            and manage your complete job search journey using AI.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button>Get Started</Button>

            <Button variant="secondary">
              Watch Demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
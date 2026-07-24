import Button from "@/shared/components/ui/Button";
import Container from "@/shared/components/ui/Container";
import { useAppTheme } from "@/shared/theme/theme";

export default function HeroSection() {
  const t = useAppTheme();

  return (
    <section className={`py-24 transition-colors duration-300 ${t.background }`}>
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className={`rounded-full border px-4 py-2 text-sm ${t.subText}`}>
            🚀 AI Powered Career Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Land Your Dream Job Faster
          </h1>

          <p className={`mx-auto mt-8 max-w-2xl text-lg ${t.text}`}>
            Track applications, prepare for interviews, build resumes,
            and manage your complete job search journey using AI.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button>Get Started</Button>

            <Button>
              Watch Demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
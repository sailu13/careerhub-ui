import Container from "@/shared/components/ui/Container";

const features = [
  {
    title: "AI Resume Review",
    description:
      "Analyze your resume using AI and receive actionable suggestions to improve ATS compatibility.",
    icon: "🤖",
  },
  {
    title: "Job Tracker",
    description:
      "Manage every job application from one dashboard with status tracking and reminders.",
    icon: "💼",
  },
  {
    title: "AI Mock Interview",
    description:
      "Practice technical and HR interviews with AI-generated questions and feedback.",
    icon: "🎤",
  },
  {
    title: "Career Analytics",
    description:
      "Visualize your job search progress with insightful charts and application statistics.",
    icon: "📊",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-slate-950 py-24 text-white" id="features">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Everything You Need to Get Hired
          </h2>

          <p className="mt-4 text-slate-400">
            CareerHub combines AI with powerful tools to simplify your job search.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-blue-500 hover:-translate-y-1"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="mt-6 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
import Container from "@/shared/components/ui/Container";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Oracle",
  "IBM",
  "Infosys",
];

export default function TrustedCompanies() {
  return (
    <section className="bg-slate-900 py-16">
      <Container>
        <div className="text-center">
          <p className="mb-10 text-sm uppercase tracking-widest text-slate-400">
            Inspired by careers at leading companies
          </p>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {companies.map((company) => (
              <div
                key={company}
                className="rounded-xl border border-slate-700 bg-slate-800 p-6 text-center font-semibold text-slate-300 transition hover:border-blue-500 hover:text-white"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
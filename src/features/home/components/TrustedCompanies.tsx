import Container from "@/shared/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Oracle",
  "IBM",
  "Infosys",
];

export default function TrustedCompanies() {
  const { theme } = useTheme();

  const isLight = theme === "light";

  return (
    <section
      id="companies"
      className={`py-16 transition-colors duration-300 ${
        isLight ? "bg-slate-100" : "bg-slate-900"
      }`}
    >
      <Container>
        <div className="text-center">
          <p
            className={`mb-10 text-sm uppercase tracking-widest ${
              isLight ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Inspired by careers at leading companies
          </p>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {companies.map((company) => (
              <div
                key={company}
                className={`rounded-xl border p-6 text-center font-semibold transition duration-300 ${
                  isLight
                    ? "border-slate-200 bg-white text-slate-700 shadow hover:border-blue-500 hover:shadow-lg"
                    : "border-slate-700 bg-slate-800 text-slate-300 hover:border-blue-500 hover:text-white"
                }`}
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
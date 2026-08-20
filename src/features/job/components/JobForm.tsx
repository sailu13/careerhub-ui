import { useState } from "react";
import PrimaryButton from "@/shared/components/buttons/PrimaryButton";
import Input from "@/shared/components/ui/Input";
import Label from "@/shared/components/ui/Label";
import type { JobRequest } from "../types/jobRequest";

interface Props {
  loading?: boolean;
  onSubmit: (job: JobRequest) => void;
}

export default function JobForm({ loading, onSubmit,}: Props) {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    salaryMin: 0,
    salaryMax: 0,
    experience: "",
    employmentType: "FULL_TIME",
    description: "",
    skills: "",
  });

  function handleChange(
    e: React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]:
        name === "salaryMin" || name === "salaryMax"
          ? Number(value)
          : value,
    });
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const job: JobRequest = {
      title: form.title,
      company: form.company,
      location: form.location,
      employmentType: form.employmentType,
      experience: form.experience,
      salaryMin: form.salaryMin,
      salaryMax: form.salaryMax,
      description: form.description,
      skills: form.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };
    onSubmit(job);
  }

  return (
    <form onSubmit={submit} className="space-y-6" >
      {/* Row 1 */}
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Label>Job Title</Label>
          <Input name="title" placeholder="Java Backend Developer" value={form.title} onChange={handleChange}/>
        </div>

        <div>
          <Label>Company</Label>
          <Input name="company" placeholder="Google" value={form.company} onChange={handleChange}/>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Label>Location</Label>
          <Input name="location" placeholder="Hyderabad" value={form.location} onChange={handleChange}/>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <Label>Minimum Salary (LPA)</Label>
            <Input type="number" name="salaryMin" placeholder="5" value={form.salaryMin} onChange={handleChange}/>
          </div>

          <div>
            <Label>Maximum Salary (LPA)</Label>
            <Input type="number" name="salaryMax" placeholder="10" value={form.salaryMax} onChange={handleChange}/>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Label>Experience</Label>
          <Input name="experience" placeholder="3-5 Years" value={form.experience} onChange={handleChange}/>
        </div>

        <div>
          <Label>Employment Type</Label>
          <select name="employmentType" value={form.employmentType} onChange={handleChange} className="w-full rounded-xl
            border border-slate-300 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
            <option value="FULL_TIME">Full Time</option>
            <option value="PART_TIME">Part Time</option>
            <option value="CONTRACT">Contract</option>
            <option value="INTERNSHIP">Internship</option>
            <option value="REMOTE">Remote</option>
          </select>
        </div>
      </div>

      {/* Skills */}
      <div>
        <Label>Skills</Label>
        <Input name="skills"placeholder="Java, Spring Boot, Microservices, Docker"
          value={form.skills} onChange={handleChange}/>
      </div>

      {/* Description */}
      <div>
        <Label>Description</Label>
        <textarea rows={8} name="description" value={form.description} onChange={handleChange} 
          placeholder="Describe the job..." className="w-full rounded-xl border border-slate-300 bg-white 
          px-4 py-3 dark:border-slate-700 dark:bg-slate-900"
        />
      </div>
      <PrimaryButton type="submit" className="w-full" disabled={loading}>
        {loading ? "Posting Job..." : "Post Job"}
      </PrimaryButton>
    </form>
  );
}
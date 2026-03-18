import { useState, type FormEvent, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { headerLinks } from "../../../data/navigation";
import HeaderLogo from "../../../assets/images/gvmps-logo.png";
import heroBg from "../../../assets/images/jobs.avif";
import "./CareerForm.css";

interface FormData {
  applicant_name: string;
  father_name: string;
  contact_number: string;
  email: string;
  gender: string;
  address: string;
  current_city: string;
  current_state: string;
  home_city: string;
  home_state: string;
  country: string;
  department: string;
  post_applied: string;
  previous_employer: string;
  designation: string;
  current_employer: string;
  notice_period: string;
  key_skills: string;
  qualification: string;
  total_experience: string;
  current_ctc: string;
  expected_ctc: string;
  source_of_information: string;
}

const INITIAL_FORM: FormData = {
  applicant_name: "",
  father_name: "",
  contact_number: "",
  email: "",
  gender: "",
  address: "",
  current_city: "",
  current_state: "",
  home_city: "",
  home_state: "",
  country: "",
  department: "",
  post_applied: "",
  previous_employer: "",
  designation: "",
  current_employer: "",
  notice_period: "",
  key_skills: "",
  qualification: "",
  total_experience: "",
  current_ctc: "",
  expected_ctc: "",
  source_of_information: "",
};

const API_URL = "https://gvmps.gabis.in/API/tp/careers";
const API_KEY = "school@3534dfjh3245dfgjhgdfjgh!dfgjhk89452kdskjg";

export default function CareerForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  /* ---- helpers ---- */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setCvFile(file);
  };

  /* ---- submit (mirrors original JS exactly) ---- */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const fd = new window.FormData();

    // Append all text fields
    (Object.keys(form) as (keyof FormData)[]).forEach((key) => {
      fd.append(key, form[key]);
    });

    // Append CV file
    if (cvFile) {
      fd.append("cv", cvFile);
    }

    // Append API key
    fd.append("api_key", API_KEY);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: fd,
      });

      let result = null;
      try {
        result = await response.json();
      } catch {
        console.warn("Response body could not be read (possible CORS).");
      }

      if (response.ok) {
        alert("Your application has been submitted successfully.");
        setForm(INITIAL_FORM);
        setCvFile(null);
        // Reset the native file input
        const fileInput = document.getElementById("cv") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        alert("Submission failed. Please try again.");
        console.error("Server error:", result);
      }
    } catch (error) {
      console.error("Network / CORS error:", error);
      alert("Unable to submit form. Please try later.");
    } finally {
      setSubmitting(false);
    }
  };

  /* ---- render ---- */
  return (
    <>
    {/* ── HERO BANNER ── */}
    <div className="career-hero">
      <img src={heroBg} alt="Campus" className="career-hero-bg" />
      <div className="career-hero-overlay" />

      {/* Right-side navigation panel (matches home page) */}
      <div className="absolute z-999 top-[1%] right-[2%] w-[10%] max-md:w-[25%] max-sm:w-[40%] text-white">
        <div className="pe-2">
          {/* Logo bar */}
          <div className="mb-1 flex justify-center items-center bg-accent-text">
            <Link to="/">
              <img
                src={HeaderLogo}
                alt="Header Logo"
                className="mt-4 md:mt-3 mb-4 md:mb-3 px-3 h-auto"
              />
            </Link>
          </div>

          {/* Dynamic navigation links */}
          {headerLinks.map((section, index) => (
            <Link
              key={index}
              to={section?.path || "#"}
              className="no-underline text-inherit p-0"
            >
              <div className="overlay-row mb-1 p-2 flex justify-between items-center">
                <span className="overlay-link text-sm">
                  {section?.pathname || "Disabled"}
                </span>
                <span className="overlay-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path fillRule="evenodd" d="M4.646 11.354a.5.5 0 0 1 0-.708L10.293 5H6.5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5.707l-5.646 5.647a.5.5 0 0 1-.708 0"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Centered hero content */}
      <div className="career-hero-content">
        <h2>Career Application</h2>
        <p>
          Dear Applicant, you can apply online by filling this form. We will
          inform you after reviewing your application.
        </p>
        <a
          href="#careerForm"
          className="career-hero-arrow"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("careerForm")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" style={{ animation: "updown-arrow 3s ease-in-out infinite" }}>
            <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          </svg>
        </a>
      </div>
    </div>

    <section className="career-wrapper">
      <div className="career-container">
        <form id="careerForm" onSubmit={handleSubmit} noValidate={false}>
          {/* ── PERSONAL INFORMATION ── */}
          <div className="career-card">
            <h3 className="section-title">Personal Information</h3>

            <div className="form-grid">
              <div className="form-group">
                <label>
                  Applicant Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="applicant_name"
                  id="applicant_name"
                  value={form.applicant_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Father Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="father_name"
                  id="father_name"
                  value={form.father_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Contact Number <span>*</span>
                </label>
                <input
                  type="tel"
                  name="contact_number"
                  id="contact"
                  value={form.contact_number}
                  onChange={handleChange}
                  minLength={10}
                  maxLength={10}
                  inputMode="numeric"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>
                  Gender <span>*</span>
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="transgender">Transgender</option>
                </select>
              </div>
            </div>
          </div>

          {/* ── ADDRESS DETAILS ── */}
          <div className="career-card">
            <h3 className="section-title">Address Details</h3>

            <div className="form-grid">
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={form.address}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Current City</label>
                <input
                  type="text"
                  name="current_city"
                  id="current_city"
                  value={form.current_city}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Current State</label>
                <input
                  type="text"
                  name="current_state"
                  id="current_state"
                  value={form.current_state}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Home City</label>
                <input
                  type="text"
                  name="home_city"
                  id="home_city"
                  value={form.home_city}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Home State</label>
                <input
                  type="text"
                  name="home_state"
                  id="home_state"
                  value={form.home_state}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  value={form.country}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* ── EMPLOYMENT DETAILS ── */}
          <div className="career-card">
            <h3 className="section-title">Employment Details</h3>

            <div className="form-grid">
              <div className="form-group">
                <label>
                  Department <span>*</span>
                </label>
                <select
                  id="department"
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="Teaching">Teaching</option>
                  <option value="Non-Teaching">Non-Teaching</option>
                </select>
              </div>

              <div className="form-group">
                <label>Post Applied For</label>
                <input
                  type="text"
                  name="post_applied"
                  id="post"
                  value={form.post_applied}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Previous Employer</label>
                <input
                  type="text"
                  name="previous_employer"
                  id="prev_employer"
                  value={form.previous_employer}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Designation</label>
                <input
                  type="text"
                  name="designation"
                  id="designation"
                  value={form.designation}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Current Employer</label>
                <input
                  type="text"
                  name="current_employer"
                  id="current_employer"
                  value={form.current_employer}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Notice Period</label>
                <input
                  type="text"
                  name="notice_period"
                  id="notice"
                  value={form.notice_period}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Key Skills</label>
                <input
                  type="text"
                  name="key_skills"
                  id="skills"
                  value={form.key_skills}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>
                  Qualifications <span>*</span>
                </label>
                <input
                  type="text"
                  name="qualification"
                  id="qualification"
                  value={form.qualification}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Total Experience</label>
                <input
                  type="text"
                  name="total_experience"
                  id="experience"
                  value={form.total_experience}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* ── SALARY DETAILS ── */}
          <div className="career-card">
            <h3 className="section-title">Salary Details</h3>

            <div className="form-grid">
              <div className="form-group">
                <label>Current CTC</label>
                <input
                  type="text"
                  name="current_ctc"
                  id="current_ctc"
                  value={form.current_ctc}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Expected CTC</label>
                <input
                  type="text"
                  name="expected_ctc"
                  id="expected_ctc"
                  value={form.expected_ctc}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* ── REFERENCE & CV ── */}
          <div className="career-card">
            <h3 className="section-title">Reference &amp; CV</h3>

            <div className="form-grid">
              <div className="form-group">
                <label>Reference</label>
                <input
                  type="text"
                  name="source_of_information"
                  id="reference"
                  value={form.source_of_information}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>
                  Upload CV <span>*</span>
                </label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  accept=".pdf"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* ── SUBMIT ── */}
          <div className="career-submit-wrap">
            <button
              type="submit"
              className="career-submit-btn"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Apply Now"}
            </button>
          </div>
        </form>
      </div>
    </section>
    </>
  );
}

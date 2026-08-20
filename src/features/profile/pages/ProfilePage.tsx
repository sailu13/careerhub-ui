import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../services/profileService";
import type { ProfileResponse } from "../types/profile";

import PageHeader from "@/shared/components/common/PageHeader";
import Avatar from "@/shared/components/common/Avatar";
import LoadingSkeleton from "@/shared/components/common/LoadingSkeleton";
import BackButton from "@/shared/components/common/BackButton";
import AppCard from "@/shared/components/common/AppCard";

import { toast } from "sonner";
import { motion } from "framer-motion";
import { useAppTheme } from "@/shared/theme/theme";

const COUNTRIES = [
  { name: "India", code: "+91" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "Singapore", code: "+65" },
  { name: "Germany", code: "+49" },
  { name: "France", code: "+33" },
  { name: "Japan", code: "+81" },
];

export default function ProfilePage() {
  const t = useAppTheme();

  const [profile, setProfile] = useState<ProfileResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [mobileError, setMobileError] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const response = await getProfile();
      const user = response.data.data;

      setProfile(user);

      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setCountryCode(user.countryCode || "");
      setMobileNumber(user.mobileNumber || "");
    } catch (error) {
      console.error("Failed to load profile:", error);
      toast.error("Unable to load profile");
    } finally {
      setLoading(false);
    }
  }

  function validateMobile(value: string) {
    if (!value.trim()) {
      setMobileError("Mobile number is required");
      return false;
    }

    if (!/^[0-9]{10}$/.test(value)) {
      setMobileError("Mobile number must contain exactly 10 digits");
      return false;
    }

    setMobileError("");
    return true;
  }

  async function saveProfile() {
    if (!firstName.trim()) {
      toast.error("First name is required");
      return;
    }

    if (!lastName.trim()) {
      toast.error("Last name is required");
      return;
    }

    if (!countryCode) {
      toast.error("Please select your country code");
      return;
    }

    if (!validateMobile(mobileNumber)) {
      return;
    }

    try {
      const response = await updateProfile({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        countryCode,
        mobileNumber,
      });

      const updatedProfile = response.data.data;

      setProfile(updatedProfile);

      setFirstName(updatedProfile.firstName || "");
      setLastName(updatedProfile.lastName || "");
      setCountryCode(updatedProfile.countryCode || "");
      setMobileNumber(updatedProfile.mobileNumber || "");

      setEditing(false);
      setMobileError("");

      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.error("Profile update failed:", error);
      toast.error("Unable to update profile");
    }
  }

  function cancelEditing() {
    if (!profile) return;

    setEditing(false);

    setFirstName(profile.firstName || "");
    setLastName(profile.lastName || "");
    setCountryCode(profile.countryCode || "");
    setMobileNumber(profile.mobileNumber || "");

    setMobileError("");
  }

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl space-y-6 p-8">
        <LoadingSkeleton className="h-10 w-60" />
        <LoadingSkeleton className="h-24 w-full" />
        <LoadingSkeleton className="h-20 w-full" />
        <LoadingSkeleton className="h-20 w-full" />
      </div>
    );
  }

  if (!profile) {
    return <div className={`p-10 ${t.heading}`}>Profile not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="pt-4">
        <BackButton />
      </div>

      <PageHeader
        title="My Profile"
        subtitle="Check and update your personal details"
      />

      {/* Profile completion warning */}

      {!profile.profileComplete && (
        <div className="mb-8 rounded-xl border border-yellow-300 bg-yellow-50 p-4 dark:border-yellow-700 dark:bg-yellow-950/30">
          <div className="flex items-start gap-3">
            <div className="text-xl">⚠️</div>

            <div>
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300">
                Complete your profile
              </h3>

              <p className="mt-1 text-sm text-yellow-700 dark:text-yellow-400">
                Please add your country code and mobile number before applying
                for jobs.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Profile Header */}

      <div className="mb-8 flex items-center gap-5">
        <Avatar firstName={profile.firstName} lastName={profile.lastName} />

        <div>
          <h2 className={`text-3xl font-bold ${t.heading}`}>
            {profile.firstName} {profile.lastName}
          </h2>

          <p className={t.subText}>{profile.email}</p>
        </div>
      </div>

      {/* Profile Card */}

      <AppCard className={`space-y-6 ${t.card}`}>
        {/* First Name */}

        <div>
          <label className={`mb-2 block text-sm ${t.subText}`}>
            First Name
          </label>

          {editing ? (
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`w-full rounded-lg border px-4 py-2 transition ${t.input}`}
            />
          ) : (
            <p className={`text-xl ${t.heading}`}>{profile.firstName}</p>
          )}
        </div>

        {/* Last Name */}

        <div>
          <label className={`mb-2 block text-sm ${t.subText}`}>Last Name</label>

          {editing ? (
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={`w-full rounded-lg border px-4 py-2 transition ${t.input}`}
            />
          ) : (
            <p className={`text-xl ${t.heading}`}>{profile.lastName}</p>
          )}
        </div>

        {/* Email */}

        <div>
          <label className={`mb-2 block text-sm ${t.subText}`}>Email</label>

          <p className={`text-xl ${t.heading}`}>{profile.email}</p>

          <p className={`mt-1 text-xs ${t.textMuted}`}>
            Email cannot be changed here.
          </p>
        </div>

        {/* Country Code */}

        <div>
          <label className={`mb-2 block text-sm ${t.subText}`}>Country</label>

          {editing ? (
            <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}
              className={`w-full rounded-lg border px-4 py-2 transition ${t.input}`}>
              <option value="">Select country</option>

              {COUNTRIES.map((country) => (
                <option
                  key={`${country.name}-${country.code}`}
                  value={country.code}
                >
                  {country.name} ({country.code})
                </option>
              ))}
            </select>
          ) : (
            <p className={`text-xl ${t.heading}`}>
              {profile.countryCode || "Not provided"}
            </p>
          )}
        </div>

        {/* Mobile Number */}

        <div>
          <label className={`mb-2 block text-sm ${t.subText}`}>
            Mobile Number
          </label>

          {editing ? (
            <>
              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                value={mobileNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setMobileNumber(value);
                  if (mobileError) {
                    validateMobile(value);
                  }
                }}
                onBlur={() => validateMobile(mobileNumber)}
                placeholder="Enter 10 digit mobile number"
                className={`w-full rounded-lg border px-4 py-2 transition ${t.input}`}
              />
              {mobileError && ( <p className="mt-2 text-sm text-red-500">{mobileError}</p> )}
            </>
          ) : (
            <p className={`text-xl ${t.heading}`}>
              {profile.mobileNumber ? `${profile.countryCode || ""} ${profile.mobileNumber}` : "Not provided"}
            </p>
          )}
        </div>

        {/* Role */}
        <div>
          <label className={`mb-2 block text-sm ${t.subText}`}>Role</label>
          <p className={`text-xl ${t.heading}`}>{profile.role}</p>
        </div>

        {/* Profile Status */}
        <div>
          <label className={`mb-2 block text-sm ${t.subText}`}> Profile Status </label>

          {profile.profileComplete ? (
            <span className="font-medium text-green-600">✓ Complete</span>
          ) : (
            <span className="font-medium text-yellow-600">⚠ Incomplete</span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-6">
          {editing ? (
            <>
              <button type="button" onClick={saveProfile} className={t.successButton}>
                Save
              </button>
              <button type="button" onClick={cancelEditing} className={t.secondaryButton}>
                Cancel
              </button>
            </>
          ) : (
            <button type="button" onClick={() => setEditing(true)} className={t.primaryButton}>
              Edit Profile
            </button>
          )}
        </div>
      </AppCard>
    </motion.div>
  );
}

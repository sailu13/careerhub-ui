import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../services/profileService";
import type { ProfileResponse } from "../types/profile";
import PageHeader from "@/shared/components/common/PageHeader";
import Avatar from "@/shared/components/common/Avatar";
import LoadingSkeleton from "@/shared/components/common/LoadingSkeleton";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import AppCard from "@/shared/components/common/AppCard";
import { useAppTheme } from "@/shared/theme/theme";

export default function ProfilePage() {
  const t = useAppTheme();

  const [profile, setProfile] = useState<ProfileResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const location = useLocation();
  const showBack = location.state?.fromDashboard ?? false;

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const response = await getProfile();

      const user = response.data.data;

      await new Promise((resolve) => setTimeout(resolve, 1200));

      setProfile(user);
      setFirstName(user.firstName);
      setLastName(user.lastName);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function saveProfile() {
    try {
      await updateProfile({
        firstName,
        lastName,
      });

      setProfile({
        ...profile!,
        firstName,
        lastName,
      });

      setEditing(false);

      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.error(error);
      toast.error("Unable to Update Profile");
    }
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
    return (
      <div className={`p-10 ${t.heading}`}>
        Profile not found
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader
        title="My Profile"
        subtitle="Check your details"
        showBack={showBack}
      />

      {/* Profile Header */}

      <div className="mb-8 flex items-center gap-5">
        <Avatar
          firstName={profile.firstName}
          lastName={profile.lastName}
        />

        <div>
          <h2 className={`text-3xl font-bold ${t.heading}`}>
            {profile.firstName} {profile.lastName}
          </h2>

          <p className={t.subText}>
            {profile.email}
          </p>
        </div>
      </div>

      {/* Card */}

      <AppCard className={`space-y-6 ${t.card}`}>

        {/* First Name */}

        <div>
          <label className={`block text-sm mb-2 ${t.subText}`}>
            First Name
          </label>

          {editing ? (
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`w-full rounded-lg border px-4 py-2 transition ${t.input}`}
            />
          ) : (
            <p className={`text-xl ${t.heading}`}>
              {profile.firstName}
            </p>
          )}
        </div>

        {/* Last Name */}

        <div>
          <label className={`block text-sm mb-2 ${t.subText}`}>
            Last Name
          </label>

          {editing ? (
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={`w-full rounded-lg border px-4 py-2 transition ${t.input}`}
            />
          ) : (
            <p className={`text-xl ${t.heading}`}>
              {profile.lastName}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <label className={`block text-sm mb-2 ${t.subText}`}>
            Email
          </label>

          <p className={`text-xl ${t.heading}`}>
            {profile.email}
          </p>
        </div>

        {/* Role */}

        <div>
          <label className={`block text-sm mb-2 ${t.subText}`}>
            Role
          </label>

          <p className={`text-xl ${t.heading}`}>
            {profile.role}
          </p>
        </div>

        {/* Buttons */}

        <div className="flex gap-4 pt-6">

          {editing ? (
            <>
              <button
                onClick={saveProfile}
                className={t.successButton}
              >
                Save
              </button>

              <button
                onClick={() => {
                  setEditing(false);
                  setFirstName(profile.firstName);
                  setLastName(profile.lastName);
                }}
                className={t.secondaryButton}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className={t.primaryButton}
            >
              Edit Profile
            </button>
          )}

        </div>

      </AppCard>
    </motion.div>
  );
}
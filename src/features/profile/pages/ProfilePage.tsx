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
// import { tr } from "zod/locales";

export default function ProfilePage() {

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
      // setProfile(response.data.data);
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
        firstName, lastName
      });

      setProfile({
        ...profile!,
        firstName,
        lastName
      });

      setEditing(false);
      toast.success("Profile Updated Successfully");
    } catch(error) {
      console.error(error);
      toast.error("Unable to Update Profile");
    }
  }

  if(loading) {
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
    return <div className="p-10">Profile not found</div>;
  }

  return (
    <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}>

      <PageHeader
       title="My Profile"
       subtitle="Check your details"
       showBack={showBack}
      />
      
      <div className="mb-8 flex items-center gap-5">
        <Avatar
         firstName={profile.firstName}
         lastName={profile.lastName}
        />

        <div>
          <h2 className="text-3xl font-bold">
            {profile.firstName} {profile.lastName}
          </h2>

          <p className="text-slate-400">
            {profile.email}
          </p>
        </div>
      </div>

      <AppCard className="space-y-6">

        <div>
          <label className="text-slate-400">First Name</label>
          {editing ? (
            <input
             value={firstName}
             onChange={(e)=> setFirstName(e.target.value)}
             className="mt-2 w-full rounded border text-white p-2" />
          ) : (
            <p className="text-xl">{profile?.firstName}</p>
          )
        }
        </div>

        <div>
          <label className="text-slate-400">Last Name</label>
          {editing ? (
            <input
             value={lastName}
             onChange={(e)=> setLastName(e.target.value)}
             className="mt-2 w-full rounded border text-white p-2" />
          ) : (
          <p className="text-xl">{profile?.lastName}</p>
          )}
        </div>

        <div>
          <label className="text-slate-400">Email</label>
          <p className="text-xl">{profile?.email}</p>
        </div>

        <div>
          <label className="text-slate-400">Role</label>
          <p className="text-xl">{profile?.role}</p>
        </div>

        <div className="flex gap-4 pt-6">

          {editing ? (
            <>
             <button
              onClick={saveProfile}
              className="rounded bg-green-600 px-6 py-2 text-white hover:bg-green-700">
                Save
             </button>

             <button
              onClick={()=> setEditing(false)}
              className="rounded bg-gray-500 px-6 py-2 text-white hover:bg-gray-600">
                Cancel
              </button>
            </>
          ) : (
            <button
             onClick={()=> setEditing(true)}
             className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
              Edit Profile
             </button>
          )}
        </div>
      </AppCard>

    </motion.div>
  );
}
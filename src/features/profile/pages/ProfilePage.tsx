import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../services/profileService";
import type { ProfileResponse } from "../types/profile";
import { tr } from "zod/locales";

export default function ProfilePage() {

  const [profile, setProfile] = useState<ProfileResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const response = await getProfile();
      // setProfile(response.data.data);
      const user = response.data.data;
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
      alert("Profile Updated Successfully");
    } catch(error) {
      console.error(error);
      alert("Unable to Update Profile");
    }
  }

  if(loading) {
    return <div className="p-10">Loading...</div>
  }

  if (!profile) {
    return <div className="p-10">Profile not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-8">
        My Profile
      </h1>

      <div className="bg-slate-800 rounded-xl p-8 space-y-6">

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
      </div>

    </div>
  );
}
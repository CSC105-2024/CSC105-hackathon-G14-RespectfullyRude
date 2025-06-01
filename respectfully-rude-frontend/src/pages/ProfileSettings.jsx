import AlertBox from "@/components/AlertBox";
import EditProfile from "@/components/EditProfile";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useDataContext } from "@/hooks/useDataContext";
import { useEdit } from "@/hooks/useEdit";
import { useLogout } from "@/hooks/useLogout";
import React,{useState} from "react";

const ProfileSettings = () => {
  //const ProfilePicture = ({ imageUrl, onImageUpload })
  const {user} = useAuthContext();
  const { logout } = useLogout();
  const {edit} = useEdit();
  const {data} = useDataContext()

  const result = data.reduce(
  (acc, list) => {
    acc.totalLists += 1;
    if (list.flagged) {
      acc.flaggedLists += 1;
    }
    return acc;
  },
  { totalLists: 0, flaggedLists: 0 }
);

  
   const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    oldPassword: "",
    newPassword: "",
  });

  console.log(form)

  const handleLogout = async () => {
    await logout();
  };

  const onEditInfo = async () => {
    await edit(
      form.name,
      form.email,
      form.oldPassword,
      form.newPassword,
    );
  };

  return (
    
    <div>
      <div className="ml-5 text-left text-3xl text-bold  mt-5 font-bold">Profile Settings</div>
    
    <div className="max-w-4xl mx-auto p-6 bg-white mt-2">
      
      <div className="flex items-center justify-center mb-6">
        <EditProfile img_url={user.img_url}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-10">

        <div className="flex flex-col">
          <label className="block  font-sm font-bold text-black mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all hover:border-[var(--color-primary)]"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block font-sm font-bold text-black mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all hover:border-[var(--color-primary)]"
             placeholder="Email"
             value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-sm font-bold text-black mb-2 ">
            Old Password
          </label>
          <div className="relative">
            <input
              type="password"
              name="oldpassword"
              className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all hover:border-[var(--color-primary)]"
              value={form.oldPassword}
              onChange={(e) => setForm({ ...form, oldPassword: e.target.value })}
            />
          </div>
        </div>
        <div className="flex flex-col">
            <label className="font-sm font-bold text-black mb-2 ">
              New Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="newpassword"
                value={form.newPassword}
                onChange={(e) => setForm({ ...form, newPassword: e.target.value })}
                className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all hover:border-[var(--color-primary)]"/>

            </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        {/* <button className="px-6 py-2 bg-orange-400 text-white rounded-2xl font-medium hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-all">
          Save Changes
        </button> */}
        <AlertBox
            buttonName={"Save Changes"}
            css={
              "px-6 py-2 bg-orange-400 text-white rounded-2xl font-medium hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-all"
            }
            title={"Are you sure you want to update your info?"}
            onClick={onEditInfo}
          />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-5">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Ugh List</h3>
              <p className="text-4xl font-bold text-gray-900">{result.totalLists}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Red Flags</h3>
              <p className="text-4xl font-bold text-gray-900">{result.flaggedLists}</p>
            </div>
      </div>
      <div className="flex justify-center">
            <AlertBox
            buttonName={"Logout"}
            css={
              "px-6 py-2 bg-orange-400 text-white rounded-2xl font-medium hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-all"
            }
            title={"Are you sure you want to logout?"}
            onClick={handleLogout}
          />
       </div>

    </div>
    </div>
  );
};

export default ProfileSettings;

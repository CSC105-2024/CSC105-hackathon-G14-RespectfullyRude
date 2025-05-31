import React from "react";

const ProfileSettings = () => {
  //const ProfilePicture = ({ imageUrl, onImageUpload })
  
  return (
    
    <div>
      <div className="ml-5 text-left text-3xl text-bold  mt-5">Profile Settings</div>
    
    <div className="max-w-4xl mx-auto p-6 bg-white mt-2">
      
      <div className="flex justify-center mt-5">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          alt="Profile"
          className="w-32 h-32  rounded-full object-cover"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-10">

        <div className="flex flex-col">
          <label className="block text-lg font-medium text-orange-400 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
            placeholder="Olivia"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-orange-400 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium text-orange-400 mb-2 ">
            Old Password
          </label>
          <div className="relative">
            <input
              type="password"
              name="oldpassword"
              className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
            />
          </div>
        </div>
        <div className="flex flex-col">
            <label className="text-lg font-medium text-orange-400 mb-2 ">
              New Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="newpassword"
                className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"/>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <button className="px-8 py-3 bg-orange-400 text-white rounded-full font-medium hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-all">
          Save Changes
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-5">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Ugh List</h3>
              <p className="text-4xl font-bold text-gray-900">6</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Red Flags</h3>
              <p className="text-4xl font-bold text-gray-900">5</p>
            </div>
      </div>
      <div className="flex justify-center">
            <button
              className="px-8 py-3 bg-orange-400 text-white rounded-full font-medium hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-all">
              Logout
            </button>
       </div>

    </div>
    </div>
  );
};

export default ProfileSettings;

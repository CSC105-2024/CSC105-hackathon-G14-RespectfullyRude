import React from "react";
import { useNavigate } from "react-router-dom";

const Profiles = ({ profile, index }) => {
  const navigate = useNavigate();

  const redirect = (id) => {
    navigate(`/dashboard/profile/${id}`);
  };

  console.log(profile);

  return (
    <div
      className="w-40 h-full cursor-pointer hover:shadow-md hover:scale-102 duration-150 p-1"
      id={index}
      onClick={() => redirect(profile.id)}
    >
      <img
        src={profile.img_url}
        className="w-full rounded-lg aspect-square object-cover"
      />
      <div className="font-medium">{profile.name}</div>
      <div className="text-sm text-[var(--color-foreground)]">
        {profile.text}
      </div>
    </div>
  );
};

export default Profiles;

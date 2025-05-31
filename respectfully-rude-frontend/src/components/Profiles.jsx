import React from "react";
import { useNavigate } from "react-router-dom";

const Profiles = ({ profile, index }) => {
  const navigate = useNavigate();

  const redirect = (id) => {
    navigate(`/dashboard/profile/${id}`);
  };

  return (
    <div
      className="w-30 md:w-40 h-full cursor-pointer hover:shadow-md hover:scale-102 duration-150 p-0 md:p-3"
      id={index}
      onClick={() => redirect(profile.id)}
    >
      <img
        src={profile.img}
        className="w-full rounded-lg aspect-square object-cover"
      />
      <div className="font-medium">{profile.name}</div>
      <div className="text-sm text-[var(--color-foreground)]">
        {profile.description}
      </div>
    </div>
  );
};

export default Profiles;

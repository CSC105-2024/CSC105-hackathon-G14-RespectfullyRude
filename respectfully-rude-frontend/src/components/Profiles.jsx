import React from "react";
import { useNavigate } from "react-router-dom";

const Profiles = ({ profile, index }) => {
  const navigate = useNavigate();

  const redirect = (id) => {
    navigate(`/dashboard/profile/${id}`);
  };

  return (
    <div
      className="w-40 h-full cursor-pointer"
      id={index}
      onClick={() => redirect(profile.id)}
    >
      <img
        src={profile.img}
        className="w-full rounded-lg aspect-square object-cover"
      />
      <div className="font-medium">{profile.name}</div>
      <div className="text-sm text-[var(--color-secondary)]">
        {profile.description}
      </div>
    </div>
  );
};

export default Profiles;

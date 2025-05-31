import AlertBox from "@/components/AlertBox";
import { Button } from "@/components/ui/button";
import { ThumbsDown } from "lucide-react";
import React, { useState } from "react";
import { useDataContext } from "@/hooks/useDataContext";
import { useNavigate, useParams } from "react-router";

const IndividualProfile = () => {
  const [toggleList, setToggleList] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useDataContext();

  const profile = data.find((d) => d.id === Number(id));
  console.log(profile);

  const confirmDelete = () => {
    navigate("/dashboard/home");
  };

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center gap-10 px-10">
      <div className="flex flex-col items-center gap-3 mb-5">
        <div className="w-40 h-full">
          <img
            src={profile.backhanded_img}
            className="w-full rounded-full aspect-square object-cover border border-[var(--color-primary)]"
          />
        </div>

        <h1 className="text-xl font-bold">{profile.backhanded_name}</h1>
      </div>

      <div className="w-8/10 flex flex-col gap-3">
        <h1 className="text-xl font-bold text-left self-start gap-3">
          BackHand Compliment
        </h1>
        <div className="bg-[var(--color-pale)] p-7 rounded-lg">
          {profile.backhanded_text}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        <Button
          className="text-base bg-[var(--color-primary)] w-1/3 cursor-pointer hover:bg-[var(--color-secondary)] mt-2 px-15"
          variant="default"
          onClick={() => navigate(`/dashboard/edit/${id}`)}
        >
          Edit
        </Button>{" "}
        {/*change later*/}
        <AlertBox
          buttonName={"Delete"}
          css={
            "bg-[var(--color-alert)] hover:bg-[var(--color-alert-hover)] text-base w-1/3 cursor-pointer mt-2 px-15 "
          }
          title={"Are you sure you want to delete this profile?"}
          onClick={confirmDelete}
        />
      </div>
    </div>
  );
};

export default IndividualProfile;

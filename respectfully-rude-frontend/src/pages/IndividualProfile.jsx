import { Button } from "@/components/ui/button";
import { useDataContext } from "@/hooks/useDataContext";
import React from "react";
import { useNavigate, useParams } from "react-router";

const IndividualProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useDataContext();

  const profile = data.find((d) => d.id === Number(id));
  console.log(profile);

  return (
    <div className="flex flex-col min-w-screen min-h-screen items-center justify-around px-10 py-5">
      <div className="flex flex-col items-center gap-3">
        <div className="w-40 h-full">
          <img
            src={profile.backhanded_img}
            className="w-full rounded-full aspect-square object-cover border border-[var(--color-primary)]"
          />
        </div>

        <h1 className="text-xl font-bold">{profile.backhanded_name}</h1>
      </div>

      <div className="w-8/10">
        <h1 className="text-xl font-bold text-left self-start gap-3">
          BackHand Compliment
        </h1>
        <div>{profile.backhanded_text}</div>
      </div>

      <div className="flex justify-center gap-10">
        <Button
          className="text-base bg-[var(--color-primary)] w-1/3 cursor-pointer hover:bg-[var(--color-secondary)] mt-2 px-15"
          variant="default"
          onClick={() => navigate(`/dashboard/edit/${id}`)}
        >
          Edit
        </Button>{" "}
        {/*change later*/}
        <Button
          className="text-base bg-[var(--color-alert)] w-1/3 cursor-pointer hover:bg-[var(--color-alert-hover)] mt-2 px-15"
          variant="default"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default IndividualProfile;

import AlertBox from "@/components/AlertBox";
import { Button } from "@/components/ui/button";
import { ThumbsDown } from "lucide-react";
import React, { useState } from "react";
import { useDataContext } from "@/hooks/useDataContext";
import React from "react";
import { useNavigate, useParams } from "react-router";

const profile = {
  backhanded_img:
    "https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg",
  backhanded_name: "Jane Doe",
  backhanded_text:
    "A master of subtle wit, Jane is known for delivering backhanded compliments that leave you questioning whether you’ve just been praised or politely roasted. With a charming smile and a knack for sarcasm, she navigates social settings with effortless grace and a touch of mischief. She once complimented a colleague's 'bold fashion choice' that was just brave enough to make headlines at the office for a week.",
};

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
    <div className="flex flex-col min-w-screen min-h-screen items-center justify-around px-10 py-5">
      <div className="flex flex-col items-center gap-3">
<<<<<<< HEAD
        <div className="flex">
          <div className="w-40 h-full">
            <img
              src={profile.backhanded_img}
              className="w-full rounded-full aspect-square object-cover"
            />
          </div>
          <div
            className={`flex absolute right-40 border-[var(--color-accent)] border-1 items-center rounded-full hover:bg-[var(--color-secondary)] cursor-pointer justify-center w-10 h-10 pt-1 ${
              toggleList ? "bg-[var(--color-primary)]" : "bg-white"
            } ${
              toggleList
                ? "hover:bg-[var(--color-secondary)]"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setToggleList(!toggleList)}
          >
            <ThumbsDown color="#FF0808" />
          </div>
=======
        <div className="w-40 h-full">
          <img
            src={profile.backhanded_img}
            className="w-full rounded-full aspect-square object-cover border border-[var(--color-primary)]"
          />
>>>>>>> 0b4713e6130b26c44355f6308cdbf639b486312f
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

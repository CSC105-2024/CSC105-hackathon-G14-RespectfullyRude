import { Button } from "@/components/ui/button";
import React from "react";

const profile = {
  backhanded_img:
    "https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg",
  backhanded_name: "Jane Doe",
  backhanded_text:
    "A master of subtle wit, Jane is known for delivering backhanded compliments that leave you questioning whether you’ve just been praised or politely roasted. With a charming smile and a knack for sarcasm, she navigates social settings with effortless grace and a touch of mischief. She once complimented a colleague's 'bold fashion choice' that was just brave enough to make headlines at the office for a week.",
};

const IndividualProfile = () => {
  return (
    <div className="flex flex-col min-w-screen min-h-screen items-center justify-around px-10 py-5">
      <div className="flex flex-col items-center gap-3">
        <div className="w-40 h-full">
          <img
            src={profile.backhanded_img}
            className="w-full rounded-full aspect-square object-cover"
          />
        </div>

        <h1 className="text-xl font-bold">{profile.backhanded_name}</h1>
      </div>

      <div>
        <h1 className="text-xl font-bold text-left self-start gap-3">
          BackHand Compliment
        </h1>
        <div>{profile.backhanded_text}</div>
      </div>

      <div className="flex justify-center gap-10">
        <Button
          className="text-base bg-[var(--color-primary)] w-1/3 cursor-pointer hover:bg-[var(--color-secondary)] mt-2 px-15"
          variant="default"
        >
          Edit
        </Button>
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

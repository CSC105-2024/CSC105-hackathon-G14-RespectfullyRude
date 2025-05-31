import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import UploadImage from "./UploadImage";
import { useNavigate } from "react-router";
import AlertBox from "./AlertBox";

const ProfileForm = ({ mode }) => {
  const handleSubmit = () => {
    navigate("/dashboard/home");
  };
  const navigate = useNavigate();

  return (
    <div className="p-5 pl-10 min-w-screen">
      <h1 className="text-3xl font-bold">
        {mode === "create" ? "Create Ugh List" : "Edit Ugh List"}
      </h1>
      <div className="flex flex-col gap-10 items-center px-40">
        <div className="flex gap-10">
          <div>
            <UploadImage length={1} mode={mode} /> {/*change later */}
          </div>
          <div className="flex flex-col gap-1 justify-center">
            <h2 className="font-semibold">Name</h2>
            <Input
              type="text"
              placeholder="Enter name"
              className={
                "bg-[var(--color-input-bg)] text-[var(--color-foreground)]  w-90 p-7"
              }
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-1">
          <h2 className="items-start font-semibold">Description</h2>
          <Textarea
            placeholder="I hate him so much"
            className={
              "bg-[var(--color-input-bg)] text-[var(--color-foreground)]  w-full h-80 p-7"
            }
          />
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-10">
        <Button
          className="text-black bg-[var(--color-pale)] cursor-pointer hover:bg-[var(--color-pale-hover)] mt-2 px-15"
          variant="default"
          onClick={() => navigate("/dashboard/home")}
        >
          Cancel
        </Button>
        <AlertBox
          buttonName={mode === "create" ? "Create" : "Edit"}
          title={
            mode === "create"
              ? "Are you sure you want to create a new profile?"
              : "Are you sure you want to update this profile?"
          }
          css={
            "bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-base w-1/3 cursor-pointer mt-2 px-15 "
          }
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ProfileForm;

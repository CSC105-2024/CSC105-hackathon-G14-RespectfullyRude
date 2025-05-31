import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import UploadImage from "./UploadImage";
import { useNavigate } from "react-router";
<<<<<<< HEAD
import AlertBox from "./AlertBox";

const ProfileForm = ({ mode }) => {
  const handleSubmit = () => {
    navigate("/dashboard/home");
  };
=======
import { toast } from "sonner";
import { useCreate } from "@/hooks/useCreateList";

const ProfileForm = ({ oldForm, mode }) => {
>>>>>>> 0b4713e6130b26c44355f6308cdbf639b486312f
  const navigate = useNavigate();
  const { create } = useCreate();

  const [form, setForm] = useState({
    name: "",
    img: "",
    text: "",
  });

  const handleSubmit = () => {
    console.log(form);

    const promise = async () => {
      // if (mode === "edit" && oldForm) {
      //   await editCourse(form, oldForm);
      // } else {
      await create(form);
      // }
    };

    toast.promise(promise(), {
      //promise is not a func
      loading: oldForm ? "Updating..." : "Creating...",
      success: (data) => {
        return oldForm
          ? "You Ugh List has been updated"
          : "New Ugh List has been created";
      },
      error: (err) => err.message,
    });
  };

  return (
    <div className="p-5 pl-10 min-w-screen">
      <h1 className="text-3xl font-bold">
        {mode === "create" ? "Create Ugh List" : "Edit Ugh List"}
      </h1>
      <div className="flex flex-row gap-10 items-center px-40">
        <div className=" gap-10">
          <div className="flex flex-col gap-1 justify-center mt-10">
            <h2 className="font-semibold">Name</h2>
            <Input
              type="text"
              placeholder="Enter name"
              className={
                "bg-[var(--color-input-bg)] text-[var(--color-foreground)]  w-90 p-7"
              }
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              value={form.title}
            />
            <div>
              <UploadImage length={1} mode={mode} setForm={setForm} />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-1 ">
          <h2 className="items-start font-semibold">Description</h2>
          <Textarea
            placeholder="I hate him so much"
            className={
              "bg-[var(--color-input-bg)] text-[var(--color-foreground)]  w-full h-90 p-7"
            }
            onChange={(e) => setForm((f) => ({ ...f, text: e.target.value }))}
            value={form.text}
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
<<<<<<< HEAD
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
=======
        <Button
          className="text-base bg-[var(--color-primary)] cursor-pointer hover:bg-[var(--color-secondary)] mt-2 px-15"
          variant="default"
          onClick={handleSubmit}
        >
          {mode === "create" ? "Create" : "Edit"}
        </Button>
>>>>>>> 0b4713e6130b26c44355f6308cdbf639b486312f
      </div>
    </div>
  );
};

export default ProfileForm;

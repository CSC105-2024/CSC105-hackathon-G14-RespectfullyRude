import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import UploadImage from "./UploadImage";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useCreate } from "@/hooks/useCreateList";
import { useEditList } from "@/hooks/useEditList";

const ProfileForm = ({ oldForm, mode }) => {
  const navigate = useNavigate();
  const { create } = useCreate();
  const { edit } = useEditList();

  const [form, setForm] = useState({
    name: oldForm?.name || "",
    img: "",
    text: oldForm?.text || "",
  });

  const handleSubmit = () => {
    console.log(form);

    const promise = async () => {
      if (mode === "edit" && oldForm) {
        await edit(form, oldForm);
      } else {
        await create(form);
      }
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
              value={form.name}
            />
            <div>
              <UploadImage
                length={1}
                mode={mode}
                setForm={setForm}
                oldForm={oldForm}
              />
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
        <Button
          className="text-base bg-[var(--color-primary)] cursor-pointer hover:bg-[var(--color-secondary)] mt-2 px-15"
          variant="default"
          onClick={handleSubmit}
        >
          {mode === "create" ? "Create" : "Edit"}
        </Button>
      </div>
    </div>
  );
};

export default ProfileForm;

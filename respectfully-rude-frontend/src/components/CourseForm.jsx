import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const CourseForm = ({ mode }) => {
  return (
    <div className="p-5 pl-10 min-w-screen">
      <h1 className="text-3xl font-bold">
        {mode === "create" ? "Create Ugh List" : "Edit Ugh List"}
      </h1>
      <div className="flex flex-col items-center px-40">
        <div className="flex gap-10">
          <div>image box</div>
          <div className="flex flex-col gap-1">
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
        <div className="flex flex-col w-full">
          <h2 className="items-start font-semibold">Description</h2>
          <Textarea
            placeholder="I hate him so much"
            className={
              "bg-[var(--color-input-bg)] text-[var(--color-foreground)]  w-full h-80 p-7"
            }
          />
        </div>
      </div>
      <div className="flex justify-center gap-10">
        <Button
          className="text-base bg-[var(--color-primary)] cursor-pointer hover:bg-[var(--color-secondary)] mt-2 px-15"
          variant="default"
        >
          Cancel
        </Button>
        <Button
          className="text-base bg-[var(--color-primary)] cursor-pointer hover:bg-[var(--color-secondary)] mt-2 px-15"
          variant="default"
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default CourseForm;

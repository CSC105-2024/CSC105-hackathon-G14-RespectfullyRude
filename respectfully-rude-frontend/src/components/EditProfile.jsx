import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useUploadProfile } from "@/hooks/useUpload";
import { toast } from "sonner";


const EditProfile = ({ img_url }) => {
  
  const { uploadProfile } = useUploadProfile();

  const onUpload = async (e) => {
    const promise = async () => {
      return await uploadProfile(e.target.files[0]);
    };

    toast.promise(promise(), {
      //promise not func that's why
      loading: "Uploading...",
      success: (data) => {
        return `Your profile has been changed`;
      },
      error: (err) => err.message,
    });
  };

  return (
    <>
      <div className="relative w-24 h-24 md:mt-0 mt-10 ">
        <Avatar className="w-full h-full border border-[var(--color-primary)]">
          <AvatarImage src={img_url} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <label htmlFor="avatarUpload">
          <FontAwesomeIcon
            icon={faPen}
            className="absolute bottom-1 right-1 bg-white p-2 rounded-full text-gray-600 text-xs shadow hover:bg-black hover:text-white cursor-pointer"
          />
        </label>
        <input
          type="file"
          id="avatarUpload"
          className="hidden"
          onChange={(e) => onUpload(e)}
        />
      </div>
      
    </>
  );
};

export default EditProfile;
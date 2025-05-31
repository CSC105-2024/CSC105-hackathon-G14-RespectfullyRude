import ProfileForm from "@/components/ProfileForm";
import { useDataContext } from "@/hooks/useDataContext";
import React from "react";
import { useParams } from "react-router";

const EditPage = () => {
  const { id } = useParams();
  const { data } = useDataContext();
  const oldForm = data.find((d) => d.id === Number(id));

  return (
    <div>
      <ProfileForm mode={"edit"} oldForm={oldForm} />
    </div>
  );
};

export default EditPage;

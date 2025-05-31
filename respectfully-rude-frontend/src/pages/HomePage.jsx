import React, { useState } from "react";
import Profiles from "../components/Profiles";
import { ThumbsDown } from "lucide-react";
import { IoSearchSharp } from "react-icons/io5";
import FormInput from "../components/FormInput";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import Footer from "@/components/layout/Footer";
import { useDataContext } from "@/hooks/useDataContext";

const HomePage = () => {
  const { data } = useDataContext();
  const [toggleList, setToggleList] = useState(false);
  const [selectedProfiles, setSelectedProfiles] = useState(data);
  const onSearch = (e) => {
    const name = e.target.value.toLowerCase();
    const filtered = data.filter((profile) =>
      profile.name.toLowerCase().includes(name)
    );

    setSelectedProfiles(filtered);
  };

  console.log(selectedProfiles);

  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-around py-5">
      <div className="hidden md:flex mb-15 justify-around w-screen">
        <div className="flex items-center border border-[var(--color-foreground)] px-3 w-100 rounded-md hover:border-black h-9">
          <Input
            type="text"
            placeholder="Search by Name"
            className="outline-none ring-0 text-inehrit border-none shadow-none focus:outline-none focus:ring-0 focus:border-none focus-visible:ring-0 focus-visible:border-none bg-transparent placeholder:text-[var(--color-foreground)]"
            onChange={onSearch}
          />

          <IoSearchSharp className="text-[var(--color-foreground)]" />
        </div>
        <div className="flex gap-3">
          <Button
            className="text-base bg-[var(--color-primary)] cursor-pointer hover:bg-[var(--color-secondary)] px-3"
            variant="default"
            onClick={() => navigate("/dashboard/create")}
          >
            <strong>+</strong> Add
          </Button>
          <div
            className={`flex items-center justify-center w-10 pt-1 rounded-full cursor-pointer border border-[var(--color-accent)] ${
              toggleList
                ? "bg-[var(--color-primary)] hover:bg-[var(--color-secondary)]"
                : "bg-[var(--color-white)] hover:bg-[var(--color-pale-hover)]"
            }`}
            onClick={() => setToggleList(!toggleList)}
          >
            <ThumbsDown color="#FF0808" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-15 gap-y-10 mb-15">
        {data?.length > 0 ? (
          selectedProfiles?.map((profile, index) => {
            return (
              <Profiles key={profile?.id} profile={profile} index={index} />
            );
          })
        ) : (
          <div className="font-bold text-white h-80 flex items-center mx-auto item-center col-span-4 text-3xl mb-20">
            No Ugh Lists found
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

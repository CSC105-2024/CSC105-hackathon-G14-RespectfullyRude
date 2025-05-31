import React from "react";
import Profiles from "../components/Profiles";
import { ThumbsDown } from "lucide-react";
import { IoSearchSharp } from "react-icons/io5";
import FormInput from "../components/FormInput";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const profilesData = [
  {
    id: 1,
    name: "Alice Johnson",
    description: "Frontend Developer from New York",
    img: "https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg",
  },
  {
    id: 2,
    name: "Bob Smith",
    description: "UX Designer based in London",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Charlie Lee",
    description: "Full Stack Engineer from Seoul",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Diana Torres",
    description: "Project Manager from Toronto",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Ethan Patel",
    description: "Mobile App Developer in Mumbai",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Fiona Müller",
    description: "Data Scientist from Berlin",
    img: "https://img1.wsimg.com/isteam/ip/56c0cc13-b423-4d20-93f5-b95b2a675d4e/Robert-Fishman.jpg",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center">
      <div className="flex mb-15 justify-around w-screen">
        <div className="flex items-center border border-[var(--color-foreground)] px-3 w-100 rounded-md hover:border-black h-9">
          <Input
            type="text"
            placeholder="Search by Name"
            className="outline-none ring-0 text-inehrit border-none shadow-none focus:outline-none focus:ring-0 focus:border-none focus-visible:ring-0 focus-visible:border-none bg-transparent placeholder:text-[var(--color-foreground)]"
            onChange={(e) => onSearch(e)}
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
          <div className="flex items-center bg-[var(--color-primary)] rounded-full cursor-pointer hover:bg-[var(--color-secondary)] justify-center w-10 pt-1">
            <ThumbsDown />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-x-15 gap-y-10">
        {profilesData.map((profile, index) => {
          return <Profiles key={profile.id} profile={profile} index={index} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;

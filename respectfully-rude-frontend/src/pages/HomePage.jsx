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
    img: "https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg",
  },
  {
    id: 3,
    name: "Charlie Lee",
    description: "Full Stack Engineer from Seoul",
    img: "https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg",
  },
  {
    id: 4,
    name: "Diana Torres",
    description: "Project Manager from Toronto",
    img: "https://img1.wsimg.com/isteam/ip/56c0cc13-b423-4d20-93f5-b95b2a675d4e/Robert-Fishman.jpg",
  },
  {
    id: 5,
    name: "Ethan Patel",
    description: "Mobile App Developer in Mumbai",
    img: "https://img1.wsimg.com/isteam/ip/56c0cc13-b423-4d20-93f5-b95b2a675d4e/Robert-Fishman.jpg",
  },
  {
    id: 6,
    name: "Fiona Müller",
    description: "Data Scientist from Berlin",
    img: "https://img1.wsimg.com/isteam/ip/56c0cc13-b423-4d20-93f5-b95b2a675d4e/Robert-Fishman.jpg",
  },
];

const HomePage = () => {
  const { data } = useDataContext();
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
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-around py-5">
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
            className="flex items-center justify-center w-10 pt-1 rounded-full cursor-pointer border border-[var(--color-accent)] hover:bg-gray-100 bg-[var(--color-primary)]"
            onClick={() => setToggleList(!toggleList)}
          >
            <ThumbsDown color="#FF0808" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-x-15 gap-y-10 mb-15">
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
      <Footer />
    </div>
  );
};

export default HomePage;

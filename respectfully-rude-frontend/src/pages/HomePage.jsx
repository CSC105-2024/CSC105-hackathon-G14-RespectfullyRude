import React from "react";
import Profiles from "../components/Profiles";
import { ThumbsDown } from "lucide-react";

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
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-5 gap-x-15 gap-y-10">
        {profilesData.map((profile, index) => {
          return <Profiles key={profile.id} profile={profile} index={index} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;

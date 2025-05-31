import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center text-[var(--color-foreground)] text-sm pb-3">
      <div className="flex justify-around w-screen">
        <div>Terms of Service</div>
        <div>Privacy Policy</div>
      </div>
      <div>@2024 Respectfully Rude. All rights reserved.</div>
    </div>
  );
};

export default Footer;

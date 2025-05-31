import React, { useRef, useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Button } from "./ui/button";

const UploadImage = ({ length }) => {
  const [files, setFile] = useState([]);
  const [url, setUrl] = useState(null);

  const ref = useRef(null);

  return (
    <div className="text-black">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl text-black">Upload Image</h1>
      </div>
      <div className="text-gray-400 ">
        Click to upload an image or select from the gallery.
      </div>
      <div className=" border-[var(--primary-color)] border-2 border-dashed mt-5 rounded-xl p-10 2xl:p-20">
        <label className="cursor-pointer text-center text-gray-700 ">
          {/* Custom placeholder text */}
          <MdOutlineCloudUpload className="text-4xl text-[var(--primary-color)] mx-auto" />
          <div className="text-sm">
            {"Drag your file(s) or"}{" "}
            <span className="text-[var(--color-primary)] font-bold">
              browse
            </span>
            <input
              type="file"
              className="hidden"
              onChange={(e) => {
                //files
                if (files.length < length) {
                  handleFileChange(e);
                }
              }}
            />
            <div className="text-gray-500 mt-3">
              Max 10 MB files are allowed
            </div>
          </div>
        </label>
      </div>
      <div className="mt-3 mb-3 text-gray-500">Only support .jpg</div>
    </div>
  );
};

export default UploadImage;

import React from "react";
import { GiCancel } from "react-icons/gi";

const ImgList = ({ data, index, setFile, mode }) => {
  const handleDelete = () => {
    setFile("");
  };

  return (
    <div
      className="border rounded-2xl  border-gray-100  flex items-center justify-between h-full w-full px-4  "
      id={index}
    >
      <div className="flex gap-3 items-center w-full ">
        <img
          src={data.url}
          alt="no img"
          className="text-black h-10 w-16 border"
        />
        <div>
          <div>{data.name}</div>
          {data.size !== 0 && mode !== "edit" ? (
            <div className="text-gray-500">{data.size}KB</div>
          ) : (
            <div className="text-gray-500">.....</div>
          )}
        </div>
      </div>
      <div>
        <button onClick={handleDelete}>
          <GiCancel className="text-gray-600 text-xl hover:text-[var(--primary-color)]" />
        </button>
      </div>
    </div>
  );
};

export default ImgList;

import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {
  
  const ref = useRef(null)

  const data = [
    {
      desc: "Optimized performance techniques for React components.",
      filesize: "2.5mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Dynamic React & Vite site with stored documents.",
      filesize: "2.1mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Uploading",
        tagColor: "blue",
      },
    },
    {
      desc: "Efficient data management for React applications.",
      filesize: "1.8mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Enhancing user experience with React and Vite.",
      filesize: "2.3mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Locked",
        tagColor: "blue",
      },
    },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-3 flex-wrap p-7">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;

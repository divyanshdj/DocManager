import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion"

function Card({ data,reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1} className="relative flex-shrink-0 w-44 h-56 rounded-[30px] bg-zinc-600/60 text-white px-5 py-7 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-3 font-normal">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between py-2 px-5 mb-2">
          <h5>{data.filesize}</h5>
          <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <MdOutlineClose /> : <FiDownload />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className="text-sm font-medium">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;

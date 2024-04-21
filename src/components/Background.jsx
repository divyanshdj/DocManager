import React from "react";

function Background() {
  return (
    <>
      <div className="fixed w-full h-screen z-[2]">
        <div className="absolute top-[5%] w-full py-10 flex justify-center text-lg text-zinc-500 font-semibold ">
          Documents.
        </div>

        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[15vw] leading-none tracking-tighter font-thin tetx-zinc-900 font-semibold">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;

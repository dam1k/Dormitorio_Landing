import React, { useRef } from "react";
import { motion } from "framer-motion";

function ImageFull({
  showImage,
  setShowImage,
}: {
  showImage: {
    imgUrl: string;
    desc: string;
  };
  setShowImage: any;
}) {
  const imgRef = useRef<HTMLImageElement>(null);

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target !== imgRef.current) {
      setShowImage({ imgUrl: "", desc: "" });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 flex-col gap-[20px] p-[20px] left-0 w-[100vw] !z-[100] h-[100vh] bg-[#F0F0F0] flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <img
        className="object-cover h-[80vh]"
        src={showImage.imgUrl}
        alt=""
        ref={imgRef}
      />
      <p className="text-[18px]">{showImage.desc}</p>
    </motion.div>
  );
}

export default ImageFull;

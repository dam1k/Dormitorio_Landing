import React, { useRef } from "react";
import { motion } from "framer-motion";

function ImageFull({
  imgUrl,
  setShowImage,
}: {
  imgUrl: string;
  setShowImage: any;
}) {
  const imgRef = useRef<HTMLImageElement>(null);

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target !== imgRef.current) {
      setShowImage(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 p-[20px] left-0 w-[100vw] !z-[100] h-[100vh] bg-[#F0F0F0] flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <img className="h-[90vh]" src={imgUrl} alt="" ref={imgRef} />
    </motion.div>
  );
}

export default ImageFull;

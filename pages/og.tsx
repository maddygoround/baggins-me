import React from "react";
import { ProfileImage } from "../components/base/profile-image";
import Logo from "../assets/svgs/logo.svg";

import { useRouter } from "next/router";

const OGImage: React.FC = () => {
  const router = useRouter();
  const { title } = router.query;
  return (
    <div className="flex flex-col flex-1 px-12 py-8 justify-end relative">
      <ProfileImage size={120} />
      <div className="text-5xl font-bold text-gray-900 mt-2">{title}</div>
      <div className="text-4xl text-gray-500">baggins.me</div>
      <Logo
        style={{ opacity: 0.05 }}
        className="absolute right-0 top-0 max-w-2xl transform translate-x-32 -translate-y-16"
      />
    </div>
  );
};

export default OGImage;

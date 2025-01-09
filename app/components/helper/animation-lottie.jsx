"use client"; // Ensures this component is treated as a Client Component

import dynamic from "next/dynamic";
import PropTypes from "prop-types"; // For prop type validation (optional but recommended)

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width = "100%" }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Ensures the animation scales correctly
    },
  };

  return (
    <div style={{ width }}>
      <Lottie {...defaultOptions} />
    </div>
  );
};

// Prop type validation (optional but recommended)
AnimationLottie.propTypes = {
  animationPath: PropTypes.object.isRequired, // Ensure animationPath is provided
  width: PropTypes.string, // Optional width prop
};

export default AnimationLottie;
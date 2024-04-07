import Typewriter from "typewriter-effect";

export const TypewriterEffect = () => {
  return (
    <Typewriter
      options={{
        strings: ["Frontend developer", "MERN stack developer"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

import { Twitter, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
const socialsData = [
  {
    platform: <Twitter />,
    link: "https://twitter.com/CodeWithSara",
  },
  {
    platform: <LinkedIn />,
    link: "https://www.linkedin.com/in/sara-ahmed-0b1b1b1b9/",
  },
  {
    platform: <GitHub />,
    link: "",
  },
  {
    platform: <Instagram />,
    link: "https://www.instagram.com/saraahmed_/",
  },
];

const Socials = () => {
  return (
    <div className="flex justify-between">
      {socialsData.map((social) => (
        <a
          target="_blank"
          href={social.link}
          className="bg-blue-600"
          rel="noreferrer"
        >
          {social.platform}
        </a>
      ))}
    </div>
  );
};

export default Socials;

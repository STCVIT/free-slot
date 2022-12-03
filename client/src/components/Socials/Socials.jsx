import { Twitter, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
const socialsData = [
  {
    platform: <Twitter htmlColor="#818181" />,
    link: "https://twitter.com/CodeWithSara",
  },
  {
    platform: <LinkedIn htmlColor="#818181" />,
    link: "https://www.linkedin.com/in/sara-ahmed-0b1b1b1b9/",
  },
  {
    platform: <GitHub htmlColor="#818181" />,
    link: "",
  },
  {
    platform: <Instagram htmlColor="#818181" />,
    link: "https://www.instagram.com/saraahmed_/",
  },
];

const Socials = () => {
  return (
    <div className="flex gap-x-4">
      {socialsData.map((social) => (
        <a target="_blank" href={social.link} rel="noreferrer">
          {social.platform}
        </a>
      ))}
    </div>
  );
};

export default Socials;

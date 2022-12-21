import { Twitter, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
const socialsData = [
  {
    platform: <Twitter sx={{ fontSize: "40px" }} htmlColor="#818181" />,
    link: "https://twitter.com/stcvit",
  },
  {
    platform: <LinkedIn sx={{ fontSize: "40px" }} htmlColor="#818181" />,
    link: "https://www.linkedin.com/company/micvitvellore/mycompany/",
  },
  {
    platform: <GitHub sx={{ fontSize: "40px" }} htmlColor="#818181" />,
    link: "https://github.com/STCVIT/",
  },
  {
    platform: <Instagram sx={{ fontSize: "40px" }} htmlColor="#818181" />,
    link: "https://www.instagram.com/stcvit/",
  },
];

const Socials = () => {
  return (
    <div className="flex w-full justify-center items-center gap-x-8 pt-16 pb-6">
      {socialsData.map((social, idx) => (
        <a key={idx} target="_blank" href={social.link} rel="noreferrer">
          {social.platform}
        </a>
      ))}
    </div>
  );
};

export default Socials;

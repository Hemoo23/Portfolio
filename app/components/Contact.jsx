import {
  FaIdCardAlt,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

const contactItems = [
  {
    key: "name",
    label: "Name",
    value: "Hemachandran",
    Icon: FaIdCardAlt,
    href: null,
  },
  {
    key: "email",
    label: "Email",
    value: "hemachandran.k2001@gmail.com",
    Icon: IoIosMail,
    href: "mailto:hemachandran.k2001@gmail.com",
  },
  {
    key: "phone",
    label: "Call Me",
    value: "+91 (984) 091-0512",
    Icon: MdLocalPhone,
    href: "tel:+919840910512",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/hemachandran-k",
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/hemachandran-k",
  },
  {
    key: "instagram",
    label: "Instagram",
    value: "@peterparker._23",
    Icon: FaInstagram,
    href: "https://instagram.com/peterparker._23",
  },
  {
    key: "github",
    label: "Github",
    value: "github.com/Hemoo23",
    Icon: FaGithub,
    href: "https://github.com/Hemoo23",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#1f242a] text-white px-4 sm:px-6 md:px-12 py-10 md:py-16 min-h-[80vh] flex items-center"
    >
      <div className="flex flex-col justify-center items-center max-w-3xl mx-auto text-center w-full">
        <h2 id="contact-heading" className="text-[#0ef] font-bold text-4xl">
          Let's Connect
        </h2>
        <p className="text-md text-zinc-500 mt-2">
          Feel free to reach out — I'm always open to discuss new projects or
          creative ideas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-6 w-full">
          {contactItems.map(({ key, label, value, Icon, href }) => (
            <div
              key={key}
              className="flex items-center space-x-4 bg-[#323946] p-4 rounded-lg hover:shadow-[0_0_10px_#0ef] hover:scale-105 transition-all duration-300 ease-in-out focus-within:scale-105"
            >
              <Icon
                aria-hidden="true"
                className="text-4xl text-[#0ef] bg-[#1f242a] p-2 rounded-lg"
              />
              <div className="text-left">
                <p className="text-[15px] text-stone-500">{label}</p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-bold break-all focus:outline-none focus:ring-2 focus:ring-[#0ef] rounded"
                    aria-label={label + (label === "Email" ? ` ${value}` : "")}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="font-bold">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

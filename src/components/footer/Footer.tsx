import { Button, Checkbox, Input } from "@mui/joy";
import { cinzel, quicksand } from "@/app/theme";

export default function Footer() {
  const companyList = [
    {
      id: 1987,
      name: "Philosophy",
      href: "/shop",
    },
    {
      id: 2555,
      name: "Get in Touch",
      href: "/shop",
    },
  ];

  const generalList = [
    {
      id: 1654,
      name: "Use of terms",
      href: "/shop",
    },
    {
      id: 2321,
      name: "Order policy",
      href: "/shop",
    },
    {
      id: 3000,
      name: "Return policy",
      href: "/shop",
    },
    {
      id: 400,
      name: "Privacy policy",
      href: "/shop",
    },
  ];

  const socialList = [
    {
      id: 1000,
      name: "Instagram",
      href: "https://www.instagram.com/boredurus/",
    },
    {
      id: 2000,
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100024929370714",
    },
  ];

  return (
    <footer className="pt-[90px] block bg-[#edece9]">
      <div className="px-[18px] pb-[70px] container mx-auto">
        <div className="md:grid md:grid-cols-3 md:gap-x-[50px]">
          <div className="mb-[20px] md:mb-0">
            <div className="cursor-default text-[#a18565] text-[30px] font-[300] items-center flex justify-center mx-auto mb-[10px]">
              <h5>
                OUR <span>NEWSLETTER</span>
              </h5>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex justify-between py-[15px]">
                <Input
                  placeholder="YOUR EMAIL"
                  variant="plain"
                  sx={{
                    backgroundColor: "transparent",
                    color: "#A18565",
                    padding: "none",
                    "&:hover": {
                      color: "#A18565",
                    },
                    "&::before": {
                      display: "none",
                    },
                    fontWeight: "100",
                  }}
                />
                <Button
                  variant="plain"
                  sx={{
                    color: "#A18565",
                    padding: "none",
                    "&:hover": {
                      color: "#000000",
                      backgroundColor: "transparent",
                    },
                    fontWeight: "600",
                    fontSize: "15px",
                  }}
                >
                  SUBSCRIBE
                </Button>
              </div>
              <hr className="h-[2.5px] bg-[#A18565]" />
              <Checkbox
                color="warning"
                disabled={false}
                label="I agree to the privacy terms & conditions"
                size="md"
                variant="plain"
                sx={{
                  color: "#A18565",
                  fontSize: "14px",
                  fontWeight: "100",
                }}
              />
              <div className="flex flex-col gap-[15px] mt-[50px] mb-[30px] text-[#a18565] font-[100] md:mb-0">
                <p>44 Adrianiou Str.</p>
                <p>115 25 Neo Psyhiko, Greece</p>
                <p>+30 210 6713348</p>
                <p>reception@karageorgiou.gr</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-[25px]">
              <h3 className="text-[20px] mb-[15px] font-[100] text-[#a18565]">
                COMPANY
              </h3>
              <div>
                <ul>
                  {companyList.map((company, index) => (
                    <li key={888 - index}>
                      <a
                        href={company.href}
                        className="my-[10px] font-[100] text-[#A1855F] text-[16px] hover:underline cursor-pointer"
                      >
                        {company.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mb-[25px]">
              <h3 className="text-[20px] mb-[15px] font-[100] text-[#a18565]">
                GENERAL
              </h3>
              <div>
                <ul>
                  {generalList.map((general, index) => (
                    <li key={general.id}>
                      <a
                        href={general.href}
                        className="my-[10px] font-[100] text-[#A1855F] text-[16px] hover:underline cursor-pointer"
                      >
                        {general.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-[25px]">
              <h3 className="text-[20px] mb-[15px] font-[100] text-[#a18565]">
                SOCIAL
              </h3>
              <div>
                <ul>
                  {socialList.map((social) => (
                    <li key={social.id}>
                      <a
                        href={social.href}
                        target="_blank"
                        className="my-[10px] font-[100] text-[#A1855F] text-[16px] hover:underline cursor-pointer"
                      >
                        {social.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#a18565] font-[300] md:text-end">
          <p>© Karageorgiou 2024 All rights reserved.</p>
          <p>Web Design&Development by</p>
          <a className="hover:underline cursor-pointer">LIMECREATIVE</a>
        </div>
      </div>
    </footer>
  );
}

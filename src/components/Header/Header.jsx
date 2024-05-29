import phone from "../../assets/svgs/phone.svg";
import pen from "../../assets/svgs/pen.svg";
import user from "../../assets/svgs/user.svg";
import message from "../../assets/svgs/message.svg";
import search from "../../assets/svgs/search.svg";
import navigation from "../../assets/svgs/navigation.svg";

export default function Header() {
  return (
    <>
      <div className="w-full bg-[#fff] p-[10px_65px]">
        <div className="container flex items-center justify-between py-[10px]">
          <div className="flex gap-7">
            <div className="flex items-center gap-[15px]">
              <img src={phone} alt="" className="h-[14px]" />
              <p className="text-xs text-[#4c4c4c] font-medium">
                800-123-45-67
              </p>
            </div>
            <div className="flex items-center gap-[15px]">
              <img src={pen} alt="" className="h-[14px]" />
              <p className="text-xs text-[#4c4c4c] font-medium">
                brobit@example.com
              </p>
            </div>
          </div>

          <div className="flex gap-7">
            <div className="flex items-center gap-[15px]">
              <img src={user} alt="" className="h-[14px]" />
              <p className="text-xs text-[#4c4c4c] font-medium">
                Log in / Sign Up
              </p>
            </div>
            <div className="flex items-center gap-[15px]">
              <img src={message} alt="" className="h-[14px]" />
              <p className="text-xs text-[#4c4c4c] font-medium">
                Request a quote
              </p>
            </div>
          </div>
        </div>
      </div>
      <header className="absolute top-[56px] left-0 right-0 p-[50px_65px]">
        <div className="container flex justify-between">
            <div className="p-[7px_12px] flex justify-center items-center border-[1px] border-solid border-[#fff]">
              <p className="text-2xl text-[#fff]">
                <strong>BRO</strong>BIT
              </p>
            </div>
            <div className="flex items-center gap-[40px]">
                <nav className="flex gap-[30px] py-[15px]">
                    <a href="/" className="text-xs text-[#ffffffb3] font-medium uppercase">Home</a>
                    <a href="/" className="text-xs text-[#fff] font-medium uppercase">Pages</a>
                    <a href="/" className="text-xs text-[#fff] font-medium uppercase">Internet</a>
                    <a href="/" className="text-xs text-[#fff] font-medium uppercase">IPTV</a>
                    <a href="/" className="text-xs text-[#fff] font-medium uppercase">VOIP</a>
                    <a href="/" className="text-xs text-[#fff] font-medium uppercase">Blog</a>
                    <a href="/" className="text-xs text-[#fff] font-medium uppercase">Contact</a>
                </nav>
                <div className="flex items-center gap-12">
                    <img src={search} alt="" className="w-[14px]"/>
                    <img src={navigation} alt="" className="w-5"/>
                </div>
            </div>
        </div>
      </header>
    </>
  );
}

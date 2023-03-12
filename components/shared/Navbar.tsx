import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end gap-6 px-8 h-10 items-center">
        <div>Return</div>
        <div>Help</div>
        <div>Register/Sign in</div>
      </div>
      <div className="flex w-full justify-around h-28 items-center border-black border-t">
        <div>
          <CiSearch className=" h-6 w-6" />
        </div>
        <div className="flex gap-8 items-center">
          <div>SHOP</div>
          <div>ESSENTIALS</div>
          <div className=" text-3xl">Cartify</div>
          <div>BEST SELLERS</div>
          <div>ABOUT US</div>
        </div>
        <div className="flex h-full items-center gap-6 ">
          <div>
            <VscAccount className=" h-6 w-6" />
          </div>
          <div>
            <MdOutlineNotificationsNone className=" h-6 w-6" />
          </div>
          <div>
            <BsCart4 className=" h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

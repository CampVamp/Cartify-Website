const Footer = () => {
  return (
    <div className="flex flex-col justify-around items-center h-80">
      <div className="flex items-start justify-around w-full">
        <div className=" text-3xl text-orange-600">Cartify</div>
        <div className="flex flex-col gap-3">
          <div>Home</div>
          <div>Collection</div>
          <div>Products</div>
        </div>
        <div className="flex flex-col gap-3">
          <div>About us</div>
          <div>Contact</div>
          <div>FAQ</div>
        </div>
        <div>
          <div>
            Be the first to know about our biggest and best <br /> sales. We'll
            never send more than one email a <br /> month
          </div>
          <div></div>
        </div>
      </div>
      <div>All rights are reversed</div>
    </div>
  );
};

export default Footer;

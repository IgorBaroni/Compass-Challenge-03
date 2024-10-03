export function PageBottomSection() {
  return (
    <ul className="flex flex-col gap-20 md:gap-0 md:flex-row items-center justify-between font-poppins font-medium px-14 py-24 bg-newwhite-700">
      <li className="flex items-center gap-3">
        <img
          src="./src/assets/icon/trophy.svg"
          alt="trophy-icon"
          className="w-12"
        />
        <div>
          <p className="text-xl font-semibold text-newgray-800">High Quality</p>
          <p className="text-newgray-300">Crafted from top materials</p>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <img
          src="./src/assets/icon/warranty.svg"
          alt="warranty-icon"
          className="w-12"
        />
        <div>
          <p className="text-xl font-semibold text-newgray-800">
            Warranty Protection
          </p>
          <p className="text-newgray-300">Over 2 years</p>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <img
          src="./src/assets/icon/shipping.svg"
          alt="shipping-icon"
          className="w-12"
        />
        <div>
          <p className="text-xl font-semibold text-newgray-800">
            Free Shipping
          </p>
          <p className="text-newgray-300">Order over 150 $</p>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <img
          src="./src/assets/icon/support.svg"
          alt="support-icon"
          className="w-12"
        />
        <div>
          <p className="text-xl font-semibold text-newgray-800">
            24 / 7 Support
          </p>
          <p className="text-newgray-300">Dedicated support</p>
        </div>
      </li>
    </ul>
  );
}

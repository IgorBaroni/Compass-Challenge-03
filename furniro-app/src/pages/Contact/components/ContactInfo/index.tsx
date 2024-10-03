export function ContactInfo() {
  return (
    <ul className="flex flex-col gap-10 w-[55%]">
      <li className="flex items-start gap-5">
        <img src="./src/assets/icon/location.svg" alt="location-icon" />
        <div className="flex flex-col">
          <p className="font-medium">Address</p>
          <p className="text-sm">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </li>
      <li className="flex items-start gap-5">
        <img src="./src/assets/icon/phone.svg" alt="phone-icon" />
        <div className="flex flex-col">
          <p className="font-medium">Phone</p>
          <p className="text-sm">
            Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
          </p>
        </div>
      </li>
      <li className="flex items-start gap-5">
        <img src="./src/assets/icon/clock.svg" alt="clock-icon" />
        <div className="flex flex-col">
          <p className="font-medium">Working Time</p>
          <p className="text-sm">
            Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </li>
    </ul>
  );
}

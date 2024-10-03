import { PageBottomSection } from "../../components/PageBottomSection";
import { PageTopSection } from "../../components/PageTopSection";
import { useCheckoutForm } from "../../hooks/useCheckoutForm";
import { checkoutschema } from "../../schemas/checkoutSchema";
import { notify } from "../../utils/notify";
import axiosApi from "../../utils/axiosApi";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import { Product } from "../../types/Product";
import { useNavigate } from "react-router-dom";
import { cleanCart, getTotals } from "../../utils/redux/cartSlice";

type zipCodeProps = {
  bairro: string;
  localidade: string;
  logradouro: string;
  uf: string;
  erro: boolean;
};

export function Checkout() {
  const cart = useSelector((state: RootState) => state.cart);
  const { register, reset, handleSubmit, setValue, errors } = useCheckoutForm();
  const [currentOption, setCurretOption] = useState<number>(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOptionChange = (n: number) => {
    setCurretOption(n);
  };

  const user = JSON.parse(localStorage.getItem("furniro-user")!);

  useEffect(() => {
    if (user) {
      if (user.email) {
        setValue("email", user.email);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const getAddress = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

      const data: zipCodeProps = response.data;

      if (!data.erro) {
        const fullAddress = data.logradouro + ", " + data.bairro;
        reset({
          streetAddress: "",
          town: "",
          province: "",
        });
        setValue("streetAddress", fullAddress);
        setValue("town", data.localidade);
        setValue("province", data.uf);
      }

      if (data.erro) {
        const zipCodeInput = document.getElementById(
          "zipCode"
        ) as HTMLInputElement;
        zipCodeInput.value = "";
        zipCodeInput.disabled = false;
      }
    } catch (error) {
      console.log("Erro ao obter dados do cep: " + error);
    }
  };

  const zipCodeAutoComplete = () => {
    const zipCodeInput = document.getElementById("zipCode") as HTMLInputElement;
    zipCodeInput?.addEventListener("keypress", (e: KeyboardEvent) => {
      const onlyNumbers = /[0-9]/;
      const key = String.fromCharCode(e.keyCode);
      const inputValue = (e.target as HTMLInputElement).value;

      if (!onlyNumbers.test(key)) {
        e.preventDefault();
        return;
      }

      if (inputValue.length >= 8) {
        e.preventDefault();
        return;
      }
    });

    zipCodeInput?.addEventListener("keyup", (e: KeyboardEvent) => {
      const inputValue = (e.target as HTMLInputElement).value;

      if (inputValue.length === 0) {
        reset({
          streetAddress: "",
          town: "",
          province: "",
        });
      }

      if (inputValue.length === 8) {
        zipCodeInput.blur();
        getAddress(inputValue);
      }
    });
  };

  useEffect(() => {
    setValue("country", "Brasil");
    setValue("totalPrice", cart.cartTotalAmount.toFixed(0).toString());
    setValue("products", JSON.stringify(cart.cartItems));
    zipCodeAutoComplete();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmitFunc = (data: checkoutschema) => {
    postPurchase(data);
    reset();
    navigate("/");
    dispatch(cleanCart());
    dispatch(getTotals());
  };

  const postPurchase = async (data: checkoutschema) => {
    try {
      await axiosApi.post("/orders", {
        id: new Date(),
        firstName: data.firstName,
        lastName: data.lastName,
        company: data.company,
        zipCode: data.zipCode,
        country: data.country,
        streetAddress: data.streetAddress,
        town: data.town,
        province: data.province,
        addOn: data.addOn,
        email: data.email,
        products: data.products,
        checkoutOption: data.checkoutOption,
        totalPrice: data.totalPrice,
      });
      notify("success", "Your order has been placed successfully!");
    } catch (error) {
      console.error("Erro ao fazer o POST: ", error);
      notify("error", "An error ocurred when trying to place your order.");
    }
  };

  return (
    <div>
      <PageTopSection pageTitle="Checkout" />
      <form
        className="flex flex-wrap gap-10 flex-col md:flex-row justify-center font-poppins py-20 px-3 md:px-0"
        onSubmit={handleSubmit(onSubmitFunc)}
      >
        <div>
          <h1 className="font-semibold text-2xl mb-5 text-center md:text-start">
            Billing details
          </h1>
          <div>
            <ul className="flex flex-col flex-wrap gap-10 items-center md:items-start">
              <div className="flex gap-[1rem] flex-col md:flex-row">
                <div>
                  <li className="flex flex-col font-medium text-sm gap-2">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="rounded p-4 md:w-[12rem] border border-newgray-100"
                      {...register("firstName")}
                    />
                  </li>
                  {errors.firstName && (
                    <small className="text-red-500 absolute">
                      {errors.firstName.message}
                    </small>
                  )}
                </div>

                <div>
                  <li className="flex flex-col font-medium text-sm gap-2">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="rounded p-4 md:w-[12rem] border border-newgray-100"
                      {...register("lastName")}
                    />
                  </li>
                  {errors.lastName && (
                    <small className="text-red-500 absolute">
                      {errors.lastName.message}
                    </small>
                  )}
                </div>
              </div>

              <div>
                <li className="flex flex-col font-medium text-sm gap-2">
                  <label htmlFor="company-name">Company Name (optional)</label>
                  <input
                    type="text"
                    id="company-name"
                    className="rounded p-4 md:w-[25rem] border border-newgray-100"
                    {...register("company")}
                  />
                </li>
              </div>

              <div>
                <li className="flex flex-col font-medium text-sm gap-2">
                  <label htmlFor="zipCode">Zip code</label>
                  <input
                    type="text"
                    id="zipCode"
                    aria-label="zipCode"
                    className="rounded p-4 md:w-[25rem] border border-newgray-100"
                    {...register("zipCode")}
                  />
                </li>
                {errors.zipCode && (
                  <small className="text-red-500 absolute">
                    {errors.zipCode.message}
                  </small>
                )}
              </div>

              <div>
                <li className="flex flex-col font-medium text-sm gap-2">
                  <label htmlFor="country">Country / Region</label>
                  <input
                    type="text"
                    id="country"
                    className="rounded p-4 md:w-[25rem] border border-newgray-100"
                    {...register("country")}
                  />
                </li>
                {errors.country && (
                  <small className="text-red-500 absolute">
                    {errors.country.message}
                  </small>
                )}
              </div>

              <div>
                <li className="flex flex-col font-medium text-sm gap-2">
                  <label htmlFor="streetAddress">Street address</label>
                  <input
                    type="text"
                    id="streetAddress"
                    className="rounded p-4 md:w-[25rem] border border-newgray-100"
                    {...register("streetAddress")}
                  />
                </li>
                {errors.streetAddress && (
                  <small className="text-red-500 absolute">
                    {errors.streetAddress.message}
                  </small>
                )}
              </div>

              <div>
                <li className="flex flex-col font-medium text-sm gap-2">
                  <label htmlFor="town">Town / City</label>
                  <input
                    type="text"
                    id="town"
                    className="rounded p-4 md:w-[25rem] border border-newgray-100"
                    {...register("town")}
                  />
                </li>
                {errors.town && (
                  <small className="text-red-500 absolute">
                    {errors.town.message}
                  </small>
                )}
              </div>

              <div>
                <li className="flex flex-col font-medium text-sm gap-2">
                  <label htmlFor="province">Province</label>
                  <input
                    type="text"
                    id="province"
                    aria-label="province"
                    className="rounded p-4 md:w-[25rem] border border-newgray-100"
                    {...register("province")}
                  />
                </li>
                {errors.province && (
                  <small className="text-red-500 absolute">
                    {errors.province.message}
                  </small>
                )}
              </div>

              <div>
                <li className="flex flex-col font-medium text-sm gap-2">
                  <label htmlFor="addOnAddress">
                    Add-on address (optional)
                  </label>
                  <input
                    type="text"
                    id="addOnAddress"
                    className="rounded p-4 md:w-[25rem] border border-newgray-100"
                    {...register("addOn")}
                  />
                </li>
              </div>

              <div>
                <li className="flex flex-col font-medium text-sm gap-2">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    id="email"
                    className="rounded p-4 md:w-[25rem] border border-newgray-100"
                    {...register("email")}
                  />
                </li>
                {errors.email && (
                  <small className="text-red-500 absolute">
                    {errors.email.message}
                  </small>
                )}
              </div>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-4 font-poppins h-full md:w-[30%]  rounded md:ml-20 items-center">
          <div className="flex flex-col gap-3 items-start w-full">
            <ul className="w-full flex flex-col gap-3">
              <div className="flex justify-between font-medium">
                <li>Product</li>
                <li>Subtotal</li>
              </div>
              {cart.cartItems.map((cartItem: Product) => (
                <div
                  className="flex justify-between font-medium"
                  key={cartItem.id}
                >
                  <li className="text-sm">
                    <span className="text-newgray-100 font-normal">
                      {cartItem.title.slice(0, 20).trimEnd()}...
                    </span>{" "}
                    x {cartItem.cartQuantity}
                  </li>
                  <li className="text-sm font-light" data-testid="productTotal">
                    R${" "}
                    {(cartItem.normalPrice * cartItem.cartQuantity).toFixed(0)}
                  </li>
                </div>
              ))}
              <input
                type="text"
                value={JSON.stringify(cart.cartItems)}
                id="products"
                className="hidden"
                {...register("products")}
              />
              <div className="flex justify-between font-medium">
                <li className="text-sm">Subtotal</li>
                <li className="text-sm font-light">
                  R$ {cart.cartTotalAmount.toFixed(0)}
                </li>
              </div>
              <div className="flex justify-between font-medium">
                <li className="text-sm">Total</li>
                <li
                  className="text-newgolden text-lg font-bold"
                  data-testid="cartTotal"
                >
                  R$ {cart.cartTotalAmount.toFixed(0)}
                </li>
                <input
                  type="text"
                  value={cart.cartTotalAmount.toFixed(0)}
                  id="totalPrice"
                  className="hidden"
                  {...register("totalPrice")}
                />
              </div>
            </ul>
          </div>
          <div className="border-t border-newgray-50 flex flex-col gap-3">
            <div className="mt-3">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="flex items-center space-x-2"
                    onClick={() => handleOptionChange(1)}
                  >
                    <input
                      type="radio"
                      id="directBankTransfer"
                      value="Direct Bank Transfer"
                      className="sr-only peer"
                      checked={currentOption === 1}
                      {...register("checkoutOption")}
                    />
                    <span className="w-4 h-4 flex cursor-pointer items-center justify-center border-2 border-newgray-100 rounded-full peer-checked:bg-black peer-checked:border-transparent"></span>
                    <label
                      htmlFor="directBankTransfer"
                      className="text-sm font-medium text-newgray-100 peer-checked:text-black"
                    >
                      Direct Bank Transfer
                    </label>
                  </label>
                  {currentOption === 1 && (
                    <p className="text-newgray-100 text-xs group-hover:bg-red-300 px-2">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="flex items-center space-x-2"
                    onClick={() => handleOptionChange(2)}
                  >
                    <input
                      type="radio"
                      id="cashOnDelivery"
                      value="Cash On Delivery"
                      className="sr-only peer"
                      {...register("checkoutOption")}
                    />
                    <span className="w-4 h-4 flex cursor-pointer items-center justify-center border-2 border-newgray-100 rounded-full peer-checked:bg-black peer-checked:border-transparent"></span>
                    <label
                      htmlFor="cashOnDelivery"
                      className="text-sm font-medium text-newgray-100 peer-checked:text-black"
                    >
                      Cash On Delivery
                    </label>
                  </label>
                  {currentOption === 2 && (
                    <p className="text-newgray-100 text-xs group-hover:bg-red-300 px-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Porro officiis aperiam a impedit mollitia, provident dicta
                      voluptatibus beatae! Dicta non inventore porro eum facere,
                      nulla vero debitis. Laudantium, ullam dolor!
                    </p>
                  )}
                </div>
              </div>
            </div>
            <p className="text-sm">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="font-bold">privacy policy</span>.
            </p>
          </div>
          <button
            className="border py-3 px-14 border-black rounded-2xl font-medium mt-3"
            type="submit"
          >
            Place order
          </button>
        </div>
      </form>
      <PageBottomSection />
    </div>
  );
}

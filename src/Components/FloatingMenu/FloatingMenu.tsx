import {useState} from "react";
import GoogleIcon from "../GoogleIcon";
import "./_FloatingMenu.css";

const FloatingMenu = (): JSX.Element => {
  const [selected, setSelected] = useState<string>("");

  return (
    <div className='floating-container hide-mobile u-grey-color'>
      <div
        className={selected === "1" ? "selected-box" : "box"}
        onClick={() => setSelected("1")}
      >
        <GoogleIcon type='chat_bubble_outline' />
      </div>
      <div
        className={selected === "2" ? "selected-box" : "box"}
        onClick={() => setSelected("2")}
      >
        <GoogleIcon type='token' />
      </div>
      <div
        className={selected === "3" ? "selected-box" : "box"}
        onClick={() => setSelected("3")}
      >
        <GoogleIcon type='description' />
      </div>
      <div
        className={selected === "4" ? "selected-box" : "box"}
        onClick={() => setSelected("4")}
      >
        <GoogleIcon type='videocam' />
      </div>
      <div
        className={selected === "5" ? "selected-box" : "box"}
        onClick={() => setSelected("5")}
      >
        <GoogleIcon type='people' />
      </div>
      <div
        className={selected === "6" ? "selected-box" : "box"}
        onClick={() => setSelected("6")}
      >
        <GoogleIcon type='shopping_cart' />
      </div>
    </div>
  );
};

export default FloatingMenu;

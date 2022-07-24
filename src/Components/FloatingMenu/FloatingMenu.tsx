import {useState} from "react";
import GoogleIcon from "../GoogleIcon";
import "./_FloatingMenu.css";
import {floatingMenuList} from "../../constant";

const FloatingMenu = (): JSX.Element => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className='floating-container hide-mobile u-grey-color'>
      {floatingMenuList.map((el: string, key: number) => (
        <div
          className={selected === key + 1 ? "selected-box" : "box"}
          onClick={() => setSelected(key + 1)}
        >
          <GoogleIcon type={el} />
        </div>
      ))}
    </div>
  );
};

export default FloatingMenu;

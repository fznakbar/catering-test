interface IGoogleIcon {
  type: string;
  addOnsStyle?: string;
}

const GoogleIcon = ({type, addOnsStyle}: IGoogleIcon): JSX.Element => {
  return (
    <i
      className={`material-icons-outlined u-vertical-middle u-pointer ${addOnsStyle}`}
    >
      {type}
    </i>
  );
};

export default GoogleIcon;

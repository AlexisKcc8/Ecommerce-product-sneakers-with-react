import "../styles/components/style-my-button.scss";
export const MyButton = ({ children, myEvent }) => {
  return (
    <button className="w-100 jello  my-button" onClick={myEvent}>
      {children}
    </button>
  );
};

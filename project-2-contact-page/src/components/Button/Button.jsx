import styles from "./Button.module.css";
const Button = ({ text, icon, isSecondry }) => {
  return (
    <div className="container">
      <button className={isSecondry ? styles.secondry_btn : styles.primary_btn}>
        {icon} {text}
      </button>
    </div>
  );
};

export default Button;

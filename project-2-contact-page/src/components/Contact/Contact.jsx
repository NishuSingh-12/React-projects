import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdCall, MdMessage, MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className={`${styles.contact_section} container`}>
      <div className={`${styles.content_box}`}>
        <h1>CONTACT US</h1>
        <p>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.{" "}
        </p>
      </div>
      <div className={styles.btn_container}>
        <Button
          text="VIA SUPPORT CHAT"
          icon={<MdMessage fontSize={"24px"} />}
        />
        <Button text="VIA CALL" icon={<MdCall fontSize={"24px"} />} />
      </div>
      <Button
        isSecondry={true}
        text="VIA EMAIL FORM"
        icon={<MdEmail fontSize={"24px"} />}
      />
    </section>
  );
};

export default Contact;

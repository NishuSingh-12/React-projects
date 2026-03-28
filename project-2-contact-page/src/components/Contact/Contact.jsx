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
      <main className={styles.main}>
        <div>
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
          <form action="#">
            <div className={styles.input_container}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className={styles.input_container}>
              <label htmlFor="email">E-Mail</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className={styles.input_container}>
              <label htmlFor="textarea">TEXT</label>
              <textarea
                rows={10}
                cols={32}
                name="textarea"
                id="textarea"
              ></textarea>
            </div>
          </form>
        </div>
        <div className={styles.service_img_container}>
          <img src="./public/images/Service.svg" alt="service-image" />
        </div>
      </main>
    </section>
  );
};

export default Contact;

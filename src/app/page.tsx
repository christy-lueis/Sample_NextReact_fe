import Image from "next/image";
import styles from "./page.module.css";
import CustomComponent from "./DashBoard/mainpage";
import UsualExample from "./DashBoard/landingpage"
export default function Home() {
  return (
    <main className={styles.main}>
     <CustomComponent></CustomComponent>
     <UsualExample></UsualExample>
    </main>
  );
}

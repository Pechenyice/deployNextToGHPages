import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Manual() {
  return (
    <div className={styles.container}>
      <p>Read full manual on deployment in README.MD in github repository!</p>
      <span style={{ color: "blue" }}>
        <Link href="/" as={`/`}>
          to main page
        </Link>
      </span>
    </div>
  );
}

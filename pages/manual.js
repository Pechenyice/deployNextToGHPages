import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Manual() {
  return (
    <div className={styles.container}>
      <p>
        Read full manual on deployment in README.MD in{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/Pechenyice/deployNextToGHPages"
          style={{ color: "blue" }}
        >
          GitHub repository!
        </a>
      </p>
      <span style={{ color: "blue" }}>
        <Link href="/" as={`/`}>
          to main page
        </Link>
      </span>
    </div>
  );
}

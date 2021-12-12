import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import next from "./../public/next.png";
import gh from "./../public/gh.jpeg";
import Link from "next/link";
import { prefix } from "../env/env";

export default function Home() {
  return (
    <div className={styles.container}>
      <p>Hello, let me show you this bootstrap:</p>
      <span style={{ color: "blue" }}>
        <Link href="/manual" as={`${""}/manual`}>
          to manual page
        </Link>
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ width: "30%", height: "auto" }}>
          <Image src={next} />
        </div>
        <strong style={{ fontSize: "24px" }}>to</strong>
        <div style={{ width: "30%", height: "auto" }}>
          <Image src={gh} />
        </div>
      </div>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp</title>
        <link
          rel="icon"
          href="https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png"
        />
      </Head>

      <Sidebar />
    </div>
  );
}

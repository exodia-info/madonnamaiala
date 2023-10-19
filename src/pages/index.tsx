import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import Header from "./components/Header";
import Filosofi from "./components/Filosofi";

export default function Home({ }) {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Filosofi />
    </>
  );
}

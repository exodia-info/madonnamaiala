import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import Header from "./components/Header";
import Filosofi from "./components/Filosofi";
import { MDXProvider } from '@mdx-js/react';
import { GetStaticProps } from 'next';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import path from 'path';

export const getStaticProps: GetStaticProps = async () => {
  const mdxContent = fs.readFileSync(path.join('src/pages/descrizioni', 'schopenhauer.mdx'), 'utf-8');
  const { content } = matter(mdxContent);

  const source = await serialize(content);

  return {
    props: {
      source,
    },
  };
};

export default function Home({ source }: any) {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  console.log(source.author)

  return (
    <>
      <Filosofi />
      <MDXProvider>
        <MDXRemote {...source} />
      </MDXProvider>
    </>
  );
}

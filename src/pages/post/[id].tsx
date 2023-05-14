import Footer from "@/components/common/Footer";
import SinglePost from "@/components/post";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Blog({ article }: { article: any[] }) {
  // const [article, setArticle] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  let Id: any;
  Id = router.query.id;
  const [id, setId] = useState<string>("");

  // useEffect(() => {
  //   setLoading(false);
  //   if (Id) {
  //     axios
  //       .get(`https://api.wakapadi.io/api/blogs/${Id}`)
  //       .then((response) => {
  //         setArticle(response.data);
  //         setLoading(true);
  //         setId(Id);
  //         console.log(0);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   }
  // }, [Id]);

  return (
    <>
      <Head>
        <title>Wakapadi</title>
        <meta name="description" content="wahapadi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SinglePost
        data={article}
        loading={loading}
        id={id}
        setLoading={setLoading}
      />
      <Footer />
    </>
  );
}

export default Blog;

export async function getServerSideProps(context: any) {
  const { params } = context;

  const response = await fetch(
    `https://api.wakapadi.io/api/blogs/${params.id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article: data,
    },
  };
}

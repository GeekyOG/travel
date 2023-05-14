import Head from "next/head";
import Intro from "../components/intro";
import Search from "../components/search";
import Blog from "../components/blog";
import Footer from "@/components/common/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState<any[]>([]);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [trendLoading, setTrendLoading] = useState<boolean>(false);
  const [grid, setGrid] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`https://api.wakapadi.io/api/blogs/published`)
      .then((response) => {
        setArticles(response.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err.message);
        setError(true);
        setMessage(err.message);
      });

    axios
      .get(`https://api.wakapadi.io/api/blogs/trending`)
      .then((response) => {
        setTrending(response.data);
        setTrendLoading(true);
      })
      .catch((err) => {
        setError(true);
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Wakapadi</title>
        <meta name="description" content="wahapadi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <div className="sticky top-0">
        <Search
          grid={grid}
          setGrid={setGrid}
          setArticles={setArticles}
          setLoading={setLoading}
        />
        <Blog
          data={articles}
          trending={trending}
          setArticles={setArticles}
          loading={loading}
          setLoading={setLoading}
          trendLoading={trendLoading}
          setTrendLoading={setTrendLoading}
          grid={grid}
          error={error}
          setError={setError}
          message={message}
        />
        <Footer />
      </div>
      <div style={{ height: 500 }}></div>
    </>
  );
}

// export async function getServerSideProps() {

//   const response = await fetch(`https://api.wakapadi.io/api/blogs/published`)
//   const data = await response.json()

//   const trending = await fetch(`https://api.wakapadi.io/api/blogs/trending`)
//   const trendingData = await trending.json()

//   return {
//       props: {
//         articles: data,
//         trending: trendingData

//       }
//   }

// }

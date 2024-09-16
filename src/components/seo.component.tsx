import Head from "next/head";

interface ISEOProps {
  title: string;
  description?: string;
}

const SEOComponent = ({ title, description }: ISEOProps) => {
  const titleTemplate = title + " | Thuan Nguyen";
  return (
    <div>
      <Head>
        {/* Icon Logo */}
        <link rel="icon logo" href="/favicon.ico"></link>

        {/* Stardard metadata tags */}
        <title>{titleTemplate}</title>
        <meta name="decsription" content={description}></meta>
      </Head>
    </div>
  );
};

export default SEOComponent;

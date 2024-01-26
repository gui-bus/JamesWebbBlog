import { BlogPostProps } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { PortableText } from "@portabletext/react";

export const revalidate = 15;

async function getData(slug: string) {
  const query = `
    *[_type == 'blog' && slug.current == '${slug}']{
        title,
        "currentSlug": slug.current,
          content,
          titleImage
      }[0]`;

  const data = await client.fetch(query);

  return data;
}

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const data: BlogPostProps = await getData(params.slug);

  return (
    <section className="flex h-full w-full flex-col items-center bg-neutral-800 p-5 text-white">
      <Link href="/blog" className="w-full md:hidden md:w-fit">
        <Button
          color="warning"
          variant="shadow"
          size="sm"
          endContent={<IoReturnDownBackOutline size={20} />}
          className="h-10 w-full text-white"
        >
          Voltar
        </Button>
      </Link>

      <Image
        src={urlFor(data.titleImage).url()}
        alt={data.title}
        width={0}
        height={0}
        sizes="100vw"
        className="mt-5 h-auto w-full max-w-6xl rounded-xl object-cover"
        priority
      />

      <div className="prose prose-base prose-blue mx-auto mt-10 w-full max-w-5xl px-5 text-white prose-headings:text-center prose-headings:text-white prose-strong:text-white prose-li:marker:text-[#F5A524]">
        <PortableText value={data.content} />
      </div>

      <Link
        href="/blog"
        className="mx-auto mt-5 hidden w-full max-w-md md:block"
      >
        <Button
          color="warning"
          variant="shadow"
          size="sm"
          endContent={<IoReturnDownBackOutline size={20} />}
          className="h-10 w-full text-white"
        >
          Voltar
        </Button>
      </Link>
    </section>
  );
};

export default BlogPage;

import { BlogPostProps } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { PortableText } from "@portabletext/react";

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
    <section className="flex h-full min-h-screen w-full flex-col items-center gap-y-5 p-5">
      <div className="flex w-full items-center justify-around">
        <Link href="/">
          <Button
            color="warning"
            variant="shadow"
            startContent={<IoReturnDownBackOutline size={20} />}
          >
            Voltar
          </Button>
        </Link>
        <p className="underline opacity-50">{data.title} - Blog</p>
      </div>
      <Image
        src={urlFor(data.titleImage).url()}
        alt={data.title}
        width={800}
        height={800}
        className="object-cover"
        priority
      />
      <h1 className="line-clamp-2 text-2xl font-bold md:text-3xl">
        {data.title}
      </h1>

      <div className="mt-16 prose prose-blue prose-base prose-headings:text-center prose-li:marker:text-[#F5A524]">
        <PortableText value={data.content}/>
      </div>
    </section>
  );
};

export default BlogPage;

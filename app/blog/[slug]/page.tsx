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
    <section className="flex h-full min-h-screen w-full flex-col items-center p-5">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-around rounded-t-xl bg-neutral-800">
        <Image
          src="/logo.png"
          alt="James Webb"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-40 object-cover"
        />

        <Link href="/">
          <Button
            color="warning"
            variant="shadow"
            startContent={<IoReturnDownBackOutline size={20} />}
          >
            Voltar
          </Button>
        </Link>
      </div>
      <Image
        src={urlFor(data.titleImage).url()}
        alt={data.title}
        width={0}
        height={0}
        sizes="100vw"
        className="object-cover w-full max-w-4xl h-auto rounded-b-xl"
        priority
      />
      
      <div className="prose prose-blue prose-base prose-headings:text-center prose-li:marker:text-[#F5A524] mt-10">
        <PortableText value={data.content} />
      </div>
    </section>
  );
};

export default BlogPage;
import { BlogCardProps } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";

import { Card, CardHeader, CardFooter, Link } from "@nextui-org/react";

import { Image } from "@nextui-org/react";
import { SiHomeadvisor } from "react-icons/si";

export const revalidate = 15;

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc){
        title,
        smallDescription,
        "currentSlug": slug.current,
        titleImage,
      }`;

  const data = await client.fetch(query);

  return data;
}

const BlogPage = async () => {
  const data: BlogCardProps[] = await getData();

  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-y-6 bg-neutral-100">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-2 rounded-b-3xl bg-[#181717] px-5 pb-10 text-center text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="James Webb"
              sizes="100vw"
              height={0}
              width={0}
              className="h-auto w-60 object-cover lg:w-80"
            />
          </Link>

          <div className="flex flex-col items-center justify-center gap-3">
            <h2 className="text-xl font-black uppercase md:text-4xl">
              Explore os mistérios do cosmos com o James Webb!
            </h2>
            <p className="text-sm font-light">
              Descubra as histórias fascinantes e os mistérios cósmicos
              revelados pelas lentes do Telescópio Espacial James Webb.
            </p>
            <p className="text-sm font-light">
              Embarque em uma jornada única, desvendando os segredos mais
              profundos do universo.
            </p>
          </div>
        </div>
      </div>

      <div className="grid select-none grid-cols-1 gap-4 px-5 md:grid-cols-2 lg:grid-cols-3">
        {data.map((post) => (
          <Card className="border-none" key={post.currentSlug}>
            <CardHeader className="absolute top-1 z-10 flex-col items-start">
              <h4 className="mx-auto line-clamp-1 text-xl font-bold text-white">
                {post.title}
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              src={urlFor(post.titleImage).url()}
              alt={post.title}
              width={0}
              height={0}
              sizes="100vw"
              draggable={false}
              className="z-0 mx-auto aspect-square h-full w-full max-w-sm rounded-xl object-cover"
            />
            <CardFooter className="absolute bottom-0 z-50 border-t-1 border-default-600 bg-black/60 dark:border-default-100">
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="line-clamp-3 text-center text-tiny text-white">
                  {post.smallDescription}
                </p>
                <Link
                  href={`/blog/${post.currentSlug}`}
                  className="flex w-full justify-center rounded-xl bg-[#F5A524] px-10 py-2 text-center text-sm font-medium text-white"
                >
                  Ver mais detalhes
                </Link>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Link
        href="/"
        className="mx-auto mb-5 flex w-fit justify-center rounded-xl bg-[#F5A524] px-10 py-5 text-center text-sm font-medium text-white"
      >
        Voltar para a página inicial{" "}
        <SiHomeadvisor size={20} className="ml-2" />
      </Link>
    </section>
  );
};

export default BlogPage;

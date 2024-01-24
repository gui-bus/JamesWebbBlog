import { BlogCardProps } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardHeader, CardFooter, Link } from "@nextui-org/react";

import { Button, Image } from "@nextui-org/react";

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

const BlogSection = async () => {
  const data: BlogCardProps[] = await getData();

  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-y-6 bg-zinc-50 px-5 py-10">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-2 text-center">
        <h2 className="text-2xl font-black uppercase md:text-4xl">
          Desvendando os mistérios do universo!
        </h2>
        <p className="font-light">
          Maravilhe-se com as fascinantes imagens do cosmos capturadas pelo
          Telescópio Espacial James Webb. Explore uma cuidadosa seleção que
          revela as maravilhas do universo.
        </p>
      </div>

      <Carousel className="w-full select-none md:max-w-3xl lg:max-w-6xl">
        <CarouselContent>
          {data.map((post) => (
            <CarouselItem
              key={post.currentSlug}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="border-none">
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
                  className="z-0 mx-auto aspect-square h-full w-full max-w-sm rounded-xl object-cover"
                />
                <CardFooter className="border-t-1 border-default-600 dark:border-default-100 absolute bottom-0 z-50 bg-black/60">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-tiny line-clamp-2 text-center text-white">
                      {post.smallDescription}
                    </p>
                    <Link
                      href={`/blog/${post.currentSlug}`}
                      className="w-full"
                      isExternal
                    >
                      <Button
                        radius="sm"
                        size="sm"
                        className="w-full px-10 font-medium"
                        variant="shadow"
                        color="warning"
                      >
                        Ver mais detalhes
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default BlogSection;

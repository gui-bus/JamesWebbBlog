import { BlogCardProps } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardHeader, CardFooter, Link, Button } from "@nextui-org/react";

import { Image } from "@nextui-org/react";
import { BiLinkExternal } from "react-icons/bi";

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
    <section className="flex h-full w-full flex-col items-center justify-center gap-y-6 bg-neutral-100 px-5 py-10">
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
              <Card className="mx-auto max-w-lg border-none">
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
                  className="z-0 mx-auto aspect-square h-full w-full rounded-xl object-cover"
                />
                <CardFooter className="absolute bottom-0 z-50 border-t-1 border-default-600 bg-black/60 dark:border-default-100">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <p className="line-clamp-3 text-center text-tiny text-white">
                      {post.smallDescription}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden xl:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center">
        <h4 className="text-center text-2xl font-black uppercase">
          Embarque em uma jornada fascinante!
        </h4>
        <p className="text-center text-sm text-neutral-600">
          Não deixe de conferir imagens deslumbrantes com o Blog James Webb, sua
          porta de entrada para o cosmos.
        </p>
      </div>

      <Link href="/blog" className="mx-auto w-full max-w-xl">
        <Button
          color="warning"
          variant="shadow"
          size="lg"
          endContent={<BiLinkExternal size={20} />}
          className="h-16 w-full text-white"
        >
          Acessar blog
        </Button>
      </Link>
    </section>
  );
};

export default BlogSection;

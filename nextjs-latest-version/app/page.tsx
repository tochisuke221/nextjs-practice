import Image from "@/node_modules/next/image";

type Photo = {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  description: string;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
  }
}

const getRandomPhotos = async (): Promise<Photo[]> => {
  const params = new URLSearchParams();

  params.append(
    'client_id',
    process.env.UNSPLASH_API_ACCESS_KEY ?? ''
  );

  params.append('count', '32');

  const response = await fetch(
    `https://api.unsplash.com/photos/random?${params.toString()}`,
    { method: 'GET', cache: 'no-cache' }
  );

  return response.json();
}

const Home = async () => {
  const randomPhotos = await getRandomPhotos();

  return (
    <div className="grid grid-cols-3 gap-4 w-[1200px] mx-auto">
      {
        [0, 1, 2].map((index) => (
          <div key={randomPhotos[index].id}>
            <Image
              key={randomPhotos[index].id}
              src={randomPhotos[index].urls.small}
              width={400}
              height={randomPhotos[index].height * (400 / randomPhotos[index].width)}
              alt={randomPhotos[index].alt_description}
            />
          </div>
        ))
      }
    </div>
  )
}

export default Home;

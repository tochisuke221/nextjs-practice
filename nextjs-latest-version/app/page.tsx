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
        [0, 1, 2].map((columnIndex) => (
          <div key={columnIndex}>
            {
              randomPhotos.map((photo, photoIndex) => {
                if(photoIndex % 3 === columnIndex){
                  return (
                    <div
                      key={photo.id}
                      className="mb-4 last:mb-0"
                    >
                      <Image
                        src={photo.urls.small}
                        width={400}
                        height={photo.height * (400 / photo.width)}
                        alt={photo.alt_description}
                      />
                    </div>
                  )
                }
                return null;
              })
            }
          </div>
        ))
      }
    </div>
  )
}

export default Home;

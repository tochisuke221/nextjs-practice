import Image from "/next/image";

type Photo = {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  description: string;
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
    <div>
      {randomPhotos.map(photo => (
        <Image
        key={photo.id}
        src={photo.urls.small}
        width={400}
        height={photo.height * (400 / photo.width)}
        alt={photo.description}
      />
      ))}
    </div>
  )
}

export default Home;

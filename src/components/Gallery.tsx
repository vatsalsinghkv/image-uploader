import Image from './Image';

type Props = {};

const Gallery = (props: Props) => {
  const images = [
    {
      src: 'https://source.unsplash.com/random/650x500?jungle,park,grass,grenery,forest,wood,trees',
      title: 'Nature Image',
    },
    {
      src: 'https://source.unsplash.com/random/650x500?space,planets,aliens',
      title: 'Space Image',
    },
    {
      src: 'https://source.unsplash.com/random/650x500?water,sea,underwater,whale,shark,fishes,marine',
      title: 'Sea Image',
    },
    {
      src: 'https://source.unsplash.com/random/650x500?art,drawing,painting,sketches,scribble',
      title: 'Art Image',
    },
    {
      src: 'https://source.unsplash.com/random/650x500?clubs,people,buildings,nightlife',
      title: 'Buildings Image',
    },
  ];
  return (
    <main className='grid grid-cols-auto-320 gap-4 justify-items-center'>
      {images.map((img) => (
        <Image src={img.src} title={img.title} />
      ))}
    </main>
  );
};

export default Gallery;

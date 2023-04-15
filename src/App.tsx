import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import Button from './components/Button';
import Gallery from './components/Gallery';

function App() {
  return (
    <main className='bg-white p-8 md:rounded-xl md:p-16 md:shadow-xl w-full mx-auto max-w-7xl space-y-10'>
      <Nav className='mb-20' />
      <header className='flex flex-col sm:flex-row items-stretch gap-4 justify-between sm:items-end'>
        <SearchBar />
        <Button>Upload</Button>
      </header>
      <Gallery />
    </main>
  );
}

export default App;

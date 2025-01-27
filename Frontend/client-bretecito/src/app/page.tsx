import {NavbarComponent} from './components/common/navbar';

export default function Home() {
  return (
    <div className="flex justify-center items-center p-3">
      <NavbarComponent />
      <h1 className="text-3xl font-bold text-center">
        Welcome to Bretecito
      </h1>
    </div>
  );
}

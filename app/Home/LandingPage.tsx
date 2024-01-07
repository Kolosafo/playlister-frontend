import Footer from "./Footer";
import HomePage from "./HomePage";
import Navbar from "./Navbar";


export default function LandingPage() {
  return (
    <main >
      <Navbar/>
      <h1 className="mx-3 my-8 text-center text-4xl font-semibold text-[#434343] max-med:text-2xl ">
        Free Youtube Video Playlist Downloder - PlayLister
      </h1>
      <HomePage />
      <Footer/>
      </main>
  );
}

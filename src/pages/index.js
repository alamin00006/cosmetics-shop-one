import RootLayout from "@/components/Layouts/RootLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePageMain from "@/components/Home/Home";
const HomePage = () => {
  return (
    <>
      <HomePageMain />
    </>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

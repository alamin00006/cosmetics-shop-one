import RootLayout from "@/components/Layouts/RootLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomePage = () => {
  return <div>HomePage</div>;
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

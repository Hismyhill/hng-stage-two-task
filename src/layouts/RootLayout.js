import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";

function RootLayout() {
  return (
    <div className="root-layout">
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default RootLayout;

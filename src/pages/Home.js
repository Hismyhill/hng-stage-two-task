import Product from "../components/Product";

function Home() {
  return (
    <>
      <section className="section-hero">
        <h1 className="heading-1">
          Be Bold,
          <br /> Be Beautiful <br />
          with Bold Beauty
        </h1>
        <p>
          We offer only the best products because the health
          <br /> of your skin is our priority
        </p>

        <div className="btn-container">
          <button className="btn btn-primary">Go to cart</button>
          <button className="btn btn-secondary">View products</button>
        </div>
      </section>

      <section className="section-products">
        <Product
          name={"Bold Beauty Special Lipstick"}
          image={"/img/product-1.png"}
          price={25}
        />
        <Product
          name={"Bold Beauty Special Lipstick"}
          image={"/img/product-2.png"}
          price={25}
        />
        <Product
          name={"Bold Beauty Special Lipstick"}
          image={"/img/product-3.png"}
          price={25}
        />
        <Product
          name={"Bold Beauty Special Lipstick"}
          image={"/img/product-4.jpg"}
          price={25}
        />
        <Product
          name={"Bold Beauty Special Lipstick"}
          image={"/img/product-5.png"}
          price={25}
        />
        <Product
          name={"Bold Beauty Special Lipstick"}
          image={"/img/product-6.jpg"}
          price={25}
        />
      </section>
    </>
  );
}

export default Home;

const Home = () => {
  return (
    <main className="home grid h-full gap-4 p-4 text-white">
      <h2 className="self-end text-center text-5xl lg:text-8xl">
        Welcome to <span className="block font-bold lg:inline">e-msika</span>
      </h2>
      <p className="text-center text-xl lg:text-3xl">
        The most competitive and reliable online store of trending electronics.
      </p>
      <p className="self-end text-center">
        Photo by{" "}
        <a href="https://unsplash.com/@cgower?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Christopher Gower
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/black-cordless-headphones-beside-closed-black-laptop-computer-and-smartphone-_aXa21cf7rY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </p>
    </main>
  );
};

export default Home;

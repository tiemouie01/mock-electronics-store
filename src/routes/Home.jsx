const Home = () => {
  return (
    <main className="home h-full text-white grid gap-4 p-4">
      <h2 className="text-5xl lg:text-8xl text-center self-end">
        Welcome to <span className="font-bold lg:inline block">e-msika</span>
      </h2>
      <p className="text-xl lg:text-3xl text-center">
        The most competitive and reliable online store of trending electronics.
      </p>
      <p className="text-center self-end">
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

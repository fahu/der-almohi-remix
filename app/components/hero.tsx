export const HeroComponent = () => {
  return (
    <header className="flex h-128 w-full flex-col rounded-xl bg-gray-300 bg-[url('https://res.cloudinary.com/dbsjhw9tp/image/upload/f_auto/v1653757476/der-almohi/der-almohi-hero-illustration.ai')] bg-cover bg-center p-8 bg-blend-multiply">
      <div className="my-auto ml-12">
        <h1 className="order-1 text-6xl font-medium text-white">
          {" "}
          Der Almöhi.
        </h1>
        <p className="text-white">Hikes and nice landscapes for everyone 🏔</p>
      </div>
    </header>
  );
};

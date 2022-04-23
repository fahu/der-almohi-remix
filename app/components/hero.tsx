export const HeroComponent = () => {
    return (
        <header
            className="w-full h-128 flex flex-col p-8 bg-cover bg-center rounded-xl bg-gray-300 bg-blend-multiply bg-[url('https://res.cloudinary.com/dbsjhw9tp/image/upload/c_scale,w_1488/v1650748932/der-almohi-hero-schneiderberg-gruenau-2021_i1s7vp.jpg')]">
            <div className="my-auto ml-12">
                <h1 className="text-6xl order-1 font-medium text-white"> Der Almöhi.</h1>
                <p className="text-white">Hikes and nice landscapes for everyone 🏔</p>
            </div>
        </header>
    );
}

function Banner() {
    return (
      <div className="flex flex-col bg-zinc-200 h-[80vh] mb-1 text-white md:flex-row relative" style={{ backgroundImage: 'url(./bg-lines.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', filter: 'brightness(60%)' }}>
        <div className="w-full flex items-center p-10 md:w-1/2">
          <h2 className="md:text-4xl text-xl leading-snug">
            Efficient project management tools to boost productivity and collaboration. Manage tasks, track progress, and achieve your goals effortlessly.
          </h2>
        </div>
        <div className="flex w-full md:w-1/2 justify-end items-end ">
          <img src="./shape.png" alt="Decorative shape" className="hidden md:block md:h-full h-[90%] absolute bottom-0 right-0" />
          <img src="./banner_person.png" alt="Person managing project tasks" className="z-10 absolute bottom-0 md:h-full h-[70%]" />
        </div>
      </div>
    );
  }
  
  export default Banner;
  
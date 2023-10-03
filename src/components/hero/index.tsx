const Hero = () => {
  return (
    <section className="w-[95%] mx-auto max-w-[1300px] mt-8">
      <div className="py-4 px-2 flex flex-col justify-center sm:mt-20">
        <h1 className="text-4xl text-center font-semibold text-gray-900 sm:text-5xl md:text-8xl transition">
          Automate your payouts <br />
          effortlessly
        </h1>
        <p className="text-center text-sm mt-6 max-w-[600px] mx-auto sm:text-xl transition md:max-w-[700px] md:mt-10">
          Streamline your accounting with Quartex, allowing you to securely
          share and oversee revenue management.
          <span className="inline-block">
            Utilize Quartex to establish your payment infrastructure.
          </span>
        </p>
        <a
          href="#waitlist"
          className="text-center border border-green-800 inline-block mx-auto py-3 text-sm px-8 mt-6 rounded-lg bg-white text-green-800 hover:bg-gradient-to-r from-green-800 to-green-500 to-green-400 transition hover:text-white sm:px-10 sm:py-3 sm:mt-8 md:mt-10 text-medium md:px-20"
        >
          Join Waitlist
        </a>
      </div>
    </section>
  );
};

export default Hero;

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-7xl jose text-[#002B5B]">EnviRoute</h1>

      <h1 className="text-2xl text-[#002B5B]">What are you: </h1>
      <div className="pt-5 flex w-1/2 flex-wrap gap-5 justify-center">
        <a href="/institutes">
          <button className="bg-[#BBD6B8] w-56 h-16 rounded-2xl jose text-3xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300">
            Institutes
          </button>
        </a>
        <a href="/vendors">
          <button className="bg-[#BBD6B8] w-56 h-16 rounded-2xl jose text-3xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300">
            Vendors
          </button>
        </a>
        <a href="/hospitals">
          <button className="bg-[#BBD6B8] w-56 h-16 rounded-2xl jose text-3xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300">
            Hospitals
          </button>
        </a>
        <a href="/instituteLogs">
          <button className="bg-[#BBD6B8] w-56 h-16 rounded-2xl jose text-3xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300">
            Institute Logs
          </button>
        </a>
        <a href="/patientLogs">
          <button className="bg-[#BBD6B8] w-56 h-16 rounded-2xl jose text-3xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300">
            Patient Logs
          </button>
        </a>
      </div>
    </div>
  );
};

export default Landing;

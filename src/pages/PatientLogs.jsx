import { useEffect, useState } from "react";
import { supabase } from "../js/supabaseClient";

const PatientLogs = () => {
  const [list, setList] = useState(null);
  useEffect(() => {
    const onRender = async () => {
      const { data, error } = await supabase
        .from("Patients")
        .select("*")
        .order("id", { ascending: true });
      if (error) {
        console.log(error);
      }
      if (data) {
        setList(data);
      }
    };
    onRender();
  }, []);
  const handleSearch = async () => {
    const { data, error } = await supabase
      .from("Patients")
      .select("*")
      .eq("critical", true)
      .order("id", { ascending: true });
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      setList(data);
    }
  };
  return (
    <>
      <div className="min-h-screen w-screen flex flex-col items-center gap-5 py-10">
        <h1 className="text-5xl jose text-[#002B5B] mb-10 underline  decoration-[#002B5B] underline-offset-[12px]">
          Patients
        </h1>
        <button
          onClick={() => {
            handleSearch();
          }}
          className="bg-[#BBD6B8] w-1/3 h-16 rounded-xl jose text-3xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300"
        >
          Critical
        </button>
        {list && (
          <>
            {list.map((value, i) => (
              <div
                key={i}
                className="bg-white border-[#AEC2B6] rounded-xl border-4 h-[125px] w-5/6 flex justify-between items-center p-5 gap-2"
              >
                <div className="flex gap-5">
                  <div className="w-56">
                    <h1 className="text-3xl jose text-[#002B5B]">
                      {value.name}
                    </h1>
                    <h1 className="text-3xl jose text-[#002B5B]">
                      Age: {value.age}
                    </h1>
                  </div>
                  <h1 className="text-3xl jose text-[#002B5B] bg-[#BBD6B8] p-3 rounded-xl h-max">
                    {value.hospital}
                  </h1>
                </div>

                <h1 className="text-3xl jose text-[#002B5B]">{`Contact: ${value.contact}`}</h1>
                <h1 className="text-3xl jose text-[#002B5B]">{`Address: ${value.address}`}</h1>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default PatientLogs;

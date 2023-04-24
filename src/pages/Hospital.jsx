import { useEffect, useState } from "react";
import { supabase } from "../js/supabaseClient";
import Swal from "sweetalert2";

const Hospital = () => {
  const [list, setList] = useState(null);
  useEffect(() => {
    const onRender = async () => {
      const { data, error } = await supabase
        .from("Hospitals")
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

  return (
    <>
      <div className="min-h-screen w-screen flex flex-col items-center gap-5 py-10">
        <h1 className="text-5xl jose text-[#002B5B] mb-10 underline  decoration-[#002B5B] underline-offset-[12px]">
          Verified Institutes
        </h1>
        {list && (
          <>
            {list.map((value, i) => (
              <div
                key={i}
                className="bg-white border-[#AEC2B6] rounded-xl border-4 h-[125px] w-2/3 flex justify-between items-center p-5 gap-2"
              >
                <h1 className="text-3xl jose text-[#002B5B] w-64">
                  Name: {value.name}
                </h1>

                <h1 className="text-3xl jose text-[#002B5B]  rounded-xl h-max w-80">
                  Address: {value.address}
                </h1>
                <button
                  onClick={async () => {
                    Swal.fire({
                      icon: "info",
                      title: "More Info",
                      text: `Contact Number: ${value.contact}\nBanking Details: ${value.bank}`,
                      width: 350,
                      color: "#002B5B",
                    });
                  }}
                  className="bg-[#BBD6B8] w-1/3 h-16  rounded-xl jose text-3xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300"
                >
                  More
                </button>
                {/* <h1 className="text-3xl jose text-[#002B5B]">{`Contact Number: ${value.contact}`}</h1>
                <h1 className="text-3xl jose text-[#002B5B]">{`Contact Number: ${value.bank}`}</h1> */}
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Hospital;
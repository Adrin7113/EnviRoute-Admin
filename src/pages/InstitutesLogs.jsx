import { useEffect, useState } from "react";
import { supabase } from "../js/supabaseClient";

const InstitutesLogs = () => {
  const [list, setList] = useState(null);
  const [listF, setListF] = useState(false);
  useEffect(() => {
    if (list == null) {
      const onRender = async () => {
        const { data, error } = await supabase
          .from("InstitutesData")
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
    }
  }, [list]);
  const handleSearch = async () => {
    const search = document.getElementById("search").value;
    console.log(list);
    for (let i = 0; i < list.length; i++) {
      if (list[i].tags.includes(`${search} `)) {
        console.log("Works");
      } else {
        list.splice(i, 1);
        i--;
      }
    }
    setList(list);
    console.log(list);
    console.log(listF);
    setListF(!listF);
  };
  return (
    <>
      <div className="min-h-screen w-screen flex flex-col items-center gap-5 py-10">
        <h1 className="text-5xl jose text-[#002B5B] mb-10 underline  decoration-[#002B5B] underline-offset-[12px]">
          Available Offers
        </h1>
        <div className="w-1/2 h-32 mb-5">
          <input
            placeholder="Search By District"
            type="text"
            id="search"
            className={`bg-[#BBD6B8] border-4 mb-5 w-full h-16 pl-5  rounded-xl jose text-xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300`}
          ></input>
          <button
            onClick={() => handleSearch()}
            className="bg-[#BBD6B8] w-1/3 h-16 rounded-xl jose text-3xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300"
          >
            Search
          </button>
        </div>
        {list && (
          <>
            {list.map((value, i) => (
              <div
                key={i}
                className="bg-white border-[#AEC2B6] rounded-xl border-4 h-[125px] w-2/3 flex justify-between items-center p-5 gap-2"
              >
                <div className="flex gap-5">
                  <div className="w-32">
                    <h1 className="text-3xl jose text-[#002B5B]">
                      {value.name}
                    </h1>
                    <h1 className="text-3xl jose text-[#002B5B]">
                      {value.date}
                    </h1>
                  </div>
                  <h1 className="text-xl jose text-[#002B5B] bg-[#BBD6B8] p-3 rounded-xl h-max">
                    {value.tags}
                  </h1>
                </div>
                {value.Taken && (
                  <h1 className="text-3xl jose text-[#002B5B]">{`Accepted by ${value.TakenBy}`}</h1>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default InstitutesLogs;

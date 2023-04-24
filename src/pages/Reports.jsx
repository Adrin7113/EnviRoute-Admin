import { useEffect, useState } from "react";
import { supabase } from "../js/supabaseClient";

const Reports = () => {
  const [list, setList] = useState(null);
  useEffect(() => {
    const onRender = async () => {
      const { data, error } = await supabase
        .from("Reports")
        .select("*")
        .order("id", { ascending: true });
      if (error) {
        console.log(error);
      }
      if (data) {
        setList(data);
        console.log(data);
      }
    };
    onRender();
  }, []);
  return (
    <>
      <div className="min-h-screen w-screen flex flex-col items-center gap-5 py-10">
        <h1 className="text-5xl jose text-[#002B5B] mb-10 underline  decoration-[#002B5B] underline-offset-[12px]">
          Reports
        </h1>
        {list && (
          <>
            {list.map((value, i) => (
              <div
                key={i}
                className="bg-white border-[#AEC2B6] rounded-xl border-4 h-auto w-2/3 flex justify-between items-center p-5 gap-2"
              >
                <h1 className="text-3xl jose text-[#002B5B] w-full">
                  {value.report}
                </h1>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Reports;

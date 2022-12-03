import React, { useEffect, useState } from "react";
import logo from "../../Assets/logo.png";
const Attendance = () => {
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    if (!tableData) {
      fetch("https://test.nexisltd.com/test", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const objToArr = Object.values(data);
          console.log(objToArr);
          setTableData(objToArr);
        });
    }
  }, [tableData]);

  if (!tableData) {
    return "loading...";
  }
  console.log(tableData);
  return (
    <div className="p-5">
      <div className=" px-4">
        <img src={logo} alt="" />
      </div>
      <section className="antialiased  mt-5 text-gray-600  px-4">
        <div className=" ">
          <div className="w-full   mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Attendance</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Date</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Status</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Branch</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {tableData?.map((user) => (
                      <tr key={user.id}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src={user.profile_pic}
                                width="40"
                                height="40"
                                alt=""
                              />
                            </div>
                            <div className="font-medium text-gray-800">
                              {user.name} <br />
                              <span className="text-gray-400 font-normal">
                                {" "}
                                {user.position}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">
                            {Object.keys(user.attendance).pop()}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-center font-medium text-green-500">
                            {
                              user.attendance[
                                Object.keys(user.attendance)[
                                  Object.keys(user.attendance).length - 1
                                ]
                              ].status
                            }
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-sm text-center">
                            {user.branch}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attendance;

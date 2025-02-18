import React from 'react'

let SoftNotesData = [
    { p: "75-100 mmHg", O2: "Normal", pulse: "60–100", temp: "37%", weight: "24kg", Height: "5.5" },
    { p: "75-100 mmHg", O2: "Normal", pulse: "60–100", temp: "37%", weight: "24kg", Height: "5.5" },
    { p: "75-100 mmHg", O2: "Normal", pulse: "60–100", temp: "37%", weight: "24kg", Height: "5.5" },
    { p: "75-100 mmHg", O2: "Normal", pulse: "60–100", temp: "37%", weight: "24kg", Height: "5.5" },
    { p: "75-100 mmHg", O2: "Normal", pulse: "60–100", temp: "37%", weight: "24kg", Height: "5.5" },
    { p: "75-100 mmHg", O2: "Normal", pulse: "60–100", temp: "37%", weight: "24kg", Height: "5.5" },
]

const SoftNotesTable = () => {
    return (
        <div className='w-full bg-white shadow-lg'>
            <div className='w-[98%] mx-auto p-2 grid grid-cols-1'>
                {/* heading */}
                <h4 className='mb-5 font-[700] text-[20px] leading-[24px]'>Soft Notes</h4>
                <div className='overflow-x-scroll hide-scrollbar w-full '>
                    <table className='w-full'>
                        <tbody>
                            {/* Heading Row */}
                            <tr className='flex text-[16px] capitalize  leading-[19px] font-[400] border-y border-[#808080] h-[60px]'>
                                <td className="border border-black px-4 py-2 flex gap-2 items-center justify-center w-[200px]">
                                    <div className="text-sm font-medium text-gray-700 text-nowrap">
                                        P/P :
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                    />
                                </td>
                                <td className="border border-black px-4 py-2 flex gap-2 items-center justify-center w-[200px]">
                                    <div className="text-sm font-medium text-gray-700 text-nowrap">
                                        O2 :
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                    />
                                </td>
                                <td className="border border-black px-4 py-2 flex gap-2 items-center justify-center w-[200px]">
                                    <div className="text-sm font-medium text-gray-700 text-nowrap">
                                        Pulse :
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                    />
                                </td>
                                <td className="border border-black px-4 py-2 flex gap-2 items-center justify-center w-[200px]">
                                    <div className="text-sm font-medium text-gray-700 text-nowrap">
                                        Temperature :
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                    />
                                </td>
                                <td className="border border-black px-4 py-2 flex gap-2 items-center justify-center w-[200px]">
                                    <div className="text-sm font-medium text-gray-700 text-nowrap">
                                        Weight :
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                    />
                                </td>
                                <td className="border border-black px-4 py-2 flex gap-2 items-center justify-center w-[200px]">
                                    <div className="text-sm font-medium text-gray-700 text-nowrap">
                                        Height :
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                    />
                                </td>

                            </tr>
                            {/* {SoftNotesData.map((data, index) => (
                                <tr key={index} className='text-[14px] leading-[16px] font-[500] border-b text-[#808080] border-[#808080] h-[40px]'>
                                    <td className='w-[20%] text-nowrap px-3'>{data.p}</td>
                                    <td className='w-[20%] text-nowrap px-3 text-center'>{data.O2}</td>
                                    <td className='w-[20%] text-nowrap text-center px-3'>{data.pulse}</td>
                                    <td className={`w-[20%] text-nowrap px-3 text-center`}>{data.temp}</td>
                                    <td className='w-[20%] text-nowrap px-3 text-center'>{data.weight}</td>
                                    <td className='w-[20%] text-nowrap px-3 text-center'>{data.Height}</td>
                                </tr>
                            ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SoftNotesTable

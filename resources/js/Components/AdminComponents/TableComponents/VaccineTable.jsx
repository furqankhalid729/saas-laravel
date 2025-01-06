import React from 'react'

let VaccineData = [
    { VaccineName: "COVID-19", firstDose: "Oct 26, 2024", secondDose: "Oct 26, 2024", thirdDose: "Oct 26, 2024" },
    { VaccineName: "HPV (Human Papillomavirus)", firstDose: "Oct 26, 2024", secondDose: "Oct 26, 2024", thirdDose: "Oct 26, 2024" },
    { VaccineName: "Pneumococcal", firstDose: "Oct 26, 2024", secondDose: "Oct 26, 2024", thirdDose: "Oct 26, 2024" },
    { VaccineName: "Rotavirus", firstDose: "Oct 26, 2024", secondDose: "Oct 26, 2024", thirdDose: "Oct 26, 2024" },
    { VaccineName: "Hepatitis B", firstDose: "Oct 26, 2024", secondDose: "Oct 26, 2024", thirdDose: "Oct 26, 2024" },
    { VaccineName: "Inactivated Poliovirus", firstDose: "Oct 26, 2024", secondDose: "Oct 26, 2024", thirdDose: "Oct 26, 2024" },
    { VaccineName: "Diphtheria, Tetanus, and Pertussis", firstDose: "Oct 26, 2024", secondDose: "Oct 26, 2024", thirdDose: "Oct 26, 2024" },
]

const VaccineTable = () => {
    return (
        <div className='w-full bg-white shadow-lg'>
            <div className='w-[98%] mx-auto py-4'>
                {/* heading */}
                <div className='mb-5 flex justify-between items-center'>
                    <h4 className='font-[700] text-[20px] leading-[24px] px-2'>Vaccine</h4>
                    <button className='border border-black text-white rounded-lg bg-black px-3 py-1 mr-2 font-[500]'>Add Vaccine</button>
                </div>
                <div className='overflow-x-scroll hide-scrollbar w-full '>
                    <table className='w-full'>
                        <tbody>
                            {/* Heading Row */}
                            <tr className='text-[16px] capitalize  leading-[19px] font-[400] border-y border-[#808080] h-[40px]'>
                                <td className='w-[20%] text-nowrap px-3'>Vaccine Name</td>
                                <td className='w-[20%] text-nowrap px-3'>First dose</td>
                                <td className='w-[20%] text-nowrap px-3'>Second dose</td>
                                <td className='w-[20%] text-nowrap px-3'>Third dose</td>
                            </tr>
                            {VaccineData.map((data, index) => (
                                <tr key={index} className='text-[14px] leading-[16px] font-[500] border-b text-[#808080] border-[#808080] h-[40px]'>
                                    <td className='w-[20%] text-nowrap px-3'>{data.VaccineName}</td>
                                    <td className='w-[20%] text-nowrap px-3'>{data.firstDose}</td>
                                    <td className='w-[20%] text-nowrap px-3'>{data.secondDose}</td>
                                    <td className='w-[20%] text-nowrap px-3'>{data.thirdDose}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default VaccineTable

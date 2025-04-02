import React, { useState } from 'react';

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    // Removed state declaration as selectedGender is passed as a prop

    // const handleCheckboxChange = (gender) => {
    //     setSelectedGeder(gender === selectedGender ? null : gender);
    // };

    return (
        <div className="flex gap-4">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className="label-text">Male</span>
                    <input
                        type="checkbox"
                        className="checkbox border-slate-900"
                        checked={selectedGender === 'Male'}
                        onChange={() => onCheckboxChange('Male')}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className="label-text">Female</span>
                    <input
                        type="checkbox"
                        className="checkbox border-slate-900"
                        checked={selectedGender === 'Female'}
                        onChange={() => onCheckboxChange('Female')}
                    />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;








// starter code for signup code


// const GenderCheckbox = () => {
//     const [selectedGender, setSelectedGender] = useState(null);

//     const handleCheckboxChange = (gender) => {
//         setSelectedGender(gender === selectedGender ? null : gender);
//     };

//     return (
//         <div className="flex gap-4">
//             <div className="form-control">
//                 <label className="label gap-2 cursor-pointer">
//                     <span className="label-text">Male</span>
//                     <input
//                         type="checkbox"
//                         className="checkbox border-slate-900"
//                         checked={selectedGender === 'Male'}
//                         onChange={() => handleCheckboxChange('Male')}
//                     />
//                 </label>
//             </div>
//             <div className="form-control">
//                 <label className="label gap-2 cursor-pointer">
//                     <span className="label-text">Female</span>
//                     <input
//                         type="checkbox"
//                         className="checkbox border-slate-900"
//                         checked={selectedGender === 'Female'}
//                         onChange={() => handleCheckboxChange('Female')}
//                     />
//                 </label>
//             </div>
//         </div>
//     );
// };
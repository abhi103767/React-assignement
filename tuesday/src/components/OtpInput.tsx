import React from 'react'

type TotalNumber = {
    totalInputs: Number;
}

function OtpInput({ totalInputs }: TotalNumber) {



    return (
        <div>
            {
                new Array(totalInputs).fill(0).map((el, index) => {
                    return <input
                        type={'text'}
                        maxLength={1}
                        className="otpInput"
                        key={index}
                    />
                })
            }
        </div>
    )
}

export default OtpInput
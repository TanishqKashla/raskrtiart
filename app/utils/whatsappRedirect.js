const WHATSAPP_NUMBER = "919643940236";

export const classEnrollRedirect = ({ className, ageGroup, days, timings, fee }) => {
    const message = `Hello Raskrti Art,

I would like to enroll in the following class:

*Class: ${className}*
• Age Group: ${ageGroup}
• Days: ${days}
• Timings: ${timings}
• Fee: ${fee}

Please share further details regarding enrollment.

Thank you!`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const courseEnrollRedirect = ({ courseName, ageGroup, days, timings, fee }) => {
    const message = `Hello Raskrti Art,

I would like to enroll in the following certificate course:

*Course: ${courseName}*
• Age Group: ${ageGroup}
• Days: ${days}
• Timings: ${timings}
• Fee: ${fee}

Please share further details regarding enrollment.

Thank you!`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
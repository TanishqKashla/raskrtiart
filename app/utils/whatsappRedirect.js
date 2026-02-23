const WHATSAPP_NUMBER = "919643940236";


// ======= CLASS ENQUIRY REDIRECT MESSAGE =======
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




// ======= COURSE ENQUIRY REDIRECT MESSAGE =======
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



// ======= BUY PRODUCT REDIRECT MESSAGE =======
export const buyProductRedirect = ({ productLink, productName, price }) => {
    const message = `Hello Raskrti Art,

I would like to buy the following product:

*Product: ${productName}*
*Link: ${productLink}*
*Price: ₹${price}*

Please confirm availability and provide further details.

Thank you!`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
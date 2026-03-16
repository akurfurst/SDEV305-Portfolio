export function validateForm(data){
    console.log(data);
    /*
    {
        fname: '',
        lname: '',
        job: '',
        company: '',
        linkedin: '',
        email: '',
        meet: 'none',
        other: '',
        message: '',
        emailList: 'emailList',
        type: 'html'
    }
    */
    const errors = [];

    if(data.fname.trim() == "") errors.push("First name is required");
    if(data.lname.trim() == "") errors.push("First name is required");
    if(data.job.length > 50) errors.push("Job has too many characters");
    if(data.company.length > 50) errors.push("Company has too many characters");
    if(data.linkedin.length > 100) errors.push("LinkedIn has too many characters");
    if(data.linkedin && !data.linkedin.startsWith("https://linkedin.com/in/") && !data.linkedin.startsWith("https://www.linkedin.com/in/")) errors.push("Invalid LinkedIn Link");
    if(data.email.trim() == "") errors.push("Email is required");
    if(!data.email.includes('@') || !data.email.endsWith(".com") && !data.email.endsWith(".edu")) errors.push("Invalide email");
    console.log(errors);

    return{
        isValid: errors.length === 0,
        errors
    };
}
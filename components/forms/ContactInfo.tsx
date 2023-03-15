'use client';
const ContactInfo = (props: any) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.nextFormStep();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>How can you be contacted?</h1>
            <div>
                <label htmlFor="email">Email Adress</label>
                <input id="email" />
            </div>

            <div>
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" />
            </div>
            <div>
                <button>Next</button>
            </div>
        </form>
    )
}

export default ContactInfo;

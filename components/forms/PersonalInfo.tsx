'use client';
const PersonalInfo = (props: any) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.nextFormStep();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className="w-6" htmlFor="name">Name</label>
                <input className="border rounded mx-5" id="name" />
            </div>

            <div>
                <label className="w-6" htmlFor="password">Password</label>
                <input className="border rounded mx-5" id="password" />
            </div>
            <div>
                <button>Next</button>
            </div>
        </form>
    )
}

export default PersonalInfo;

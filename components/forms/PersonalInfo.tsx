'use client';
const PersonalInfo = (props: any) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.nextFormStep();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input id="password" />
            </div>
            <div>
                <button>Next</button>
            </div>
        </form>
    )
}

export default PersonalInfo;

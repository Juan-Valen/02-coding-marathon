import { useSignup } from "../hooks/useSignup";

const SignupPage = ({ setIsAuthenticated }) => {
    const { form, setForm, handleSignup } = useSignup(setIsAuthenticated);

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <form onSubmit={handleSignup}>
                        <h2 className="text-3xl text-center font-semibold mb-6">Sign Up</h2>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="border rounded w-full py-2 px-3"
                                placeholder="Enter your full name"
                                required
                                value={form.name}
                                onChange={(e) => setForm((f) => { return { ...f, name: e.target.value } })} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="border rounded w-full py-2 px-3"
                                placeholder="Enter your email"
                                required
                                value={form.email}
                                onChange={(e) => setForm((f) => { return { ...f, email: e.target.value } })} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="border rounded w-full py-2 px-3"
                                placeholder="Enter your password"
                                required
                                value={form.password}
                                onChange={(e) => setForm((f) => { return { ...f, password: e.target.value } })} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="border rounded w-full py-2 px-3"
                                placeholder="Enter your phone number"
                                required
                                value={form.phone_number}
                                onChange={(e) => setForm((f) => { return { ...f, phone_number: e.target.value } })} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                                Gender
                            </label>
                            <select
                                id="gender"
                                className="border rounded w-full py-2 px-3"
                                value={form.gender}
                                onChange={(e) => setForm((f) => { return { ...f, gender: e.target.value } })} >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                id="dob"
                                className="border rounded w-full py-2 px-3"
                                required
                                value={form.date_of_birth}
                                onChange={(e) => setForm((f) => { return { ...f, date_of_birth: e.target.value } })} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="membership" className="block text-gray-700 font-bold mb-2">
                                Membership Status
                            </label>
                            <select
                                id="membership"
                                className="border rounded w-full py-2 px-3"
                                value={form.membership_status}
                                onChange={(e) => setForm((f) => { return { ...f, membership_status: e.target.value } })} >
                                <option value="Basic">Basic</option>
                                <option value="Premium">Premium</option>
                            </select>
                        </div>

                        <div>
                            <button
                                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full"
                                type="submit">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div >
            </div >
        </section >
    );
};

export default SignupPage;

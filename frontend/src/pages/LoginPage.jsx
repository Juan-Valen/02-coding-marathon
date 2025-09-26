import { useLogin } from "../hooks/useLogin";

const LoginPage = ({ setIsAuthenticated }) => {
    const { form, setForm, handleLogin } = useLogin(setIsAuthenticated);

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-md py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <form onSubmit={handleLogin}>
                        <h2 className="text-3xl text-center font-semibold mb-6">Login</h2>

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

                        <div className="mb-6">
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

                        <div>
                            <button
                                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;

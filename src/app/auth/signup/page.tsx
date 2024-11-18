export default function Signup() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <form>
        <div className="flex flex-col gap-10 border-2 items-center border-black rounded-xl p-5">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Signup</h1>
            <h2 className="text-md">Sign up today and be fitLAZY</h2>
          </div>
          <div className="flex flex-col items-center gap-2">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="border-[1px] border-black p-3 rounded-xl text-md"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="border-[1px] border-black p-3 rounded-xl text-md"
            />
            <input
              type="password"
              placeholder="Password"
              name="password1"
              className="border-[1px] border-black p-3 rounded-xl text-md"
            />
            <input
              type="password"
              placeholder="Re-type Password"
              name="password2"
              className="border-[1px] border-black p-3 rounded-xl text-md"
            />
          </div>
          <button
            type="submit"
            className="p-3 text-white bg-gray-700 rounded-xl w-full hover:opacity-85 active:opacity-75"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

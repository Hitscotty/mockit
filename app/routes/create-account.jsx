export default function CreateAccount() {
  return (
    <div className="w-full md:w-96 md:max-w-full mx-auto mt-52">
      <div className="p-6 border border-gray-300 sm:rounded-md">
        <label className="block mb-6">
          <span className="text-gray-700">Email address</span>
          <input
            name="email"
            type="email"
            className="
              block
              w-full
              mt-1
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
            placeholder="joe.bloggs@example.com"
            required
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-700">Password</span>
          <input
            name="password"
            type="password"
            className="
              block
              w-full
              mt-1
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
            minlength="6"
            placeholder="(must be 6+ chars)"
            required
          />
        </label>
        <div className="mb-6">
          <div className="mt-2">
            <div>
              <label className="inline-flex items-center">
                <input
                  name="tos"
                  value="yes"
                  type="checkbox"
                  className="
                    text-indigo-600
                    border-gray-300
                    rounded
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-offset-0
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                  required
                />
                <span className="ml-2">I agree with the TOS</span>
              </label>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="
              h-10
              px-5
              text-indigo-100
              bg-indigo-700
              rounded-lg
              transition-colors
              duration-150
              focus:shadow-outline
              hover:bg-indigo-800
            "
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

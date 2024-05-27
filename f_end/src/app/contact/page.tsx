const ContactUsPage = () => {
  return (
    <section className="bg-black">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
          Experiencing a wardrobe malfunction? Need details about our Exclusive
          Couture plan? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@yourlogo.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
          >
            Send message
          </button>
        </form>
        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">Visit us</h2>
          <p>1234 Fashion Ave, City, Country</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Customer Service</h2>
          <p>
            If you have any questions or need assistance, our customer service
            team is here to help. Reach out via email at{" "}
            <a href="mailto:customerservice@example.com">
              customerservice@example.com
            </a>{" "}
            or call us at 1-800-123-4567.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Connect with us</h2>
          <div className="flex items-center">
            <a href="#" className="text-pink-500 mr-4">
              Facebook
            </a>
            <a href="#" className="text-pink-500 mr-4">
              Twitter
            </a>
            <a href="#" className="text-pink-500 mr-4">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;

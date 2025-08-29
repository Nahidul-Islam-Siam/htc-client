import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Contact info */}
          <div className="space-y-8 border p-7 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Let&apos;s get in touch
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Do you have any questions or are you running into something? We
                are happy to help you. Leave a message and we will get back to
                you within 1 business day.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4 flex justify-between border-t ">
              <div className="flex items-center space-x-3 ">
                <Image
                  src="/images/netherlands-flag.png"
                  alt="Netherlands"
                  width={24}
                  height={16}
                  className="rounded"
                />
                <span className="text-gray-600 text-sm">NETHERLANDS</span>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>+31 10 421 52 55</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✉️</span>
                  <span>INFO@HTCTECHNIEK.NL</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span>📍</span>
                  <div>
                    <div>Rivium Quadrant 2</div>
                    <div>2909 LC Capelle aan den IJssel</div>
                    <div>The Netherlands</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  NAME*
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="eg. James Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  EMAIL*
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="eg. jamesdoe@businessemail.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="eg. +31-456-789"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  COMPANY
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="eg. HTC Techniek"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  MESSAGE*
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Type your message here"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-md transition-colors duration-200"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

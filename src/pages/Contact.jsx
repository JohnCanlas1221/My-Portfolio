import React from "react";

function Contact() {
    return (
        <div>
            <main className="p-10 mt-10 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20">
                <header className="text-center">
                    <h3 className="mb-1 font-bold text-4xl text-white sm:text-5xl md:text-5xl">
                        I'm here for you, <br /> contact me at{" "}
                        <span className="text-amber-500">anytime</span>
                    </h3>
                    <p className="mt-5 mb-5 text-[#848484]">
                        Have any questions about my services or you want me in
                        your company? Please react out.
                    </p>
                </header>

                <div className="grid text-center md:grid-cols-1 lg:grid-cols-3 gap-7">
                    <div className="bg-slate-900 p-5 rounded-3xl">
                        <img
                            src="/assets/images/pisbok.png"
                            alt=""
                            className="w-10 m-auto"
                        />
                        <h3 className="font-bold text-[20px] text-white text-center mt-4">
                            Chat Now
                        </h3>
                        <p className="mb-2 mt-2 text-[#848484] text-center">
                            From your facebook account
                        </p>
                        <hr className="mb-4 text-neutral-700" />
                        <a
                            href="https://www.facebook.com/johncanlas0612"
                            className="bg-amber-500 w-full pb-2 pt-2 inline-block text-center rounded-2xl text-sm hover:bg-amber-600">
                            Start Chat
                        </a>
                    </div>
                    <div className="bg-slate-900 p-5 rounded-3xl">
                        <img
                            src="/assets/images/gmail.png"
                            alt=""
                            className="w-10 m-auto"
                        />
                        <h3 className="font-bold text-[20px] text-white text-center mt-4">
                            Email Me
                        </h3>
                        <p className="mb-2 mt-2 text-[#848484] text-center">
                            From your email app
                        </p>
                        <hr className="mb-4 text-neutral-700" />
                        <label className="">
                            personal.johncanlas@gmail.com
                        </label>
                    </div>
                    <div className="bg-slate-900 p-5 rounded-3xl">
                        <img
                            src="/assets/images/customer-service.png"
                            alt=""
                            className="w-10 m-auto"
                        />
                        <h3 className="font-bold text-[20px] text-white text-center mt-4">
                            Call or text me
                        </h3>
                        <p className="mb-2 mt-2 text-[#848484] text-center">
                            From your phone
                        </p>
                        <hr className="mb-4 text-neutral-700" />
                        <label className="mb-10">09915161528</label>
                    </div>
                </div>

                <p className="text-center mt-10 text-[#848484]">
                    I'll get back to you as soon as possible. I'm available
                    8am-8pm on Monday to Saturday.
                </p>
            </main>
        </div>
    );
}

export default Contact;

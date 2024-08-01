import React from 'react';
import { FaUserDoctor } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";

const Features = () => {
  return (
    <div>
      <section id="services" className="py-12 bg-base-200 md:py-16 lg:py-20">
        <div className="px-4 md:px-8">
          <div
            data-aos="fade"
            className="flex flex-col items-center justify-center space-y-2 pb-6 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Features
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A better way to Code
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              data-aos="fade-up"
              className="bg-card p-6 rounded-lg shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 mb-4 text-primary"
              >
                <path d="M12 6v4"></path>
                <path d="M14 14h-4"></path>
                <path d="M14 18h-4"></path>
                <path d="M14 8h-4"></path>
                <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path>
                <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"></path>
              </svg>
              <h3 className="text-2xl font-bold mb-2">Live Code Execution</h3>
              <p className="text-muted-foreground">
                Run HTML, CSS, and JavaScript code in real-time. See immediate
                results and debug instantly.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="bg-card p-6 rounded-lg shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 mb-4 text-primary"
              >
                <path d="M9 12h.01"></path>
                <path d="M15 12h.01"></path>
                <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path>
                <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path>
              </svg>
              <h3 className="text-2xl font-bold mb-2">Collaborative Coding</h3>
              <p className="text-muted-foreground">
                Work on projects with friends or colleagues in real-time.
                Collaborative coding fosters teamwork and creativity.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="bg-card p-6 rounded-lg shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 mb-4 text-primary"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
              <h3 className="text-2xl font-bold mb-2">Interactive Learning</h3>
              <p className="text-muted-foreground">
                Use the platform as an open-source learning environment. Learn,
                experiment, and improve your coding skills
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="bg-card p-6 rounded-lg shadow-md"
            >
              <FaUserDoctor className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">Embeddable Pens</h3>
              <p className="text-muted-foreground">
                Embed your pens in blogs, portfolios, or websites. Showcase your
                work seamlessly across the web.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="bg-card p-6 rounded-lg shadow-md"
            >
              <GiMedicines className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">Secure Environment</h3>
              <p className="text-muted-foreground">
                Code with confidence in a secure environment. Your data and
                projects are protected, ensuring a safe coding experience
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="bg-card p-6 rounded-lg shadow-md"
            >
              <MdFamilyRestroom className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">
                Mobile-Friendly Interface
              </h3>
              <p className="text-muted-foreground">
                Access the platform on-the-go. The mobile-friendly interface
                allows you to code and collaborate from your smartphone or
                tablet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;

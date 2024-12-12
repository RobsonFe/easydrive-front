import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {

  const ano = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-neutral-900 py-24 text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-8">
            <h2 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">
              Easy Drive
            </h2>
            <p className="text-sm font-normal leading-relaxed">
             Nós somos uma empresa dedicada no serviço de Aluguéis de Veiculos
            </p>
            <div className="flex space-x-8">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-neutral-400 transition-colors duration-300 hover:text-neutral-900 dark:hover:text-white"
                  aria-label={`Follow on ${Icon.name}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {[
            {
              title: "Products",
              items: ["AI Models", "APIs", "Platforms", "Solutions"],
            },
            {
              title: "Resources",
              items: ["Documentation", "Case Studies", "Blog", "Support"],
            },
            {
              title: "Company",
              items: ["About Us", "Careers", "Contact", "Press"],
            },
          ].map((section) => (
            <div key={section.title} className="space-y-8">
              <h2 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-300 hover:text-neutral-900 dark:hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-24 border-t border-neutral-200 dark:border-neutral-800 pt-8 text-center">
          <p className="text-sm font-normal">
            &copy; {ano} Easy Drive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

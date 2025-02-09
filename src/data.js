import airmob from "@/../public/projects/airgoddes/1.png";
import air from "@/../public/projects/airgoddes/2.png";
import elitemob from "@/../public/projects/elitedetailing/1.png";
import elite from "@/../public/projects/elitedetailing/2.png";
import copywrite from "@/../public/projects/copywriter.png";

const services = [
  {
    name: "Website Development",
    description: "Custom, modern, high-performing websites",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-[25px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
  {
    name: "SEO & Optimization",
    description: "Rank higher, get more traffic",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-[25px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    ),
  },
  {
    name: "E-commerce Solutions",
    description: "Sell online, grow revenue fast",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-[25px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    ),
  },
  {
    name: "Portfolio Creation",
    description: "Showcase work, attract clients",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
  },
  {
    name: "Branding & Design",
    description: "Logos, visuals, strong identity",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
        />
      </svg>
    ),
  },
  {
    name: "Website Maintenance",
    description: "Secure, updated, always running",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
  },
];

export { services };

export const projects = [
  {
    title: "Polished Online Presence for Elite Car Detailing",
    plan: "Starter",
    imgMob: elitemob,
    imgDesk: elite,
    description:
      "Crafted a sleek, one-page website for a local car detailing business, complete with SEO optimization, embedded analytics tools like Microsoft Clarity, and seamless call-to-action integration. Delivered end-to-end services, including design, development, hosting, and content, boosting local visibility and campaign performance.",
  },
  {
    title: "Flawless Website for Air Goddess Maquillage",
    imgMob: airmob,
    imgDesk: air,
    plan: "Pro",
    description:
      "Designed a responsive, budget-friendly website for a makeup artist, integrating a cost-effective booking system via Nodemailer and optimizing SEO for increased visibility. Delivered custom content, design, and hosting while ensuring a seamless user experience that enhances client engagement.",
  },
  {
    title: "Collaborative Writing Platform for Copywriters",
    imgMob: copywrite,
    imgDesk: copywrite,
    plan: "Custom",
    description:
      "A full-stack web application designed to empower copywriters and content creators. Built using React.js for a dynamic frontend and Node.js with Express.js for a powerful backend. Features include secure user authentication, a rich text editor, content engagement tools, and writing challenges, fostering a thriving creative community.",
  },
];

export const corePointers = [
  {
    title: "Custom Website Design",
    description: "No templates, fully tailored to your brand.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className=" stroke-white size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
        />
      </svg>
    ),
  },
  {
    title: "Content That Sells",
    description: "Compelling, SEO-friendly copy for your site.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className=" stroke-white size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Modern Development",
    description: "Built with the latest tech like Next.js & React.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className=" stroke-white size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    title: "SEO Optimization",
    description: "Be seen by the right people.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className=" stroke-white size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Sophia",
    username: "@sophia_m",
    body: "The process was effortless, and my website looks stunning. Highly recommended!",
    img: "https://avatar.vercel.sh/sophia",
  },
  {
    name: "David",
    username: "@david_23",
    body: "A complete game-changer! My business grew 50% after launching my new site.",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Emma",
    username: "@emma.designs",
    body: "Finally, a team that understands both design and marketing. My website is a masterpiece!",
    img: "https://avatar.vercel.sh/emma",
  },
  {
    name: "Michael",
    username: "@michael_biz",
    body: "Fast, professional, and beyond my expectations. The best decision I’ve made for my business.",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Olivia",
    username: "@olivia_crafts",
    body: "They took my small business online with zero stress. Now I get orders 24/7!",
    img: "https://avatar.vercel.sh/olivia",
  },
  {
    name: "Liam",
    username: "@liam_code",
    body: "A flawless experience. My website loads fast, looks sleek, and converts like crazy!",
    img: "https://avatar.vercel.sh/liam",
  },
  {
    name: "Ava",
    username: "@ava_creates",
    body: "They handled everything—design, content, SEO—and nailed it. 10/10 service!",
    img: "https://avatar.vercel.sh/ava",
  },
  {
    name: "Noah",
    username: "@noah_startup",
    body: "I was struggling with my brand’s online presence. These guys turned it around in weeks!",
    img: "https://avatar.vercel.sh/noah",
  },
  {
    name: "Isabella",
    username: "@isabella_style",
    body: "The easiest and smartest decision I’ve made for my brand. My website is stunning!",
    img: "https://avatar.vercel.sh/isabella",
  },
  {
    name: "Ethan",
    username: "@ethan_tech",
    body: "They delivered a site that feels custom-built for my business. Absolutely perfect!",
    img: "https://avatar.vercel.sh/ethan",
  },
  {
    name: "Mia",
    username: "@mia_market",
    body: "The SEO improvements alone boosted my traffic by 3x. Highly recommended!",
    img: "https://avatar.vercel.sh/mia",
  },
  {
    name: "James",
    username: "@james_brand",
    body: "I can’t believe how smooth the process was. My website is exactly what I wanted!",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Charlotte",
    username: "@charlotte_digital",
    body: "Not just developers—they’re digital strategists! My site works seamlessly with my marketing.",
    img: "https://avatar.vercel.sh/charlotte",
  },
  {
    name: "Benjamin",
    username: "@benjamin_entrepreneur",
    body: "They handled everything from A to Z. My business is thriving online now!",
    img: "https://avatar.vercel.sh/benjamin",
  },
  {
    name: "Amelia",
    username: "@amelia_online",
    body: "They took my scattered ideas and turned them into a dream website. True professionals!",
    img: "https://avatar.vercel.sh/amelia",
  },
  {
    name: "Lucas",
    username: "@lucas_growth",
    body: "The speed and quality of their work blew me away. Highly recommend!",
    img: "https://avatar.vercel.sh/lucas",
  },
  {
    name: "Harper",
    username: "@harper_social",
    body: "I expected a website. What I got was a powerful sales tool. Amazing work!",
    img: "https://avatar.vercel.sh/harper",
  },
  {
    name: "Elijah",
    username: "@elijah_vision",
    body: "Their expertise in both design and marketing is unmatched. My sales skyrocketed!",
    img: "https://avatar.vercel.sh/elijah",
  },
  {
    name: "Abigail",
    username: "@abigail_creative",
    body: "They made my website not just beautiful, but functional. Couldn’t be happier!",
    img: "https://avatar.vercel.sh/abigail",
  },
  {
    name: "Daniel",
    username: "@daniel_ceo",
    body: "From concept to execution, they nailed it. A true team of experts!",
    img: "https://avatar.vercel.sh/daniel",
  },
  {
    name: "Ella",
    username: "@ella_fashion",
    body: "My site looks high-end and professional. I’ve gained so many new customers!",
    img: "https://avatar.vercel.sh/ella",
  },
  {
    name: "Matthew",
    username: "@matthew_coach",
    body: "They listened to my needs and delivered a site that truly represents my business.",
    img: "https://avatar.vercel.sh/matthew",
  },
  {
    name: "Scarlett",
    username: "@scarlett_writer",
    body: "Finally, a team that understands branding and storytelling. My website speaks to my audience!",
    img: "https://avatar.vercel.sh/scarlett",
  },
  {
    name: "Henry",
    username: "@henry_store",
    body: "Best decision I made for my e-commerce business. Sales are booming!",
    img: "https://avatar.vercel.sh/henry",
  },
];
const pricingPackages = [
  {
    name: "Starter",
    price: 399,
    suitableFor:
      "Freelancers, startups, and small businesses looking for a simple, professional online presence.",
    description:
      "A sleek single-page website with everything you need to establish your brand online—fast, simple, and affordable.",
    features: [
      "Custom content writing",
      "Modern website design",
      "Fast & responsive development",
      "Mobile-friendly & SEO-ready",
    ],
  },
  {
    name: "Pro",
    price: 699,
    suitableFor:
      "Growing businesses that need a multi-page site to showcase services and attract more customers.",
    description:
      "A multi-page website with custom content, professional design, and SEO optimization—built to help your business grow.",
    features: [
      "Custom content writing",
      "Custom website design",
      "Multi-page website (Home, About, Services, Contact, etc.)",
      "SEO-optimized & fast loading",
      "Mobile-friendly & fully responsive",
    ],
  },
  {
    name: "Growth",
    price: 999,
    suitableFor:
      "Businesses that want a scalable website with CMS integration to easily update content without coding.",
    description:
      "A high-performance website with CMS integration, so you can update content anytime—no tech skills needed.",
    features: [
      "Custom content writing",
      "Premium website design",
      "Advanced website development",
      "Multi-page site with full SEO optimization",
      "CMS integration (WordPress, Webflow, or Custom)",
      "Mobile-friendly & fully responsive",
    ],
  },
];

const addOns = [
  {
    name: "Hosting",
    price: 20,
    suitableFor:
      "Businesses needing reliable, secure hosting with 24/7 support.",
    description:
      "Fast, secure, and hassle-free hosting with round-the-clock support.",
  },
  {
    name: "SEO",
    price: 150,
    suitableFor:
      "Businesses that want to rank higher on Google and attract more visitors.",
    description: "Boost your rankings and get found by the right audience.",
  },
  {
    name: "Maintenance",
    price: 75,
    suitableFor:
      "Business owners who want ongoing website updates, security patches, and technical support.",
    description:
      "Regular updates, security patches, and support to keep your site running smoothly.",
  },
  {
    name: "E-commerce",
    price: 299,
    suitableFor:
      "Businesses wanting to sell online with a fully integrated e-commerce solution.",
    description:
      "Turn your website into a store with seamless online shopping features.",
  },
];

export { pricingPackages, addOns };

export const customPackage = {
  name: "Custom",
  price: "0",
  suitableFor:
    "Businesses needing a fully tailored website with flexible features, including e-commerce and advanced integrations.",
  description:
    "Need something unique? Let’s build a website that perfectly fits your vision. Talk to an expert today and get a tailored quote based on your exact needs—no templates, no one-size-fits-all solutions, just a website designed for you.",
  features: [
    "Custom content & design",
    "Single-page or multi-page options",
    "CMS integration available",
    "E-commerce & advanced features (optional)",
  ],
};

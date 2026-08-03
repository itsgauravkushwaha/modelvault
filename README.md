# 🚀 ModelVault

<p align="center">
  <strong>Discover, compare, benchmark, and estimate the cost of AI models in one place.</strong>
</p>

<p align="center">
  ModelVault helps developers, AI engineers, researchers, and businesses explore hundreds of AI models with detailed specifications, pricing, benchmarks, and comparison tools.
</p>

<p align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss)
![Status](https://img.shields.io/badge/Status-Production_Ready-success)
![License](https://img.shields.io/badge/License-See_LICENSE-blue)

</p>

---

# ✨ Features

- 🔍 Search over 500+ AI models
- 🗄️ Powered by Supabase database
- ⚖️ Compare multiple models side-by-side
- 💰 AI Cost Calculator
- ☁️ Cloud AI model directory
- 💻 Local LLM directory
- 📊 Model benchmarks
- 🧠 Context window & capability comparison
- 📱 Fully responsive UI
- ♿ Accessibility optimized
- 🚀 SEO optimized with structured data
- ⚡ Fast Next.js App Router architecture

---

# 📸 Screenshots

> Screenshots will be added before the public launch.

| Home | Compare |
|------|---------|
| *(Coming Soon)* | *(Coming Soon)* |

| Cost Calculator | Model Details |
|----------------|---------------|
| *(Coming Soon)* | *(Coming Soon)* |

---

# 🏗 Tech Stack

### Frontend & Backend

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Supabase (`@supabase/supabase-js`)

### State Management

- Zustand

### Validation

- Zod

### SEO

- Open Graph
- JSON-LD
- Sitemap
- Robots.txt
- Dynamic Metadata

### Deployment

- Vercel

---

# 📂 Project Structure

```
src/
│
├── app/              # Next.js App Router & API routes
├── views/            # Page views
├── components/       # Reusable UI components
├── data/             # AI model dataset fallback
├── hooks/            # Custom React hooks
├── lib/              # Supabase client, db helpers, & utilities
├── stores/           # Zustand stores
├── types/            # Shared TypeScript types
└── utils/            # SEO & helper utilities
scripts/              # Database migration scripts
```

---

# 🚀 Getting Started

## Clone

```bash
git clone https://github.com/itsgauravkushwaha/modelvault.git
```

## Install

```bash
npm install
```

## Environment Variables

Copy `.env.example` to `.env.local` and add your Supabase credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Run Development Server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

# 📦 Production

Build:

```bash
npm run build
```

Run:

```bash
npm start
```

---

# 🤝 Contributing

Contributions, suggestions, and issue reports are welcome.
If you'd like to improve ModelVault, please open an issue or submit a pull request.

---

# 📜 License

This project includes work derived from an open-source Next.js starter template. The application has been extensively customized and evolved into ModelVault while complying with the original license terms.

See **LICENSE.md** for details.

---

# 👨‍💻 Author

**Gaurav Kushwaha**

GitHub: [itsgauravkushwaha](https://github.com/itsgauravkushwaha)

---

<p align="center">
  Made with ❤️ using Next.js, TypeScript & Supabase
</p>

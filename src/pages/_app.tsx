import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --bg: #f6f1eb;
          --surface: #fffaf5;
          --surface-strong: #ffffff;
          --text: #2f241f;
          --muted: #7a665d;
          --border: #e4d5c8;
          --accent: #b86b4b;
          --accent-dark: #9e573a;
          --success: #2f7d4d;
          --danger: #b44343;
          --shadow: 0 14px 32px rgba(84, 53, 40, 0.08);
          --radius-lg: 20px;
          --radius-md: 14px;
          --radius-sm: 10px;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(180deg, #fbf6f1 0%, #f3ebe3 100%);
          color: var(--text);
          font-family: 'Trebuchet MS', 'Segoe UI', sans-serif;
        }

        body {
          min-height: 100vh;
        }

        img {
          max-width: 100%;
          display: block;
        }

        button,
        input {
          font: inherit;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

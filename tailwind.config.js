module.exports = {
  content: [],
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend :{
      colors: {
        light: {
          bg: "#F6F7F8",
          text: "#696969",
          link: "#FF6200",
          title: "#343E55",
          desc_bg: "rgba(244,160,107,0.22)",
          inlinecode_bg: "rgba(41,44,52,0.8)",
          inlinecode: "#e5c07b",
          blockcode_bg: "#292c34",
          blockcode: "#BBBBBB",
          logo_eye: "#FF6200",
          logo_j: "#343E55",
          article_text: "rgba(51,62,85,0.88)",
          article_title: "rgba(52,62,85,0.88)",
          article_blockquote: "rgba(51,62,85,0.7)",
          hr: "rgba(52,62,85,0.3)",
          shadow: "rgba(0,0,0,0.1)",
          card_bg: "#fff",
          active: "rgb(0,164,128)",
          disabled: "#ced4e1",
          white: "#fff3eb",
          readmore:"#0070f3",
          readmoreBg:"rgba(0,118,255,.1)",
        },
        dark: {
          bg: "#1e2330",
          text: "rgba(255,243,235,0.8)",
          link: "#FF6200",
          title: "#fff3eb",
          desc_bg: "rgba(255,98,0,0.15)",
          inlinecode_bg: "rgba(41,44,52,0.8)",
          inlinecode: " #e5c07b",
          blockcode_bg: " #292c34",
          blockcode: " #BBBBBB",
          logo_eye: "rgba(238,93,11,0.45)",
          logo_j: "rgba(191,153,129,0.28)",
          article_text: "rgba(255,243,235,0.88)",
          article_title: "rgba(255,243,235,0.88)",
          article_blockquote: "rgba(255,243,235,0.7)",
          hr: "rgba(255,243,235,0.3)",
          shadow: "rgba(0,0,0,0.3)",
          card_bg: " #252c3d",
          active: "rgb(0,164,128)",
          disabled: " #343e55",
          white: " #fff3eb",
        },
      },
    }
    
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

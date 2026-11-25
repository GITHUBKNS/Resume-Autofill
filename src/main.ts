const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root element '#app' not found.");
}

app.innerHTML = `
  <main style="font-family: Arial, sans-serif; max-width: 720px; margin: 2rem auto; line-height: 1.6;">
    <h1>Resume Autofill</h1>
    <p>The application scaffold is now wired correctly and ready for feature development.</p>
  </main>
`;

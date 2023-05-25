import App from "./src/app";

const PORT: number = Number(process.env.port) || 3000;

new App().run(PORT);


const isProd = process.env.NODE_ENV.toLowerCase() === "production";
const prefix = isProd ? "/deployNextToGHPages" : "";
console.log(process.env.NODE_ENV, isProd, prefix);
export { prefix };

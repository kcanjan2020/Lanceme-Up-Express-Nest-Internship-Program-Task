import { config } from "dotenv";
config();
export let port = process.env.PORT;

//email authentication for send generated pdf file
export let userEmail = process.env.USER;
export let password = process.env.PASS;

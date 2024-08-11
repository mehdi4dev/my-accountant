import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { JSONFilePreset } from "lowdb/node";

type Data = {
  users: { id: string; username: string; password: string }[];
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "db.json");
const defaultData = { users: [] };

let db: any;
let dbInitialized: Promise<void>;

async function initializeDB() {
  db = await JSONFilePreset<Data>(file, defaultData);
  // await db.read();
}

dbInitialized = initializeDB();

export { db, dbInitialized };
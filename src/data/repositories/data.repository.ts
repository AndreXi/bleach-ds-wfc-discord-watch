import axios, { Axios, AxiosResponse } from "axios";
import "dotenv/config";

async function startPolling(callback: (html: string) => void) {
  const data = await (await axios.get(process.env.FETCH_URL ?? "")).data;
  callback?.(data);
  setTimeout(
    () => startPolling(callback),
    parseInt(process.env.FETCH_SLEEP ?? "90000")
  );
}

export { startPolling };

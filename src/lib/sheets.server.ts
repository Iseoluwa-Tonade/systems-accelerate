import process from "node:process";

export async function appendToSheet(
  formType: "contact" | "book",
  values: Record<string, string>,
): Promise<void> {
  const url = process.env.GOOGLE_APPS_SCRIPT_URL;
  if (!url) {
    console.error("[sheets] Missing GOOGLE_APPS_SCRIPT_URL environment variable");
    throw new Error("Missing GOOGLE_APPS_SCRIPT_URL environment variable");
  }

  console.log("[sheets] POST", url, { formType });

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formType, values }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error("[sheets] Request failed", response.status, body);
    throw new Error(
      `Apps Script request failed: ${response.status} ${body}`,
    );
  }

  console.log("[sheets] OK");
}

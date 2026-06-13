import process from "node:process";

export async function appendToSheet(
  formType: "contact" | "book",
  values: Record<string, string>,
): Promise<void> {
  const url = process.env.GOOGLE_APPS_SCRIPT_URL;
  if (!url) {
    throw new Error("Missing GOOGLE_APPS_SCRIPT_URL environment variable");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formType, values }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Apps Script request failed: ${response.status} ${body}`,
    );
  }
}

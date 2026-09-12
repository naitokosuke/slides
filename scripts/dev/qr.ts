import QRCode from "qrcode";

function renderQrCode(url: string) {
  let rendered = "";
  QRCode.toString(
    url,
    { type: "terminal", small: true },
    (error: Error | null | undefined, result: string) => {
      if (error) throw error;
      rendered = result;
    },
  );
  return rendered.trimEnd();
}

export function printQrCode(url: string | undefined) {
  if (!url) {
    console.log(
      "\n  No LAN address was found, so a phone cannot reach this server.\n",
    );
    return;
  }

  console.log(`\n  Scan to open on a phone: ${url}\n`);
  console.log(renderQrCode(url));
  console.log();
}

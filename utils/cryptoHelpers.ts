// utils/crypto.ts
import CryptoJS from "crypto-js";

const DEFAULT_SECRET_KEY = "devTest";

const ENCRYPTION_KEY =
  process.env.NEXT_PUBLIC_CRYPTO_SECRET || DEFAULT_SECRET_KEY;

export const encryptData = (data: string | object): string | null => {
  try {
    const stringData = typeof data === "string" ? data : JSON.stringify(data);
    return CryptoJS.AES.encrypt(stringData, ENCRYPTION_KEY).toString();
  } catch (err) {
    console.error("Encryption failed:", err);
    return null;
  }
};

export const decryptData = (cipherText: string): any | null => {
  try {
    if (!cipherText) throw new Error("No cipher text provided");

    const bytes = CryptoJS.AES.decrypt(cipherText, ENCRYPTION_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    if (!decrypted)
      throw new Error("Failed to decrypt: invalid key or corrupted data");

    try {
      return JSON.parse(decrypted);
    } catch {
      return decrypted;
    }
  } catch (err: any) {
    console.error("Decryption failed:", err.message);
    return null;
  }
};

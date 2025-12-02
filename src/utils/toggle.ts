import { getApiKey } from "./key";
import fetch, { Response } from "node-fetch";
import { showToast, Toast } from "@raycast/api";

export const toggleAlias = async (id: string, newState: boolean) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getApiKey()}`,
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
  };

  let res: Response;

  if (!newState) {
    res = await fetch(`https://e-mail.run/api/v1/active-aliases/${id}`, {
      method: "DELETE",
      headers,
    });
  } else {
    res = await fetch(`https://e-mail.run/api/v1/active-aliases`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        id,
      }),
    });
  }

  if (res.status === 401) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Error creating",
      message: "E-mail.love API credentials are invalid",
    });

    return false;
  }

  return res.status === (newState ? 200 : 204);
};

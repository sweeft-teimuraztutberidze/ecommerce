import {env} from "@/env";
import {IApiResponse} from "@/types/common";

export const api = async <Res>(input: string, options?: RequestInit): Promise<IApiResponse<Res>> => {
  try {
    return {
      success: true,
      data: await (await fetch(`${env.baseUrl}${input}`, options)).json() as Res
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    }
  }
}
import { http } from "../../core/utils/http";
import authHeader from "../../core/utils/auth.header.js";
import axios, { Axios } from "axios";
import { Create, Update } from "./interface/user.interface";
import authhHeader from "../../core/utils/authh.header";

class UserService {
  constructor(private readonly request: Axios) {}
  private createAxiosInstance() {
    return axios.create({
      baseURL: "https://platoon-backend.onrender.com/api", // Set your custom base URL here
      headers: authhHeader(), // Include any headers you need
    });
  }
  async show(userId: number): Promise<any> {
    const customRequest = this.createAxiosInstance();
    return await customRequest
      .get(`/User/user-details/${userId}`, {
        headers: authhHeader(),
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
  async getUsers(): Promise<any> {
    return await this.request
      .get("/users", {
        headers: authHeader(),
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
  async create(data: Create): Promise<any> {
    return await this.request
      .post(
        "/users",
        { ...data },
        {
          headers: authHeader(),
        }
      )
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
  async verify(verify: string): Promise<any> {
    return await this.request
      .post(`/verify/${verify}`, {
        headers: authHeader(),
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
  async update(data: Update, id: string): Promise<any> {
    return await this.request
      .put(
        `/users/${id}`,
        { ...data },
        {
          headers: authHeader(),
        }
      )
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
  async delete(id: string): Promise<any> {
    return await this.request
      .delete(
        `/users/${id}`,

        {
          headers: authHeader(),
        }
      )
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
  async updateUserImage(userId: number, formData: FormData): Promise<any> {
    const customRequest = this.createAxiosInstance();

    return await customRequest
      .put(`/User/update-user-image/${userId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...authhHeader(), // Include any necessary headers
        },
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }


}

export default new UserService(http);

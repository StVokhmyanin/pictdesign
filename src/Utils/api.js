import axios from "axios";

class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  async getContent() {
    return axios.get(`${this.baseUrl}/posts?_embed&per_page=100`);
  }

  async getCategories() {
    return axios.get(`${this.baseUrl}/categories`);
  }

  async getCategoryInfo(slug) {
    return axios.get(`${this.baseUrl}/categories?slug=${slug}`);
  }

  async getSliderPosts() {
    return axios.get(`${this.baseUrl}/posts?_embed&tags=8&per_page=100`);
  }

  async getContentFromCategory(id) {
    return axios.get(
      `${this.baseUrl}/posts?_embed&per_page=100&categories=${id}`
    );
  }

  async getProject(slug) {
    return axios.get(`${this.baseUrl}/posts?slug=${slug}&_embed`);
  }

  async getRecommendProjects(catId, id) {
    return axios.get(`${this.baseUrl}/posts?_embed&per_page=100&categories=${catId.join(',')}&exclude=${id}`);
  }
   
  async sendForm(body) {
    return fetch("https://api.sendinblue.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": "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",
      },
      body: JSON.stringify({
        'attributes': { 'FIRSTNAME': body.name, 'SMS': body.phone,
      },
        'updateEnabled': true,
        'email': body.email,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }
}

export const mainApi = new Api({
  baseUrl: "https://pictdesign.ru/wp-json/wp/v2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

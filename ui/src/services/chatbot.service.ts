import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService 
{
  baseURL: string = "https://buywithus-chatbot.herokuapp.com/api/chat";
  constructor(private http: HttpClient) { }

  httpHeaders = {
    'content-Type': 'application/json'
  }

  askQuery(formData) {
    return this.http.post(this.baseURL, JSON.stringify(formData), { 'headers': this.httpHeaders })
  }

  submitQuery(formData) {
    return this.http.post("http://localhost:3000/query", JSON.stringify(formData), { 'headers': this.httpHeaders })
  }
}

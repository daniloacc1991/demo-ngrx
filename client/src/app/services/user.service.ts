import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.interface";

@Injectable()
export class UserService {
  private apiUrl = 'http://localhost:3000/api/users'

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  findAll() {
    return this.http.get<User[]>(this.apiUrl)
  }

  create(dto: Omit<User, 'id'>) {
    return this.http.post<User>(this.apiUrl, dto)
  }

  findOne(id: number) {
    return this.http.get<User>(`${this.apiUrl}/${id}`)
  }

  update(id: number, dto: Omit<User, 'id'>) {
    return this.http.put<User>(`${this.apiUrl}/${id}`, dto)
  }

  delete(id: number) {
    return this.http.delete<User>(`${this.apiUrl}/${id}`)
  }
}

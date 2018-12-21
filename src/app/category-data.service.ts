import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Icategory } from './models/categoryStructure'

@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http : HttpClient) { }

  
  getCategories ():Observable<Icategory[]>{
    return this.http.get<Icategory[]>(this.url)
  }

  getProductById(id):Observable<Icategory>{
    return this.http.get<Icategory>(`${this.url}/${id}`)
  }

  addNewProduct(obj){
    return this.http.post<Icategory>(this.url,obj)

    //return this.http.put<Icategory>(this.url,id,obj) // edit
//    //return this.http.delete<Icategory>(this.url,id)  // delete

  }
}

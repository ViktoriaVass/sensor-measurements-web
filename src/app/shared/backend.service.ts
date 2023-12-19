import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Sensor} from "./interfaces/Sensor";
import {StoreService} from "./store.service";

@Injectable({
    providedIn: 'root'
})
export class BackendService {

    constructor(private http: HttpClient, private storeService: StoreService) { }

    public getSensors() {
        this.http.get<Sensor[]>('http://localhost:8083/sensor').subscribe(data => {
            this.storeService.sensors = data;
        });
    }

    /*
    public getChildren(page: number) {
        this.http.get<ChildResponse[]>(`http://localhost:5000/childs?_expand=kindergarden&_page=${page}&_limit=${CHILDREN_PER_PAGE}`, { observe: 'response' }).subscribe(data => {
            this.storeService.children = data.body!;
            this.storeService.childrenTotalCount = Number(data.headers.get('X-Total-Count'));
            this.storeService.isLoading = false;
        });
    }

    public addChildData(child: Child, page:  number) {
        this.http.post('http://localhost:5000/childs', child).subscribe(_ => {
            this.getChildren(page);
        })
    }

    public deleteChildData(childId: string, page: number) {
        this.http.delete(`http://localhost:5000/childs/${childId}`).subscribe(_=> {
            this.getChildren(page);
        })
    }
     */
}
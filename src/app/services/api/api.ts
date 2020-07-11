import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

interface Params {
    [key: string]: string | number;
}

export class Api<T> {
    constructor(protected http: HttpClient, protected actionUrl: string) {
    }

    /**
     *
     * * the user here can pass the return type
     *      e.g : this.serviec.getRemove<_TYPE_>(....)
     * * if the user dose not provide an id this will just get all
     * resources for a specific route
     * * this will work on get and delete request with query params filtering
     */
    getRemove(
        id: number | null,
        qp: Params = {},
        rp: Params = {},
        method: 'get' | 'delete' = 'get'
    ): Observable<T> {
        this.actionUrl = this.createRouteURL(rp);
        const params = this.correctFormatForQueryUrl(qp);
        return this.http[method]<T>(
            `${this.actionUrl}${id ? '/' + id : ''}`, {
            params
        });
    }

    /**
     * this method will patch or post to any route
     * you choose
     */
    postPatch(
        data: any,
        id: number = null,
        qp?: Params,
        rp?: Params,
        method: 'post' | 'patch' = 'post'
    ): Observable<T> {
        this.actionUrl = this.createRouteURL(rp);
        const params = this.correctFormatForQueryUrl(qp);
        return this.http[method]<T>(
            `${this.actionUrl}${id ? '/' + id : ''}`,
            data,
            {
                params
            }
        );
    }

    private createRouteURL(routeParams: Params): string {
        let urlResult = this.actionUrl;
        if (routeParams) {
            // tslint:disable-next-line:forin
            for (const param in routeParams) {
                const myRegExp = new RegExp(':' + param);
                urlResult = urlResult.replace(myRegExp, routeParams[param] as string);
            }
        }
        return urlResult;
    }

    /**
     * In the return we will attach the '?' if the user provides a query params
     * and if the user provides a null we do not need to map the array to
     * anything, we just simply returns ''.
     * if there qp dose has some keys an values
     * e.g
     * const z = {userId: 1, name: 'rowad'} then
     * this method will return ["userId=1", "name=rowad"]
     */
    private correctFormatForQueryUrl(qp: Params) {
        let params = new HttpParams();
        // tslint:disable-next-line:forin
        for (const key in qp) {
            params = params.append(key, qp[key] as string);
        }
        return params;
    }
}
